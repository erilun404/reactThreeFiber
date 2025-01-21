import { Canvas } from '@react-three/fiber'
import { Box } from '../components/Box'
import React from 'react'
//import {Stats} from '@react-three/drei' // Stats is a component that shows performance statistics
import { Perf } from 'r3f-perf' // Perf is a component that shows performance statistics


export function TestPage() {
    return (
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Box position={[-0.75,0, 0]} name="Dont make it to big" />
        <Box position={[0.75,0, 0]} name="A thought" />
        {/* <Stats/> */}
        <Perf position="top-left" />
      </Canvas>
    )
  }