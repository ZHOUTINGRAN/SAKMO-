/* =============================================================
   Them magazine — Footer 组件逻辑
   零依赖（no jQuery / no TweenLite / no GSAP）
   纯 CSS hover 即可工作，JS 仅用于：
   1. 触摸设备兼容性（添加 .is-hover 类）
   2. 当前页面高亮
   ============================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var mqDesktop = window.matchMedia('(min-width: 768px)');
    var menuItems = document.querySelectorAll('#f .u-menu');

    /* ---------- 1. 触摸设备 hover 回退 ---------- */
    if (mqDesktop.matches && !('ontouchstart' in window)) {
      menuItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          item.classList.add('is-hover');
        });
        item.addEventListener('mouseleave', function () {
          item.classList.remove('is-hover');
        });
      });
    }

    /* ---------- 2. 当前页面高亮 ---------- */
    var currentPath = window.location.pathname;
    menuItems.forEach(function (item) {
      var href = item.getAttribute('href');
      if (href && href !== '#' && href !== '/' && currentPath.indexOf(href) !== -1) {
        item.classList.add('is-active');
      }
    });

    /* ---------- 3. 新窗口链接添加 target ---------- */
    var externalLinks = document.querySelectorAll('#f .links a.blank, #f .l .sns a[target="_blank"]');
    externalLinks.forEach(function (link) {
      if (!link.getAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });

    console.log('[them-components] Footer initialized.');
  });
})();
