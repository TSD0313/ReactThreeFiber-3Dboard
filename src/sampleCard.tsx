import React, { useRef, useState} from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three'

const SampleCard = () => {
  const [active, setActive] = useState(0);

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 170, friction: 50, clamp: true  }
  })
  const positionY = spring.to([0,1],[0.01,2])
  const rotationY = spring.to([0,1],[0,Math.PI])

  const textureFront = new THREE.TextureLoader().load('Airman.jpg');
  const textureBack = new THREE.TextureLoader().load('cardback.jpg');

  return (
    <animated.group 
      position-y={positionY}
      rotation-y={rotationY}
      rotation={ [-Math.PI/2, 0, 0] }
      onPointerDown={e => {e.stopPropagation()}}
      onPointerUp={e => {e.stopPropagation()}}
      onClick={(e) => {setActive(Number(!active));console.log("click");}}
      >

      <mesh position={[0, 0, 0.01]}>
          <planeGeometry attach='geometry' args={[1.35, 1.8]} />
          <meshBasicMaterial attach='material' map={textureFront} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, -Math.PI, 0]}>
          <planeGeometry attach='geometry' args={[1.35, 1.8]} />
          <meshBasicMaterial attach='material' map={textureBack} />
      </mesh>

    </animated.group>
  )
};

export default SampleCard;