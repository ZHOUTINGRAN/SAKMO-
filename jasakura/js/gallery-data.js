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
    imgAlt: '山色',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '山色', titleEn: 'Mountain',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/02.jpg',
    imgAlt: '雾松',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '雾松', titleEn: 'Mist',
    photographer: '向洪平', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/03.jpg',
    imgAlt: '长滩',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '长滩', titleEn: 'Beach',
    photographer: '张钧垚', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/04.webp',
    imgAlt: '云海',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '云海', titleEn: 'Cloud Sea',
    photographer: '吴浩源', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/05.jpg',
    imgAlt: '雪线',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '雪线', titleEn: 'Snow Line',
    photographer: 'YI', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/06.jpg',
    imgAlt: '晨光',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '晨光', titleEn: 'Dawn',
    photographer: '周亭燃', role: '主编',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/07.webp',
    imgAlt: '暮色',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '暮色', titleEn: 'Dusk',
    photographer: '向洪平', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/08.jpg',
    imgAlt: '空谷',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '空谷', titleEn: 'Valley',
    photographer: '张钧垚', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/09.jpg',
    imgAlt: '远岫',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '远岫', titleEn: 'Peak',
    photographer: '吴浩源', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/10.webp',
    imgAlt: '寒林',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '寒林', titleEn: 'Cold Forest',
    photographer: 'YI', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/11.jpg',
    imgAlt: '静水',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '静水', titleEn: 'Still Water',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/12.jpg',
    imgAlt: '孤峰',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '孤峰', titleEn: 'Solitary Peak',
    photographer: '向洪平', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/13.webp',
    imgAlt: '暮雪',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '暮雪', titleEn: 'Evening Snow',
    photographer: '张钧垚', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/14.jpg',
    imgAlt: '秋雾',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '秋雾', titleEn: 'Autumn Fog',
    photographer: '吴浩源', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/15.jpg',
    imgAlt: '霜林',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '霜林', titleEn: 'Frost Woods',
    photographer: 'YI', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/16.webp',
    imgAlt: '晚照',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '晚照', titleEn: 'Sunset',
    photographer: '周亭燃', role: '主编',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/17.jpg',
    imgAlt: '溪烟',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '溪烟', titleEn: 'Creek Mist',
    photographer: '向洪平', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/landscape/18.jpg',
    imgAlt: '岩影',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '岩影', titleEn: 'Rock Shadow',
    photographer: '张钧垚', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/19.webp',
    imgAlt: '风过',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '风过', titleEn: 'Wind Pass',
    photographer: '吴浩源', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/landscape/20.jpg',
    imgAlt: '雨前',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '雨前', titleEn: 'Before Rain',
    photographer: 'YI', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/21.jpg',
    imgAlt: '林深',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '林深', titleEn: 'Deep Woods',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/landscape/22.webp',
    imgAlt: '崖畔',
    cat: 'landscape', catLabel: '风光', date: '2026.07',
    title: '崖畔', titleEn: 'Cliffside',
    photographer: '向洪平', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/landscape/23.jpg',
    imgAlt: '湖寂',
    cat: 'landscape', catLabel: '风光', date: '2026.06',
    title: '湖寂', titleEn: 'Silent Lake',
    photographer: '张钧垚', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/landscape/24.jpg',
    imgAlt: '雪原',
    cat: 'landscape', catLabel: '风光', date: '2026.08',
    title: '雪原', titleEn: 'Snowfield',
    photographer: '吴浩源', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
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
    imgAlt: '集市',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '集市', titleEn: 'Market',
    photographer: '向洪平', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/02.jpg',
    imgAlt: '渡口',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '渡口', titleEn: 'Ferry',
    photographer: '张钧垚', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/03.jpg',
    imgAlt: '街角',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '街角', titleEn: 'Corner',
    photographer: '吴浩源', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/04.webp',
    imgAlt: '巷弄',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '巷弄', titleEn: 'Alley',
    photographer: 'YI', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/05.jpg',
    imgAlt: '站台',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '站台', titleEn: 'Platform',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/06.jpg',
    imgAlt: '夜市',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '夜市', titleEn: 'Night Market',
    photographer: '向洪平', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/07.webp',
    imgAlt: '早班',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '早班', titleEn: 'Morning Shift',
    photographer: '张钧垚', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/08.jpg',
    imgAlt: '归途',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '归途', titleEn: 'Return',
    photographer: '吴浩源', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/09.jpg',
    imgAlt: '雨巷',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '雨巷', titleEn: 'Rainy Lane',
    photographer: 'YI', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/10.webp',
    imgAlt: '旧铺',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '旧铺', titleEn: 'Old Shop',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/11.jpg',
    imgAlt: '桥头',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '桥头', titleEn: 'Bridge',
    photographer: '向洪平', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/12.jpg',
    imgAlt: '午后',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '午后', titleEn: 'Afternoon',
    photographer: '张钧垚', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/13.webp',
    imgAlt: '黄昏',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '黄昏', titleEn: 'Dusk',
    photographer: '吴浩源', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/14.jpg',
    imgAlt: '人潮',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '人潮', titleEn: 'Crowd',
    photographer: 'YI', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/15.jpg',
    imgAlt: '静坐',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '静坐', titleEn: 'Sitting Still',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/16.webp',
    imgAlt: '擦肩',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '擦肩', titleEn: 'Passing By',
    photographer: '向洪平', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/17.jpg',
    imgAlt: '窗边',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '窗边', titleEn: 'Window',
    photographer: '张钧垚', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/18.jpg',
    imgAlt: '路标',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '路标', titleEn: 'Signpost',
    photographer: '吴浩源', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/19.webp',
    imgAlt: '灯下',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '灯下', titleEn: 'Under Light',
    photographer: 'YI', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/20.jpg',
    imgAlt: '门前',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '门前', titleEn: 'Doorway',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/21.jpg',
    imgAlt: '街猫',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '街猫', titleEn: 'Street Cat',
    photographer: '向洪平', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/22.webp',
    imgAlt: '摊贩',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '摊贩', titleEn: 'Vendor',
    photographer: '张钧垚', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/documentary/23.jpg',
    imgAlt: '老匠',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '老匠', titleEn: 'Craftsman',
    photographer: '吴浩源', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/24.jpg',
    imgAlt: '行人',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '行人', titleEn: 'Pedestrian',
    photographer: 'YI', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/25.webp',
    imgAlt: '街声',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '街声', titleEn: 'Street Sound',
    photographer: '周亭燃', role: '主编',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/26.jpg',
    imgAlt: '暮归',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '暮归', titleEn: 'Evening Return',
    photographer: '向洪平', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/documentary/27.jpg',
    imgAlt: '晨市',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '晨市', titleEn: 'Morning Market',
    photographer: '张钧垚', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/documentary/28.webp',
    imgAlt: '旧街',
    cat: 'documentary', catLabel: '纪实', date: '2026.07',
    title: '旧街', titleEn: 'Old Street',
    photographer: '吴浩源', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/documentary/29.jpg',
    imgAlt: '路口',
    cat: 'documentary', catLabel: '纪实', date: '2026.08',
    title: '路口', titleEn: 'Crossing',
    photographer: 'YI', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/documentary/30.jpg',
    imgAlt: '巷口',
    cat: 'documentary', catLabel: '纪实', date: '2026.06',
    title: '巷口', titleEn: 'Alleyway',
    photographer: '周亭燃', role: '主编',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  }
