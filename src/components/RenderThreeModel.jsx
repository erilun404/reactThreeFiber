import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Model = ({ children, className }) => {
  return (
    <Canvas
      className={"w-screen -z-10 relative" + className || ""}
      shadows={false}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Environment preset="dawn" />
        {children}
      </Suspense>
    </Canvas>
  );
};

export default Model;
