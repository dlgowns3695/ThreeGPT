// Robot.js
import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./robotmodel";
import "./robot.css"; // CSS 파일 import

const Robot = () => {
  const lightIntensity = 0; // 조명 밝기  4
  const lightPosition = [0, 0, 0]; // 조명 위치  0  2  10

  // Canvas에 접근하기 위한 ref 생성
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    // Canvas가 렌더된 후 pointer-events를 none으로 설정
    if (canvasContainerRef.current) {
      const canvasDiv = canvasContainerRef.current.querySelector("div");
      if (canvasDiv) {
        canvasDiv.style.pointerEvents = "none";
      }
    }
  }, []);

  return (
    <section className="pointerNone sticky top-0 z-[99]">
      <div className="pointerNone h-screen w-full" ref={canvasContainerRef}>
        <Canvas style={{ pointerEvents: 'none' }}>
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
