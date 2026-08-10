/* 首页封面轮播数据 Cover Carousel Data
   ─────────────────────────────────────────
   添加新轮播图只需：
   1. 把图片放到 images/magazine/ 文件夹
   2. 在下方数组中添加一条记录
   3. 页面自动渲染轮播（图片+标题+描述+摄影署名）

   字段说明：
   - img:      图片路径（相对 index.html）
   - imgAlt:   图片替代文字（SEO + 无障碍）
   - issue:    期刊号（如 "Issue No.001 · 立秋 2026 · Prelude 序"）
   - title:    中文主标题
   - titleEn:  英文副标题
   - annot:    封面描述 + 摄影署名（可用 <br> 换行）
*/
var COVER_SLIDES = [
  {
    img: 'images/gallery/documentary/02.webp',
    imgAlt: 'No.003 封面：生灵日记',
    issue: 'Issue No.003 · 长线企划 · Creature Diary',
   title: '城市与山野之间，无数微小生命自在栖居',
   titleEn: 'Between city and wilderness, countless small‑scale lives dwell freely.',
   annot: '封面 · 生灵日记 摄影 / 周亭燃'
  },
  {
    img: 'images/gallery/landscape/01.webp',
    imgAlt: 'No.002 封面：万家灯火',
    issue: 'Issue No.002 · 初夏 2026 · prelede 万家灯火',
    title: '城隅灯息',
    titleEn: 'City Glow',
    annot: '封面 · 万家灯火<br>摄影 / 周亭燃'
    },
  {
    img: 'images/gallery/newtopo/01.webp',
    imgAlt: 'No.004 封面：城市边缘发展',
    issue: 'Issue No.004 · 长线企划 · Citys Edge',
    title: '变迁的城疆',
    titleEn: 'Shifting Urban Frontier',
    annot: '封面 · 城市边缘发展<br>摄影 / 周亭燃'
  }
];
