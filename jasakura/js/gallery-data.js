/* ============================================================
   影像画廊数据（gallery.html 使用）
   添加新图片只需两步：
     1. 把图片放进 images/gallery/{分类文件夹}/
     2. 在下方数组里添加一条记录
   图片格式支持 .jpg / .webp / .png 等（推荐 .webp 体积更小）
   详细描述仍用同名 JSON 文件（点击图片时加载）
   ============================================================ */

/* 分类文件夹对应关系：
   landscape     → images/gallery/landscape/     风光
   documentary   → images/gallery/documentary/   纪实
   newtopo       → images/gallery/newtopo/       新地形
   stilllife     → images/gallery/stilllife/     静物
   creative      → images/gallery/creative/      创意
*/

window.galleryItems = [
  /* ---------- 风光 LANDSCAPE ---------- */
  {
    img: 'images/gallery/landscape/01.webp',
    imgAlt: '万家灯火',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '万家灯火', titleEn: 'Lights',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/02.webp',
    imgAlt: '加米峰',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '加米峰', titleEn: 'Gami Peak',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 100',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/03.webp',
    imgAlt: '加米峰 No.2',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '加米峰 No.2', titleEn: 'Gami Peak No.2',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/04.webp',
    imgAlt: '加米峰 No.3',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '加米峰 No.3', titleEn: 'Gami Peak No.3',
    photographer: '周亭燃', role: '主编',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/05.webp',
    imgAlt: '奔腾',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '奔腾', titleEn: 'Roll ahead ceaselessly',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/8 · 5s · ISO 100',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/06.webp',
    imgAlt: '千厮门',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '千厮门', titleEn: 'Qiansimen Bridge',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/160s · ISO 200',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/07.webp',
    imgAlt: '江夜',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '江夜', titleEn: 'River Night',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/8 · 5s · ISO 200',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/08.webp',
    imgAlt: '日照',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '日照', titleEn: 'Sunlight',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/09.webp',
    imgAlt: '蔡家大桥',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '蔡家大桥', titleEn: 'Caijia Bridge',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/60s · ISO 200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/10.webp',
    imgAlt: '菜园坝与夜',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '菜园坝与夜', titleEn: 'Caiyuanba and the Night',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/11.webp',
    imgAlt: '蔡家大桥 No.2',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '蔡家大桥 No.2', titleEn: 'Caijia Bridge No.2',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 5s · ISO 100',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/12.webp',
    imgAlt: '星',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '星', titleEn: 'Star',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/2.8 · 1250s · ISO 100',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/13.webp',
    imgAlt: '加米峰 No.4',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '加米峰 No.4', titleEn: 'Gami Peak No.4',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/14.webp',
    imgAlt: '柴&山',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '柴&山', titleEn: 'Chai & Mountain',
    photographer: '周亭燃', role: '主编',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/15.webp',
    imgAlt: '行者',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '行者', titleEn: 'Pedestrian',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 8s · ISO 100',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/16.webp',
    imgAlt: '蔡家大桥 No.3',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '蔡家大桥 No.3', titleEn: 'Caijia Bridge No.3',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 10s · ISO 100',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/17.webp',
    imgAlt: '行者 No.2',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '行者 No.2', titleEn: 'Pedestrian No.2',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/8 · 8s · ISO 10',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/18.webp',
    imgAlt: '山间',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '山间', titleEn: 'Intermontane',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/19.webp',
    imgAlt: '加米峰 No.5',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '加米峰 No.5', titleEn: 'Gami Peak No.5',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/50s · ISO 200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/20.webp',
    imgAlt: '梦桥',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '梦桥', titleEn: 'Dream Bridge',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/21.webp',
    imgAlt: '柴&山 No.2',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '柴&山 No.2', titleEn: 'Chai Mountain No.2',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/22.webp',
    imgAlt: '霓虹',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '霓虹', titleEn: 'Neon',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/23.webp',
    imgAlt: '群山之中',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '群山之中', titleEn: 'Among the mountains',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/24.webp',
    imgAlt: '大礼堂',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '大礼堂', titleEn: 'Auditorium',
    photographer: '周亭燃', role: '主编',
    params: '85mm · f/8 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/25.webp',
    imgAlt: '雾散',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '雾散', titleEn: 'Fog Clearing',
    photographer: 'YI', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/26.jpg',
    imgAlt: '夕照',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '夕照', titleEn: 'Afterglow',
    photographer: '周亭燃', role: '主编',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/27.jpg',
    imgAlt: '山隐',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '山隐', titleEn: 'Hidden Mountain',
    photographer: '向洪平', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/28.webp',
    imgAlt: '云栖',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '云栖', titleEn: 'Cloud Rest',
    photographer: '张钧垚', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/29.jpg',
    imgAlt: '涧声',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '涧声', titleEn: 'Stream Sound',
    photographer: '吴浩源', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/30.jpg',
    imgAlt: '雾林',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '雾林', titleEn: 'Misty Forest',
    photographer: 'YI', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  }
,
  /* ---------- 纪实 DOCUMENTARY ---------- */
  {
    img: 'images/gallery/documentary/01.webp',
    imgAlt: '停滞',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '停滞', titleEn: 'Stasis',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/02.webp',
    imgAlt: '自由',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '自由', titleEn: 'Freely',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 200',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/03.webp',
    imgAlt: '遇见',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '遇见', titleEn: 'Meet',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/200s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/04.webp',
    imgAlt: '福',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '福', titleEn: 'Blessing',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/5.6 · 1/150s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/05.webp',
    imgAlt: '椒城',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '椒城', titleEn: 'Jiao City',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 200',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/06.webp',
    imgAlt: '灰烬',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '灰烬', titleEn: 'Ash',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/4 · 1/160s · ISO 200',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/07.webp',
    imgAlt: '稻田',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '稻田', titleEn: 'Rice Field.',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 200',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/08.webp',
    imgAlt: '椒城 No.2',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '椒城 No.2', titleEn: 'Jiao City No.2',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/2.8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/09.webp',
    imgAlt: '椒城 No.3',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '椒城 No.3', titleEn: 'Jiao City No.3',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/60s · ISO 200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/10.webp',
    imgAlt: '椒城 No.4',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '椒城 No.4', titleEn: 'Jiao City No.4',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/11.webp',
    imgAlt: '椒城 No.5',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '椒城 No.5', titleEn: 'Jiao City No.5',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/12.webp',
    imgAlt: '乡',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '乡', titleEn: 'Village',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 200',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/13.webp',
    imgAlt: '年轮',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '年轮', titleEn: 'Annual ring',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/14.webp',
    imgAlt: '脚印',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '脚印', titleEn: 'Footprint',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/5.6 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/15.webp',
    imgAlt: '踏',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '踏', titleEn: 'Tread',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 400',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/16.webp',
    imgAlt: '对向',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '对向', titleEn: 'Apposition',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/160s · ISO 200',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/17.webp',
    imgAlt: '破裂',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '破裂', titleEn: 'Fracture',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/4 · 1/50s · ISO 100',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/18.webp',
    imgAlt: '连接',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '连接', titleEn: 'Connect',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/19.webp',
    imgAlt: '连接 No.2',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '连接 No.2', titleEn: 'Connect No.2',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/60s · ISO 200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/20.webp',
    imgAlt: '连接 No.3',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '连接 No.3', titleEn: 'Connect No.3',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/150s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/21.webp',
    imgAlt: '煤都',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '煤都', titleEn: 'Coal City',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/22.webp',
    imgAlt: '煤都 No.2',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '煤都 No.2', titleEn: 'Coal City No.2',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 100',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/23.webp',
    imgAlt: '煤都 No.3',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '煤都 No.3', titleEn: 'Coal City No.3',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/24.webp',
    imgAlt: '焦点',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '焦点', titleEn: 'Focus',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/25.webp',
    imgAlt: '年后',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '年后', titleEn: 'Years',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 200',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/26.webp',
    imgAlt: '望',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '望', titleEn: 'Keep Watch',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/160s · ISO 200',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/27.webp',
    imgAlt: '通道',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '通道', titleEn: 'Access',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/28.webp',
    imgAlt: '煤都 No.4',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '煤都 No.4', titleEn: 'Coal City No.4',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/29.webp',
    imgAlt: '老乡镇',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '老乡镇', titleEn: 'Old Town',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/60s · ISO 200',
    span: 's5', ratio: 'ar-23'
  }, 
  {
    img: 'images/gallery/documentary/30.webp',
    imgAlt: '破镜',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '破镜', titleEn: 'Broken Mirror',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/31.webp',
    imgAlt: '丢弃',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '丢弃', titleEn: 'Discard',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/4 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/32.webp',
    imgAlt: '追忆',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '追忆', titleEn: 'look back',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/33.webp',
    imgAlt: '煤都 No.5',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '煤都 No.5', titleEn: 'Coal City No.5',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/8 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/34.webp',
    imgAlt: '煤都 No.6',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '煤都 No.6', titleEn: 'Coal City No.6',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/35.webp',
    imgAlt: '等待',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '等待', titleEn: 'Await',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/36.webp',
    imgAlt: '延伸',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '延伸', titleEn: 'Extend',
    photographer: '周亭燃', role: '主编',
    params: '45mm · f/8 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/37.webp',
    imgAlt: '影',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '影', titleEn: 'Shadow',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/4 · 1/30s · ISO 100',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/38.webp',
    imgAlt: '双向',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '双向', titleEn: 'Bothway',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 200',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/39.webp',
    imgAlt: '羊',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '羊', titleEn: 'Sheep',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/60s · ISO 200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/40.webp',
    imgAlt: '征服',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '征服', titleEn: 'Conquer',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/41.webp',
    imgAlt: '煤都 No.6',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '煤都 No.6', titleEn: 'Coal City No.6',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/4 · 1/60s · ISO 400',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/42.webp',
    imgAlt: '煤都 No.6',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '煤都 No.6', titleEn: 'Coal City No.6',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 200',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/43.webp',
    imgAlt: '煤都 No.7',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '煤都 No.7', titleEn: 'Coal City No.7',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/8 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/44.webp',
    imgAlt: '煤都 No.8',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '煤都 No.8', titleEn: 'Coal City No.8',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 300',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/45.webp',
    imgAlt: '煤都 No.9',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '煤都 No.9', titleEn: 'Coal City No.9',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/46.webp',
    imgAlt: '煤都 No.10',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '煤都 No.10', titleEn: 'Coal City No.10',
    photographer: '周亭燃', role: '主编',
    params: '45mm · f/8 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/47.webp',
    imgAlt: '煤都 No.11',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '煤都 No.11', titleEn: 'Coal City No.11',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/48.webp',
    imgAlt: '煤都 No.12',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '煤都 No.12', titleEn: 'Coal City No.12',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/49.webp',
    imgAlt: '煤都 No.13',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '煤都 No.13', titleEn: 'Coal City No.13',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/250s · ISO 100',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/50.webp',
    imgAlt: '煤都 No.14',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '煤都 No.14', titleEn: 'Coal City No.14',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/4 · 1/60s · ISO 400',
    span: 's7', ratio: 'ar-169'
  },
  /* ---------- 新地形 NEWTOPOGRAPHIC ---------- */
  {
    img: 'images/gallery/newtopo/01.webp',
    imgAlt: '边缘',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '边缘', titleEn: 'Edge',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/02.webp',
    imgAlt: '对望',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '对望', titleEn: 'Isologue',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/03.webp',
    imgAlt: '谁高？',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '谁高？', titleEn: 'Who is taller？',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/04.webp',
    imgAlt: '童年',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '童年', titleEn: 'Childhood',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/05.webp',
    imgAlt: '延伸 No.2',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '延伸 No.2', titleEn: 'Extend No.2',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 200',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/06.webp',
    imgAlt: '扩张',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '扩张', titleEn: 'Expand',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/160s · ISO 200',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/07.webp',
    imgAlt: '裂痕',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '裂痕', titleEn: 'Crack',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 200',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/08.webp',
    imgAlt: '通道',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '通道', titleEn: 'Passage',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/2.8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/09.webp',
    imgAlt: '虚构',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '虚构', titleEn: 'Fiction',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/60s · ISO 200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/10.webp',
    imgAlt: '破布',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '破布', titleEn: 'Clout',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/11.webp',
    imgAlt: '通道 No.2',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '通道 No.2', titleEn: 'Passage No.2',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/12.webp',
    imgAlt: '通道 No.3',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '通道 No.3', titleEn: 'Passage No.3',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/13.webp',
    imgAlt: '路桩',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '路桩', titleEn: 'Post',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/14.webp',
    imgAlt: '丢弃 No.2',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '丢弃 No.2', titleEn: 'Discard',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/15.webp',
    imgAlt: '通道 No.4',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '通道 No.4', titleEn: 'Passage No.4',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 300',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/16.webp',
    imgAlt: '铁皮',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '铁皮', titleEn: 'Iron sheet',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/5.6 · 1/160s · ISO 200',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/17.webp',
    imgAlt: '建',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '建', titleEn: 'Construct',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 200',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/18.webp',
    imgAlt: '搁浅',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '搁浅', titleEn: 'Stranding',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/19.webp',
    imgAlt: '通道 No.5',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '通道 No.5', titleEn: 'Passage No.5',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/60s · ISO 200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/20.webp',
    imgAlt: '建 No.2',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '建 No.2', titleEn: 'Construct No.2',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/21.webp',
    imgAlt: '建 No.3',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '建 No.3', titleEn: 'Construct No.3',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/22.webp',
    imgAlt: '假山',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '假山', titleEn: 'Artificial hill',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/125s · ISO 200',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/23.webp',
    imgAlt: '泥树',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '泥树', titleEn: 'Soil and trees',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/24.webp',
    imgAlt: '枯',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '枯', titleEn: 'Withered',
    photographer: '周亭燃', role: '主编',
    params: '85mm · f/8 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/25.webp',
    imgAlt: '门',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '门', titleEn: 'Door',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 400',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/26.webp',
    imgAlt: '浅滩',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '浅滩', titleEn: 'Shoal',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/27.webp',
    imgAlt: '断墙',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '断墙', titleEn: 'Pit',
    photographer: '吴浩源', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/28.webp',
    imgAlt: '焦点 No.2',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '焦点 No.2', titleEn: 'Focus No.2',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/29.webp',
    imgAlt: '童年',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '童年', titleEn: 'Childhood',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/8 · 1/60s · ISO 200',
    span: 's7', ratio: 'ar-169'
  }
  ,
  /* ---------- 静物 STILLLIFE ---------- */
  {
    img: 'images/gallery/stilllife/01.webp',
    imgAlt: '节拍器',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '节拍器', titleEn: 'Metronome',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/2.8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/stilllife/02.webp',
    imgAlt: '纸&笔',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '纸&笔', titleEn: 'Paper and pen',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/stilllife/03.webp',
    imgAlt: '树下阳光',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '树下阳光', titleEn: 'Sunlight under the tree',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/stilllife/04.webp',
    imgAlt: '独树',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '独树', titleEn: 'The Lonely Tree',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/stilllife/05.webp',
    imgAlt: '独树 No.2',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '独树 No.2', titleEn: 'The Lonely Tree No.2',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/stilllife/06.webp',
    imgAlt: '独树 No.3',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '独树 No.3', titleEn: 'The Lonely Tree No.3',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/stilllife/07.webp',
    imgAlt: '独树 No.4',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '独树 No.4', titleEn: 'The Lonely Tree No.4',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/125s · ISO 200',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/stilllife/08.webp',
    imgAlt: '独树 No.5',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '独树 No.5', titleEn: 'The Lonely Tree No.5',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/125s · ISO 100',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/stilllife/09.webp',
    imgAlt: '多肉',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '多肉', titleEn: 'Fleshiness',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/2.8 · 1/125s · ISO 200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/stilllife/10.webp',
    imgAlt: '果盘',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '果盘', titleEn: 'Fruit Plate',
    photographer: '张钧垚', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/stilllife/11.jpg',
    imgAlt: '布纹',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '布纹', titleEn: 'Fabric',
    photographer: '吴浩源', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/stilllife/12.jpg',
    imgAlt: '纸页',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '纸页', titleEn: 'Paper',
    photographer: 'YI', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/stilllife/13.webp',
    imgAlt: '瓶罐',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '瓶罐', titleEn: 'Bottle',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/stilllife/14.jpg',
    imgAlt: '灯盏',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '灯盏', titleEn: 'Lamp',
    photographer: '向洪平', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/stilllife/15.jpg',
    imgAlt: '石子',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '石子', titleEn: 'Stone',
    photographer: '张钧垚', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/stilllife/16.webp',
    imgAlt: '干草',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '干草', titleEn: 'Hay',
    photographer: '吴浩源', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/stilllife/17.jpg',
    imgAlt: '竹器',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '竹器', titleEn: 'Bamboo',
    photographer: 'YI', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/stilllife/18.jpg',
    imgAlt: '铜壶',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '铜壶', titleEn: 'Copper Pot',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/stilllife/19.webp',
    imgAlt: '玻璃',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '玻璃', titleEn: 'Glass',
    photographer: '向洪平', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/stilllife/20.jpg',
    imgAlt: '绳结',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '绳结', titleEn: 'Knot',
    photographer: '张钧垚', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/stilllife/21.jpg',
    imgAlt: '陶罐',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '陶罐', titleEn: 'Jar',
    photographer: '吴浩源', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/stilllife/22.webp',
    imgAlt: '叶脉',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '叶脉', titleEn: 'Leaf Vein',
    photographer: 'YI', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/stilllife/23.jpg',
    imgAlt: '残烛',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '残烛', titleEn: 'Candle',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/stilllife/24.jpg',
    imgAlt: '麻布',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '麻布', titleEn: 'Hemp',
    photographer: '向洪平', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/stilllife/25.webp',
    imgAlt: '木纹',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '木纹', titleEn: 'Wood Grain',
    photographer: '张钧垚', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/stilllife/26.jpg',
    imgAlt: '陶碗',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '陶碗', titleEn: 'Clay Bowl',
    photographer: '吴浩源', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/stilllife/27.jpg',
    imgAlt: '瓷碟',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '瓷碟', titleEn: 'Porcelain',
    photographer: 'YI', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/stilllife/28.webp',
    imgAlt: '旧物',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '旧物', titleEn: 'Old Object',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/stilllife/29.jpg',
    imgAlt: '纸卷',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '纸卷', titleEn: 'Paper Roll',
    photographer: '向洪平', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/stilllife/30.jpg',
    imgAlt: '枝条',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '枝条', titleEn: 'Twig',
    photographer: '张钧垚', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  }
,
  /* ---------- 创意 CREATIVE ---------- */
  {
    img: 'images/gallery/creative/01.webp',
    imgAlt: '光音',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '光音', titleEn: 'Light Sound',
    photographer: 'YI', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/creative/02.jpg',
    imgAlt: '镜昼',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '镜昼', titleEn: 'Mirror Day',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/creative/03.jpg',
    imgAlt: '重影',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '重影', titleEn: 'Double Shadow',
    photographer: '向洪平', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/creative/04.webp',
    imgAlt: '残像',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '残像', titleEn: 'Afterimage',
    photographer: '张钧垚', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/creative/05.jpg',
    imgAlt: '光绘',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '光绘', titleEn: 'Light Painting',
    photographer: '吴浩源', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/creative/06.jpg',
    imgAlt: '梦境',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '梦境', titleEn: 'Dream',
    photographer: 'YI', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/creative/07.webp',
    imgAlt: '碎片',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '碎片', titleEn: 'Fragment',
    photographer: '周亭燃', role: '主编',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/creative/08.jpg',
    imgAlt: '流动',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '流动', titleEn: 'Flow',
    photographer: '向洪平', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/creative/09.jpg',
    imgAlt: '虚像',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '虚像', titleEn: 'Virtual',
    photographer: '张钧垚', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/creative/10.webp',
    imgAlt: '叠层',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '叠层', titleEn: 'Layered',
    photographer: '吴浩源', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/creative/11.jpg',
    imgAlt: '折射',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '折射', titleEn: 'Refraction',
    photographer: 'YI', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/creative/12.jpg',
    imgAlt: '幻视',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '幻视', titleEn: 'Illusion',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/creative/13.webp',
    imgAlt: '光痕',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '光痕', titleEn: 'Light Trace',
    photographer: '向洪平', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/creative/14.jpg',
    imgAlt: '镜像',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '镜像', titleEn: 'Mirror',
    photographer: '张钧垚', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/creative/15.jpg',
    imgAlt: '曝光',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '曝光', titleEn: 'Exposure',
    photographer: '吴浩源', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/creative/16.webp',
    imgAlt: '扭曲',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '扭曲', titleEn: 'Distort',
    photographer: 'YI', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/creative/17.jpg',
    imgAlt: '漂浮',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '漂浮', titleEn: 'Float',
    photographer: '周亭燃', role: '主编',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/creative/18.jpg',
    imgAlt: '溶解',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '溶解', titleEn: 'Dissolve',
    photographer: '向洪平', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/creative/19.webp',
    imgAlt: '错位',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '错位', titleEn: 'Dislocate',
    photographer: '张钧垚', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/creative/20.jpg',
    imgAlt: '余光',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '余光', titleEn: 'Glow',
    photographer: '吴浩源', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/creative/21.jpg',
    imgAlt: '光斑',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '光斑', titleEn: 'Light Spot',
    photographer: 'YI', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/creative/22.webp',
    imgAlt: '暗涌',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '暗涌', titleEn: 'Dark Surge',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/creative/23.jpg',
    imgAlt: '游离',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '游离', titleEn: 'Drift',
    photographer: '向洪平', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/creative/24.jpg',
    imgAlt: '定格',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '定格', titleEn: 'Freeze',
    photographer: '张钧垚', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/creative/25.webp',
    imgAlt: '消散',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '消散', titleEn: 'Dissipate',
    photographer: '吴浩源', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/creative/26.jpg',
    imgAlt: '重构',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '重构', titleEn: 'Reconstruct',
    photographer: 'YI', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/creative/27.jpg',
    imgAlt: '迷光',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '迷光', titleEn: 'Lost Light',
    photographer: '周亭燃', role: '主编',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/creative/28.webp',
    imgAlt: '幻影',
    cat: 'creative', catLabel: '创意', date: '2026.07',
    title: '幻影', titleEn: 'Phantom',
    photographer: '向洪平', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/creative/29.jpg',
    imgAlt: '交错',
    cat: 'creative', catLabel: '创意', date: '2026.08',
    title: '交错', titleEn: 'Interlace',
    photographer: '张钧垚', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/creative/30.jpg',
    imgAlt: '光蚀',
    cat: 'creative', catLabel: '创意', date: '2026.06',
    title: '光蚀', titleEn: 'Light Etch',
    photographer: '吴浩源', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  }

];
