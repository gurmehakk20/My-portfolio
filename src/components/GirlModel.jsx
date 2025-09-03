import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const GirlModel = (props) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/girl.glb'); // path to your .glb
  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    // Play the first animation if it exists
    if (animations.length > 0) {
      const firstAnim = Object.keys(actions)[0];
      actions[firstAnim]?.play();
    }
  }, [actions, animations]);

  return <primitive ref={group} object={scene} rotation={[0, Math.PI / 2, 0]} {...props} />;

};

export default GirlModel;
