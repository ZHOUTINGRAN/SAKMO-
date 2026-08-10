/* ============================================================
   本期精选数据（首页 Editor's Pick 使用）
   只需填写画廊图片路径，标题/分类/摄影师等信息会自动从
   画廊同名 JSON 文件中读取（如 images/gallery/xxx/01.json）

   span 控制网格宽度：
     s6 = 半幅（大图）  s4 = 三分之一  s3 = 四分之一
   ============================================================ */
window.PICKS = [
  {
    img: 'images/gallery/documentary/01.jpg',  // ← 画廊图片路径
    span: 's6',                                 // ← 网格宽度
    link: 'gallery.html'                        // ← 点击跳转链接（可选，默认 gallery.html）
  },
  {
    img: 'images/gallery/stilllife/01.jpg',
    span: 's3',
    link: 'gallery.html'
  },
  {
    img: 'images/gallery/documentary/03.jpg',
    span: 's3',
    link: 'gallery.html'
  }
];
