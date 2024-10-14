import React from "react";
import { Environment } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./robotmodel";

// 캔버스

const Robot = () => {
  return (
    <>
      <section className="fixed h-dvh top-0 w-full z-[0] bg-white  flex items-end justify-center text-[rgba(211,211,211)]">
        <Canvas>
          <Model position={[0, 0, 4]} />
          <directionalLight intensity={4} position={[0, 2, 10]} />
        </Canvas>
      </section>
    </>
  );
};

export default Robot;
