import React, { useRef } from "react"; // useRef import 추가
import { Environment } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./robotmodel";
import "./robot.css"; // CSS 파일 import

// 캔버스

const Robot = () => {
  return (
    <>
      <section className="pointerNone  fixed h-full top-0 w-full z-[99]   flex items-end justify-center text-[rgba(211,211,211)]">
        <div className=" w-full h-full ">
          <Canvas>
            {/* triggerRef={triggerRef}  */}
            <Model position={[0, 0, 4]} />
            {/* triggerRef 전달 */}
            {/* 각도변환시 조절  intensity={10} position={[-10, 0, 4]} */}
            <directionalLight intensity={4} position={[0, 2, 10]} />
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Robot;
