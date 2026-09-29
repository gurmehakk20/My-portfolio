import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, Stars } from '@react-three/drei';
import {
  SiGo,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiRabbitmq,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';

// Mirrors the Skills section of the resume.
const ICONS = [
  { Icon: SiGo, className: 'text-cyan-400', name: 'Go' },
  { Icon: SiTypescript, className: 'text-blue-500', name: 'TypeScript' },
  { Icon: SiJavascript, className: 'text-yellow-400', name: 'JavaScript' },
  { Icon: SiCplusplus, className: 'text-blue-400', name: 'C++' },
  { Icon: SiReact, className: 'text-cyan-400', name: 'React' },
  { Icon: SiNextdotjs, className: 'text-white', name: 'Next.js' },
  { Icon: SiTailwindcss, className: 'text-cyan-400', name: 'TailwindCSS' },
  { Icon: SiNodedotjs, className: 'text-green-500', name: 'Node.js' },
  { Icon: SiExpress, className: 'text-gray-300', name: 'Express' },
  { Icon: SiPostgresql, className: 'text-blue-400', name: 'PostgreSQL' },
  { Icon: SiMongodb, className: 'text-green-400', name: 'MongoDB' },
  { Icon: SiMysql, className: 'text-blue-500', name: 'MySQL' },
  { Icon: SiRedis, className: 'text-red-500', name: 'Redis' },
  { Icon: SiRabbitmq, className: 'text-orange-500', name: 'RabbitMQ' },
  { Icon: SiGit, className: 'text-orange-500', name: 'Git' },
  { Icon: SiGithub, className: 'text-white', name: 'GitHub' },
  { Icon: SiPostman, className: 'text-orange-400', name: 'Postman' },
];

// Scatter once per page load — positions stay put across re-renders and remounts.
const POSITIONS = ICONS.map(() => [
  (Math.random() - 0.5) * 7,
  (Math.random() - 0.5) * 4,
  (Math.random() - 0.5) * 7,
]);

const ScatteredIcons = () => (
  <group>
    {ICONS.map(({ Icon, className, name }, i) => (
      <Html
        key={name}
        position={POSITIONS[i]}
        center
        className="group"
        style={{ fontSize: '44px', transition: 'transform 0.3s, filter 0.3s' }}
      >
        <Icon className={className} aria-hidden="true" focusable="false" />
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition">
          {name}
        </span>
      </Html>
    ))}

    {/* Laptop in center */}
    <Html
      position={[0, 0, 0]}
      center
      style={{
        fontSize: '64px',
        color: 'white',
        filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.9))',
      }}
    >
      <FaLaptopCode aria-hidden="true" focusable="false" />
    </Html>
  </group>
);

const TechStackScene = ({ active = true }) => (
  <Canvas frameloop={active ? 'always' : 'never'} dpr={[1, 1.5]} camera={{ position: [0, 2, 8], fov: 50 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 5, 5]} intensity={1.2} />
    <Stars radius={50} depth={20} count={3000} factor={4} fade />
    <ScatteredIcons />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
  </Canvas>
);

export default TechStackScene;
