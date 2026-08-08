/* ============================================================
   杂志数据（杂志陈列详情页 magazine-detail.html 使用）
   通过 URL 参数 ?id=001 加载对应杂志
   ============================================================ */
window.magazines = [
  {
    id:'001',
    issue:'立秋 2026 No.001',
    title:'PRELUDE 序',
    titleEn:'Prelude',
    cover:'images/magazine/001.jpg',
    description:'创刊号「序」。清晨旧巷，撑伞的孤影走过潮湿的青砖——樱茉序的第一页，从一束落在城乡之间的光开始。本期收录十二位共创摄影师的序章作品，建立 A/B 双调对照、长线企划与生灵日记四大板块的雏形。',
    lookInside:'index.html',
    shops:[
      {name:'Fujisan.co.jp',url:'#'},
      {name:'amazon.co.jp',url:'#'}
    ]
  },
  {
    id:'002',
    issue:'白露 2026 No.002',
    title:'BAMBOO MIST 竹雾',
    titleEn:'Bamboo Mist',
    cover:'images/magazine/002.jpg',
    description:'第二期「竹雾」。白露清晨，竹林深处雾气未散，35mm 镜头在湿润空气中铺出一层灰阶。本期延续序章的留白美学，加入静物与枯花专题，把"将凉未凉的茶"作为视觉母题贯穿全刊。',
    lookInside:'index.html',
    shops:[
      {name:'Fujisan.co.jp',url:'#'},
      {name:'amazon.co.jp',url:'#'}
    ]
  },
  {
    id:'003',
    issue:'长线企划 No.003',
    title:'OLD TOWNS 老乡镇',
    titleEn:'Old Towns',
    cover:'images/magazine/003.jpg',
    description:'长线企划第三弹「老乡镇」。窄巷、石屋、午后斜阳，记录正在消失的檐角与集市。这是樱茉序第一个长期专题的开篇，将以一年为跨度持续回访六处老镇，见证它们在四季里的呼吸节奏。',
    lookInside:'project-oldtown.html',
    shops:[
      {name:'Fujisan.co.jp',url:'#'},
      {name:'amazon.co.jp',url:'#'}
    ]
  },
  {
    id:'004',
    issue:'长线企划 No.004',
    title:'NEW COUNTRYSIDE 新农村',
    titleEn:'New Countryside',
    cover:'images/magazine/004.jpg',
    description:'长线企划第四弹「新农村」。水泥新房与稻田交错，传统与重建在同一片土地上并置。本期以建筑的几何切面切入，对照乡镇的有机生长与农村的规划肌理。',
    lookInside:'project-newcountry.html',
    shops:[
      {name:'Fujisan.co.jp',url:'#'},
      {name:'amazon.co.jp',url:'#'}
    ]
  },
  {
    id:'005',
    issue:'长线企划 No.005',
    title:"CITY'S EDGE 城市边缘",
    titleEn:"City's Edge",
    cover:'images/magazine/005.jpg',
    description:'长线企划第五弹「城市边缘」。黄昏的塔吊、未完工的楼群、被推平的野地——城市在边缘处生长，也在边缘处遗忘。本期聚焦扩张中的临界地带，用低饱和色温呈现一种克制的张力。',
    lookInside:'project-cityedge.html',
    shops:[
      {name:'Fujisan.co.jp',url:'#'},
      {name:'amazon.co.jp',url:'#'}
    ]
  },
  {
    id:'006',
    issue:'长线企划 No.006',
    title:'ROADSIDE VIEWS 路途景观',
    titleEn:'Roadside Views',
    cover:'images/magazine/006.jpg',
    description:'长线企划第六弹「路途景观」。车窗外的田野、站台上的等待、铁轨交汇处的远景——本期把镜头交给"途中"，用动态模糊与静止瞬间的对比，讨论观看本身的速率。',
    lookInside:'project-roadside.html',
    shops:[
      {name:'Fujisan.co.jp',url:'#'},
      {name:'amazon.co.jp',url:'#'}
    ]
  },
  {
    id:'007',
    issue:'长线企划 No.007',
    title:'SEASONS & LIGHT 岁与光影',
    titleEn:'Seasons & Light',
    cover:'images/magazine/007.jpg',
    description:'长线企划第七弹「岁与光影」。老树的影子、白墙上的光斑、午后变长的几何——本期以"光"为唯一主角，收录四季里十二处与光相遇的瞬间，附技术解析与曝光参数。',
    lookInside:'project-seasonlight.html',
    shops:[
      {name:'Fujisan.co.jp',url:'#'},
      {name:'amazon.co.jp',url:'#'}
    ]
  },
  {
    id:'008',
    issue:'长线企划 No.008',
    title:'CREATURE DIARY 生灵日记',
    titleEn:'Creature Diary',
    cover:'images/magazine/008.jpg',
    description:'长线企划第八弹「生灵日记」。巷子里的小猫、屋檐下的麻雀、稻田边的蜻蜓——本期把镜头俯下，记录与人类共处的小生灵。每张照片都附拍摄故事，是这本电子杂志里最温柔的一辑。',
    lookInside:'project-creatures.html',
    shops:[
      {name:'Fujisan.co.jp',url:'#'},
      {name:'amazon.co.jp',url:'#'}
    ]
  }
];
