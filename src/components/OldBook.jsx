import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Sparkles } from "@react-three/drei";



export const ThreeD = () => {
    const [isRotating, setIsRotating] = useState(false);

    const book = useGLTF("/image/open_old_book_gltf/scene.gltf");

    return (
        <main className="flex min-h-screen item-center bg-black relative" >
                <Canvas frameloop="demand" camera={{ position: [-2, 2, 4], fov: 25, near: 0.1, far: 1000 }}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI /2} enablePan={false}/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <directionalLight position={[0, 0, 5]} />
            <primitive object={book.scene} scale={10} />
            <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange"/>
            {/* <mesh position={[0, 0, -5]} scale={[10, 10, 1]}>
                    <planeGeometry args={[10, 10]} />
                    <meshBasicMaterial color="lightgray" />
                </mesh> */}
        </Canvas>
        </main>
    
    )
}



// import { useGLTF, useAnimations } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense, useEffect } from "react";

// const Model = () => {
//     const { scene, animations } = useGLTF('/image/open_old_book_gltf/scene.gltf'); // Ladda modellen
//     const { actions } = useAnimations(animations, scene); // Hantera animationer

//     // Starta animationen när komponenten laddas
//     useEffect(() => {
//         if (actions) {
//             const firstAction = Object.keys(actions)[0]; // Hämta första animationen
//             if (firstAction) {
//                 actions[firstAction].play(); // Starta animationen
//             }
//         }
//     }, [actions]);

//     return <primitive object={scene} scale={6} />;
// };

// export const ThreeD = () => { 
//     return (
//         <Canvas frameloop="demand" camera={{  position: [-4, 3, 6], fov: 45, near: 0.1, far: 1000 }}>
//             <ambientLight intensity={0.1} />
//             <directionalLight position={[10, 10, 5]} />
//             <Suspense fallback={null}>
//                 <Model />
//             </Suspense>
//         </Canvas>
//     );
// };



// import { useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React from "react";

// export const ThreeD = () => {
//   const { scene } = useGLTF('/image/3d/open_old_book.gltf', true);

//   if (!scene) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <Canvas frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
//       <ambientLight intensity={0.1} />
//       <directionalLight position={[10, 10, 5]} />
//       <primitive object={scene} scale={2.5} />
//     </Canvas>
//   );
// };

// import { useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import React from "react";

// const book = useGLTF('/image/open_old_book_gltf/scene.gltf');


// export const ThreeD = () => { 
//     return (
//         <Canvas frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
//             <ambientLight intensity={0.1} />
//             <directionalLight position={[10, 10, 5]} />
//             <primitive object={book.scene} scale={2.5}  />;
//         </Canvas>
//     )
// }