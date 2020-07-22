import React, { useRef, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'
import SampleAnimation from './sampleAnimation'
import SampleCard from './sampleCard2'
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
        <SampleCard  />
        <Controls />
        <gridHelper args={[10, 10]} />
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