/* ============================================================
   项目详情页渲染脚本（project-*.html 共用）
   从 images/projects/{id}/data.json 加载内容并动态渲染
   ============================================================ */
(function(){
  var body = document.body;
  var projectId = body.getAttribute('data-project');
  if (!projectId) return;

  var jsonPath = 'images/projects/' + projectId + '/data.json';

  fetch(jsonPath)
    .then(function(res){ return res.ok ? res.text() : null; })
    .then(function(text){
      if (!text) return null;
      if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
      return JSON.parse(text);
    })
    .then(function(d){
      if (!d) { console.warn('Project data not found: ' + jsonPath); return; }
      renderHero(d);
      renderHeroImg(d);
      renderDeepRead(d);
      renderPhotos(d);
      /* 异步渲染后直接显示所有 reveal 元素，避免 IntersectionObserver 在异步渲染后失效 */
      document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
    })
    .catch(function(e){ console.warn('Failed to load project data:', e); });

  /* 渲染 Hero 区（标题、导语、元信息） */
  function renderHero(d){
    var crumb = document.querySelector('.project-hero .crumb');
    if (crumb) crumb.innerHTML = '<a href="projects.html">长线企划</a> / Project ' + (d.projectNum || '');

    var h1 = document.querySelector('.project-hero h1');
    if (h1) h1.innerHTML = d.title + '<span class="en">' + (d.titleEn || '') + '</span>';

    var lead = document.querySelector('.project-hero .lead');
    if (lead) lead.textContent = d.lead || '';

    var meta = document.querySelector('.project-hero .meta-row');
    if (meta && d.meta){
      meta.innerHTML =
        '<span>摄影师<i>' + (d.meta.photographers || '') + '</i></span>' +
        '<span>启程<i>' + (d.meta.startDate || '') + '</i></span>' +
        '<span>状态<i>' + (d.meta.status || '') + '</i></span>';
    }
  }

  /* 渲染 Hero 大图 */
  function renderHeroImg(d){
    var frame = document.querySelector('.bleed .frame img, .bleed .frame');
    if (frame && frame.tagName === 'IMG'){
      frame.src = d.heroImg || '';
      frame.alt = d.heroImgAlt || '';
    } else if (frame){
      frame.innerHTML = '<img loading="lazy" alt="' + (d.heroImgAlt || '') + '" src="' + (d.heroImg || '') + '">';
    }
  }

  /* 渲染深度解读段落 */
  function renderDeepRead(d){
    var body = document.querySelector('.deep-read .body');
    if (!body || !d.deepRead) return;
    body.innerHTML = d.deepRead.map(function(p){
      return '<p>' + p + '</p>';
    }).join('');
  }

  /* 渲染摄影师视角照片网格 */
  function renderPhotos(d){
    var grid = document.querySelector('.grid-edit');
    if (!grid || !d.photos) return;
    grid.innerHTML = '';
    d.photos.forEach(function(p){
      var a = document.createElement('a');
      a.href = 'javascript:void(0)';
      a.className = 'item ' + (p.span || 's4');
      if (p.cat) a.setAttribute('data-cat', p.cat);
      a.innerHTML =
        '<div class="img ar-43 is-loading" data-zoom><img decoding="async" alt="' + (p.imgAlt || '') + '" src="' + p.img + '"></div>' +
        '<div class="lbl"><span>' + (p.photographer || '') + '</span><span>' + (p.date || '') + '</span></div>' +
        '<h3>' + (p.title || '') + '<span class="en">' + (p.titleEn || '') + '</span></h3>' +
        '<div class="credit"><b>' + (p.creditName || '') + '</b> · ' + (p.creditRole || '') + '</div>';
      grid.appendChild(a);

      /* 图片加载完成后淡入显示 */
      var imgBox = a.querySelector('.img');
      var img = a.querySelector('img');
      function markLoaded(){
        imgBox.classList.remove('is-loading');
        img.classList.add('is-loaded');
      }
      if (img.complete && img.naturalWidth > 0){
        markLoaded();
      } else {
        img.addEventListener('load', markLoaded);
        img.addEventListener('error', markLoaded);
      }
    });
  }
})();
