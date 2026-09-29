import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { CanvasTexture, SRGBColorSpace } from 'three';

import { HERO_GLTF_PATH } from '../constants/heroModel.js';
import { drawCodeScreen, getCodeFrame, SCREEN_HEIGHT, SCREEN_WIDTH } from './codeScreen.js';

const SCREEN_FPS = 20;

/**
 * Hero developer workstation (`public/models/desktop-computer-hero.glb`) whose monitor types out live code.
 * Model: "Computer" by Poly by Google, CC BY 3.0, via Poly Pizza (https://poly.pizza/m/2EHvZLax4Y3) —
 * modified: screen split into its own mesh, emissive accents, rescaled to ~2 units wide.
 *
 * `still` freezes the screen on the finished snippet; `onReady` fires once the model has actually rendered.
 */
const DevStation = ({ still = false, onReady, ...props }) => {
  const { scene } = useGLTF(HERO_GLTF_PATH);
  const model = useMemo(() => scene.clone(true), [scene]);

  const screen = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    const texture = new CanvasTexture(canvas);
    texture.flipY = false; // glTF UVs have their origin top-left
    texture.colorSpace = SRGBColorSpace;
    texture.anisotropy = 4;
    const ctx = canvas.getContext('2d');
    drawCodeScreen(ctx, getCodeFrame(0, true));
    return { ctx, texture };
  }, []);

  // Swap the baked screen image for the live canvas (same emissive-map shader, so no recompile).
  useEffect(() => {
    const mesh = model.getObjectByName('Screen');
    if (!mesh) return undefined;
    const original = mesh.material;
    const material = original.clone(); // keep the cached GLTF material untouched
    material.emissiveMap = screen.texture;
    material.emissive.set('#ffffff');
    material.toneMapped = false; // keep syntax colours crisp
    mesh.material = material;
    return () => {
      mesh.material = original;
      material.dispose();
    };
  }, [model, screen]);

  useEffect(() => () => screen.texture.dispose(), [screen]);

  const frames = useRef(0);
  const tick = useRef({ elapsed: 0, key: '' });

  useFrame((state, delta) => {
    // Frame 1: Bounds starts its fit; frame 2: camera snaps into place; frame 3 is the first fitted render.
    if (frames.current < 3 && ++frames.current === 3) onReady?.();

    const t = tick.current;
    t.elapsed += delta;
    if (t.elapsed < 1 / SCREEN_FPS) return;
    t.elapsed = 0;

    const frame = getCodeFrame(state.clock.elapsedTime, still);
    if (frame.key === t.key) return;
    t.key = frame.key;
    drawCodeScreen(screen.ctx, frame);
    screen.texture.needsUpdate = true;
  });

  return (
    <group {...props}>
      <primitive object={model} />
    </group>
  );
};

useGLTF.preload(HERO_GLTF_PATH);

export default DevStation;
