import { useEffect, useMemo, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import { HERO_GLTF_PATH } from '../constants/heroModel.js';

/**
 * Loads the hero desk GLB from `public/models/`. Framing is handled in `Hero.jsx` (Bounds + Center).
 */
const DeskModel = (props) => {
  const group = useRef();
  const { scene, animations } = useGLTF(HERO_GLTF_PATH);
  const model = useMemo(() => scene.clone(true), [scene]);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || animations.length === 0) return;
    const firstKey = Object.keys(actions)[0];
    const action = actions[firstKey];
    action?.reset().fadeIn(0.4).play();
    return () => {
      action?.fadeOut(0.3);
    };
  }, [actions, animations]);

  return (
    <group ref={group} {...props}>
      <primitive object={model} />
    </group>
  );
};

useGLTF.preload(HERO_GLTF_PATH);

export default DeskModel;