,
  /* ---------- 新地形 NEWTOPOGRAPHIC ---------- */
  {
    img: 'images/gallery/newtopo/01.webp',
    imgAlt: '边缘',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '边缘', titleEn: 'Edge',
    photographer: '张钧垚', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/02.jpg',
    imgAlt: '仓体',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '仓体', titleEn: 'Warehouse',
    photographer: '吴浩源', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/03.jpg',
    imgAlt: '通道',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '通道', titleEn: 'Corridor',
    photographer: 'YI', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/04.webp',
    imgAlt: '围挡',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '围挡', titleEn: 'Barrier',
    photographer: '周亭燃', role: '主编',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/05.jpg',
    imgAlt: '野草',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '野草', titleEn: 'Weeds',
    photographer: '向洪平', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/06.jpg',
    imgAlt: '工地',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '工地', titleEn: 'Site',
    photographer: '张钧垚', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/07.webp',
    imgAlt: '空地',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '空地', titleEn: 'Empty Lot',
    photographer: '吴浩源', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/08.jpg',
    imgAlt: '高墙',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '高墙', titleEn: 'Wall',
    photographer: 'YI', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/09.jpg',
    imgAlt: '管线',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '管线', titleEn: 'Pipes',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/10.webp',
    imgAlt: '弃屋',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '弃屋', titleEn: 'Abandoned',
    photographer: '向洪平', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/11.jpg',
    imgAlt: '新楼',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '新楼', titleEn: 'New Building',
    photographer: '张钧垚', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/12.jpg',
    imgAlt: '旧厂',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '旧厂', titleEn: 'Old Factory',
    photographer: '吴浩源', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/13.webp',
    imgAlt: '路桩',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '路桩', titleEn: 'Post',
    photographer: 'YI', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/14.jpg',
    imgAlt: '铁皮',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '铁皮', titleEn: 'Iron Sheet',
    photographer: '周亭燃', role: '主编',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/15.jpg',
    imgAlt: '界线',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '界线', titleEn: 'Boundary',
    photographer: '向洪平', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/16.webp',
    imgAlt: '土堆',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '土堆', titleEn: 'Mound',
    photographer: '张钧垚', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/17.jpg',
    imgAlt: '废墟',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '废墟', titleEn: 'Ruins',
    photographer: '吴浩源', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/18.jpg',
    imgAlt: '钢架',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '钢架', titleEn: 'Steel Frame',
    photographer: 'YI', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/19.webp',
    imgAlt: '水泥',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '水泥', titleEn: 'Concrete',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/20.jpg',
    imgAlt: '裂缝',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '裂缝', titleEn: 'Crack',
    photographer: '向洪平', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/21.jpg',
    imgAlt: '标线',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '标线', titleEn: 'Marking',
    photographer: '张钧垚', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/22.webp',
    imgAlt: '挡板',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '挡板', titleEn: 'Board',
    photographer: '吴浩源', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/newtopo/23.jpg',
    imgAlt: '堆场',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '堆场', titleEn: 'Yard',
    photographer: 'YI', role: '常驻',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/24.jpg',
    imgAlt: '荒地',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '荒地', titleEn: 'Wasteland',
    photographer: '周亭燃', role: '主编',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/25.webp',
    imgAlt: '断墙',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '断墙', titleEn: 'Broken Wall',
    photographer: '向洪平', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/26.jpg',
    imgAlt: '脚手',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '脚手', titleEn: 'Scaffold',
    photographer: '张钧垚', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/newtopo/27.jpg',
    imgAlt: '基坑',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '基坑', titleEn: 'Pit',
    photographer: '吴浩源', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/newtopo/28.webp',
    imgAlt: '围墙',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.07',
    title: '围墙', titleEn: 'Enclosure',
    photographer: 'YI', role: '常驻',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/newtopo/29.jpg',
    imgAlt: '顶棚',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.08',
    title: '顶棚', titleEn: 'Roof',
    photographer: '周亭燃', role: '主编',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
    span: 's5', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/newtopo/30.jpg',
    imgAlt: '侧翼',
    cat: 'newtopographic', catLabel: '新地形', date: '2026.06',
    title: '侧翼', titleEn: 'Wing',
    photographer: '向洪平', role: '常驻',
    params: '70mm · f/8 · 1/250s · ISO 100',
    span: 's7', ratio: 'ar-169'
  }
