import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import CanvasLoader from './CanvasLoader.jsx';
import DemoComputer from './DemoComputer.jsx';

/** Projects-section monitor showing the selected project's video — lazy-loaded from `Projects.jsx`. */
const ProjectScene = ({ texture, active = true }) => (
  <Canvas frameloop={active ? 'always' : 'never'} dpr={[1, 1.5]} style={{ width: '100%', height: '100%' }}>
    <ambientLight intensity={Math.PI} />
    <directionalLight position={[10, 10, 5]} />
    <Center>
      <Suspense fallback={<CanvasLoader />}>
        <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
          <DemoComputer texture={texture} />
        </group>
      </Suspense>
    </Center>
    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
  </Canvas>
);

export default ProjectScene;
