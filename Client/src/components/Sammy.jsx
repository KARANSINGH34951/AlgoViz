import { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Sammy({ position, scale, animation = 'idle' }) {
  const group = useRef();
  const { scene, animations } = useGLTF('/assets/models/sammy.gltf');
  const { actions } = useAnimations(animations, group);

  // Play animation
  useFrame(() => {
    const action = actions[animation];
    if (action) {
      action.play();
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

export default Sammy;