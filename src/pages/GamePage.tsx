import React from "react";
import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, Center, DragControls, Environment } from "@react-three/drei";
import { Vector3, Color } from "three";
import { useGLTF } from "@react-three/drei";


function InteractiveModels(props) {
  const ref = useRef();
  const [selectedElement, setSelectedElement] = useState(false);
  const { scene } = useGLTF("/image/potion_flask_gltf/scene.gltf");

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setSelectedElement(true);
      }}
      onPointerUp={() => {
        setSelectedElement(false);
      }}
    >
      <primitive object={scene} />
    </mesh>
  );
}
export default function GamePage() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Environment preset="sunset" background backgroundBlurriness={0.5} />
        <DragControls>
          <InteractiveModels position={[-2, -2, 0]} scale={[1.5, 1.5, 1.5]} />
        </DragControls>
        <axesHelper args={[5]} />
        <Stats />
      </Canvas>
    </div>
  );
}

// const vec = new Vector3();
// const black = new Color("black");

// function Button(props) {
//   const ref = useRef();
//   const [selectedElement, setSelectedElement] = useState(false);
//   const colorTo = useMemo(
//     () => new Color(Math.floor(Math.random() * 16777216)),
//     []
//   );

//   useFrame(() => {
//     ref.current.material.color.lerp(selectedElement ? colorTo : black, 0.1);
//   });

//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       onPointerDown={() => {
//         setSelectedElement(true);
//       }}
//       onPointerUp={() => {
//         setSelectedElement(false);
//       }}
//     >
//       <icosahedronGeometry />
//       <meshPhysicalMaterial roughness={0.1} metalness={0} />
//     </mesh>
//   );
// }

// export default function GamePage() {
//   return (
//     <div className="w-screen h-screen">
//       <Canvas>
//         <Environment preset="sunset" background backgroundBlurriness={0.5} />
//         <Center>
//           <DragControls>
//             <Button position={[-2, -2, 0]} />
//           </DragControls>
//           <DragControls>
//             <Button position={[2, -2, 0]} />
//           </DragControls>
//           <DragControls>
//             <Button position={[-2, 2, 0]} />
//           </DragControls>
//           <DragControls>
//             <Button position={[2, 2, 0]} />
//           </DragControls>
//         </Center>
//         <Stats />
//       </Canvas>
//     </div>
//   );
// }
