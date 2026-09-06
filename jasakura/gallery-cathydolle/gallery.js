/* =====================================================================
 * gallery.js — 1:1 port of cathydolle.com homepage WebGL gallery
 * Source: webpack module 77957 (chunk 4568-947599f788dfee74.js)
 * Uses the site's OWN bundled three.js (vendor/three.site.js) and
 * gsap 3.13 + CSSPlugin + CustomEase (vendor/gsap.site.js).
 * ===================================================================== */
(function () {
  "use strict";

  const THREE = window.THREE;
  const WebGLRendererCtor = THREE.WebGLRendererCtor;
  const gsap = window.gsap;
  const CustomEase = window.CustomEase;

  /* Real project data (from Sanity homePage query, 2025-08-13 dataset) */
  const PROJECTS = [
    { title: "ARD",            slug: "ard",             format: "landscape", src: "assets-projects/project-0.webp" },
    { title: "Pierre Cathala", slug: "pierre-cathala",  format: "portrait",  src: "assets-projects/project-1.webp" },
    { title: ".Raw",           slug: "raw",             format: "landscape", src: "assets-projects/project-2.webp" },
    { title: "Yeng",           slug: "yeng",            format: "portrait",  src: "assets-projects/project-3.webp" },
    { title: "Prada Beauty",   slug: "prada-beauty",    format: "landscape", src: "assets-projects/project-4.webp" },
    { title: "KLSR",           slug: "klsr",            format: "portrait",  src: "assets-projects/project-5.webp" },
    { title: "Jean khamkwan",  slug: "jean-khamkwan",   format: "landscape", src: "assets-projects/project-6.webp" },
    { title: "Zhong Lin",      slug: "zhong-lin",       format: "portrait",  src: "assets-projects/project-7.webp" },
    { title: "Aishy",          slug: "aishy",           format: "landscape", src: "assets-projects/project-8.webp" },
    { title: "Folio Template", slug: "folio-template",  format: "portrait",  src: "assets-projects/project-9.webp" },
    { title: "Elie Leber",     slug: "elie-leber",      format: "landscape", src: "assets-projects/project-10.webp" },
    { title: "Rue Saint Abel", slug: "rue-saint-abel",  format: "portrait",  src: "assets-projects/project-11.webp" },
  ];

  /* --------------------------------------------------------------- *
   *  Module 51134 — grid helpers (span-w-N widths / gutter-gap)
   * --------------------------------------------------------------- */
  const S = {
    K: function (e) {
      let t = document.createElement("div");
      t.className = "span-w-" + e;
      t.style.position = "absolute";
      t.style.visibility = "hidden";
      document.body.appendChild(t);
      let i = window.getComputedStyle(t).width;
      document.body.removeChild(t);
      return parseFloat(i);
    },
    g: function () {
      let e = document.createElement("div");
      e.className = "gutter-gap-1";
      e.style.position = "absolute";
      e.style.visibility = "hidden";
      document.body.appendChild(e);
      let t = window.getComputedStyle(e).gap;
      document.body.removeChild(e);
      return parseFloat(t);
    },
  };

  /* --------------------------------------------------------------- *
   *  Minimal event emitter (module B behaviour: on / trigger)
   * --------------------------------------------------------------- */
  class EventEmitter {
    constructor() { this.callbacks = {}; }
    on(e, t) {
      (this.callbacks[e] || (this.callbacks[e] = [])).push(t);
      return this;
    }
    off(e) {
      delete this.callbacks[e];
      return this;
    }
    trigger(e, ...args) {
      (this.callbacks[e] || []).forEach((cb) => cb(...args));
    }
  }

  /* --------------------------------------------------------------- *
   *  Sizes (module _)
   * --------------------------------------------------------------- */
  class Sizes extends EventEmitter {
    constructor() {
      super();
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.boundResize = () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
        this.trigger("resize");
      };
      window.addEventListener("resize", this.boundResize);
    }
    destroy() { window.removeEventListener("resize", this.boundResize); }
  }

  /* --------------------------------------------------------------- *
   *  Time / ticker (module G)
   * --------------------------------------------------------------- */
  class Time extends EventEmitter {
    constructor() {
      super();
      this.start = Date.now();
      this.current = Date.now();
      this.elapsed = 0;
      this.delta = 16.6667;
      this.isDestroyed = false;
      this.tick();
    }
    tick() {
      if (this.isDestroyed) return;
      let e = Date.now();
      this.delta = e - this.current;
      this.current = e;
      this.elapsed = this.current - this.start;
      this.trigger("tick", this.delta);
      this.animationFrameId = window.requestAnimationFrame(() => this.tick());
    }
    destroy() {
      this.isDestroyed = true;
      if (this.animationFrameId !== null) window.cancelAnimationFrame(this.animationFrameId);
    }
  }

  /* --------------------------------------------------------------- *
   *  Resources (module X, home/index=1 path) — local textures
   * --------------------------------------------------------------- */
  class Resources extends EventEmitter {
    constructor(projects) {
      super();
      this.projects = projects;
      this.items = {};
      this.toLoad = projects.length;
      this.loaded = 0;
      this.loaderBar = document.querySelector("#loaderBar");
      this.textureLoader = new THREE.Tap();
      this.delay = 1200;
      setTimeout(() => this.load(), this.delay);
    }
    load() {
      this.projects.forEach((p, t) => {
        this.textureLoader.load(
          p.src,
          (tex) => {
            tex.userData.title = p.title || "";
            tex.userData.slug = { current: p.slug };
            tex.userData.originalIndex = t;
            switch (p.format) {
              case "portrait": tex.userData.ratio = 9 / 16; tex.userData.format = "portrait"; break;
              case "landscape": tex.userData.ratio = 16 / 9; tex.userData.format = "landscape"; break;
            }
            this.sourceLoaded("sanity-image-" + t, tex);
          },
          undefined,
          () => { console.warn("Image introuvable pour le projet:", p); this.sourceLoaded("sanity-image-" + t, null); }
        );
      });
    }
    sourceLoaded(name, tex) {
      if (tex) this.items[name] = tex;
      this.loaded++;
      let i = document.querySelector("#loaderBar");
      if (i) {
        i.style.transformOrigin = "bottom";
        let e = this.loaded / this.toLoad;
        i.style.transform = "scaleY(" + 100 * e + "%)";
      }
      if (this.loaded === this.toLoad) {
        let e = i ? i.parentElement : null;
        // home page (index === 1): fade the whole loader square out
        gsap.to(e, {
          opacity: 0, duration: 1.5, ease: "power3.out",
          onComplete: () => { e && e.remove(); },
        });
        this.trigger("loaded");
      }
    }
  }

  /* --------------------------------------------------------------- *
   *  Experience singleton (module K, trimmed)
   * --------------------------------------------------------------- */
  class Experience {
    constructor(canvas, projects) {
      this.canvas = canvas;
      this.loaded = false;
      this.debug = { active: false };
      this.sizes = new Sizes();
      this.time = new Time();
      this.resources = new Resources(projects);
      this.camera = new Camera(this);
      this.sceneManager = new SceneManager(this);
      this.sceneManager.setScene(PlaneScene);
      this.renderer = new Renderer(this);
      this.sizes.on("resize", () => this.resize());
      this.time.on("tick", () => this.update());
      window.experience = this;
    }
    updateLoaded() { this.loaded = true; }
    resize() {
      this.camera.resize();
      this.renderer.resize();
    }
    update() {
      this.sceneManager.update();
      this.camera.update();
      this.renderer.update(this.sceneManager.currentScene.scene);
    }
    navigateTo(slug) {
      if (typeof window.WebGLGallery_onOpen === "function") window.WebGLGallery_onOpen(slug);
    }
    destroy() {
      this.sizes.destroy();
      this.time.destroy();
    }
  }

  /* --------------------------------------------------------------- *
   *  Camera (module c) — 1 world unit = 1 CSS pixel at z = 0
   * --------------------------------------------------------------- */
  class Camera {
    constructor(experience) {
      this.experience = experience;
      this.sizes = experience.sizes;
      this.canvas = experience.canvas;
      this.setInstance();
      this.setControls();
    }
    setInstance() {
      this.instance = new THREE.ubm(500, this.sizes.width / this.sizes.height, 100, 1e3);
      this.applyFov();
      this.instance.position.set(0, 0, 500);
      this.instance.updateProjectionMatrix();
    }
    /* 1 世界单位 = 1 CSS 像素：fov 由视口高度推导。
       启动瞬间视口高度可能为 0（后台标签/预渲染），
       因此 resize 时也必须重算，否则投影退化、画面全空。 */
    applyFov() {
      const h = this.sizes.height || window.innerHeight || 1;
      this.instance.fov = 180 * (2 * Math.atan(h / 2 / 500)) / Math.PI;
    }
    setControls() {}
    resize() {
      this.instance.aspect = this.sizes.width / this.sizes.height;
      this.applyFov();
      this.instance.updateProjectionMatrix();
    }
    update() {}
  }

  /* --------------------------------------------------------------- *
   *  Renderer (module d)
   * --------------------------------------------------------------- */
  class Renderer {
    constructor(experience) {
      this.experience = experience;
      this.scene = experience.sceneManager;
      this.canvas = experience.canvas;
      this.sizes = experience.sizes;
      this.camera = experience.camera;
      this.setInstance();
    }
    setInstance() {
      this.instance = new WebGLRendererCtor({ canvas: this.canvas, antialias: true, alpha: true });
      this.instance.toneMapping = THREE.nNL;
      this.instance.toneMappingExposure = 1.75;
      this.instance.shadowMap.enabled = true;
      this.instance.shadowMap.type = THREE.Wk7;
      this.instance.setClearColor(0, 0);
      this.instance.setSize(this.sizes.width, this.sizes.height);
      this.instance.setPixelRatio(this.sizes.pixelRatio);
    }
    resize() {
      this.instance.setSize(this.sizes.width, this.sizes.height);
      this.instance.setPixelRatio(this.sizes.pixelRatio);
    }
    update(scene) {
      this.instance.render(scene, this.experience.camera.instance);
    }
  }

  /* --------------------------------------------------------------- *
   *  Scene manager (module j, trimmed)
   * --------------------------------------------------------------- */
  class SceneManager {
    constructor(experience) {
      this.experience = experience;
      this.resources = experience.resources;
      this.currentScene = null;
    }
    setScene(SceneClass) {
      this.currentScene && this.currentScene.destroy();
      this.currentScene = new SceneClass(this.experience);
      this.currentScene.init();
    }
    update() {
      this.currentScene && this.currentScene.update();
    }
  }

  /* --------------------------------------------------------------- *
   *  Base scene (module p)
   * --------------------------------------------------------------- */
  class BaseScene {
    constructor(experience) {
      this.experience = experience;
      this.scene = new THREE.Z58();
      this.scene.add(experience.camera.instance);
    }
    init() {}
    update() {}
    destroy() {
      this.scene.traverse((e) => {
        e.geometry && e.geometry.dispose();
        e.material && (Array.isArray(e.material) ? e.material.forEach((m) => m.dispose()) : e.material.dispose());
      });
    }
  }

  /* --------------------------------------------------------------- *
   *  Shaders (verbatim from module 77957)
   * --------------------------------------------------------------- */
  const fragmentShader = `
varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
uniform float uParallaxX;
uniform float uParallaxY;
uniform float uZoomFactor;
uniform float uBlackPercent;
uniform float uOpacity;

void main()  {

	vec2 ratio = vec2(
		min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
		min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
	);

	vec2 uv = vec2(
		vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
		vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
	);

	vec2 center = vec2(0.5);

	float parallaxXOffset = uParallaxX;
	float parallaxYOffset = uParallaxY;

	vec2 finalUv = center + (uv - center) * uZoomFactor + vec2(parallaxXOffset, parallaxYOffset);

	vec3 blackColor = vec3(0.0);
	vec3 color = texture2D(uTexture, finalUv).rgb;

	color = mix(color, blackColor, uBlackPercent);

	gl_FragColor = vec4(color, uOpacity);
}
`;
  const vertexShader = `
varying vec2 vUv;

void main(){
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

	vUv = uv;
}
`;

  /* nearest plane to origin on the active axis (module x) */
  function nearestPlane(e, t) {
    if (!e || 0 === e.length) return null;
    let i = null, s = 1 / 0;
    for (let n of e) {
      let e = t ? Math.abs(n.position.y) : Math.abs(n.position.x);
      e < s && (s = e, i = n);
    }
    return i;
  }
  /* nearest plane in scroll direction (module w) */
  function nearestPlaneInDirection(e, t, i) {
    if (!e || 0 === e.length) return null;
    let s = i > 0,
      n = t ? (s ? -0.25 * window.innerHeight : 0.25 * window.innerHeight) : (s ? 0.25 * window.innerWidth : -0.25 * window.innerWidth),
      a = null, r = 1 / 0;
    for (let i of e) {
      let e = Math.abs((t ? i.position.y : i.position.x) - n);
      e < r && (r = e, a = i);
    }
    return a;
  }

  /* --------------------------------------------------------------- *
   *  Horizontal wrapping (module g) — Slider mode
   * --------------------------------------------------------------- */
  class AnimateHorizontal {
    constructor(experience, scene) {
      this.experience = experience;
      this.scene = scene;
      this.planes = scene.gallery.planes;
      this.settings = scene.gallery.settings;
      this.isVertical = scene.isVertical;
      this.planeWidths = scene.gallery.planeWidths;
      this.camera = experience.camera.instance;
      this.numberOfPlanes = this.planes.length;
      this.horizontalScale = 2;
      this.referenceIndex = scene.gallery.referenceIndex;
      this.initialPositions = this.planes.map((e) => e.position.x);
      this.calculateCycleBounds();
    }
    calculateCycleBounds() {
      this.cycleWidth = 0;
      for (let e = 0; e < this.numberOfPlanes; e++)
        this.cycleWidth += this.planeWidths[e] * this.horizontalScale + this.settings.planeDistance;
      this.rightLimit = Math.max(...this.initialPositions) + this.planeWidths[0] * this.horizontalScale / 2;
      this.leftLimit = Math.min(...this.initialPositions) - this.planeWidths[this.numberOfPlanes - 1] * this.horizontalScale / 2;
    }
    recalculateBounds() {
      this.planes = this.scene.gallery.planes;
      this.planeWidths = this.scene.gallery.planeWidths;
      this.initialPositions = this.planes.map((e) => e.position.x);
      this.calculateCycleBounds();
      this.scene.scrollController.delta = 0;
    }
    update() {
      if (!this.scene.isVertical && !this.scene.isTransition)
        for (let e = 0; e < this.planes.length; e++) {
          let t = this.planes[e], i = this.planeWidths[e] * this.horizontalScale / 2;
          t.position.x -= this.scene.scrollController.delta;
          t.position.x - i > this.rightLimit && (t.position.x -= this.cycleWidth);
          t.position.x + i < this.leftLimit && (t.position.x += this.cycleWidth);
        }
    }
  }

  /* --------------------------------------------------------------- *
   *  Vertical wrapping (module m) — List mode
   * --------------------------------------------------------------- */
  class AnimateVertical {
    constructor(experience, scene) {
      this.experience = experience;
      this.scene = scene;
      this.planes = scene.gallery.planes;
      this.settings = scene.gallery.settings;
      this.isVertical = scene.isVertical;
      this.planeHeights = scene.gallery.planeHeights;
      this.numberOfPlanes = this.planes.length;
      this.camera = experience.camera.instance;
      this.referenceIndex = scene.gallery.referenceIndex;
      this.initialPositions = this.planes.map((e) => e.position.y);
      this.calculateCycleBounds();
    }
    calculateCycleBounds() {
      this.cycleHeight = 0;
      for (let e = 0; e < this.numberOfPlanes; e++)
        this.cycleHeight += this.planeHeights[e] + this.settings.planeDistance;
      this.topLimit = Math.max(...this.initialPositions) + this.planeHeights[0] / 2;
      this.bottomLimit = Math.min(...this.initialPositions) - this.planeHeights[this.numberOfPlanes - 1] / 2;
    }
    recalculateBounds() {
      this.initialPositions = this.planes.map((e) => e.position.y);
      this.calculateCycleBounds();
      this.scene.scrollController.delta = 0;
    }
    update() {
      if (this.scene.isVertical && !this.scene.isTransition)
        for (let e = 0; e < this.planes.length; e++) {
          let t = this.planes[e], i = this.planeHeights[e] / 2;
          t.position.y += this.scene.scrollController.delta;
          t.position.y - i > this.topLimit && (t.position.y -= this.cycleHeight);
          t.position.y + i < this.bottomLimit && (t.position.y += this.cycleHeight);
        }
    }
  }

  /* --------------------------------------------------------------- *
   *  Entrance choreography (module y)
   *  8px black points -> 32px slots -> full-size vertical reveal
   * --------------------------------------------------------------- */
  class AnimatePlanesIn {
    constructor(experience, planes) {
      this.experience = experience;
      this.planes = planes;
      this.verticalLayout = document.querySelector("#vertical-layout");
      this.pixelCrosshair = document.querySelector("#pixelCrosshair");
      this.isLoaded = experience.loaded;
      this.setLoaded = () => this.experience.updateLoaded();
    }
    calculateHorizontalPositions() {
      let e = this.planes.length,
        t = -((e - 1) * 8) / 2,
        i = -((e - 1) * 32) / 2;
      this.planes.forEach((e, s) => {
        e.userData.initialLoaderPostion = { x: t + 8 * s, y: e.position.y, z: e.position.z };
        e.userData.targetMidLoaderPosition = { x: i + 8 * s * 4, y: e.position.y, z: e.position.z };
        e.scale.set(8, 8, 1);
        e.position.set(e.userData.initialPostion.x, e.userData.initialPostion.y, e.userData.initialPostion.z);
      });
    }
    animateHeader(e, t) {
      let i = document.querySelector("#list"),
        s = document.querySelector("#slider"),
        n = t + 2.35;
      e.fromTo(i, { y: 5, opacity: 0, filter: "blur(5px)", pointerEvents: "none" },
        { y: 0, filter: "blur(0px)", opacity: 1, duration: 2, ease: "power2.inOut", pointerEvents: "all" }, n);
      e.fromTo(s, { y: 5, opacity: 0, filter: "blur(5px)", pointerEvents: "none" },
        { y: 0, filter: "blur(0px)", pointerEvents: "all", opacity: .3, duration: 2, ease: "power2.inOut" }, n);
    }
    animateTextIntro(e, t) {
      let i = this.verticalLayout.querySelectorAll("li"),
        s = this.planes.length / 2;
      e.to(this.verticalLayout, { pointerEvents: "all", opacity: "1", duration: .01 }, t + .05 * s);
      i.forEach((i, n) => {
        e.fromTo(i, { y: 5, opacity: 0, filter: "blur(5px)", onStart: () => {} }, {
          y: 0, filter: "blur(0px)", opacity: 0 === n ? 1 : .3, duration: 2, ease: "power2.inOut",
        }, t + n % s * .04);
      });
    }
    animateInLoaded() {
      return new Promise((e) => {
        let t = 0, i = gsap.timeline();
        this.animateTextIntro(i, .75);
        this.animateHeader(i, 0);
        i.fromTo(this.pixelCrosshair, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power3.inOut" }, 0);
        this.planes.forEach((s) => {
          i.fromTo(s.material.uniforms.uOpacity, { value: 0 }, { value: 1, duration: 2, ease: "power3.inOut" }, 0);
          i.fromTo(s.material.uniforms.uZoomFactor, { value: .7 }, { value: .8, duration: 2, ease: "power3.inOut" }, 0);
          i.to(s.material.uniforms.uBlackPercent, { value: 0, duration: .1, ease: "power4.out" }, .1);
          s.scale.set(s.userData.initialSizes.x, s.userData.initialSizes.y);
          s.position.set(s.userData.initialPostion.x, s.userData.initialPostion.y, s.userData.initialPostion.z);
          i.to(s.position, {
            x: s.userData.initialPostion.x, y: s.userData.initialPostion.y, z: s.userData.initialPostion.z,
            duration: 2, ease: "power3.inOut", onComplete: () => { ++t === this.planes.length && e(); },
          }, .1);
        });
      });
    }
    animateIn() {
      return this.isLoaded ? this.animateInLoaded() : this.animateInNotLoaded();
    }
    animateInNotLoaded() {
      return new Promise((e) => {
        let t = 0;
        this.calculateHorizontalPositions();
        let i = gsap.timeline();
        this.animateTextIntro(i, 2.75);
        this.animateHeader(i, .5);
        i.fromTo(this.pixelCrosshair, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power3.inOut" }, 5);
        this.planes.forEach((s) => {
          i.fromTo(s.position, { x: 0, y: 0, z: 0 }, {
            x: s.userData.targetMidLoaderPosition.x, y: s.userData.targetMidLoaderPosition.y,
            z: s.userData.targetMidLoaderPosition.z, duration: 1.75, ease: "power3.inOut",
          }, .5);
          i.to(s.material.uniforms.uBlackPercent, { value: 0, duration: 2, ease: "power3.inOut" }, .5);
          i.to(s.scale, { x: s.userData.initialSizes.x, y: s.userData.initialSizes.y, duration: 2.5, ease: "power3.inOut" }, 2);
          i.to(s.material.uniforms.uZoomFactor, { value: .8, duration: 2.5, ease: "power3.inOut" }, 2);
          i.to(s.position, {
            x: s.userData.initialPostion.x, y: s.userData.initialPostion.y, z: s.userData.initialPostion.z,
            duration: 2.5, ease: "power3.inOut", onComplete: () => {
              ++t === this.planes.length && (this.experience.updateLoaded(), e());
            },
          }, 2);
        });
      });
    }
  }

  /* --------------------------------------------------------------- *
   *  Pixel crosshair animations (module 85545)
   * --------------------------------------------------------------- */
  const Pixel = {
    AnimatePixel(e) {
      let t = e.children[0], i = e.children[1], n = e.children[2].children[0];
      gsap.to(t, { height: "20px", width: "20px", rotate: 90, duration: .8, ease: "power3.out" });
      gsap.to(i, { clipPath: "inset(0%)", duration: .75, delay: .05, ease: "power3.out" });
      gsap.fromTo(n, { y: "100%" }, { y: "0%", duration: .8, ease: "power3.out" });
    },
    AnimatePixelOut(e) {
      let t = e.children[0], i = e.children[1], n = e.children[2].children[0];
      gsap.to(t, { height: "10px", width: "10px", rotate: 0, duration: .8, ease: "power3.out" });
      gsap.to(i, { clipPath: "inset(100%)", duration: .75, delay: .05, ease: "power3.out" });
      gsap.to(n, {
        y: "-100%", duration: .8, ease: "power3.out", onComplete: () => {
          gsap.set(n, { y: "100%" });
        },
      });
    },
  };

  /* --------------------------------------------------------------- *
   *  Gallery (module b)
   * --------------------------------------------------------------- */
  class Gallery {
    constructor(experience, scene) {
      this.experience = experience;
      this.scene = scene;
      this.isVertical = scene.isVertical;
      this.isTransition = scene.isTransition;
      this.referenceIndex = 5;
      this.lastNearestDOMIndex = -1;
      this.settings = { planeDistance: 0 };
      this.planeSizes = null;
      this.planes = [];
      this.planeHeights = [];
      this.planeWidths = [];
      this.planeTargetPositions = [];
      this.isMobile = window.innerWidth <= 768;
      this.ressources = experience.resources.items;
      this.numberOfPlanes = Object.values(this.ressources);
      this.initSizes();
      this.boundResize = () => this.resize();
      window.addEventListener("resize", this.boundResize);
      let e = document.getElementById("list"), t = document.getElementById("slider");
      this.boundListClick = () => {
        this.isTransition = this.scene.isTransition;
        if (!this.isTransition && !this.isVertical) {
          this.scene.isTransition = true;
          t.style.pointerEvents = "none";
          gsap.to(e, { duration: 1, opacity: 1, ease: "power3.out" });
          gsap.to(t, { duration: 1, opacity: .3, ease: "power3.out" });
          this.nearestPlane = nearestPlane(this.planes, this.isVertical);
          this.animateTransition();
        }
      };
      e.addEventListener("click", this.boundListClick);
      this.boundSliderClick = () => {
        this.isTransition = this.scene.isTransition;
        if (!this.isTransition && this.isVertical) {
          this.scene.isTransition = true;
          e.style.pointerEvents = "none";
          gsap.to(e, { duration: 1, opacity: .3, ease: "power3.out" });
          gsap.to(t, { duration: 1, opacity: 1, ease: "power3.out" });
          this.nearestPlane = nearestPlane(this.planes, this.isVertical);
          this.animateTransition();
        }
      };
      t.addEventListener("click", this.boundSliderClick);
    }
    initSizes() {
      let e = .8 * window.innerHeight;
      this.isMobile
        ? (this.landscapeInPx = window.innerWidth - 16, this.portraitInPx = S.K(4))
        : (this.landscapeInPx = S.K(3), this.portraitInPx = S.K(2));
      let t = !this.isMobile && 1.5 * this.portraitInPx * 2 > e,
        i = this.isMobile ? 1.45 : 1.5,
        s = t ? e / 2 : this.portraitInPx * i,
        n = this.landscapeInPx / 1.75 * 2 > e,
        a = (this.isMobile, 1.75),
        r = n ? e / 2 : this.landscapeInPx / a;
      this.planeSizes = [
        { name: "portrait", width: this.portraitInPx, height: s },
        { name: "landscape", width: this.landscapeInPx, height: r },
      ];
    }
    async initGallery() {
      this.numberOfPlanes = this.numberOfPlanes.sort((e, t) => {
        var i, s;
        return (null != (i = e.userData.originalIndex) ? i : 1 / 0) - (null != (s = t.userData.originalIndex) ? s : 1 / 0);
      });
      let e = [], t = this.numberOfPlanes.length, i = t - this.referenceIndex;
      for (let s = 0; s < t; s++) {
        let n = (i + s) % t;
        e.push(this.numberOfPlanes[n]);
      }
      this.numberOfPlanes = e;
      for (let e = 0; e < this.numberOfPlanes.length; e++) {
        let t = this.numberOfPlanes[e].userData.format,
          i = this.planeSizes.find((e) => e.name === t);
        this.planeHeights.push(i.height);
        this.planeWidths.push(i.width);
      }
      for (let e = 0; e < this.numberOfPlanes.length; e++) {
        let t = this.calculateVerticalPosition(e, this.referenceIndex);
        this.planeTargetPositions.push(t);
      }
      for (let e = 0; e < this.numberOfPlanes.length; e++) {
        let t = this.numberOfPlanes[e], i = new THREE.Pq0(0, 0, 0);
        this.createPlane(i, t, e);
      }
      try {
        await this.experience.renderer.instance.compileAsync(this.scene.scene, this.experience.camera.instance);
        for (let e = 0; e < 3; e++) await new Promise((e) => requestAnimationFrame(e));
      } catch (e) {
        console.warn(e);
      }
      this.animatePlanesIn = new AnimatePlanesIn(this.experience, this.planes);
      await this.animatePlanesIn.animateIn();
      this.planes.forEach((e, t) => {
        t === this.referenceIndex && (this.scene.activePlane = e);
      });
    }
    animateTransition() {
      let e = document.getElementById("vertical-layout");
      this.initSizes();
      let t = this.isVertical;
      gsap.to(e, {
        duration: t ? 1 : 2, opacity: +!t, delay: .75 * !t, onStart: () => {
          e.style.pointerEvents = t ? "none" : "auto";
        },
      });
      let i = this.planes.findIndex((e) => e === this.nearestPlane);
      if (-1 === i) return void console.error("Nearest plane not found in planes array");
      let s = this.getCircularOrderToReference(i, this.numberOfPlanes.length, this.referenceIndex),
        n = s.some((e, t) => e !== t),
        a = n ? s.map((e) => this.planeHeights[e]) : this.planeHeights,
        r = n ? s.map((e) => this.planeWidths[e]) : this.planeWidths;
      this.planes.forEach((e, t) => {
        let l = s.indexOf(t),
          h = this.isVertical
            ? this.calculateHorizontalPositionWithSizes(l, this.referenceIndex, r, 2)
            : this.calculateVerticalPositionWithSizes(l, this.referenceIndex, a, 1),
          c = Math.abs(t - i),
          u = Math.min(c, this.planes.length - c),
          d = Math.floor(this.planes.length / 2),
          p = gsap.timeline({
            defaults: { duration: 1.5, ease: "power3.inOut", delay: .06 * (d - u) },
            onStart: () => {
              this.scene.isTransition = true;
              this.scene.scrollController.delta = 0;
              this.scene.scrollController.velocity = 0;
              this.scene.scrollController.scrollY = 0;
              this.scene.scrollController.targetScrollY = 0;
            },
          }),
          m = this.planeWidths[t] * (this.isVertical ? 2 : 1),
          yy = this.planeHeights[t] * (this.isVertical ? 2 : 1);
        p.to(e.position, { x: h.x, y: h.y, z: h.z }, 0)
          .to(e.scale, { x: m, y: yy, z: m }, 0);
        t === this.planes.length - 1 && p.eventCallback("onComplete", () => {
          n && (this.planeHeights = a, this.planeWidths = r, this.planes = s.map((e) => this.planes[e]));
          let i = this.scene;
          i.animateVertical && i.animateVertical.recalculateBounds();
          i.animateHorizontal && i.animateHorizontal.recalculateBounds();
          i.isVertical = !i.isVertical;
          this.isVertical = i.isVertical;
          this.scene.scrollController && (this.scene.scrollController.delta = 0, this.scene.scrollController.velocity = 0);
          let o = document.getElementById("list"), l = document.getElementById("slider");
          setTimeout(() => {
            i.isTransition = false;
            l.style.pointerEvents = "auto";
            o.style.pointerEvents = "auto";
            this.scene.isTransition = false;
          }, 400);
        });
      });
    }
    getCircularOrderToReference(e, t, i) {
      let s = [], n = e - i;
      for (let e = 0; e < t; e++) {
        let i = (e + n + t) % t;
        s.push(i);
      }
      return s;
    }
    calculateVerticalPosition(e, t) {
      return this.calculateVerticalPositionWithSizes(e, t, this.planeHeights, 1);
    }
    calculateVerticalPositionWithSizes(e, t, i) {
      let s, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      if (e === t) s = 0;
      else if (e < t) {
        let a = i[t] * n / 2 + this.settings.planeDistance;
        for (let s = t - 1; s > e; s--) a += i[s] * n + this.settings.planeDistance;
        a += i[e] * n / 2; s = a;
      } else {
        let a = i[t] * n / 2 + this.settings.planeDistance;
        for (let s = t + 1; s < e; s++) a += i[s] * n + this.settings.planeDistance;
        a += i[e] * n / 2; s = -a;
      }
      return new THREE.Pq0(0, s, 0);
    }
    calculateHorizontalPosition(e, t) {
      return this.calculateHorizontalPositionWithSizes(e, t, this.planeWidths, 2);
    }
    calculateHorizontalPositionWithSizes(e, t, i) {
      let s, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      if (e === t) s = 0;
      else if (e < t) {
        let a = i[t] * n / 2 + this.settings.planeDistance;
        for (let s = t - 1; s > e; s--) a += i[s] * n + this.settings.planeDistance;
        a += i[e] * n / 2; s = -a;
      } else {
        let a = i[t] * n / 2 + this.settings.planeDistance;
        for (let s = t + 1; s < e; s++) a += i[s] * n + this.settings.planeDistance;
        a += i[e] * n / 2; s = a;
      }
      return new THREE.Pq0(s, 0, 0);
    }
    resize() {
      this.loaded = this.experience.loaded;
      if (false === this.loaded) return;
      this.isMobile = window.innerWidth <= 768;
      this.initSizes();
      this.planes.forEach((e, t) => {
        let i = this.numberOfPlanes[t].userData.format,
          s = this.planeSizes.find((e) => e.name === i);
        e.material.uniforms.uPlaneSizes.value.set(s.width, s.height);
        this.planeHeights[t] = s.height;
        this.planeWidths[t] = s.width;
      });
      this.planes.forEach((e, t) => {
        let i = this.numberOfPlanes[t].userData.format,
          s = this.planeSizes.find((e) => e.name === i),
          n = this.isVertical ? this.calculateVerticalPosition(t, this.referenceIndex) : this.calculateHorizontalPosition(t, this.referenceIndex);
        e.position.copy(n);
        let a = this.isVertical ? 1 : 2, r = s.width * a, o = s.height * a;
        e.scale.set(r, o, 1);
      });
      this.geometryCache && (this.geometryCache.forEach((e) => e.dispose()), this.geometryCache.clear());
      let i = this.scene;
      i.animateVertical && i.animateVertical.recalculateBounds();
      i.animateHorizontal && i.animateHorizontal.recalculateBounds();
    }
    createPlane(e, t, i) {
      let s = t.userData.format,
        n = this.planeSizes.find((e) => e.name === s),
        a = "".concat(n.width, "_").concat(n.height);
      this.geometryCache || (this.geometryCache = new Map());
      let r = this.geometryCache.get(a);
      r || (r = new THREE.bdM(1, 1, 1, 1), this.geometryCache.set(a, r));
      let o = new THREE.BKk({
        vertexShader, fragmentShader, uniforms: {
          uTexture: { value: t },
          uImageSizes: { value: new THREE.I9Y(t.image.naturalWidth, t.image.naturalHeight) },
          uPlaneSizes: { value: new THREE.I9Y(n.width, n.height) },
          uParallaxX: { value: 0 },
          uParallaxY: { value: 0 },
          uZoomFactor: { value: .4 },
          uBlackPercent: { value: 1 },
          uOpacity: { value: 1 },
        },
        transparent: true,
      });
      let l = new THREE.eaF(r, o);
      l.position.copy(e);
      l.frustumCulled = false;
      l.userData = {
        slug: t.userData.slug.current,
        initialSizes: { x: n.width, y: n.height },
        initialPostion: this.planeTargetPositions[i],
        realHeight: n.height,
        realWidth: n.width,
      };
      this.planes.push(l);
      this.scene.scene.add(l);
    }
    update() {
      this.nearestPlane = nearestPlane(this.planes, this.isVertical);
      this.updateTileOpacities(this.nearestPlane);
      if (!this.isMobile)
        for (let i = 0; i < this.planes.length; i++) {
          let n = this.planes[i],
            a = .6,
            r = Math.max(-1, Math.min(1, (n.position.y - this.experience.camera.instance.position.y) / window.innerWidth)) * a,
            o = .4 * Math.max(-1, Math.min(1, (n.position.x - this.experience.camera.instance.position.x) / window.innerWidth));
          n.material.uniforms.uParallaxY.value = r;
          n.material.uniforms.uParallaxX.value = o;
        }
    }
    updateTileOpacities(e) {
      if (!e || !this.isVertical) return;
      let t = document.querySelector("#vertical-layout");
      if (!t) return;
      let total = this.planes.length;
      let k = this.planes.findIndex((p) => p.userData.slug === e.userData.slug);
      if (-1 === k) return;
      let n = (k - this.referenceIndex + total) % total;
      /* 虚拟窗口模式：n 变化时回调页面层，刷新两端槽位内容与透明度 */
      if ("function" == typeof window.GalleryIndexUpdate) {
        if (n !== this.lastNearestDOMIndex) {
          this.lastNearestDOMIndex = n;
          window.GalleryIndexUpdate(n);
        }
        return;
      }
      /* 兼容回退：静态全量列表按循环距离淡出（槽位数与平面数一致时才有效） */
      let i = t.querySelectorAll("li[data-slug]");
      if (i.length !== total) return;
      if (n !== this.lastNearestDOMIndex) {
        this.lastNearestDOMIndex = n;
        i.forEach((e, t) => {
          if ("true" === e.dataset.isHovered) return;
          let i = Math.abs(t - n),
            a = .15 + .8 * Math.pow(1 - Math.min(Math.min(i, total - i) / 4, 1), 3);
          gsap.to(e, { opacity: a, duration: 1, ease: "power3.out", overwrite: "auto" });
        });
      }
    }
    forceUpdateOpacities() {
      let e = nearestPlane(this.planes, this.isVertical);
      this.lastNearestDOMIndex = -1;
      this.updateTileOpacities(e);
    }
    destroy() {
      window.removeEventListener("resize", this.boundResize);
      let e = document.getElementById("list"), t = document.getElementById("slider");
      e && e.removeEventListener("click", this.boundListClick);
      t && t.removeEventListener("click", this.boundSliderClick);
      this.planes.forEach((e) => {
        e.geometry.dispose();
        e.material.dispose();
        this.scene.scene.remove(e);
      });
      this.planes = [];
      this.geometryCache && (this.geometryCache.forEach((e) => e.dispose()), this.geometryCache.clear());
    }
  }

  /* --------------------------------------------------------------- *
   *  Scroll / drag / wheel / touch / keyboard (module P)
   * --------------------------------------------------------------- */
  class ScrollController {
    constructor(experience, scene) {
      this.experience = experience;
      this.sceneManager = experience.sceneManager;
      this.scene = scene;
      this.debug = experience.debug;
      this.delta = 0;
      this.scrollY = 0;
      this.targetScrollY = 0;
      this.velocity = 0;
      this.lerp = .01;
      this.isMobile = scene.gallery.isMobile;
      this.deltaDecay = this.isMobile ? .92 : .97;
      this.wheelMultiplier = .03;
      this.scrollTimeout = null;
      this.scrollDelay = 500;
      this.dragDelay = 1e3;
      this.snapDuration = .8;
      this.snapEase = "power2.out";
      this.isTransition = scene.isTransition;
      this.lastMouse = new THREE.I9Y();
      this.touchMultiplier = .2;
      this.maxTouchVelocity = 10;
      this.scrollvalue = null;
      this.isDragging = false;
      this.startTime = 0;
      this.moveThreshold = 5;
      this.totalDistance = 0;
      this.stopThreshold = .001;
      this.isNavigating = false;
      this.touchVelocity = 0;
      this.lastTouchTime = 0;
      this.boundOnScroll = this.onScroll.bind(this);
      this.boundOnKeyDown = this.onKeyDown.bind(this);
      this.boundHandleDragStart = this.handleDragStart.bind(this);
      this.boundHandleDragMove = this.handleDragMove.bind(this);
      this.boundHandleDragEnd = this.handleDragEnd.bind(this);
      document.addEventListener("mousedown", this.boundHandleDragStart);
      document.addEventListener("mousemove", this.boundHandleDragMove);
      document.addEventListener("mouseup", this.boundHandleDragEnd);
      window.addEventListener("wheel", this.boundOnScroll, { passive: false });
      window.addEventListener("keydown", this.boundOnKeyDown);
      this.boundHandleTouchStart = (e) => this.handleTouchStart(e);
      this.boundHandleTouchEnd = () => this.handleTouchEnd();
      this.boundHandleTouchMove = (e) => this.handleTouchMove(e);
      window.addEventListener("touchstart", this.boundHandleTouchStart);
      window.addEventListener("touchend", this.boundHandleTouchEnd, { passive: true });
      window.addEventListener("touchmove", this.boundHandleTouchMove, { passive: false });
    }
    onScroll(e) {
      if (this.scene.isTransition) { e.preventDefault(); e.stopPropagation(); return; }
      this.delta += e.deltaY * this.wheelMultiplier;
      this.scene.activePlane = null;
      this.scrollTimeout && clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        let e = this.scene.gallery.planes,
          t = nearestPlaneInDirection(e, this.scene.isVertical, this.delta);
        this.snapTo(t, e);
      }, this.scrollDelay);
    }
    onKeyDown(e) {
      if (this.scene.isTransition || this.isNavigating) return;
      let i = this.scene.isVertical, s = this.scene.gallery && this.scene.gallery.planes;
      if (!s || 0 === s.length || !(i ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"]).includes(e.key)) return;
      e.preventDefault();
      let n = nearestPlane(s, i);
      if (!n) return;
      let a = [...s].sort((e, t) => i ? t.position.y - e.position.y : e.position.x - t.position.x),
        r = a.findIndex((e) => e === n);
      if (-1 === r) return;
      let o = null;
      if (i)
        "ArrowDown" === e.key && r < a.length - 1 ? o = a[r + 1] : "ArrowUp" === e.key && r > 0 && (o = a[r - 1]);
      else
        "ArrowRight" === e.key && r < a.length - 1 ? o = a[r + 1] : "ArrowLeft" === e.key && r > 0 && (o = a[r - 1]);
      o && (this.isNavigating = true, this.snapTo(o, s));
    }
    snapTo(e, t) {
      if (!e) return;
      let i = -e.position.x, s = -e.position.y, n = -e.position.z, a = 0, r = t.length;
      t.forEach((t) => {
        gsap.killTweensOf(t.position);
        gsap.to(t.position, {
          x: t.position.x + i, y: t.position.y + s, z: t.position.z + n,
          duration: this.snapDuration, ease: this.snapEase,
          onUpdate: () => { this.delta = 0; this.velocity = 0; },
          onComplete: () => { ++a === r && (this.scene.activePlane = e, this.isNavigating = false); },
        });
      });
    }
    handleDragStart(e) {
      if (this.isTransition) return;
      this.isDragging = true;
      this.startTime = Date.now();
      this.lastMouse.set(e.clientX, e.clientY);
      this.totalDistance = 0;
      this.scrollTimeout && clearTimeout(this.scrollTimeout);
    }
    handleDragMove(e) {
      if (!this.isDragging || this.scene.isTransition) return;
      let t = e.clientX - this.lastMouse.x,
        i = e.clientY - this.lastMouse.y,
        s = Math.sqrt(t * t + i * i);
      this.totalDistance += s;
      this.isVertical = this.scene.gallery.isVertical;
      this.delta -= this.isVertical ? .1 * i : .1 * t;
      this.lastMouse.set(e.clientX, e.clientY);
      this.scene.activePlane = null;
    }
    handleDragEnd() {
      this.isDragging = false;
      if (this.isClick()) return;
      this.scrollTimeout = setTimeout(() => {
        let e = this.scene.gallery.planes,
          t = nearestPlaneInDirection(e, this.scene.isVertical, this.delta);
        this.snapTo(t, e);
      }, this.dragDelay);
    }
    isClick() {
      let e = Date.now() - this.startTime;
      return this.totalDistance <= this.moveThreshold && e < 300;
    }
    handleTouchStart(e) {
      if (1 === e.touches.length) {
        this.isDragging = true;
        this.lastMouse.set(e.touches[0].clientX, e.touches[0].clientY);
      }
    }
    handleTouchMove(e) {
      if (!this.isDragging || this.scene.isTransition) return;
      e.preventDefault();
      let t = e.touches[0], i = performance.now(),
        s = Math.max(i - this.lastTouchTime, 1),
        n = t.clientY - this.lastMouse.y;
      this.touchVelocity = .5 * this.touchVelocity + -n / s * .5;
      this.touchVelocity = Math.max(-this.maxTouchVelocity, Math.min(this.maxTouchVelocity, this.touchVelocity));
      this.delta -= n * this.touchMultiplier;
      this.lastMouse.set(t.clientX, t.clientY);
      this.lastTouchTime = i;
      this.scene.activePlane = null;
    }
    handleTouchEnd() {
      this.isDragging = false;
    }
    update() {
      if (this.scene.isTransition) { this.delta = 0; this.velocity = 0; return; }
      this.targetScrollY += this.delta;
      this.delta *= this.deltaDecay;
      let t = this.targetScrollY - this.scrollY;
      this.velocity = t * this.lerp;
      this.scrollY += this.velocity;
      Math.abs(this.velocity) < this.stopThreshold && (this.velocity = 0);
      Math.abs(this.delta) < this.stopThreshold && (this.delta = 0);
    }
    destroy() {
      window.removeEventListener("wheel", this.boundOnScroll);
      window.removeEventListener("keydown", this.boundOnKeyDown);
      window.removeEventListener("touchstart", this.boundHandleTouchStart);
      window.removeEventListener("touchend", this.boundHandleTouchEnd);
      window.removeEventListener("touchmove", this.boundHandleTouchMove);
      document.removeEventListener("mousedown", this.boundHandleDragStart);
      document.removeEventListener("mousemove", this.boundHandleDragMove);
      document.removeEventListener("mouseup", this.boundHandleDragEnd);
      this.scrollTimeout && clearTimeout(this.scrollTimeout);
    }
  }

  /* --------------------------------------------------------------- *
   *  Raycast / cursor / open (module D)
   * --------------------------------------------------------------- */
  class Raycast {
    constructor(experience, scene) {
      this.experience = experience;
      this.scene = scene;
      this.currentScene = scene;
      this.rayCaster = new THREE.tBo();
      this.pointer = new THREE.I9Y(1e4, 1e4);
      this.camera = experience.camera.instance;
      this.planes = scene.gallery.planes;
      this.isMobile = scene.gallery.isMobile;
      this.isHoveringActivePlane = false;
      this.currentCursor = "default";
      this.pixelCrosshair = document.getElementById("pixelCrosshair");
      this.onMouseMoveHandler = (e) => this.onMouseMove(e);
      this.onClickHandler = (e) => this.onClick(e);
      this.onKeyDownHandler = (e) => this.onKeyDown(e);
      document.addEventListener("mousemove", this.onMouseMoveHandler);
      document.addEventListener("click", this.onClickHandler);
      document.addEventListener("keydown", this.onKeyDownHandler);
    }
    onMouseMove(e) {
      this.pointer.x = e.clientX / window.innerWidth * 2 - 1;
      this.pointer.y = -(2 * (e.clientY / window.innerHeight)) + 1;
    }
    onKeyDown(e) {
      if ("Enter" === e.key) {
        let e = this.currentScene.activePlane.userData.slug;
        this.navigateToCaseStudy(e);
      }
    }
    onClick(e) {
      if (this.scene.isTransition ||
        !e.target || typeof e.target.closest !== "function" ||
        e.target.closest("header") || e.target.closest("a") ||
        e.target.closest("#aboutContainer") || e.target.closest("button") ||
        e.target.closest("#list") || e.target.closest("#slider") ||
        e.target.closest(".photo-detail") ||
        !this.currentScene.scrollController.isClick()) return;
      this.rayCaster.setFromCamera(this.pointer, this.camera);
      let t = this.rayCaster.intersectObjects(this.planes);
      if (t.length > 0) {
        let e = t[0].object, i = e.userData.slug;
        if (this.isMobile) return void this.navigateToCaseStudy(i);
        this.currentScene.activePlane === e ? this.navigateToCaseStudy(i) : this.currentScene.scrollController.snapTo(e, this.planes);
      }
    }
    navigateToCaseStudy(e) {
      this.experience.navigateTo(e);
    }
    update() {
      if (!this.planes || !this.planes.length) return;
      this.rayCaster.setFromCamera(this.pointer, this.camera);
      let t = this.rayCaster.intersectObjects(this.planes);
      if (t.length > 0) {
        let e = t[0].object, i = this.currentScene.activePlane === e;
        if (i !== this.isHoveringActivePlane) {
          this.isHoveringActivePlane = i;
          i ? Pixel.AnimatePixel(this.pixelCrosshair) : Pixel.AnimatePixelOut(this.pixelCrosshair);
        }
        this.setCursor("pointer");
      } else {
        if (this.isHoveringActivePlane) {
          this.isHoveringActivePlane = false;
          Pixel.AnimatePixelOut(this.pixelCrosshair);
        }
        this.setCursor("default");
      }
    }
    setCursor(e) {
      this.currentCursor !== e && (this.currentCursor = e, document.body.style.cursor = e);
    }
    dispose() {
      document.removeEventListener("mousemove", this.onMouseMoveHandler);
      document.removeEventListener("click", this.onClickHandler);
      document.removeEventListener("keydown", this.onKeyDownHandler);
      this.planes = null;
      this.camera = null;
      this.rayCaster = null;
      this.pointer = null;
      this.pixelCrosshair = null;
      this.setCursor("default");
    }
  }

  /* --------------------------------------------------------------- *
   *  Text index click / hover (module z)
   * --------------------------------------------------------------- */
  class ScrollToProjectController {
    constructor(experience, scene) {
      this.experience = experience;
      this.sceneManager = experience.sceneManager;
      this.currentScene = scene;
      this.planes = scene.gallery.planes;
      this.dataSlugs = document.querySelectorAll("[data-slug]");
      this.dataSlugs.forEach((e) => {
        e.addEventListener("click", (ev) => this.onClick(ev));
        e.addEventListener("mouseenter", () => {
          e.dataset.isHovered = "true";
          gsap.to(e, { opacity: .75, duration: .5, ease: "power2.out" });
        });
        e.addEventListener("mouseleave", () => {
          e.dataset.isHovered = "false";
          this.currentScene.gallery.forceUpdateOpacities();
        });
      });
    }
    onClick(e) {
      e.preventDefault();
      let t = e.currentTarget.dataset.slug,
        i = this.currentScene.gallery.planes,
        s = i.find((e) => e.userData.slug === t);
      if (!s) return;
      let n = -s.position.x, a = -s.position.y, r = -s.position.z,
        l = CustomEase.create("easeName", ".215, .61, .355, 1"),
        h = Math.min(Math.max(nearestPlane(i, this.currentScene.isVertical).position.distanceTo(s.position) / 450, 1), 1.5);
      i.forEach((e, t) => {
        gsap.to(e.position, {
          x: e.position.x + n, y: e.position.y + a, z: e.position.z + r,
          duration: h, ease: l, onComplete: () => {
            t === i.length - 1 && (this.currentScene.activePlane = s);
          },
        });
      });
    }
  }

  /* --------------------------------------------------------------- *
   *  Home scene (module C)
   * --------------------------------------------------------------- */
  class PlaneScene extends BaseScene {
    constructor(experience) {
      super(experience);
      this.resources = experience.resources;
      this.isVertical = true;
      this.isTransition = false;
      this.activePlane = null;
    }
    init() {
      this.resources.toLoad === this.resources.loaded
        ? this.onResourcesLoaded()
        : this.resources.on("loaded", () => this.onResourcesLoaded());
    }
    async onResourcesLoaded() {
      this.gallery = new Gallery(this.experience, this);
      await this.gallery.initGallery();
      this.scrollController = new ScrollController(this.experience, this);
      this.animateVertical = new AnimateVertical(this.experience, this);
      this.animateHorizontal = new AnimateHorizontal(this.experience, this);
      this.scrollToProjectController = new ScrollToProjectController(this.experience, this);
      this.raycast = new Raycast(this.experience, this);
    }
    update() {
      this.animateVertical && this.animateVertical.update();
      this.animateHorizontal && this.animateHorizontal.update();
      this.gallery && this.gallery.update();
      this.scrollController && this.scrollController.update();
      this.raycast && this.raycast.update();
    }
    destroy() {
      super.destroy();
      this.gallery && this.gallery.destroy();
      this.scrollController && this.scrollController.destroy();
      this.raycast && this.raycast.dispose();
    }
  }

  /* --------------------------------------------------------------- *
   *  Boot
   * --------------------------------------------------------------- */
  function boot() {
    const canvas = document.querySelector("#scrollContainer canvas");
    if (!canvas) { console.error("canvas not found"); return; }
    const start = () => {
      const projects = (window.GALLERY_PROJECTS && window.GALLERY_PROJECTS.length)
        ? window.GALLERY_PROJECTS
        : PROJECTS;
      new Experience(canvas, projects);
    };
    /* 外部可提供 GALLERY_PROJECTS_READY Promise（图片预检/数据就绪后再启动） */
    if (window.GALLERY_PROJECTS_READY && typeof window.GALLERY_PROJECTS_READY.then === "function")
      window.GALLERY_PROJECTS_READY.then(start);
    else start();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
