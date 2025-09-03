import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import GirlModel from '../components/GirlModel.jsx'; // <-- Import your 3D model component

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
  <section className="min-h-screen w-full flex flex-col md:flex-row relative bg-gradient-to-b from-[#0a0a0a] to-[#111111]" id="home">
    {/* Left Section - Text */}
    <div className="flex-1 flex flex-col justify-center items-start z-10 px-8 md:px-20 space-y-4 md:space-y-6">

      {/* Headline */}
      <p className="sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 font-generalsans leading-snug">
        Hi, I am Gurmehak <span className="waving-hand">👋</span>
      </p>

      {/* Subheadline */}
      <p className="md:text-3xl text-2xl font-semibold text-gray-200 hero_tag leading-tight">
        Where Code Meets Creativity
      </p>

      {/* Paragraph / Description */}
      <p className="md:text-xl text-lg text-gray-400 max-w-lg leading-relaxed">
        I build interactive websites and solve challenging problems with clean, efficient code. My goal is to turn ideas into functional, user-friendly digital experiences.
      </p>

      {/* Button */}
      <a href="#about" className="mt-6">
        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
      </a>

    </div>


    {/* Right Section - 3D Model */}
    <div className="flex-1 flex justify-center items-center z-0 pointer-events-none">
      <Canvas style={{ height: '100%', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2}  color="#aaffff" castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.7} color="#ffccaa" />
        <spotLight position={[0, 10, 0]} angle={0} intensity={0.8} penumbra={1} castShadow />
        <Suspense fallback={<CanvasLoader />}>
          <GirlModel scale={1} position={[0, -2.5, 0]} rotation={[0, -Math.PI / 2, 0]} />
          <OrbitControls enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  </section>


  );
};

export default Hero;