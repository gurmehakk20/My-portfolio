import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, Center, Environment, Float, Lightformer, OrbitControls } from '@react-three/drei';

import DevStation from './DevStation.jsx';
import {
  HERO_BOUNDS_MARGIN,
  HERO_CAMERA,
  HERO_MODEL_YAW,
  HERO_ORBIT,
} from '../constants/heroModel.js';

/**
 * Hero WebGL scene — lazy-loaded from `Hero.jsx` so three.js stays out of the entry bundle.
 * `active` pauses the render loop while the hero is scrolled offscreen; `still` disables motion
 * (prefers-reduced-motion); `interactive` enables drag-to-orbit (off on touch screens so swipes scroll the page);
 * `onReady` fires once the workstation has rendered at its fitted framing.
 */
const HeroScene = ({ active = true, still = false, interactive = true, onReady }) => (
  <Canvas
    className={`h-full w-full block ${interactive ? 'touch-none' : ''}`}
    frameloop={active ? 'always' : 'never'}
    dpr={[1, 1.75]}
    gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    camera={{
      fov: HERO_CAMERA.fov,
      near: HERO_CAMERA.near,
      far: HERO_CAMERA.far,
      position: HERO_CAMERA.position,
    }}
  >
    <ambientLight intensity={0.55} />
    <hemisphereLight args={['#e0e8ff', '#080810', 0.6]} />
    <directionalLight position={[6, 8, 4]} intensity={1.1} />
    <directionalLight position={[-5, 4, -3]} intensity={0.45} color="#ffd4c8" />
    <directionalLight position={[-4, 2, -4]} intensity={1.2} color="#d946ef" />

    <Suspense fallback={null}>
      {/* near-zero maxDuration: snap to the fitted framing instead of animating, so it matches the poster */}
      <Bounds fit clip observe margin={HERO_BOUNDS_MARGIN} maxDuration={0.001}>
        {/* `bottom` biases vertical alignment so the workstation reads as sitting on a surface */}
        <Center bottom>
          <Float
            speed={still ? 0 : 1.4}
            rotationIntensity={still ? 0 : 0.15}
            floatIntensity={still ? 0 : 0.35}
            floatingRange={[-0.03, 0.03]}
          >
            <DevStation rotation={[0, HERO_MODEL_YAW, 0]} still={still} onReady={onReady} />
          </Float>
        </Center>
      </Bounds>

      {/* Local studio lighting — no HDR download; rim colours echo the page's cyan/fuchsia accents */}
      <Environment resolution={256} frames={1}>
        <Lightformer intensity={2} position={[0, 5, -9]} scale={[10, 5, 1]} />
        <Lightformer intensity={1.2} position={[0, 4, 6]} scale={[8, 3, 1]} />
        <Lightformer intensity={1.4} color="#c084fc" position={[-6, 1, 0]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
        <Lightformer intensity={1.4} color="#22d3ee" position={[6, 1, 0]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} />
        {/* front softbox lifts the dark plastic; fuchsia / cyan rims pick out the silhouette */}
        <Lightformer intensity={3} position={[0, 3, 8]} scale={[10, 4, 1]} />
        <Lightformer intensity={4} color="#d946ef" position={[-4, 2, -3]} scale={[5, 2, 1]} />
        <Lightformer intensity={3} color="#22d3ee" position={[4, 1, -2]} scale={[4, 2, 1]} />
      </Environment>
    </Suspense>

    {interactive && (
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        minDistance={HERO_ORBIT.minDistance}
        maxDistance={HERO_ORBIT.maxDistance}
        minPolarAngle={HERO_ORBIT.minPolarAngle}
        maxPolarAngle={HERO_ORBIT.maxPolarAngle}
      />
    )}
  </Canvas>
);

export default HeroScene;
