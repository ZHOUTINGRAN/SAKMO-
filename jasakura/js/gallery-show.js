/* ============================================================
   影像画廊展示清单（gallery.html 使用）
   文件放在 images/gallery-show/，命名格式：编号-分类-原文件名.扩展名
     · 编号 = 展示顺序（01 在最前，改编号即改顺序）
     · 分类-原文件名 = 自动继承 js/gallery-data.js 的标题/摄影师/参数等信息
   添加图片三步：
     1. 把图片复制进 images/gallery-show/，命名如 51-newtopo-03.webp
     2. 在下面数组里加一行 '51-newtopo-03.webp',
     3. 刷新页面（若图片还没在 gallery-data.js 注册过，标题默认显示编号）
   展示节奏：横幅/竖幅自动交替（同 orientation 内按编号顺序）
   ============================================================ */
window.galleryShowFiles = [
  '01-landscape-02.webp',
  '02-landscape-01.webp',
  '03-documentary-02.webp',
  '04-documentary-01.webp',
  '05-newtopo-27.webp',
  '06-newtopo-01.webp',
  '07-stilllife-02.webp',
  '08-stilllife-01.webp',
  '09-creative-11.webp',
  '10-documentary-03.webp',
  '11-documentary-05.webp',
  '12-newtopo-02.webp',
  '13-newtopo-05.webp',
  '14-stilllife-03.webp',
  '15-stilllife-05.webp',
  '16-documentary-04.webp',
  '17-documentary-06.webp',
  '18-newtopo-03.webp',
  '19-newtopo-06.webp',
  '20-stilllife-04.webp',
  '21-stilllife-06.webp',
  '22-landscape-05.webp',
  '23-documentary-07.webp',
  '24-documentary-09.webp',
  '25-newtopo-04.webp',
  '26-newtopo-09.webp',
  '27-stilllife-08.webp',
  '28-stilllife-07.webp',
  '29-landscape-03.webp',
  '30-landscape-06.webp',
  '31-documentary-08.webp',
  '32-documentary-11.webp',
  '33-newtopo-07.webp',
  '34-newtopo-11.webp',
  '35-stilllife-10.webp',
  '36-stilllife-09.webp',
  '37-landscape-04.webp',
  '38-landscape-09.webp',
  '39-documentary-10.webp',
  '40-documentary-15.webp',
  '41-newtopo-08.webp',
  '42-newtopo-15.webp',
  '43-stilllife-12.webp',
  '44-stilllife-11.webp',
  '45-landscape-07.webp',
  '46-landscape-11.webp',
  '47-documentary-12.webp',
  '48-documentary-16.webp',
  '49-newtopo-10.webp',
  '50-newtopo-16.webp',
];
