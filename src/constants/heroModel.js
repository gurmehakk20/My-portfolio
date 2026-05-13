/**
 * Hero 3D asset — file lives at `public/models/desk.glb` (URL is case-sensitive on Linux hosts).
 * Tune these values if you swap the GLB or change how tightly it should fill the frame.
 */
export const HERO_GLTF_PATH = '/models/Desk.glb';

/** Bounds `margin` — higher = camera sits farther (good for wide / tabletop assets). */
export const HERO_BOUNDS_MARGIN = 1.32;

/**
 * Yaw around vertical Y (radians). Positive = anticlockwise when viewed from above.
 * Examples: `Math.PI / 4` = 45°, `Math.PI / 2` = 90°.
 */
export const HERO_MODEL_YAW = Math.PI / 4;

export const HERO_CAMERA = {
  fov: 40,
  near: 0.1,
  far: 260,
  /** Initial eye position [x, y, z] — slightly above horizon for desk reads. */
  position: [0, 0.28, 7.5],
};

/** Orbit limits after Bounds fits the desk into view. */
export const HERO_ORBIT = {
  minDistance: 2.5,
  maxDistance: 20,
  minPolarAngle: 0.22,
  maxPolarAngle: Math.PI / 2,
};
