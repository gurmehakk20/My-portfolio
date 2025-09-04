import { useState, useRef } from "react";
import Globe from "react-globe.gl";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";

import Button from "../components/Button.jsx";
import Socials from "../components/Socials.jsx";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAdobephotoshop,
  SiGithub,
  SiGit,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

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

  const icons = [
    { icon: <SiReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <SiMysql className="text-blue-500" />, name: "MySQL / SQL" },
    { icon: <SiAdobephotoshop className="text-blue-400" />, name: "Photoshop" },
    { icon: <SiGithub className="text-white" />, name: "GitHub" },
    { icon: <SiGit className="text-orange-500" />, name: "Git" },
    { icon: <SiFigma className="text-pink-400" />, name: "Figma" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiHtml5 className="text-orange-600" />, name: "HTML" },
    { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "TailwindCSS" },
    { icon: <SiCplusplus className="text-blue-400" />, name: "C++" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("gurmehak.codes@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  // 🔥 Scattered Icons
  const ScatteredIcons = () => {
    const positions = useRef(
      icons.map(() => [
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 7,
      ])
    );

    return (
      <group>
        {icons.map((item, i) => (
          <Html
            key={i}
            position={positions.current[i]}
            center
            className="group"
            style={{
              fontSize: "44px",
              transition: "transform 0.3s, filter 0.3s",
            }}
          >
            {item.icon}
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition">
              {item.name}
            </span>
          </Html>
        ))}

        {/* Laptop in center */}
        <Html
          position={[0, 0, 0]}
          center
          style={{
            fontSize: "64px",
            color: "white",
            filter: "drop-shadow(0 0 15px rgba(255,255,255,0.9))",
          }}
        >
          <FaLaptopCode />
        </Html>
      </group>
    );
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
            src="/assets/gurmehak-cartoon.png"
            alt="profile"
            className="rounded-xl aspect-[4/3] h-500 h-full object-cover object-[50%_25%]"
          />
          <div className="space-y-2">
            <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hi, I’m Gurmehak Kaur
            </p>
            <p className="text-sm">
              A passionate Frontend and Backend Developer based in India,
              specializing in creating scalable and user-friendly experiences.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className="col-span-1 xl:row-span-3 hover-border-glow p-6 flex flex-col items-center justify-center"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <div className="w-full h-[350px] rounded-2xl ">
            <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} />
              <Stars radius={50} depth={20} count={3000} factor={4} fade />
              <ScatteredIcons />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
          </div>
          <div className="mt-6 text-center space-y-2">
            <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Tech Stack
            </p>
            <p className="text-sm">
              My expertise includes MERN stack and UI design, with a passion for learning new technologies.
            </p>
          </div>
        </div>

        {/* Globe */}
        <div
          className="col-span-1 xl:row-span-4 hover-border-glow px-6 flex flex-col items-center justify-center"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <Globe
            height={340}
            width={340}
            backgroundColor="rgba(0, 0, 0, 0)"
            // backgroundImageOpacity={0.5}
            showGraticules={true}
            // showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelsData={[
              { lat: 40, lng: -100, text: "Chandigarh, India", color: "white", size: 15 },
            ]}
          />
          <div className="mt-4 text-center space-y-2">
            <p className="text-lg font-semibold text-white">
              I’m very flexible with time zone communications & locations
            </p>
            <p className="text-sm">
              I&apos;m based in Chandigarh, India and open to remote work worldwide.
            </p>
            <Button name="Contact Me" isBeam containerClass="w-[80%] mt-10" />
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
    style={{ backgroundImage: "url('/assets/dev.png')" }}
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

    {/* Subtle Button */}
    <button className="mt-5 px-5 py-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 rounded-xl text-sm hover:bg-cyan-500/30 transition">
      Explore More
    </button>
  </div>
</div>




        {/* Contact */}
        <div
  className="xl:col-span-1 xl:row-span-2 hover-border-glow p-6 flex flex-col items-center bg-neutral-900 rounded-xl"
  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
>
  <img
    src="/assets/grid4.png"
    alt="contact-banner"
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
        src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
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
