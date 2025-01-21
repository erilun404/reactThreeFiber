import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Funktion för att skapa en eldfluga
const createFireFly = () => ({
  id: Math.random(), // Unikt ID
  top: `${Math.random() * 100}%`, // Slumpmässig vertikal position
  left: `${Math.random() * 100}%`, // Slumpmässig horisontell position
  animationDuration: `${Math.random() * 5 + 5}s`, // Slumpmässig animationstid
 
});

export const FireFliesBg = () => {
  const [fireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireFlyPeriodically = () => {
      const newFireFly = createFireFly();
      setFireFlies((currentFireFlies) => [
        ...currentFireFlies.slice(-14), // Begränsa antalet eldflugor
        newFireFly,
      ]);
    };

    const interval = setInterval(addFireFlyPeriodically, 1000); // Lägg till ny eldfluga varje sekund
    return () => clearInterval(interval); // Rensa intervallet vid unmount
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireFlies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute rounded-full w-[10px] h-[10px] bg-blue-700 opacity-80"
          style={{
            top: firefly.top,
            left: firefly.left,
            animation: `firefly-move ${firefly.animationDuration}  infinite alternate`,
          }}
        ></div>
      ))}

      {/* Lägg till Tailwind-baserad animation */}
      <style>
        {`
          @keyframes firefly-move {
            to {
              transform: translate(${Math.random() * 50 - 25}px, ${
          Math.random() * 50 - 25
        }px);
            }
          }
        `}
      </style>
    </div>
  );
};





// import React from "react"
// import { OrbitControls, Sparkles } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// export const FireFliesBg = () => {
//     return (
//         <Canvas>
//             <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="orange"/>
//         </Canvas>
//     ) 
    
    
// }


// import React, {useEffect, useState} from "react";

// const createFireFly = () => ({
//     id: `${Math.random() * 100}%`,
//     top: `${Math.random() * 100}%`,
//     animationDuration: `${Math.random() * 5 + 5}s`,
// });

// export const FireFliesBg = () => {
//     const [fireFlies, setFireFlies] = useState([]);

//     useEffect(() => {
//      const addFireFlyPeriodically = () => {
//         const newFireFly = createFireFly();
//         setFireFlies((currentFireFlies) => [...currentFireFlies.slice(-14), newFireFly,

//         ]);
//     };
//     const interval = setInterval(addFireFlyPeriodically, 1000);
//     return () => clearInterval(interval);
//     }, []);
    

//     return (
//         <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
//             {fireFlies.map((firefly) => {
//                 return(
//                     <div 
//                     key={firefly.id}
//                     className="absolute rounded-full w-[10px] h-[10px] bg-yellow-300"
//                     style={{
//                         top: firefly.top,
//                         left: firefly.left,
//                         animation: `move ${firefly.animationDuration} infinite alternate`,
//                     }}
//                     ></div>
//                 )
//             })}
//         </div>
//     )
// }