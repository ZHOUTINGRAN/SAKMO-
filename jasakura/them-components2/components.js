/* =============================================================
   Them magazine — Header + Drawer Menu 交互脚本
   零依赖（no jQuery / no TweenLite / no GSAP）
   使用方式：<script src="components.js" defer></script>
   配套 CSS：components.css
   HTML 结构：见 demo 文件
   ============================================================= */

(function () {
  'use strict';

  /* ---------- 1. 菜单开关 / Menu Toggle ---------- */
  var htmlEl = document.documentElement;
  var bodyEl = document.body;
  var btnMenu = document.getElementById('btn-m');
  var menuEl = document.getElementById('menu');

  if (!btnMenu || !menuEl) {
    console.warn('[them-components] #btn-m or #menu not found, skipping init.');
    return;
  }

  var bgEl = menuEl.querySelector('.bg');

  function openMenu() {
    htmlEl.classList.add('is-menu-open');
    bodyEl.classList.add('is-hidden');
    menuEl.setAttribute('aria-hidden', 'false');
    btnMenu.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    htmlEl.classList.remove('is-menu-open');
    bodyEl.classList.remove('is-hidden');
    menuEl.setAttribute('aria-hidden', 'true');
    btnMenu.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (htmlEl.classList.contains('is-menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  btnMenu.addEventListener('click', toggleMenu);

  if (bgEl) {
    bgEl.addEventListener('click', closeMenu);
  }

  // Keyboard: ESC to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && htmlEl.classList.contains('is-menu-open')) {
      closeMenu();
    }
  });

  // Keyboard: Enter / Space on button
  btnMenu.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  /* ---------- 2. 滚动缩小 / Scroll Shrink ---------- */
  var SCROLL_THRESHOLD = 20;

  function handleScroll() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > SCROLL_THRESHOLD) {
      bodyEl.classList.add('is-scrolled');
    } else {
      bodyEl.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- 3. 菜单项 hover 动画 / Menu Item Hover ---------- */
  var menuItems = document.querySelectorAll('#menu .u-menu');
  var mqDesktop = window.matchMedia('(min-width: 768px)');

  function bindMenuHover() {
    if (!mqDesktop.matches || 'ontouchstart' in window) return;

    menuItems.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        item.classList.add('is-hover');
      });
      item.addEventListener('mouseleave', function () {
        item.classList.remove('is-hover');
      });
    });
  }

  bindMenuHover();

  mqDesktop.addEventListener('change', function () {
    if (mqDesktop.matches) {
      bindMenuHover();
    } else {
      menuItems.forEach(function (item) {
        item.classList.remove('is-hover');
      });
    }
  });

  /* ---------- 4. 汉堡按钮 hover 黑块动画 / Hamburger Hover ---------- */
  // 纯 CSS 实现：#h #btn-m:hover span .u-target1 / .u-target2
  // 双层白色块错峰滑入，覆盖汉堡线条
  // JS 仅用于触摸设备兼容性检测
  var hamburgerHover = document.getElementById('btn-m');
  if (hamburgerHover) {
    if (mqDesktop.matches && !('ontouchstart' in window)) {
      hamburgerHover.addEventListener('mouseenter', function () {
        hamburgerHover.classList.add('is-hover');
      });
      hamburgerHover.addEventListener('mouseleave', function () {
        hamburgerHover.classList.remove('is-hover');
      });
    }
  }

  /* ---------- 5. 当前页面高亮 / Active Page Highlight ---------- */
  // Optional: add .is-active to menu item matching current URL
  var currentPath = window.location.pathname;
  menuItems.forEach(function (item) {
    var href = item.getAttribute('href');
    if (href && href !== '#' && href !== '/' && currentPath.indexOf(href) !== -1) {
      item.classList.add('is-active');
    }
  });

  console.log('[them-components] Header + Menu initialized successfully.');
})();
