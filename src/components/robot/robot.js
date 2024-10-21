import React from "react";
import { Environment } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./robotmodel";
import "./robot.css"; // CSS 파일 import

// 캔버스

const Robot = () => {
  return (
    <>
      <section className="pointerNone fixed h-dvh top-0 w-full z-[99]   flex items-end justify-center text-[rgba(211,211,211)]">
        <Canvas>
          <Model position={[0, 0, 4]} />
          <directionalLight intensity={4} position={[0, 2, 10]} />
        </Canvas>
      </section>
    </>
  );
};

export default Robot;
