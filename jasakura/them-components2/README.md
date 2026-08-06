# Them magazine — Header + Drawer Menu + Footer 组件包

## 文件清单

| 文件 | 说明 |
|------|------|
| `header.html` | Header 组件 HTML 结构 |
| `menu.html` | 抽屉菜单 HTML 结构 |
| `footer.html` | Footer 组件 HTML 结构 |
| `components.css` | Header + 菜单的完整样式 |
| `components.js` | Header + 菜单的交互逻辑 |
| `footer.css` | Footer 组件样式（零依赖） |
| `footer.js` | Footer 组件交互逻辑（可选，纯 CSS hover 即可工作） |
| `logo.svg` | Them magazine Logo SVG 矢量文件 |
| `header-demo.html` | 完整 Header 演示页面 |
| `nav-demo.html` | 纯抽屉菜单演示页面 |
| `footer-demo.html` | Footer 演示页面 |
| `README.md` | 本文档 |

---

## 快速开始 — Header + Menu

### 1. 引入 CSS 和 JS

```html
<head>
  <link rel="stylesheet" href="components.css">
</head>
<body>
  <!-- ... Header + Menu HTML ... -->
  <script src="components.js" defer></script>
</body>
```

### 2. 放置 Logo

确保 `logo.svg` 与 HTML 文件在同一目录，或修改 `<img src>` 路径。

### 3. 复制 HTML 结构

- 将 `header.html` 的 `<header>` 块放到 `<body>` 最前面
- 将 `menu.html` 的 `<div id="menu">` 块放到 `<body>` 末尾

---

## 快速开始 — Footer

### 1. 引入 CSS 和 JS

```html
<head>
  <link rel="stylesheet" href="footer.css">
</head>
<body>
  <!-- ... Footer HTML ... -->
  <script src="footer.js" defer></script>
</body>
```

### 2. 复制 HTML 结构

将 `footer.html` 的 `<footer id="f">` 块放到 `</body>` 之前。

### 3. 引入 SVG sprite（Logo + SNS 图标）

确保 `logo.svg` 与 HTML 文件在同一目录。Footer 中内联了 SNS 图标（Instagram、Facebook、Twitter），无需额外文件。

---

## 交互功能

### Header + Menu

| 功能 | 实现方式 |
|------|----------|
| 汉堡 ↔ 关闭图标切换 | CSS `opacity` 切换 + `transform: rotate(±15deg)` |
| 抽屉滑入/滑出 | `transform: translateX()` + `cubic-bezier(0.2,0.7,0.2,1)` |
| 菜单黑块 hover 动画 | CSS `transition` + `.u-target` 元素 |
| 滚动缩放下拉 | `scroll` 事件 + `body.is-scrolled` 类 |
| 背景遮罩淡入 | `rgba(0,0,0,0.3)` transition |
| mix-blend-mode | 自动在图片/深色背景上反色 |
| 键盘支持 | ESC 关闭 / Enter·Space 触发 |
| 移动端适配 | `< 768px` 自动禁用 hover 动画 |

### Footer

| 功能 | 实现方式 |
|------|----------|
| 黑块滑入覆盖 | `transform: translateX(-101% → 0%)` + `transition` |
| 文字变白 | `:hover span { color: #fff }` |
| 缓动曲线 | `cubic-bezier(0.2, 0.7, 0.2, 1)` |
| 响应式布局 | 移动端单列 → 桌面端双列 |
| 触摸设备降级 | `@media (min-width: 768px)` 自动禁用 hover |
| GPU 加速 | `will-change: transform` + `translateZ(0)` |
| 零 JS 依赖 | 纯 CSS `:hover` 即可工作 |

---

## 自定义

### 修改 Header 颜色（CSS 变量）

在 `components.css` 开头的 `:root` 中：

```css
:root {
  --them-bg: #fcfbf7;       /* 背景色 */
  --them-text: #1c1a16;     /* 文字色 */
  --them-muted: #999;       /* 次要文字色 */
  --them-accent: #7c6a55;   /* 强调色 */
  --them-white: #ffffff;    /* 白色 */
}
```

### 修改 Footer 颜色（CSS 变量）

在 `footer.css` 开头的 `:root` 中：

```css
:root {
  --them-footer-bg: #fcfbf7;        /* 背景色 */
  --them-footer-text: #1c1a16;      /* 文字色 */
  --them-footer-muted: #999;        /* 版权文字色 */
  --them-footer-border: #eaeaea;    /* 顶部分割线色 */
  --them-footer-hover: #000000;     /* hover 黑块颜色 */
}
```

### 修改 Footer 尺寸

```css
:root {
  --them-footer-logo-w: 106px;      /* Logo 宽度 */
  --them-footer-logo-h: 44px;       /* Logo 高度 */
  --them-footer-cell-w: 126px;      /* 移动端菜单列宽 */
  --them-footer-cell-w-desk: 182px; /* 桌面端菜单列宽 */
  --them-footer-menu-fs: 1.6rem;    /* 移动端菜单字号 */
  --them-footer-menu-fs-desk: 2.4rem; /* 桌面端菜单字号 */
}
```

### 移除 Header 的 mix-blend-mode

如果不需要反色效果，删除 `#h` 中的 `mix-blend-mode: difference;` 即可。

---

## 浏览器支持

- Chrome / Edge / Safari / Firefox 最新版本
- 依赖 `mix-blend-mode`、`matchMedia`、CSS `transform/transition`
- 移动端（iOS Safari、Chrome Android）完全兼容
- Footer 的 hover 动画需要桌面端（`min-width: 768px`）

## 许可

仅供学习和参考使用。
