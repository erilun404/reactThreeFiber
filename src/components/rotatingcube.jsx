import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';

export const RotatingCube = () => {
    const meshRef = useRef() //reference to the mesh
    useFrame(() => { //useFrame hook to animate the cube
      if(meshRef.current) { //checking if the mesh is loaded
        meshRef.current.rotation.y += 0.01 //rotating the cube
        meshRef.current.rotation.x += 0.01
      }
    }) //useframe hook from react fiber
    return (
      <mesh ref={meshRef}> 
        <cylinderGeometry args={[1,1,1,32]} />
        <meshLambertMaterial color="#468585" emissive="#468585"/>
  
         <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange"/>
      </mesh>
    )
  }