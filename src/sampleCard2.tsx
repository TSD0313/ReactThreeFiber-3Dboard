import React, { useRef, useState} from 'react'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three'

const SampleCard = () => {
  const [reverse, setReverse] = useState(0);
  const ref = useRef(null)

  const { positionY, rotationY } = useSpring({
    from: { positionY: 0.01, rotationY: Math.PI - (reverse * Math.PI) },
    to: async next => {
      await next({positionY:0.01})
      await next({positionY:0.5})
      await next({rotationY:reverse * Math.PI})
      await next({positionY:0.01})
    }
  });

  const textureFront = new THREE.TextureLoader().load('Airman.jpg');
  const textureBack = new THREE.TextureLoader().load('cardback.jpg');

  console.log(reverse);

  return (
    <animated.group 
      ref={ref}
      position-y={positionY}
      rotation-y={rotationY}
      rotation-x={-Math.PI/2}
      onPointerDown={e => {e.stopPropagation()}}
      onPointerUp={e => {e.stopPropagation()}}
      onClick={(e) => {setReverse(Math.abs(reverse-1));console.log(reverse);}}
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