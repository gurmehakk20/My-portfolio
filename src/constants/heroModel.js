/**
 * Hero 3D asset — file lives at `public/models/desktop-computer-hero.glb` (URL is case-sensitive on Linux hosts).
 * Model: "Computer" by Poly by Google, CC BY 3.0, via Poly Pizza (https://poly.pizza/m/2EHvZLax4Y3), modified.
 * Tune these values if you swap the GLB or change how tightly it should fill the frame.
 */
export const HERO_GLTF_PATH = '/models/desktop-computer-hero.glb';

/**
 * Pre-rendered stills of the hero scene (desktop + mobile framing), shown instantly while the live WebGL
 * scene loads. Regenerate them if you change the model, camera, yaw or lighting.
 */
export const HERO_POSTER = {
  desktop: '/assets/hero/dev-station-desktop.webp',
  mobile: '/assets/hero/dev-station-mobile.webp',
  width: 840,
  height: 1188,
};

/** Bounds `margin` — higher = camera sits farther (good for wide / tabletop assets). */
export const HERO_BOUNDS_MARGIN = 1.2;

/**
 * Yaw around vertical Y (radians). Positive = anticlockwise when viewed from above.
 * -30° shows the screen at three-quarters with the tower's front visible.
 */
export const HERO_MODEL_YAW = -Math.PI / 6;

export const HERO_CAMERA = {
  fov: 40,
  near: 0.1,
  far: 260,
  /** Initial eye position [x, y, z] — ~14° above the horizon so the keyboard and screen both read. */
  position: [0, 1.9, 7.5],
};

/** Orbit limits after Bounds fits the workstation into view. */
export const HERO_ORBIT = {
  minDistance: 2,
  maxDistance: 12,
  minPolarAngle: 0.22,
  maxPolarAngle: Math.PI / 2,
};
