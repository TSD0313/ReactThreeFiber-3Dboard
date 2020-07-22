import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const SampleThing = () => {
  const ref = useRef({} as THREE.Group);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
        ref.current.rotation.z += 0.01;  
    });

  return (
    <group ref={ref} 
    position={new THREE.Vector3(0, 3, 0)}　
    scale={active ? [1.5,1.5,1.5] : [1,1,1]}
    onPointerDown={e => {e.stopPropagation()}}
    onPointerUp={e => {e.stopPropagation()}}
    onClick={(e) => {setActive(!active); console.log(active)}}
    onPointerOver={(e) => setHover(true)}
    onPointerOut={(e) => setHover(false)}>
        <mesh >
            <torusGeometry attach='geometry' args={[2, 0.5, 8, 16]} />
            <meshBasicMaterial attach='material' color='hotpink' wireframe/>
        </mesh>
        <mesh >
            <torusGeometry attach='geometry' args={[2, 0.5, 8, 16]} />
            <meshBasicMaterial attach='material' color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    </group>
  )
};

export default SampleThing;