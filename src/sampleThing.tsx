import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const SampleBox = () => {
  const ref = useRef({} as THREE.Group);
  useFrame(() => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
        ref.current.rotation.z += 0.01;  
    });

  return (
    <group ref={ref} position={new THREE.Vector3(0, 3, 0)}>
        <mesh >
            <torusGeometry attach='geometry' args={[2, 0.5, 8, 16]} />
            <meshBasicMaterial attach='material' color='hotpink' wireframe/>
        </mesh>
        <mesh >
            <torusGeometry attach='geometry' args={[2, 0.5, 8, 16]} />
            <meshToonMaterial attach='material' color='royalblue' opacity={0.5} transparent />
        </mesh>
    </group>
  )
};

export default SampleBox;