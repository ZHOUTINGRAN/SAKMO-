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
        '<div class="cell"><a href="projects.html" class="u-menu"><span class="en">Projects</span><span class="ja">长线企划</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="motion.html" class="u-menu"><span class="en">Cinema</span><span class="ja">动态影像</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="creators.html" class="u-menu"><span class="en">Roster</span><span class="ja">创作者名册</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="reading.html" class="u-menu"><span class="en">Analytics</span><span class="ja">影像解析</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="submit.html" class="u-menu"><span class="en">Events</span><span class="ja">征稿活动</span><i class="u-target"></i></a></div>' +
        '<div class="cell"><a href="about.html" class="u-menu"><span class="en">About</span><span class="ja">关于联络</span><i class="u-target"></i></a></div>' +
        '<div class="sns">' +
          '<a href="#instagram" aria-label="Instagram">' + svgIg + '</a>' +
          '<a href="#redbook" class="rb" aria-label="小红书">小红书</a>' +
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
    // 搜索 → 跳转画廊
    menu.querySelector('.search form').addEventListener('submit', function(e){
      e.preventDefault();
      var q = this.querySelector('input').value.trim();
      closeMenu();
      location.href = 'gallery.html' + (q ? '?q=' + encodeURIComponent(q) : '');
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
  function applyFilter(f){
    document.querySelectorAll('.filters').forEach(function (fbar) {
      fbar.querySelectorAll('.chip').forEach(function (c) {
        c.classList.toggle('active', c.dataset.filter === f);
      });
    });
    filterables.forEach(function (group) {
      group.querySelectorAll('[data-cat]').forEach(function (item) {
        var cats = (item.dataset.cat || '').split(/\s+/);
        var show = (f === 'all' || cats.indexOf(f) > -1);
        item.style.display = show ? '' : 'none';
      });
    });
  }
  document.querySelectorAll('.filters').forEach(function (fbar) {
    var chips = fbar.querySelectorAll('.chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () { applyFilter(chip.dataset.filter); });
    });
  });
  // 通过 URL hash 激活筛选（如抽屉标签 gallery.html#documentary）
  if (location.hash) {
    var hash = location.hash.slice(1);
    var hasChip = document.querySelector('.chip[data-filter="' + hash + '"]');
    if (hasChip) applyFilter(hash);
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
    var t = e.target.closest('[data-zoom], .img[data-zoom], .item .img, .ab .cell .img, .read-feature .img, .archive-grid .issue .img, .creator-card .portrait');
    if (t) {
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
})();
