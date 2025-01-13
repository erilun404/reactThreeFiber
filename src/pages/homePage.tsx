import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';
import { RotatingCube } from "../components/rotatingcube";

const HomePage = () => {
    return (
      <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <OrbitControls enableZoom enablePan enableRotate /> //orbit controls for camera
  
        <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6}/> //lighting
  
        <color attach="background" args={['#F0F0F0']}/> //background color
        <RotatingCube/>
        
      </Canvas>
    )
}
export default HomePage;