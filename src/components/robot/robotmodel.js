import React, { useState, useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion"; // 스크롤 관련 애니메이션 처리 라이브러리
import * as THREE from "three"; // THREE.js 모듈 추가

import { useGsapTimelineScrollTrigger } from "../../hook/useGsapTimelineScrollTrigger";

export function Model(props) {
  const { viewport } = useThree(); // 뷰포트 정보를 가져옴
  const characterGroupRef = useRef(); // 캐릭터 그룹 참조 변수
  const cameraRef = useRef(); // 카메라 참조 변수
  const { scrollYProgress } = useScroll(); // 스크롤 진행도 정의
  const modelPath = process.env.PUBLIC_URL + "/test/robot1018(4).glb";
  const robotRef = useRef(null); // 로봇 참조 변수
  const starRef = useRef(null);
  const voiceRef = useRef(null);
  const chatRef = useRef(null);

  const position = props.position;
  // console.log(position);

  const sectionTriggerRef = props.triggerRef;
  // console.log(sectionTriggerRef);

  // 모델 및 애니메이션 로드
  const { nodes, materials, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, characterGroupRef); // 부모 그룹에 애니메이션 연결

  // 재질 생성 함수   **********************************
  const createMaterial = (color, metalness = 0.1, roughness = 0.8) => {
    return new THREE.MeshStandardMaterial({ color, metalness, roughness });
  };

  // 재질 정의 (컴포넌트로 빼지 않음)
  const voiceBlackMetalMaterial = useMemo(
    () => createMaterial("#000000", 0.6, 0.35),
    []
  );
  const voiceBlueMetalMaterial = useMemo(
    () => createMaterial("#0000ff", 0.6, 0.35),
    []
  );
  const voiceRedMetalMaterial = useMemo(
    () => createMaterial("#ff0000", 0.6, 0.35),
    []
  );
  const voiceWhiteMetalMaterial = useMemo(
    () => createMaterial("#ffffff", 0.6, 0.35),
    []
  );

  const starBodyMetalMaterial = useMemo(
    () => createMaterial("#ffcccc", 0.6, 0.35),
    []
  );
  const starEyeMetalMaterial = useMemo(
    () => createMaterial("#e68a8a", 0.3, 0.6),
    []
  );
  const chatCircle01MetalMaterial = useMemo(
    () => createMaterial("#f1c40f", 0.1, 0.8), // 더 따뜻한 노란색으로 변경
    []
  );
  const chatCircle02MetalMaterial = useMemo(
    () => createMaterial("#2ecc71", 0.1, 0.8), // 더 생동감 있는 초록색으로 변경
    []
  );
  const chatCircle03MetalMaterial = useMemo(
    () => createMaterial("#e74c3c", 0.1, 0.8), // 더욱 선명한 빨간색으로 변경
    []
  );

  const chatBodyMetalMaterial = useMemo(
    () => createMaterial("#3498db", 0.1, 0.75), // 부드러운 파란색으로 변경
    []
  );

  const robotBodyMetalMaterial = useMemo(
    () => createMaterial("#454545", 0.9, 0.25),
    []
  );
  // const eyesMaterial = useMemo(() => createMaterial("#87CEEB", 0, 0), []); // 기본값 사용 안함

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  // 마우스 이동 핸들러
  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1; // -1 ~ 1로 변환
    const y = -(event.clientY / window.innerHeight) * 2 + 1; // -1 ~ 1로 변환
    setMousePosition({ x, y });
  };

  // 마우스 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const eyeMovementLimit = 0.01; // 눈이 움직이는 최대 범위 설정
  // 매 프레임마다 눈의 위치 업데이트
  useFrame(() => {
    const { x, y } = mousePosition;

    // 왼쪽 눈 포지션 업데이트
    if (leftEyeRef.current) {
      leftEyeRef.current.position.x = -0.05 + x * eyeMovementLimit; // 왼쪽 눈 x 포지션
      leftEyeRef.current.position.y = y * eyeMovementLimit; // 왼쪽 눈 y 포지션
    }

    // 오른쪽 눈 포지션 업데이트
    if (rightEyeRef.current) {
      rightEyeRef.current.position.x = 0.05 + x * eyeMovementLimit; // 오른쪽 눈 x 포지션
      rightEyeRef.current.position.y = y * eyeMovementLimit; // 오른쪽 눈 y 포지션
    }
  });

  // 애니메이션 옵션 설정
  const animationOptions = [
    {
      type: "to",
      vars: { x: 1.5, duration: 1 }, // x축으로 1.5만큼 이동
      position: 0, // 애니메이션 시작 시점
    },
  ];

  // ScrollTrigger 옵션 설정
  const scrollTriggerOptions = {
    start: "70% center", // 스크롤 시작 시점
    end: "bottom top", // 스크롤 끝 시점
    scrub: true, // 스크롤에 따라 애니메이션이 부드럽게 진행
    markers: true, // 마커 활성화 (디버그 용도)
  };

  useGsapTimelineScrollTrigger(
    sectionTriggerRef,
    [robotRef],
    animationOptions,
    scrollTriggerOptions
  );

  useEffect(() => {
    const actionKeys = Object.keys(actions); // 애니메이션 키 가져오기
    if (actionKeys.length > 0) {
      const firstActionName = actionKeys[0]; // 첫 번째 애니메이션 이름 선택
      actions[firstActionName].play(); // 첫 번째 애니메이션 재생
    }
  }, [actions]);

  useFrame(() => {
    const actionKeys = Object.keys(actions); // 애니메이션 키 가져오기
    const scrollProgress = scrollYProgress.get();
    // console.log(scrollProgress + " < scrollProgress");

    if (cameraRef.current) {
      cameraRef.current.position.z = 5 + (scrollProgress / 0.2) * 2; // 카메라 위치 설정
    }
  });

  // 뷰포트 크기에 따라 모델 크기 설정
  const scale = useMemo(
    () => Math.min(viewport.width, viewport.height) / 4,
    [viewport.width, viewport.height]
  );

  return (
    <group ref={robotRef} position={position} dispose={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />
      <group
        ref={characterGroupRef}
        position={[0, -1.8, 0]}
        scale={8}
        rotation={[(-Math.PI / 180) * 20, 0, 0]}
      >
        {/* 캐릭터 그룹 추가 */}
        <group name="robot">
          <mesh
            geometry={nodes.robot.geometry}
            material={robotBodyMetalMaterial}
          />

          {/* 왼쪽 눈 */}
          <mesh ref={leftEyeRef} position={[-0.05, 0, 0.1]} scale={0.01}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#000" />
          </mesh>
          {/* 오른쪽 눈 */}
          <mesh ref={rightEyeRef} position={[0.05, 0, 0.1]} scale={0.01}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#000" />
          </mesh>

          {/* voice */}
          <group
            ref={voiceRef}
            name="voice"
            position={[0.2, 0, 0]}
            scale={0.04}
          >
            {/* 메쉬 4개 생성 */}
            <mesh
              name="blackMaterial"
              geometry={nodes.blackMaterial.geometry}
              material={voiceBlackMetalMaterial}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              name="blueMaterial"
              geometry={nodes.blueMaterial.geometry}
              material={voiceBlueMetalMaterial}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              name="redMaterial"
              geometry={nodes.redMaterial.geometry} //
              material={voiceRedMetalMaterial}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
              name="whiteMaterial"
              geometry={nodes.whiteMaterial.geometry}
              material={voiceWhiteMetalMaterial}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
          </group>

          {/* chat */}
          <group
            ref={chatRef}
            name="chat"
            position={[0.1, -0.09, 0.25]}
            scale={0.15}
            rotation={[(90 * Math.PI) / 180, (-45 * Math.PI) / 180, 0]}
          >
            {/* 몸통 */}
            <mesh
              name="Object_1"
              geometry={nodes.Object_1.geometry}
              material={chatBodyMetalMaterial}
              position={[0, 0, 0]}
            />

            {/* 노란버튼 */}
            <mesh
              name="Object_1_2"
              geometry={nodes.Object_1_2.geometry}
              material={chatCircle02MetalMaterial}
              position={[0, 0, 0]}
            />
            {/* 초록버튼 */}
            <mesh
              name="Object_1_1"
              geometry={nodes.Object_1_1.geometry}
              material={chatCircle03MetalMaterial}
              position={[0, 0, 0]}
            />
            {/* 붉은버튼 */}
            <mesh
              name="Object_1_3"
              geometry={nodes.Object_1_3.geometry}
              material={chatCircle01MetalMaterial}
              position={[0, 0, 0]}
            />
          </group>

          {/* star */}
          <group
            ref={starRef}
            name="star"
            position={[-0.08, -0.05, 0.25]}
            scale={0.001}
          >
            {/* obj01 메쉬 눈 */}
            <mesh
              name="Material1"
              geometry={nodes.Material1.geometry} //
              material={starEyeMetalMaterial}
            />

            {/* obj02 메쉬 */}
            <mesh
              name="Material1_1"
              geometry={nodes.Material1_1.geometry} // obj02의 geometry 적용
              material={starBodyMetalMaterial} // obj02의 material 적용
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/test/robot1018.glb");