,
  /* ---------- 静物 STILLLIFE ---------- */
  {
    img: 'images/gallery/stilllife/01.webp',
    imgAlt: '枯花',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '枯花', titleEn: 'Dried Flower',
    photographer: '吴浩源', role: '常驻',
    params: '35mm · f/8 · 1/60s · ISO 200',
    span: 's4', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/stilllife/02.jpg',
    imgAlt: '陶器',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '陶器', titleEn: 'Pottery',
    photographer: 'YI', role: '常驻',
    params: '50mm · f/2.8 · 1/125s · ISO 400',
    span: 's8', ratio: 'ar-169'
  },
  {
    img: 'images/gallery/stilllife/03.jpg',
    imgAlt: '亚麻',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '亚麻', titleEn: 'Linen',
    photographer: '周亭燃', role: '主编',
    params: '24mm · f/11 · 1/100s · ISO 100',
    span: 's3', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/stilllife/04.webp',
    imgAlt: '茶杯',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '茶杯', titleEn: 'Teacup',
    photographer: '向洪平', role: '常驻',
    params: '85mm · f/4 · 1/250s · ISO 200',
    span: 's3', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/stilllife/05.jpg',
    imgAlt: '旧书',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '旧书', titleEn: 'Old Book',
    photographer: '张钧垚', role: '常驻',
    params: '28mm · f/5.6 · 1/200s · ISO 800',
    span: 's3', ratio: 'ar-23'
  },
  {
    img: 'images/gallery/stilllife/06.jpg',
    imgAlt: '瓷碗',
    cat: 'stilllife', catLabel: '静物', date: '2026.06',
    title: '瓷碗', titleEn: 'Bowl',
    photographer: '吴浩源', role: '常驻',
    params: '45mm · f/2 · 1/160s · ISO 400',
    span: 's3', ratio: 'ar-34'
  },
  {
    img: 'images/gallery/stilllife/07.webp',
    imgAlt: '木桌',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '木桌', titleEn: 'Wooden Table',
    photographer: 'YI', role: '常驻',
    params: '90mm · f/4 · 1/30s · ISO 400',
    span: 's6', ratio: 'ar-43'
  },
  {
    img: 'images/gallery/stilllife/08.jpg',
    imgAlt: '窗影',
    cat: 'stilllife', catLabel: '静物', date: '2026.07',
    title: '窗影', titleEn: 'Window Shadow',
    photographer: '周亭燃', role: '主编',
    params: '35mm · f/2.8 · 1/125s · ISO 1600',
    span: 's6', ratio: 'ar-1'
  },
  {
    img: 'images/gallery/stilllife/09.jpg',
    imgAlt: '枝叶',
    cat: 'stilllife', catLabel: '静物', date: '2026.08',
    title: '枝叶', titleEn: 'Branch',
    photographer: '向洪平', role: '常驻',
    params: '50mm · f/1.8 · 1/60s · ISO 3200',
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
