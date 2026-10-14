/* ============================================================
   本期精选数据（首页 Editor's Pick 使用）
   填写画廊图片路径即可；旧图片的标题/分类/摄影师等信息自动从
   画廊同名 JSON 读取（如 images/gallery/xxx/01.json）。
   新添加的照片（images/gallery/works/）没有 JSON，可直接内联填写：
     title    中文名 / titleEn 英文名（可选）
     category 分类（可选）/ date 日期（可选）

   span 控制网格宽度：
     s6 = 半幅（大图）  s4 = 三分之一  s3 = 四分之一
   ============================================================ */
window.PICKS = [
  {
    img: 'images/gallery/works/28.webp',      // ← 金汐
    title: '金汐',
    titleEn: 'Jin Xi',
    span: 's3',                               // ← 网格宽度
    link: 'gallery.html'                      // ← 点击跳转链接（可选，默认 gallery.html）
  },
  {
    img: 'images/gallery/landscape/05.webp',   // ← 奔腾
    span: 's3',
    link: 'gallery.html'
  },
  {
    img: 'images/gallery/documentary/02.webp', // ← 自由
    span: 's6',
    link: 'gallery.html'
  }
];
