import { lazy, Suspense, useCallback, useState } from 'react';

import Button from '../components/Button.jsx';
import DownloadResume from '../components/DownloadResume.jsx';
import SceneBoundary from '../components/SceneBoundary.jsx';
import { HERO_POSTER } from '../constants/heroModel.js';
import useDeferredMount from '../hooks/useDeferredMount.js';
import useMediaQuery from '../hooks/useMediaQuery.js';
import useNearViewport from '../hooks/useNearViewport.js';

// three.js / r3f / drei live in this lazy chunk, so the hero copy paints without waiting for them.
const HeroScene = lazy(() => import('../components/HeroScene.jsx'));

const Hero = () => {
  // A pre-rendered still shows instantly; the live scene mounts on first interaction (or shortly after load)
  // and crossfades in once the model has rendered at its fitted framing. If it fails, the still stays.
  const liveScene = useDeferredMount();
  const [sceneRendered, setSceneRendered] = useState(false);
  const handleSceneReady = useCallback(() => setSceneRendered(true), []);
  const handleSceneError = useCallback(() => setSceneRendered(false), []);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const touchScreen = useMediaQuery('(pointer: coarse)');
  const { ref: sceneRef, isVisible } = useNearViewport('0px');

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

        <h1 className="md:text-3xl text-2xl font-semibold text-gray-200 hero_tag leading-tight">
          Where Code Meets Creativity
        </h1>

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

      {/* Right — 3D workstation; explicit height so the Canvas is never 0px tall and nothing shifts when it mounts */}
      <div
        ref={sceneRef}
        className="flex-1 relative w-full overflow-hidden min-h-[380px] h-[min(58vh,600px)] md:h-[min(88vh,860px)] md:min-h-[520px] z-0 md:max-w-[58%] lg:max-w-[56%]"
      >
        {/* Sized like the live camera fit: contained on mobile (≈square box), full-width and vertically
            centred on desktop (tall box, where <Bounds> fits the model to the width) */}
        <picture>
          <source media="(max-width: 767px)" srcSet={HERO_POSTER.mobile} />
          <img
            src={HERO_POSTER.desktop}
            alt="Low-poly developer workstation with code on the monitor"
            width={HERO_POSTER.width}
            height={HERO_POSTER.height}
            fetchpriority="high"
            decoding="async"
            className={`pointer-events-none absolute inset-0 h-full w-full select-none object-contain md:inset-auto md:left-0 md:top-1/2 md:h-auto md:-translate-y-1/2 transition-opacity duration-700 ${
              sceneRendered ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </picture>

        {/* absolute: in the mobile column layout the container's height isn't "definite", so a plain
            height:100% canvas would collapse to the 150px canvas default */}
        {liveScene && (
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${sceneRendered ? 'opacity-100' : 'opacity-0'}`}
          >
            <SceneBoundary onError={handleSceneError}>
              <Suspense fallback={null}>
                <HeroScene
                  active={isVisible}
                  still={reducedMotion}
                  interactive={!touchScreen}
                  onReady={handleSceneReady}
                />
              </Suspense>
            </SceneBoundary>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
