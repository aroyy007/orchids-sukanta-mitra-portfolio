"use client";

import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef, useState } from 'react';

type GL = Renderer['gl'];

// Detect if user prefers reduced motion
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Get responsive configuration based on screen width
function getResponsiveConfig(width: number) {
  if (width < 640) {
    // Mobile - show at least 3 images
    return {
      cameraZ: 25,
      planeScale: { width: 0.75, height: 0.75 },
      bendMultiplier: 0.4,
      segments: { width: 50, height: 25 },
      scrollSpeed: 1.5,
      animationIntensity: 0.5,
      fontSize: 18,
      minVisibleCards: 3
    };
  } else if (width < 1024) {
    // Tablet
    return {
      cameraZ: 22,
      planeScale: { width: 0.9, height: 0.9 },
      bendMultiplier: 0.6,
      segments: { width: 75, height: 35 },
      scrollSpeed: 1.8,
      animationIntensity: 0.7,
      fontSize: 22,
      minVisibleCards: 3
    };
  } else if (width < 1920) {
    // Laptop/Desktop
    return {
      cameraZ: 20,
      planeScale: { width: 1, height: 1 },
      bendMultiplier: 1,
      segments: { width: 100, height: 50 },
      scrollSpeed: 2,
      animationIntensity: 1,
      fontSize: 26,
      minVisibleCards: 3
    };
  } else {
    // Ultrawide
    return {
      cameraZ: 18,
      planeScale: { width: 0.95, height: 0.95 },
      bendMultiplier: 1.2,
      segments: { width: 100, height: 50 },
      scrollSpeed: 2.2,
      animationIntensity: 1,
      fontSize: 30,
      minVisibleCards: 4
    };
  }
}

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: number;
  return function (this: any, ...args: Parameters<T>) {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance: any): void {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach(key => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function getFontSize(font: string): number {
  const match = font.match(/(\d+)px/);
  return match ? parseInt(match[1], 10) : 30;
}

function getResponsiveFontSize(baseFont: string, screenWidth: number): string {
  const baseFontSize = getFontSize(baseFont);
  const config = getResponsiveConfig(screenWidth);
  const scaledSize = Math.round(baseFontSize * (config.fontSize / 26));
  return baseFont.replace(/\d+px/, `${scaledSize}px`);
}

function createTextTexture(
  gl: GL,
  text: string,
  font: string = 'bold 30px monospace',
  color: string = 'black'
): { texture: Texture; width: number; height: number } {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Could not get 2d context');

  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const fontSize = getFontSize(font);
  const textHeight = Math.ceil(fontSize * 1.2);

  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;

  context.font = font;
  context.fillStyle = color;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;

  return { texture, width: canvas.width, height: canvas.height };
}

interface TitleProps {
  gl: GL;
  plane: Mesh;
  renderer: Renderer;
  text: string;
  textColor?: string;
  font?: string;
}

class Title {
  gl: GL;
  plane: Mesh;
  renderer: Renderer;
  text: string;
  textColor: string;
  font: string;
  mesh!: Mesh;

  constructor({ gl, plane, renderer, text, textColor = '#545050', font = '30px sans-serif' }: TitleProps) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }

  createMesh() {
    const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true
    });

    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height;
    const textHeightScaled = this.plane.scale.y * 0.15;
    const textWidthScaled = textHeightScaled * aspect;
    this.mesh.scale.set(textWidthScaled, textHeightScaled, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeightScaled * 0.5 - 0.05;
    this.mesh.setParent(this.plane);
  }
}

interface ScreenSize {
  width: number;
  height: number;
}

interface Viewport {
  width: number;
  height: number;
}

interface MediaProps {
  geometry: Plane;
  gl: GL;
  image: string;
  index: number;
  length: number;
  renderer: Renderer;
  scene: Transform;
  screen: ScreenSize;
  text: string;
  viewport: Viewport;
  bend: number;
  textColor: string;
  borderRadius?: number;
  font?: string;
}

class Media {
  extra: number = 0;
  geometry: Plane;
  gl: GL;
  image: string;
  index: number;
  length: number;
  renderer: Renderer;
  scene: Transform;
  screen: ScreenSize;
  text: string;
  viewport: Viewport;
  bend: number;
  textColor: string;
  borderRadius: number;
  font?: string;
  program!: Program;
  plane!: Mesh;
  title!: Title;
  scale!: number;
  padding!: number;
  width!: number;
  widthTotal!: number;
  x!: number;
  speed: number = 0;
  isBefore: boolean = false;
  isAfter: boolean = false;
  responsiveConfig: ReturnType<typeof getResponsiveConfig>;
  reducedMotion: boolean;

  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font
  }: MediaProps) {
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.responsiveConfig = getResponsiveConfig(screen.width);
    this.reducedMotion = prefersReducedMotion();

    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: true });

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    });

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    const responsiveFont = this.font ? getResponsiveFontSize(this.font, this.screen.width) : undefined;
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      text: this.text,
      textColor: this.textColor,
      font: responsiveFont
    });
  }

  update(scroll: { current: number; last: number }, direction: 'right' | 'left') {
    this.plane.position.x = this.x - scroll.current - this.extra;
    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    // Apply responsive bend multiplier
    const effectiveBend = this.bend * this.responsiveConfig.bendMultiplier;

    if (effectiveBend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(effectiveBend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);

      if (effectiveBend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;

    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;

    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }

    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }

  onResize({ screen, viewport }: { screen?: ScreenSize; viewport?: Viewport } = {}) {
    if (screen) {
      this.screen = screen;
      this.responsiveConfig = getResponsiveConfig(screen.width);
    }
    if (viewport) {
      this.viewport = viewport;
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
      }
    }

    // Responsive scaling based on screen size
    const baseScale = this.screen.height / 1500;
    const { planeScale } = this.responsiveConfig;

    this.scale = baseScale;
    this.plane.scale.y = (this.viewport.height * (900 * this.scale * planeScale.height)) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (700 * this.scale * planeScale.width)) / this.screen.width;
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];

    // Adjust padding based on screen size
    this.padding = this.screen.width < 640 ? 1 : 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;


  }
}

