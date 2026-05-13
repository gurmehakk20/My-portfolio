import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, Center, Environment, OrbitControls } from '@react-three/drei';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import DeskModel from '../components/DeskModel.jsx';
import DownloadResume from '../components/DownloadResume.jsx';
import {
  HERO_BOUNDS_MARGIN,
  HERO_CAMERA,
  HERO_MODEL_YAW,
  HERO_ORBIT,
} from '../constants/heroModel.js';

const Hero = () => {
  return (
    <section
      className="min-h-[85vh] md:min-h-screen w-full flex flex-col md:flex-row relative bg-gradient-to-b from-[#0a0a0a] to-[#111111] pt-24 sm:pt-0"
      id="home"
    >
      {/* Left — copy */}
      <div className="flex-1 flex flex-col justify-center items-start z-10 px-6 sm:px-8 md:px-20 space-y-4 md:space-y-6">
        <p className="sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 font-generalsans leading-snug">
          Hi, I am Gurmehak <span className="waving-hand">👋</span>
        </p>

        <p className="md:text-3xl text-2xl font-semibold text-gray-200 hero_tag leading-tight">
          Where Code Meets Creativity
        </p>

        <p className="md:text-xl text-lg text-gray-400 max-w-lg leading-relaxed">
          I build interactive websites and solve challenging problems with clean, efficient code. My goal is to turn
          ideas into functional, user-friendly digital experiences.
        </p>

        <div className="mt-8 w-full sm:w-auto flex flex-col sm:flex-row gap-4">
          <Button
            href="#about"
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-56 bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 border border-white/10 hover:from-cyan-500/40 hover:to-fuchsia-500/40"
          />
          <DownloadResume buttonClass="sm:w-fit w-full sm:min-w-44 bg-black-300 hover:bg-black-500 border border-white/10" />
        </div>
      </div>

      {/* Right — 3D desk (`public/models/Desk.glb`); explicit height so Canvas is never 0px tall */}
      <div className="flex-1 relative w-full min-h-[380px] h-[min(58vh,600px)] md:h-[min(88vh,860px)] md:min-h-[520px] z-0 md:max-w-[58%] lg:max-w-[56%]">
        <Canvas
          className="h-full w-full block touch-none"
          shadows
          dpr={[1, 2]}
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
          <directionalLight position={[6, 8, 4]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
          <directionalLight position={[-5, 4, -3]} intensity={0.45} color="#ffd4c8" />
          <spotLight
            position={[0, 8, 2]}
            angle={Math.PI / 5}
            penumbra={0.6}
            intensity={0.55}
            castShadow
          />

          <Suspense fallback={<CanvasLoader />}>
            <Bounds fit clip observe margin={HERO_BOUNDS_MARGIN}>
              {/* `bottom` biases vertical alignment so tabletop assets read “on the ground” */}
              <Center bottom>
                <DeskModel rotation={[0, HERO_MODEL_YAW, 0]} />
              </Center>
            </Bounds>
            <Environment preset="city" />
          </Suspense>

          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom
            minDistance={HERO_ORBIT.minDistance}
            maxDistance={HERO_ORBIT.maxDistance}
            minPolarAngle={HERO_ORBIT.minPolarAngle}
            maxPolarAngle={HERO_ORBIT.maxPolarAngle}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
