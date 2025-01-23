import React from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { Physics, RigidBody, BallCollider } from "@react-three/rapier";
import { Environment } from "@react-three/drei";
import { useRef } from "react";


function Bauble({ position, scale }) {
  const api = useRef();

  return (
    <RigidBody
      ref={api}
      colliders={false}
      position={position}
      restitution={0.8} // Studseffekt
      friction={0.1} 
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#c0a0a0" emissive="red" />
      </mesh>
      <BallCollider args={[scale]} />
    </RigidBody>
  );
}

function Ground() {
  const texture = useLoader(THREE.TextureLoader, "/image/lawn.jpg");
  return (
    <RigidBody type="fixed" restitution={0.8} friction={0.2}>
      <mesh receiveShadow position={[0, -1, 0]}>
        <boxGeometry args={[60, 1, 60]} />
        {/* <meshStandardMaterial color="lightgreen" /> */}
        <meshStandardMaterial map={texture} />
      </mesh>
    </RigidBody>
  );
}

function SpecialBall() {
  return (
    <RigidBody
      colliders="ball"
      position={[0, 5, 0]} // Positionera bollen på en specifik plats
      restitution={0.1}
      friction={0.1} 
    >
      <mesh castShadow onPointerDown={(e) => console.log(e)}>
        <sphereGeometry args={[1, 16, 16]} name="Dont do to much" />
        <meshStandardMaterial color="blue" emissive="#0000ff" />
      </mesh>
    </RigidBody>
  );
}

export const Bubbles = () => {
  // Skapa en array med 100 bollar, varje boll får en slumpmässig position och storlek
  const balls = [...Array(100)].map(() => ({
    position: [
      Math.random() * 20 - 10, // Slumpmässigt mellan -10 och 10 på X
      Math.random() * 10 + 5, // Slumpmässigt mellan 5 och 15 på Y
      Math.random() * 20 - 10, // Slumpmässigt mellan -10 och 10 på Z
    ],
    scale: Math.random() * 0.5 + 0.5, // Slumpmässig skala mellan 0.5 och 1
  }));

  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        shadows
        camera={{ position: [0, 15, 30], fov: 60 }}
        style={{ background: "#202020" }}
      >
        {/* Ljus */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        {/* Environment */}
        <Environment preset="forest" background />

        {/* Physics */}
        <Physics gravity={[0, -5, 0]}>
          {/* Mappa ut alla bollar */}
          {balls.map((props, i) => (
            <Bauble key={i} {...props} />
          ))}
          <SpecialBall />
          <Ground />
        </Physics>
      </Canvas>
    </div>
  );
};