interface AppConfig {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

class App {
  container: HTMLElement;
  scrollSpeed: number;
  scroll: {
    ease: number;
    current: number;
    target: number;
    last: number;
    position?: number;
  };
  onCheckDebounce: (...args: any[]) => void;
  renderer!: Renderer;
  gl!: GL;
  camera!: Camera;
  scene!: Transform;
  planeGeometry!: Plane;
  medias: Media[] = [];
  mediasImages: { image: string; text: string }[] = [];
  screen!: { width: number; height: number };
  viewport!: { width: number; height: number };
  raf: number = 0;
  boundOnResize!: () => void;
  boundOnWheel!: (e: Event) => void;
  boundOnTouchDown!: (e: MouseEvent | TouchEvent) => void;
  boundOnTouchMove!: (e: MouseEvent | TouchEvent) => void;
  boundOnTouchUp!: () => void;
  isDown: boolean = false;
  start: number = 0;
  startY: number = 0;
  touchDirection: 'horizontal' | 'vertical' | null = null;
  resizeObserver?: ResizeObserver;
  responsiveConfig: ReturnType<typeof getResponsiveConfig>;
  reducedMotion: boolean;
  autoRotate: boolean = true;
  autoRotateSpeed: number = 0.15;
  isInteracting: boolean = false;
  lastInteractionTime: number = 0;
  idleDelay: number = 2000;

