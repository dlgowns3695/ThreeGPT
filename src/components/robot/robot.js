// Robot.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./robotmodel";
import "./robot.css"; // CSS 파일 import

const Robot = () => {
  const lightIntensity = 0; // 조명 밝기  4
  const lightPosition = [0, 0, 0]; // 조명 위치  0  2  10

  return (
    <section className="pointerNone sticky top-0 z-[99]">
      <div className="h-screen w-full">
        <Canvas>
          {/* Model에 조명 관련 props 전달 */}
          <Model
            lightIntensity={lightIntensity}
            lightPosition={lightPosition}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Robot;
