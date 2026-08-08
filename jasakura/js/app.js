/* 樱茉序 Jasakura Prelude — 共享脚本
   固定导航 · 移动端菜单 · 当前页高亮 · 滚动淡入 · 筛选 · 灯箱放大
   注：所有图片支持点击放大；替换为本地图片时无需改 JS。 */
(function () {
  /* ---- 抽屉侧边导航（Them magazine 风格） ----
     两线↔关闭交叉淡入按钮 + 右侧白面板 + 大号衬线菜单项（黑块滑入 hover）。 */
  var drawerBtn = document.getElementById('menu-btn');
  if (drawerBtn) {
    /* 重建按钮结构：.open 两横线 ↔ .close 两斜线 交叉淡入；每条线内含 u-target1/u-target2 黑块滑入 hover 动画 */
    drawerBtn.setAttribute('aria-label', '切换导航');
    drawerBtn.innerHTML = '<span class="open"><i class="t"><em class="u-target1"></em><em class="u-target2"></em></i><i class="b"><em class="u-target1"></em><em class="u-target2"></em></i></span><span class="close"><i class="t"><em class="u-target1"></em><em class="u-target2"></em></i><i class="b"><em class="u-target1"></em><em class="u-target2"></em></i></span>';

    var svgSearch = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
    var svgIg = '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.5.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.5 2.2-.2.6-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.5-2.2.2-.6.5-1 .9-1.4.4-.4.9-.7 1.4-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0 3.3c-1.8 0-2 0-2.7.1-.7 0-1 .2-1.2.3-.3.1-.5.3-.7.5-.2.2-.4.4-.5.7-.1.3-.2.6-.3 1.2C6.5 7.9 6.5 8.2 6.5 10s0 2.1.1 2.8c0 .7.2 1 .3 1.2.1.3.3.5.5.7.2.2.4.4.7.5.3.1.6.2 1.2.3.7.1.9.1 2.8.1s2.1 0 2.8-.1c.7 0 1-.2 1.2-.3.3-.1.5-.3.7-.5.2-.2.4-.4.5-.7.1-.3.2-.6.3-1.2.1-.7.1-.9.1-2.8s0-2.1-.1-2.8c0-.7-.2-1-.3-1.2-.1-.3-.3-.5-.5-.7-.2-.2-.4-.4-.7-.5-.3-.1-.6-.2-1.2-.3C14.1 5.5 13.8 5.5 12 5.5zm0 2.3a3.2 3.2 0 110 6.4 3.2 3.2 0 010-6.4zm0 5.3a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2zm3.4-5.6a.8.8 0 110 1.6.8.8 0 010-1.6z"/></svg>';
    var svgGlobe = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>';

    var menu = document.createElement('div');
    menu.id = 'menu';
    menu.setAttribute('role', 'dialog');
    menu.setAttribute('aria-hidden', 'true');
    menu.innerHTML =
      '<div class="bg"></div>' +
      '<div class="in"><div class="drawer-logo"><a href="index.html"><span class="en">Sakmo</span><span class="ja">樱茉序</span></a></div><div class="box">' +
        '<div class="search"><form>' +
          '<input type="text" placeholder="SEARCH">' +
          '<button type="submit" aria-label="搜索">搜索</button>' +
          svgSearch +
        '</form></div>' +
        '<p class="t-label">CONTENTS 栏目</p>' +
        '<div class="cell"><a href="index.html" class="u-menu"><span class="en">Frontpage</span><span class="ja">卷首首页</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="gallery.html" class="u-menu"><span class="en">Gallery</span><span class="ja">影像画廊</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="projects.html" class="u-menu"><span class="en">Projects</span><span class="ja">专题项目</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="motion.html" class="u-menu"><span class="en">Cinema</span><span class="ja">动态影像</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="creators.html" class="u-menu"><span class="en">Roster</span><span class="ja">创作者名册</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="reading.html" class="u-menu"><span class="en">Analytics</span><span class="ja">影像解析</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="submit.html" class="u-menu"><span class="en">Events</span><span class="ja">征稿活动</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="about.html" class="u-menu"><span class="en">About</span><span class="ja">关于联络</span><i class="u-target"></i></a></div>' +
        '<div class="sns">' +
          '<a href="#instagram" aria-label="Instagram">' + svgIg + '</a>' +
          '<a href="https://www.xiaohongshu.com/user/profile/6631e9be00000000030320e9" class="rb" aria-label="小红书" target="_blank" rel="noopener noreferrer">小红书</a>' +
          '<a href="#website" aria-label="官方网站">' + svgGlobe + '</a>' +
        '</div>' +
        '<p class="t-label">OTHERS 其他</p>' +
        '<div class="links">' +
          '<a href="submit.html">共创专栏与招募</a>' +
          '<a href="about.html#archive">往期归档</a>' +
          '<a href="about.html#copyright">版权声明</a>' +
          '<a href="about.html#privacy">隐私政策</a>' +
        '</div>' +
      '</div></div>';
    document.body.appendChild(menu);

    var htmlEl = document.documentElement;
    function openMenu(){ htmlEl.classList.add('is-menu-open'); document.body.classList.add('is-hidden'); menu.setAttribute('aria-hidden', 'false'); }
    function closeMenu(){ htmlEl.classList.remove('is-menu-open'); document.body.classList.remove('is-hidden'); menu.setAttribute('aria-hidden', 'true'); }
    drawerBtn.addEventListener('click', function(){ htmlEl.classList.contains('is-menu-open') ? closeMenu() : openMenu(); });
    /* 汉堡按钮 hover：用 .is-hover 类驱动擦拭动画（补充 :hover，确保触发可靠） */
    drawerBtn.addEventListener('mouseenter', function(){ drawerBtn.classList.add('is-hover'); });
    drawerBtn.addEventListener('mouseleave', function(){ drawerBtn.classList.remove('is-hover'); });
    menu.querySelector('.bg').addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMenu(); });
    // 页内锚点：关闭抽屉
    menu.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', closeMenu); });
    // 搜索 → 跳转画廊（带页面过渡）
    menu.querySelector('.search form').addEventListener('submit', function(e){
      e.preventDefault();
      var q = this.querySelector('input').value.trim();
      closeMenu();
      sessionStorage.setItem('page-transition', '1');
      pageTrans.classList.add('is-active');
      var url = 'gallery.html' + (q ? '?q=' + encodeURIComponent(q) : '');
      setTimeout(function(){ location.href = url; }, 350);
    });

    /* 菜单项 hover：黑块从左滑入盖住文字（文字转白），离开时从右滑出。仅桌面。 */
    var isDesktop = window.matchMedia('(min-width: 768px)').matches && !('ontouchstart' in window);
    if (isDesktop) {
      menu.querySelectorAll('.u-menu').forEach(function(item){
        var target = item.querySelector('.u-target');
        if (!target) return;
        item.addEventListener('mouseenter', function(){
          item.classList.add('is-hover');
          target.style.transition = 'none';
          target.style.transform = 'translateX(-101%)';
          target.getBoundingClientRect(); // 强制回流，确保从左侧外开始
          target.style.transition = 'transform .4s cubic-bezier(.2,.7,.2,1)';
          target.style.transform = 'translateX(0%)';
        });
        item.addEventListener('mouseleave', function(){
          item.classList.remove('is-hover');
          target.style.transition = 'transform .4s cubic-bezier(.2,.7,.2,1)';
          target.style.transform = 'translateX(101%)';
        });
      });
    }
  }

  /* ---- 页脚菜单：当前页高亮 + 触摸设备 hover 回退（Them magazine 风格） ---- */
  var footerMenus = document.querySelectorAll('#f .u-menu');
  if (footerMenus.length) {
    /* 当前页高亮：比对文件名（去掉 hash），匹配则黑块常驻 + 文字转白 */
    var curFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    footerMenus.forEach(function (item) {
      var href = (item.getAttribute('href') || '').split('#')[0].split('/').pop().toLowerCase();
      if (href && href === curFile) item.classList.add('is-active');
    });
    /* 桌面非触摸：用 .is-hover 类补充 :hover，确保黑块滑入动画可靠触发 */
    if (window.matchMedia('(min-width: 768px)').matches && !('ontouchstart' in window)) {
      footerMenus.forEach(function (item) {
        item.addEventListener('mouseenter', function () { item.classList.add('is-hover'); });
        item.addEventListener('mouseleave', function () { item.classList.remove('is-hover'); });
      });
    }
  }

  /* ---- 滚动时缩小 header ---- */
  var SCROLL_THRESHOLD = 20;
  function handleScroll(){
    var y = window.pageYOffset || document.documentElement.scrollTop;
    document.body.classList.toggle('is-scrolled', y > SCROLL_THRESHOLD);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---- 滚动淡入 ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- 筛选 (gallery / creators 等) ----
     用法：容器 .filterable，子项带 data-cat="landscape"；.filters .chip 带 data-filter。
     支持 data-cat 多值以空格分隔。 */
  var filterables = document.querySelectorAll('.filterable');
  var filterTimer = null;
  function applyFilter(f){
    document.querySelectorAll('.filters').forEach(function (fbar) {
      fbar.querySelectorAll('.chip').forEach(function (c) {
        c.classList.toggle('active', c.dataset.filter === f);
      });
    });
    /* Phase 1：所有可见项一起淡出（网格布局不变，避免重排跳变） */
    filterables.forEach(function (group) {
      group.querySelectorAll('[data-cat]').forEach(function (item) {
        if (item.style.display !== 'none') { item.classList.add('is-hide'); }
      });
    });
    /* 清除上一次未完成的定时器，防止快速切换冲突 */
    if (filterTimer) { clearTimeout(filterTimer); filterTimer = null; }
    /* Phase 2：淡出完成后更新 display，再下帧移除 is-hide 触发淡入 */
    filterTimer = setTimeout(function(){
      filterables.forEach(function (group) {
        group.querySelectorAll('[data-cat]').forEach(function (item) {
          var cats = (item.dataset.cat || '').split(/\s+/);
          var show = (f === 'all' || cats.indexOf(f) > -1);
          if (show) {
            item.style.display = '';
            item.classList.add('is-hide');
          } else {
            item.style.display = 'none';
          }
        });
      });
      /* 下帧统一移除 is-hide，触发淡入 */
      requestAnimationFrame(function(){
        filterables.forEach(function (group) {
          group.querySelectorAll('[data-cat]').forEach(function (item) {
            item.classList.remove('is-hide');
          });
        });
      });
      filterTimer = null;
    }, 250);
  }
  document.querySelectorAll('.filters').forEach(function (fbar) {
    var chips = fbar.querySelectorAll('.chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () { if (!chip.classList.contains('active')) applyFilter(chip.dataset.filter); });
    });
  });
  // 通过 URL hash 激活筛选（如抽屉标签 gallery.html#documentary）
  if (location.hash) {
    var hash = location.hash.slice(1);
    var hasChip = document.querySelector('.chip[data-filter="' + hash + '"]');
    if (hasChip) applyFilter(hash);
  }

  /* ---- 影像解析头条轮播 ----
     .read-feature 区域自动轮播，展示头条 + 列表中的全部文章。
     淡出 → 更新内容 → 淡入，悬停暂停，点击指示器跳转。 */
  var readFeature = document.querySelector('.read-feature');
  if (readFeature && !readFeature.classList.contains('rf-init')) {
    readFeature.classList.add('rf-init');
    var rfImgEl = readFeature.querySelector('.img img');
    var rfImgWrap = readFeature.querySelector('.img');
    var rfTextCol = rfImgWrap ? rfImgWrap.nextElementSibling : null;
    if (rfImgEl && rfTextCol) {
      /* 收集轮播数据 */
      var rfSlides = [];
      var rfFirstGo = rfTextCol.querySelector('.go');
      rfSlides.push({ img: rfImgEl.src, imgAlt: rfImgEl.alt, href: rfFirstGo ? rfFirstGo.getAttribute('href') : 'reading-detail.html?id=001', html: rfTextCol.innerHTML });
      document.querySelectorAll('.flex-e .cell').forEach(function(item){
        var img = item.querySelector('.img img');
        var inSpan = item.querySelector('.in span');
        var title = item.querySelector('strong');
        var credit = item.querySelector('.credit');
        var itemHref = item.getAttribute('href') || '#';
        var catHtml = inSpan ? inSpan.innerHTML : '';
        rfSlides.push({
          img: img ? img.src : '',
          imgAlt: img ? img.alt : '',
          href: itemHref,
          html: '<div class="cat">' + catHtml + '</div>' +
                (title ? '<h3>' + title.innerHTML + '</h3>' : '') +
                (credit ? '<p>' + credit.innerHTML + '</p>' : '') +
                '<a href="' + itemHref + '" class="go">阅读全文</a>'
        });
      });
      /* 预加载所有图片，避免切换时空白 */
      rfSlides.forEach(function(s){ if(s.img){ var pre = new Image(); pre.src = s.img; } });
      /* 仅多张时启动轮播 */
      if (rfSlides.length > 1) {
        var rfIdx = 0, rfTimer = null, rfFadeTimer = null, RF_INTERVAL = 5000;
        /* 指示器 */
        var dotsBox = document.createElement('div');
        dotsBox.className = 'rf-dots';
        rfSlides.forEach(function(_, i){
          var dot = document.createElement('button');
          dot.className = 'rf-dot' + (i === 0 ? ' is-active' : '');
          dot.setAttribute('aria-label', '第 ' + (i+1) + ' 张');
          dot.addEventListener('click', function(){ rfIdx = i; rfShow(i); rfRestart(); });
          dotsBox.appendChild(dot);
        });
        readFeature.appendChild(dotsBox);
        /* 计数器 */
        var counter = document.createElement('div');
        counter.className = 'rf-counter';
        readFeature.appendChild(counter);
        function rfUpdateCounter(){
          counter.innerHTML = '<b>' + String(rfIdx+1).padStart(2,'0') + '</b> / ' + String(rfSlides.length).padStart(2,'0');
        }
        rfUpdateCounter();
        function rfShow(idx){
          var s = rfSlides[idx];
          if (rfFadeTimer) { clearTimeout(rfFadeTimer); rfFadeTimer = null; }
          readFeature.classList.add('is-fading');
          rfFadeTimer = setTimeout(function(){
            rfImgEl.src = s.img;
            rfImgEl.alt = s.imgAlt;
            rfTextCol.innerHTML = s.html;
            /* 更新 data-id 以便点击图片跳转到正确文章 */
            if (s.href) {
              var match = s.href.match(/[?&]id=([^&]+)/);
              if (match) readFeature.setAttribute('data-id', match[1]);
            }
            readFeature.classList.remove('is-fading');
            dotsBox.querySelectorAll('.rf-dot').forEach(function(d, i){ d.classList.toggle('is-active', i === idx); });
            rfUpdateCounter();
            rfFadeTimer = null;
          }, 400);
        }
        function rfNext(){ rfIdx = (rfIdx + 1) % rfSlides.length; rfShow(rfIdx); }
        function rfStart(){ rfTimer = setInterval(rfNext, RF_INTERVAL); }
        function rfStop(){ if(rfTimer){ clearInterval(rfTimer); rfTimer = null; } }
        function rfRestart(){ rfStop(); rfStart(); }
        readFeature.addEventListener('mouseenter', rfStop);
        readFeature.addEventListener('mouseleave', rfStart);
        rfStart();
      }
      /* 点击头条图片跳转到详情页（不放大） */
      rfImgWrap.style.cursor = 'pointer';
      rfImgWrap.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var id = readFeature.getAttribute('data-id') || '001';
        var href = 'reading-detail.html?id=' + id;
        if (typeof pageTrans !== 'undefined' && pageTrans) {
          sessionStorage.setItem('page-transition', '1');
          pageTrans.classList.add('is-active');
          setTimeout(function(){ location.href = href; }, 350);
        } else {
          location.href = href;
        }
      });
    }
  }

  /* ---- 灯箱放大 ----
     任何 .img[data-zoom] 或其内 img 点击即放大；可选 data-caption。 */
  var lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.innerHTML = '<span class="lb-close">×</span><img alt="放大查看"><p class="lb-cap"></p>';
    document.body.appendChild(lb);
  }
  var lbImg = lb.querySelector('img');
  var lbCap = lb.querySelector('.lb-cap');
  var lbClose = lb.querySelector('.lb-close');
  function openZoom(src, cap) {
    lbImg.src = src; lbCap.textContent = cap || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeZoom() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-zoom], .img[data-zoom], .item .img, .ab .cell .img, .archive-grid .issue .img, .creator-card .portrait');
    if (t) {
      /* 阅读页列表项是链接，点击应跳转而非放大 */
      if (t.closest('.flex-e a[href]')) return;
      var img = t.querySelector('img') || t;
      if (img && img.src) {
        e.preventDefault();
        var cap = t.dataset.caption || img.getAttribute('alt') || '';
        openZoom(img.src, cap);
      }
    }
  });
  lbClose.addEventListener('click', closeZoom);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeZoom(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeZoom(); });

  /* ---- 页面过渡：footer logo 点击 → 淡入遮罩 → 跳转 → 新页淡出 ----
     .flogo 点击时遮罩淡入(0→1)，600ms 后跳转；新页面加载时遮罩先满显再淡出。 */
  var pageTrans = document.createElement('div');
  pageTrans.id = 'page-transition';
  document.body.appendChild(pageTrans);

  /* 新页面加载：如果是从过渡跳转来的，遮罩先满显(无过渡)再淡出 */
  if (sessionStorage.getItem('page-transition') === '1') {
    sessionStorage.removeItem('page-transition');
    pageTrans.classList.add('no-transition', 'is-active');
    pageTrans.offsetHeight; /* 强制回流，确保满显状态生效 */
    pageTrans.classList.remove('no-transition');
    requestAnimationFrame(function () { pageTrans.classList.remove('is-active'); });
  }

  /* bfcache 回退/前进时清除残留遮罩 */
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) { pageTrans.classList.remove('is-active', 'no-transition'); sessionStorage.removeItem('page-transition'); }
  });

  document.addEventListener('click', function (e) {
    /* 统一处理导航链接：footer logo + 抽屉/底部菜单项 + .go 按钮 + .flex-e 卡片 + OTHERS 链接 */
    var link = e.target.closest('.flogo, .u-menu, .go, .flex-e .cell, .drawer-logo a, .links a, .pd-logo a');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#') return; /* 跳过纯锚点(#instagram 等) */
    e.preventDefault();
    /* 关闭抽屉（如果处于打开状态） */
    if (document.documentElement.classList.contains('is-menu-open')) {
      document.documentElement.classList.remove('is-menu-open');
      document.body.classList.remove('is-hidden');
      var menuEl = document.getElementById('menu');
      if (menuEl) menuEl.setAttribute('aria-hidden', 'true');
    }
    /* 已在目标页：滚动到顶部或锚点（不触发页面过渡） */
    var curFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var targetFile = href.split('#')[0].split('/').pop().toLowerCase() || 'index.html';
    var hash = href.indexOf('#') > -1 ? href.split('#')[1] : '';
    if (targetFile === curFile) {
      if (hash) { var t = document.getElementById(hash); if (t) { t.scrollIntoView({ behavior: 'smooth' }); return; } }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    /* 不同页：淡入遮罩 → 跳转 */
    sessionStorage.setItem('page-transition', '1');
    pageTrans.classList.add('is-active');
    setTimeout(function () { window.location.href = href; }, 350);
  });
})();

