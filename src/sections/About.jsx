import { lazy, Suspense, useState } from "react";

import Button from "../components/Button.jsx";
import SceneBoundary from "../components/SceneBoundary.jsx";
import SceneFallback from "../components/SceneFallback.jsx";
import Socials from "../components/Socials.jsx";
import useNearViewport from "../hooks/useNearViewport.js";

// Heavy WebGL widgets are split out and only mounted when scrolled near.
const TechStackScene = lazy(() => import("../components/TechStackScene.jsx"));
const GlobeView = lazy(() => import("../components/GlobeView.jsx"));

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  // '0px': these are the heaviest widgets (react-globe.gl alone is ~170KB gz); About always starts below a
  // full-height hero, so they load as the visitor scrolls in rather than competing with the first paint.
  const techStack = useNearViewport('0px');
  const globe = useNearViewport('0px');

  const handleMouseMove = (e, target) => {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);

    const dx = x - rect.width / 2;
    const dy = y - rect.height / 2;
    target.style.setProperty("--dx", `${dx * 0.1}px`);
    target.style.setProperty("--dy", `${dy * 0.1}px`);
  };

  const handleMouseLeave = (target) => {
    target.style.setProperty("--dx", "0px");
    target.style.setProperty("--dy", "0px");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("gurmehak.codes@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full">
        {/* Intro */}
        <div
          className="col-span-1 xl:row-span-3 hover-border-glow p-6 flex flex-col gap-4"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <img
            src="/assets/bgs/gurmehak-cartoon.webp"
            alt="Illustration of Gurmehak coding on a laptop"
            width="800"
            height="1200"
            loading="lazy"
            decoding="async"
            className="rounded-xl aspect-[4/3] h-500 h-full object-cover object-[50%_25%]"
          />
          <div className="space-y-2">
            <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hi, I’m Gurmehak Kaur
            </p>
            <p className="text-sm">
              A full-stack software engineer based in Bengaluru, India, building
              scalable, user-friendly products with Go, React, Next.js and Node.js.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className="col-span-1 xl:row-span-3 hover-border-glow p-6 flex flex-col items-center justify-center"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <div ref={techStack.ref} className="w-full h-[350px] rounded-2xl ">
            {techStack.hasEntered ? (
              <SceneBoundary fallback={<SceneFallback failed />}>
                <Suspense fallback={<SceneFallback label="Loading tech stack" />}>
                  <TechStackScene active={techStack.isVisible} />
                </Suspense>
              </SceneBoundary>
            ) : (
              <SceneFallback label="Loading tech stack" />
            )}
          </div>
          <div className="mt-6 text-center space-y-2">
            <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Tech Stack
            </p>
            <p className="text-sm">
              Go, TypeScript and the React / Next.js + Node.js stack, backed by PostgreSQL, MongoDB and Redis —
              with a passion for learning new technologies.
            </p>
          </div>
        </div>

        {/* Globe */}
        <div
          className="col-span-1 xl:row-span-4 hover-border-glow px-7 py-3 flex flex-col items-center justify-center"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <div ref={globe.ref} className="h-[300px] w-[300px]">
            {globe.hasEntered ? (
              <SceneBoundary fallback={<SceneFallback failed />}>
                <Suspense fallback={<SceneFallback label="Loading globe" />}>
                  <GlobeView active={globe.isVisible} />
                </Suspense>
              </SceneBoundary>
            ) : (
              <SceneFallback label="Loading globe" />
            )}
          </div>
          <div className="mt-4 text-center relative z-10">
            <p className="text-lg font-semibold text-white">
              I’m very flexible with time zone communications & locations
            </p>
            <p className="text-sm">
              I&apos;m based in Bengaluru, India and open to remote work worldwide.
            </p>
            <Button href="#contact" name="Contact Me" isBeam containerClass="w-full mt-10" />
          </div>
        </div>

        {/* Passion */}
        <div
  className="hover-border-glow relative xl:col-span-2 xl:row-span-3 group rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,150,255,0.4)] transition-all duration-500"
  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
>
  {/* Top Banner Image */}
  <div
    className="h-60 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
    style={{ backgroundImage: "url('/assets/bgs/dev.webp')" }}
  ></div>

  {/* Gradient Overlay on Image */}
  {/* <div className="absolute top-0 left-0 right-0 h-60 bg-black/40"></div> */}

  {/* Content Section (below image) */}
  <div className="relative bg-black/70 text-white z-10 p-6">
    <h2 className="text-2xl font-bold">
      My Passion for Coding
    </h2>
    <div className="w-16 h-[2px] bg-cyan-400 mt-2 rounded-full"></div>
    <p className="mt-3 text-sm text-gray-200 leading-relaxed">
      I love solving problems and building things through code.
      Programming isn&apos;t just my profession — it&apos;s my passion.
      I enjoy exploring new technologies and enhancing my skills.
    </p>

    <a
      href="#projects"
      className="mt-5 inline-block px-5 py-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 rounded-xl text-sm hover:bg-cyan-500/30 transition"
    >
      Explore More
    </a>
  </div>
</div>




        {/* Contact */}
        <div
  className="xl:col-span-1 xl:row-span-2 hover-border-glow p-6 flex flex-col items-center bg-neutral-900 rounded-xl"
  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
>
  <img
    src="/assets/bgs/grid4.webp"
    alt=""
    width="720"
    height="544"
    loading="lazy"
    decoding="async"
    className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top rounded-lg"
  />
  <div className="mt-4 text-center space-y-2">
    <p className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
      Contact Me
    </p>

    {/* Copy email */}
    <div
      className="copy-container cursor-pointer group flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
      onClick={handleCopy}
    >
      <img
        src={hasCopied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
        alt="copy"
        className="w-4 h-4"
      />
      <p className="text-base font-medium text-gray-200 group-hover:text-white">
        gurmehak.codes@gmail.com
      </p>
      {hasCopied && (
        <span className="ml-2 text-sm text-green-400">Copied!</span>
      )}
    </div>

    {/* Social links */}
    <div className="flex justify-center w-full pt-4">
      <Socials />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
