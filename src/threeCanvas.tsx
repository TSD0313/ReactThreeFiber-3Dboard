import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'
import SampleBox from './sampleThing'
import Controls from './Controls'
import Board from './board'

const CanvasApp = () => {
  return (
    <Container>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        {/* <spotLight
            intensity={0.6}
            position={[30, 30, 50]}
            angle={0.2}
            penumbra={1}
            castShadow
        /> */}
        <Board/>
        <SampleBox  />
        <Controls />
        <gridHelper args={[100, 100]} />
      </Canvas>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`
export default CanvasApp