# Them magazine — Header & Drawer Menu 组件包

## 文件清单

| 文件 | 说明 |
|------|------|
| `header.html` | Header 组件 HTML 结构（可直接复制到你的页面） |
| `menu.html` | 抽屉菜单 HTML 结构（可直接复制到你的页面） |
| `components.css` | Header + 菜单的完整样式（零依赖） |
| `components.js` | Header + 菜单的交互逻辑（原生 JS，零依赖） |
| `logo.svg` | Them magazine Logo SVG 矢量文件 |
| `header-demo.html` | 完整 Header 演示页面（含菜单、滚动效果） |
| `nav-demo.html` | 纯抽屉菜单演示页面 |
| `README.md` | 本文档 |

## 快速开始

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
- 将 `menu.html` 的 `<div id="menu">` 块放到 `<body>` 末尾（`</body>` 之前）

## 交互功能

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

## 自定义

### 修改颜色（CSS 变量）

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

### 修改尺寸

同样在 `:root` 中调整 Header 高度和 Logo 尺寸变量。

### 移除 mix-blend-mode

如果不需要反色效果，删除 `#h` 中的 `mix-blend-mode: difference;` 即可。

## 浏览器支持

- Chrome / Edge / Safari / Firefox 最新版本
- 依赖 `mix-blend-mode`、`matchMedia`、CSS `transform/transition`
- 移动端（iOS Safari、Chrome Android）完全兼容

## 许可

仅供学习和参考使用。
