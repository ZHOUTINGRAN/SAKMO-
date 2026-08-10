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
    img: 'images/magazine/001.jpg',
    imgAlt: 'No.001 封面：清晨旧巷',
    issue: 'Issue No.001 · 立秋 2026 · Prelude 序',
    title: '在城乡之间，光落下的一页',
    titleEn: 'A Page Where Light Falls',
    annot: '封面 · 清晨旧巷<br>摄影 / 林叙'
  },
  {
    img: 'images/magazine/002.jpg',
    imgAlt: 'No.002 封面：竹雾',
    issue: 'Issue No.002 · 白露 2026 · Bamboo Mist',
    title: '竹雾深处，呼吸可闻',
    titleEn: 'Bamboo Whisper',
    annot: '封面 · 竹林晨雾<br>摄影 / 苏砚'
  },
  {
    img: 'images/magazine/003.jpg',
    imgAlt: 'No.003 封面：老乡镇',
    issue: 'Issue No.003 · 长线企划 · Old Towns',
    title: '老乡镇的最后一道光',
    titleEn: 'The Last Light of Old Towns',
    annot: '封面 · 老镇小巷<br>摄影 / 周野'
  },
  {
    img: 'images/magazine/004.jpg',
    imgAlt: 'No.004 封面：新农村',
    issue: 'Issue No.004 · 长线企划 · New Countryside',
    title: '新农村，旧时光',
    titleEn: 'New Country, Old Time',
    annot: '封面 · 田间午后<br>摄影 / 林叙'
  }
];
