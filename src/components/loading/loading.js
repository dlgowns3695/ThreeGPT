import React, { useEffect, useRef, useState } from "react";
import Aos from "../aos/aos";

const Loading = () => {
  // 여러 DOM 요소에 대한 참조를 저장할 Ref 객체를 초기화합니다.
  const flashRefs = useRef([]); // 깜빡이는 아이콘들에 대한 참조를 저장
  const pathRef = useRef(null); // 애니메이션이 적용될 SVG 경로에 대한 참조
  const lineRefs = useRef([]); // 선의 높이에 대한 참조를 저장
  const horizontalLineRefs = useRef([]); // 수평 선의 너비에 대한 참조를 저장

  // 경로의 길이와 애니메이션 진행 상태를 상태 변수로 설정합니다.
  const [pathLength, setPathLength] = useState(0); // 경로의 총 길이를 저장
  const [animationProgress, setAnimationProgress] = useState(0); // 애니메이션 진행 상태를 저장

  // 컴포넌트가 마운트될 때와 업데이트될 때 실행되는 side-effect를 정의합니다.
  useEffect(() => {
    // 애니메이션을 초기화하는 함수입니다.
    const initializeAnimation = () => {
      // pathRef가 현재 유효한 요소를 참조하고 있는지 확인합니다.
      if (pathRef.current) {
        // SVG 경로의 총 길이를 계산합니다.
        const totalLength = pathRef.current.getTotalLength();
        setPathLength(totalLength); // 경로의 총 길이를 상태에 저장합니다.

        // SVG 경로의 스타일을 설정하여 애니메이션 효과를 준비합니다.
        pathRef.current.style.strokeDasharray = totalLength; // 경로의 총 길이만큼 대시 배열 설정
        pathRef.current.style.strokeDashoffset = totalLength; // 애니메이션 시작 시, 경로가 보이지 않도록 오프셋 설정

        // 애니메이션 설정
        const animationDuration = 3000; // 애니메이션 지속 시간 (밀리초)
        const animationInterval = 30; // 애니메이션 업데이트 간격 (밀리초)
        const totalFrames = animationDuration / animationInterval; // 총 프레임 수 계산
        let currentFrame = 0; // 현재 프레임을 추적하는 변수

        // 애니메이션 업데이트를 위한 인터벌 설정
        const animationIntervalId = setInterval(() => {
          currentFrame++; // 현재 프레임을 증가시킵니다.
          const progress = (currentFrame / totalFrames) * 100; // 진행 비율 계산
          setAnimationProgress(progress); // 애니메이션 진행 상태 업데이트

          // SVG 경로의 오프셋을 조정하여 애니메이션을 구현합니다.
          pathRef.current.style.strokeDashoffset =
            totalLength - totalLength * (progress / 100); // 진행 비율에 따라 오프셋 업데이트

          // 각 선의 높이를 업데이트하여 애니메이션 효과를 적용합니다.
          lineRefs.current.forEach(
            (line) => (line.style.height = `${progress}%`) // 선의 높이 설정
          );

          // 각 수평 선의 너비를 업데이트합니다.
          horizontalLineRefs.current.forEach(
            (line) => (line.style.width = `${progress}%`) // 수평 선의 너비 설정
          );

          // 모든 프레임을 다 수행했으면 인터벌을 정리합니다.
          if (currentFrame >= totalFrames) {
            clearInterval(animationIntervalId);
            // 깜빡이는 효과의 인터벌도 정리
            clearInterval(blinkIntervalId); // 여기서 깜빡이는 인터벌을 정리합니다.
          }
        }, animationInterval); // 설정한 간격으로 애니메이션 업데이트
      }
    };

    initializeAnimation(); // 애니메이션 초기화 함수 호출

    // 깜빡이는 효과를 위한 인터벌 설정
    const blinkIntervalId = setInterval(() => {
      flashRefs.current.forEach((el) => {
        if (el) {
          el.style.transition = "opacity 0.5s ease-in-out"; // 오프셋 변화에 대한 CSS 트랜지션 설정
          el.style.opacity = el.style.opacity === "0" ? "1" : "0"; // 현재 불투명도를 기준으로 깜빡임 효과 적용
        }
      });
    }, 500); // 0.5초 간격으로 깜빡이는 효과를 주기 위한 인터벌 설정

    // 컴포넌트가 언마운트될 때 인터벌 정리
    return () => {
      clearInterval(blinkIntervalId); // 깜빡이는 효과의 인터벌을 정리
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 설정

  return (
    <div
      style={{
        opacity: animationProgress === 100 ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
      }}
      className="fixed top-0 left-0 w-full h-full bg-slate-950 z-[9999999] flex justify-center items-center"
    >
      {/* 가운데 로딩텍스트 + 이모티콘 */}
      <div className="w-full z-10 flex justify-between px-6 md:px-24">
        {["left", "right"].map((side, index) => (
          <div className="flex items-center gap-2 md:gap-8" key={side}>
            {index === 0 && (
              <svg
                ref={(el) => (flashRefs.current[0] = el)}
                className="w-[12px] rotate-[90deg] scale-y-[-1]"
                viewBox="0 0 6 4"
                fill="none"
              >
                <path
                  d="M3.1982 3.90328C3.09659 4.03224 2.90341 4.03224 2.8018 3.90328L0.0565376 0.419105C-0.0920827 0.230483 0.0735936 -0.0434377 0.306501 0.00582836L2.94823 0.564624C2.98238 0.571847 3.01762 0.571847 3.05177 0.564624L5.6935 0.00582791C5.92641 -0.0434382 6.09208 0.230482 5.94346 0.419105L3.1982 3.90328Z"
                  fill="#fff"
                />
              </svg>
            )}
            <Aos dataAos="fade-down">
              <p className="text-[#fff]">Loading</p>
            </Aos>
            {index === 1 && (
              <svg
                ref={(el) => (flashRefs.current[1] = el)}
                className="w-[12px] rotate-90"
                viewBox="0 0 6 4"
                fill="none"
              >
                <path
                  d="M3.1982 3.90328C3.09659 4.03224 2.90341 4.03224 2.8018 3.90328L0.0565376 0.419105C-0.0920827 0.230483 0.0735936 -0.0434377 0.306501 0.00582836L2.94823 0.564624C2.98238 0.571847 3.01762 0.571847 3.05177 0.564624L5.6935 0.00582791C5.92641 -0.0434382 6.09208 0.230482 5.94346 0.419105L3.1982 3.90328Z"
                  fill="#fff"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* 얇은 선 부모 */}
      <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center">
        {/* 수직 */}
        {[0, 1, 2].map((index) => (
          <div
            className={`bg-[#fff] w-px transition-all duration-700 ease-in-out absolute ${
              index === 0
                ? "top-0 left-[16.42%]"
                : index === 1
                ? "bottom-0 left-[50%]"
                : "top-0 right-[16.42%]"
            }`}
            ref={(el) => (lineRefs.current[index] = el)}
            key={index}
          />
        ))}
        {/* 수평 */}
        {[0, 1].map((index) => (
          <div
            className={`bg-[#fff] transition-all duration-700 ease-in-out absolute ${
              index === 0
                ? "left-0 top-[30%] md:top-[40%] h-px"
                : "right-0 top-[70%]  md:top-[60%] h-px"
            }`}
            ref={(el) => (horizontalLineRefs.current[index] = el)}
            key={index}
          />
        ))}
      </div>

      {/* SVG 위 아래 아이콘들 선 */}
      {["left", "right"].map((side, index) => (
        <div key={side}>
          <div
            className={`absolute top-10 ${
              side === "left" ? "left-10" : "right-10"
            } ${side === "right" ? "scale-x-[-1]" : ""}`}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 15 15"
              fill="none"
              ref={(el) => (flashRefs.current[index + 2] = el)}
            >
              <path
                d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15"
                stroke="#fff"
              />
            </svg>
          </div>

          <div
            className={`absolute bottom-10 ${
              side === "left" ? "left-10" : "right-10"
            } ${
              side === "right" ? "scale-x-[-1] scale-y-[-1]" : "scale-y-[-1]"
            }`}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 15 15"
              fill="none"
              ref={(el) => (flashRefs.current[index + 4] = el)}
            >
              <path
                d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15"
                stroke="#fff"
              />
            </svg>
          </div>
        </div>
      ))}

      <div className="absolute">
        <svg className="w-[200px] h-[200px]" viewBox="0 0 320 320">
          <path
            ref={pathRef}
            stroke="white"
            fill="transparent"
            strokeWidth="2.5"
            d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