  constructor(
    container: HTMLElement,
    {
      items,
      bend = 1,
      textColor = '#ffffff',
      borderRadius = 0,
      font = 'bold 30px Figtree',
      scrollSpeed = 2,
      scrollEase = 0.05
    }: AppConfig
  ) {
    document.documentElement.classList.remove('no-js');
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
    this.responsiveConfig = getResponsiveConfig(window.innerWidth);
    this.reducedMotion = prefersReducedMotion();

    // Adjust auto-rotate speed based on reduced motion preference
    if (this.reducedMotion) {
      this.autoRotateSpeed = 0.05; // Much slower for reduced motion
    }

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
    this.setupResizeObserver();
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.renderer.gl.canvas as HTMLCanvasElement);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = this.responsiveConfig.cameraZ;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    const { segments } = this.responsiveConfig;
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: segments.height,
      widthSegments: segments.width
    });
  }

  createMedias(
    items: { image: string; text: string }[] | undefined,
    bend: number = 1,
    textColor: string,
    borderRadius: number,
    font: string
  ) {
    const defaultItems = [
      { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'Bridge' },
      { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'Desk Setup' },
      { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Waterfall' },
      { image: `https://picsum.photos/seed/4/800/600?grayscale`, text: 'Strawberries' },
      { image: `https://picsum.photos/seed/5/800/600?grayscale`, text: 'Deep Diving' },
      { image: `https://picsum.photos/seed/16/800/600?grayscale`, text: 'Train Track' },
      { image: `https://picsum.photos/seed/17/800/600?grayscale`, text: 'Santorini' },
      { image: `https://picsum.photos/seed/8/800/600?grayscale`, text: 'Blurry Lights' },
      { image: `https://picsum.photos/seed/9/800/600?grayscale`, text: 'New York' },
      { image: `https://picsum.photos/seed/10/800/600?grayscale`, text: 'Good Boy' },
      { image: `https://picsum.photos/seed/21/800/600?grayscale`, text: 'Coastline' },
      { image: `https://picsum.photos/seed/12/800/600?grayscale`, text: 'Palm Trees' }
    ];

    const galleryItems = items && items.length ? items : defaultItems;
    this.mediasImages = galleryItems.concat(galleryItems);

    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font
      });
    });
  }

  onTouchDown(e: MouseEvent | TouchEvent) {
    this.isDown = true;
    this.isInteracting = true;
    this.touchDirection = null;
    this.lastInteractionTime = Date.now();
    this.scroll.position = this.scroll.current;
    this.start = 'touches' in e ? e.touches[0].clientX : e.clientX;
    this.startY = 'touches' in e ? e.touches[0].clientY : e.clientY;
  }

  onTouchMove(e: MouseEvent | TouchEvent) {
    if (!this.isDown) return;

    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const y = 'touches' in e ? e.touches[0].clientY : e.clientY;

    // Determine swipe direction on first significant movement
    if (this.touchDirection === null && 'touches' in e) {
      const deltaX = Math.abs(x - this.start);
      const deltaY = Math.abs(y - this.startY);
      const threshold = 5;
      if (deltaX > threshold || deltaY > threshold) {
        this.touchDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
      }
    }

    // If vertical swipe, allow normal page scrolling
    if (this.touchDirection === 'vertical') {
      return;
    }

    // Only prevent default for horizontal swipes within the gallery
    if ('touches' in e && this.touchDirection === 'horizontal') {
      e.preventDefault();
    }

    const touchMultiplier = this.responsiveConfig.scrollSpeed / 2;
    const distance = (this.start - x) * (touchMultiplier * 0.025);
    this.scroll.target = (this.scroll.position ?? 0) + distance;
  }

  onTouchUp() {
    this.isDown = false;
    this.touchDirection = null;
    this.lastInteractionTime = Date.now();
    this.onCheck();
  }

  onWheel(e: Event) {
    const wheelEvent = e as WheelEvent;
    const delta = wheelEvent.deltaY || (wheelEvent as any).wheelDelta || (wheelEvent as any).detail;
    const wheelMultiplier = this.responsiveConfig.scrollSpeed;
    this.scroll.target += (delta > 0 ? wheelMultiplier : -wheelMultiplier) * 0.2;
    this.isInteracting = true;
    this.lastInteractionTime = Date.now();
    this.onCheckDebounce();
  }

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };

    // Update responsive config
    this.responsiveConfig = getResponsiveConfig(this.screen.width);
    this.camera.position.z = this.responsiveConfig.cameraZ;

    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({ aspect: this.screen.width / this.screen.height });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.viewport = { width, height };

    if (this.medias) {
      this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  }

  onMouseEnter() {
    this.isInteracting = true;
    this.lastInteractionTime = Date.now();
  }

  onMouseLeave() {
    this.lastInteractionTime = Date.now();
  }

  update() {
    // Check if we should resume auto-rotation
    const timeSinceInteraction = Date.now() - this.lastInteractionTime;
    const shouldAutoRotate = !this.isDown && timeSinceInteraction > this.idleDelay;

    // Apply auto-rotation when idle
    if (this.autoRotate && shouldAutoRotate && !this.reducedMotion) {
      this.scroll.target += this.autoRotateSpeed;
    } else if (this.autoRotate && shouldAutoRotate && this.reducedMotion) {
      // Very slow rotation for reduced motion users
      this.scroll.target += this.autoRotateSpeed;
    }

    // Reset interaction flag after idle period
    if (shouldAutoRotate) {
      this.isInteracting = false;
    }

    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';

    if (this.medias) {
      this.medias.forEach(media => media.update(this.scroll, direction));
    }

    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }

  setupResizeObserver() {
    if (typeof ResizeObserver === 'undefined') return;

    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === this.container) {
          this.onResize();
        }
      }
    });

    this.resizeObserver.observe(this.container);
  }

  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);
    const boundOnMouseEnter = this.onMouseEnter.bind(this);
    const boundOnMouseLeave = this.onMouseLeave.bind(this);

    window.addEventListener('resize', this.boundOnResize);
    window.addEventListener('mousewheel', this.boundOnWheel, { passive: true });
    window.addEventListener('wheel', this.boundOnWheel, { passive: true });
    window.addEventListener('mousedown', this.boundOnTouchDown);
    window.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);

    // Scope touch events to container only so they don't block page scrolling
    this.container.addEventListener('touchstart', this.boundOnTouchDown, { passive: true });
    this.container.addEventListener('touchmove', this.boundOnTouchMove, { passive: false });
    this.container.addEventListener('touchend', this.boundOnTouchUp, { passive: true });

    // Add hover detection for auto-rotation pause
    this.container.addEventListener('mouseenter', boundOnMouseEnter);
    this.container.addEventListener('mouseleave', boundOnMouseLeave);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('mousewheel', this.boundOnWheel);
    window.removeEventListener('wheel', this.boundOnWheel);
    window.removeEventListener('mousedown', this.boundOnTouchDown);
    window.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    // Remove container-scoped touch listeners
    if (this.container) {
      this.container.removeEventListener('touchstart', this.boundOnTouchDown);
      this.container.removeEventListener('touchmove', this.boundOnTouchMove);
      this.container.removeEventListener('touchend', this.boundOnTouchUp);
    }

    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas as HTMLCanvasElement);
    }
  }
}

interface CircularGalleryProps {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px Figtree',
  scrollSpeed = 2,
  scrollEase = 0.05
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isClient) return;

    const app = new App(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
      scrollSpeed,
      scrollEase
    });

    return () => {
      app.destroy();
    };
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, isClient]);

  return (
    <div
      className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
      ref={containerRef}
      style={{
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-y'
      }}
    />
  );
}