/* ===== 图片详情面板（阅读解析 · 点击 .to-read 放大图片 + 介绍） ===== */
(function(){
  /* 动态创建面板 DOM（无需在各页面手动添加 HTML） */
  var panel = document.createElement('div');
  panel.className = 'photo-detail';
  panel.setAttribute('aria-hidden', 'true');
  panel.innerHTML =
    '<div class="pd-logo"><a href="index.html"><span class="en">Sakmo</span><span class="ja">樱茉序</span></a></div>' +
    '<button class="pd-close" aria-label="关闭"><span></span><span></span></button>' +
    '<div class="pd-inner">' +
      '<div class="pd-img"><img src="" alt=""></div>' +
      '<div class="pd-info">' +
        '<div class="index"></div>' +
        '<div class="lbl"></div>' +
        '<h3></h3>' +
        '<div class="credit"></div>' +
        '<div class="params"></div>' +
        '<div class="pd-note">PHOTO NOTE / 摄影手记</div>' +
        '<div class="desc"></div>' +
      '</div>' +
    '</div>' +
    /* 分页导航固定在页面底部：PREV/NEXT 下划线滑入 + ALL 图标旋转 */
    '<div class="pd-pagenation">' +
      '<a href="javascript:void(0)" class="prev u" aria-label="上一张"><i class="u-target1"></i><i class="u-target2"></i><span>PREV</span></a>' +
      '<button class="all" aria-label="返回画廊"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg></button>' +
      '<a href="javascript:void(0)" class="next u" aria-label="下一张"><i class="u-target1"></i><i class="u-target2"></i><span>NEXT</span></a>' +
    '</div>';
  document.body.appendChild(panel);

  var closeBtn = panel.querySelector('.pd-close');
  var imgEl    = panel.querySelector('.pd-img img');
  var indexEl  = panel.querySelector('.pd-info .index');
  var lblEl    = panel.querySelector('.pd-info .lbl');
  var titleEl  = panel.querySelector('.pd-info h3');
  var creditEl = panel.querySelector('.pd-info .credit');
  var paramsEl = panel.querySelector('.pd-info .params');
  var descEl   = panel.querySelector('.pd-info .desc');
  var prevBtn  = panel.querySelector('.pd-pagenation .prev');
  var nextBtn  = panel.querySelector('.pd-pagenation .next');
  var allBtn   = panel.querySelector('.pd-pagenation .all');

  /* 基于标题生成照片介绍文字 */
  function generateDesc(title, category, credit){
    /* 按标题匹配专属描述 */
    var descs = {
      '山色空蒙':'清晨五点，山雾尚未散去。三层山脊在雾气中自然分层，35mm 镜头在山腰等待了四十分钟才等到这一刻。后期仅做灰阶微调，保留胶片特有的颗粒质感。',
      '雾松晨雪':'零下十二度的清晨，松枝上结满雾凇。85mm 中焦段压缩空间，f/4 光圈让背景微微虚化，突出前景松针的冰晶纹理。曝光补偿 +1/3 档以防雪面发灰。',
      '暮色集市':'黄昏的集市正在收摊，晾晒的衣物在电线上方随风摆动。35mm 广角收纳了整条街巷的烟火气，f/2.8 的浅景深让前景人物若隐若现。',
      '渡口归人':'最后一班渡船靠岸，归人匆匆登船。50mm 标准焦段接近人眼视角，f/2 光圈在低光环境下仍保持足够进光量，ISO 800 是画质与快门的妥协。',
      '边缘之郊':'城市扩张的临界地带，空旷的道路与电杆在阴天下显得克制而冷静。24mm 超广角拉伸了空间纵深感，f/11 小光圈确保全景清晰。',
      '仓体几何':'工业仓库的立面在灰天下呈现纯粹的几何切割。28mm 广角强化了建筑的线条感，低饱和色彩让画面接近黑白，却保留了一丝温度。',
      '枯花与亚麻':'枯萎的花枝插在陶罐里，搁在亚麻布上。90mm 微距镜头将景深压到极浅，窗光的漫射让画面蒙上一层禅意。这是对"消逝"的一次静物书写。',
      '窗光':'老木窗的格栅在白墙上投下斜影，光与影构成了一幅无需修饰的极简画面。自然光下的 1/60 秒，手持拍摄的临界点。',
      '檐下滴水':'雨后的老屋檐还在滴水，每一滴都在青石上砸出微小的涟漪。高速快门 1/1000s 凝固了水滴的瞬间，f/5.6 确保前景足够清晰。',
      '田间小路':'稻田之间的窄路，两侧是金黄的稻穗。35mm 镜头平视拍摄，f/8 光圈让远景近景同样清晰，午后侧光为画面增添了层次。',
      '旧站台':'无人等候的旧站台，铁轨延伸向远方。50mm 镜头压缩了铁轨的透视，低角度拍摄让站台显得更加孤寂。',
      '阳台猫':'午后阳台上打盹的猫，阳光在它身上画出温暖的光斑。85mm 中焦在不打扰的前提下靠近，f/2.8 的浅景深让背景柔化。'
    };
    if(descs[title]) return descs[title];
    /* 通用描述（未匹配到专属描述时） */
    var catMap = {landscape:'风光',documentary:'纪实',newtopographic:'新地形',stilllife:'静物',creative:'创意'};
    var catName = catMap[category] || '摄影';
    return title + '——一幅在沉默中等待被发现的' + catName + '作品。摄影师以克制的构图和精确的曝光，记录下光线在某个瞬间停留的方式。' + (credit ? credit + '的镜头下，日常被还原为一种近乎仪式的观看。' : '这是一张需要安静观看的照片。');
  }

  /* 记录当前打开的卡片（用于 PREV/NEXT 切换） */
  var currentItem = null;

  /* 设置面板内容（图片、标签、标题、署名、参数、编号、描述、竖图标记） */
  function setPanelContent(item){
    var itemImg    = item.querySelector('.img img');
    var itemLbl    = item.querySelector('.lbl');
    var itemTitle  = item.querySelector('h3');
    var itemCredit = item.querySelector('.credit');
    var itemParams = item.querySelector('.params');

    if(itemImg){ imgEl.src = itemImg.src; imgEl.alt = itemImg.alt; }
    /* 竖图标记：根据原始卡片图片容器的比例 class（ar-34/ar-23）判断，限制面板中竖图尺寸 */
    var itemImgWrap = item.querySelector('.img');
    var pdImgWrap   = panel.querySelector('.pd-img');
    if(itemImgWrap && (itemImgWrap.classList.contains('ar-34') || itemImgWrap.classList.contains('ar-23'))){
      pdImgWrap.classList.add('is-portrait');
    } else {
      pdImgWrap.classList.remove('is-portrait');
    }
    if(itemLbl){ lblEl.innerHTML = itemLbl.innerHTML; }
    if(itemTitle){ titleEl.innerHTML = itemTitle.innerHTML; }
    if(itemCredit){ creditEl.innerHTML = itemCredit.innerHTML; }
    if(itemParams){ paramsEl.textContent = itemParams.textContent; }

    /* 编号：基于卡片在同级 .item 中的位置（杂志序号感） */
    var items = Array.prototype.slice.call(item.parentElement.querySelectorAll('.item'));
    var idx = items.indexOf(item) + 1;
    indexEl.innerHTML = '<b>N° ' + String(idx).padStart(2,'0') + '</b> / 影像解析';

    /* 提取标题纯文本（用于匹配描述） */
    var titleText = '';
    if(itemTitle && itemTitle.firstChild){
      titleText = itemTitle.firstChild.textContent.trim();
    }
    var cat = item.dataset.cat || '';
    var creditText = itemCredit ? itemCredit.textContent.trim() : '';
    descEl.textContent = generateDesc(titleText, cat, creditText);
  }

  /* 打开详情面板（首次打开：记录卡片 + 设置内容 + 显示 + 入场动画） */
  function openPanel(item){
    currentItem = item;
    setPanelContent(item);
    panel.classList.remove('is-in');
    panel.scrollTop = 0;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-hidden');
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ panel.classList.add('is-in'); });
    });
  }

  /* 切换图片（PREV/NEXT）：柔和淡出 → 更新 → 淡入新内容，循环切换 */
  function switchPanel(direction){
    if(!currentItem) return;
    var items = Array.prototype.slice.call(currentItem.parentElement.querySelectorAll('.item'));
    var idx = items.indexOf(currentItem);
    if(idx === -1) return;
    var newIdx = direction === 'next' ? (idx + 1) % items.length : (idx - 1 + items.length) % items.length;
    var newItem = items[newIdx];
    if(!newItem || newItem === currentItem) return;
    currentItem = newItem;
    /* 切换中：触发更快的柔和淡出（下沉+微缩放），避免生硬跳变 */
    panel.classList.remove('is-in');
    panel.classList.add('is-switching');
    panel.scrollTop = 0;
    /* 等淡出完成后再更新内容并触发淡入 */
    setTimeout(function(){
      setPanelContent(newItem);
      panel.classList.remove('is-switching');
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){ panel.classList.add('is-in'); });
      });
    }, 340);
  }

  /* 关闭详情面板：先淡出再隐藏 */
  function closePanel(){
    panel.classList.remove('is-in');
    panel.classList.remove('is-switching');
    setTimeout(function(){
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-hidden');
    }, 360);
  }

  closeBtn.addEventListener('click', closePanel);

  /* PREV / NEXT / ALL 事件绑定 */
  prevBtn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); switchPanel('prev'); });
  nextBtn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); switchPanel('next'); });
  allBtn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); closePanel(); });

  /* 点击背景空白处关闭（topbar 设了 pointer-events:none，点击会穿透到面板背景） */
  panel.addEventListener('click', function(e){
    if(e.target === panel) closePanel();
  });

  /* ESC 关闭；←/→ 切换图片 */
  document.addEventListener('keydown', function(e){
    if(!panel.classList.contains('is-open')) return;
    if(e.key === 'Escape') closePanel();
    else if(e.key === 'ArrowLeft') switchPanel('prev');
    else if(e.key === 'ArrowRight') switchPanel('next');
  });

  /* 拦截 .item 卡片点击 → 打开详情面板（而非跳转 reading.html） */
  /* 点击卡片任意区域（图片、标题、参数等）均触发；捕获阶段优先于灯箱（冒泡阶段） */
  /* 仅拦截 href 指向 reading.html 的卡片，不影响 index.html 等页面的卡片跳转 */
  document.addEventListener('click', function(e){
    var item = e.target.closest('.grid-edit .item');
    if(!item) return;
    var href = item.getAttribute('href') || '';
    if(href.indexOf('reading.html') === -1) return;
    e.preventDefault();
    e.stopPropagation();
    openPanel(item);
  }, true);  /* 捕获阶段优先执行，防止灯箱/页面过渡拦截 */
})();
