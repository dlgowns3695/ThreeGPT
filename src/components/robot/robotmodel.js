import React, { useState, useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion"; // 스크롤 관련 애니메이션 처리 라이브러리
import * as THREE from "three"; // THREE.js 모듈 추가

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { useGsapTimelineScrollTrigger } from "../../hook/useGsapTimelineScrollTrigger";
import { useGsapTimelineScrollTrigger } from "../../hook2/useGsapTimelineScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function Model(props) {
  const { viewport } = useThree(); // 뷰포트 정보를 가져옴
  const characterGroupRef = useRef(null); // 캐릭터 그룹 참조 변수
  const cameraRef = useRef(); // 카메라 참조 변수
  const { scrollYProgress } = useScroll(); // 스크롤 진행도 정의
  const modelPath = process.env.PUBLIC_URL + "/test/robot1018(4).glb";

  const starRef = useRef(null);
  const voiceRef = useRef(null);
  const chatRef = useRef(null);
  const triggerRef = useRef(null);
  const robotRef = useRef(null);

  const position = props.position;

  // const sectionTriggerRef = props.triggerRef;

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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const eyeMovementLimit = 0.01; // 눈이 움직이는 최대 범위 설정

  // 눈 위치 업데이트
  const updateEyePosition = (eyeRef, x, y, offsetX) => {
    if (eyeRef.current) {
      eyeRef.current.position.x = offsetX + x * eyeMovementLimit;
      eyeRef.current.position.y = y * eyeMovementLimit;
    }
  };

  useFrame(() => {
    const { x, y } = mousePosition;
    updateEyePosition(leftEyeRef, x, y, -0.05);
    updateEyePosition(rightEyeRef, x, y, 0.05);
  });

  // GSAP 애니메이션 설정
  useEffect(() => {
    const actionKeys = Object.keys(actions);

    if (actionKeys.length > 0) {
      const firstActionName = actionKeys[0]; // 첫 번째 애니메이션 이름 선택

      // 페이지 로드 시 즉시 첫 번째 애니메이션 재생
      actions[firstActionName].play();
      console.log("즉시 첫 번째 애니메이션 재생");
    }

    const setGroupOpacity = (groupRef, opacity) => {
      groupRef.current?.children.forEach((child) => {
        if (child.material) {
          child.material.transparent = true;
          child.material.opacity = opacity;
        }
      });
    };

    const setOpacity = (starOpacity, chatOpacity, voiceOpacity) => {
      setGroupOpacity(starRef, starOpacity);
      setGroupOpacity(chatRef, chatOpacity);
      setGroupOpacity(voiceRef, voiceOpacity);
    };

    if (!characterGroupRef.current) return;

    const initialPosition = characterGroupRef.current.position.y;

    const handleScrollProgress = (scrollProgress) => {
      if (cameraRef.current)
        cameraRef.current.position.z = 5 + (scrollProgress / 0.2) * 2;

      // 0.1 보다 작을때 (초기)
      if (scrollProgress <= 0.1) {
        setOpacity(0, 0, 0);
        gsap.to(characterGroupRef.current.position, {
          y: initialPosition,
          duration: 0.5,
        });
        gsap.to(characterGroupRef.current.rotation, { y: 0, duration: 1 });
        // 0.1 ~ 0.52보다 작을때
      } else if (scrollProgress > 0.1 && scrollProgress <= 0.52) {
        gsap.to(characterGroupRef.current.position, { y: -12, duration: 0.5 });
        actions[Object.keys(actions)[0]].stop();
        // 0.52 ~ 0.86보다 작을때
      } else if (scrollProgress > 0.52 && scrollProgress <= 0.86) {
        setOpacity(0, 1, 0);
        gsap
          .timeline()
          .to(characterGroupRef.current.position, { y: -1, duration: 1 })
          .to(
            characterGroupRef.current.rotation,
            { y: Math.PI / -4, duration: 1 },
            0
          );
        // 0.86~ 0.91보다 작을때
      } else if (scrollProgress > 0.86 && scrollProgress <= 0.91) {
        gsap.to(characterGroupRef.current.rotation, {
          y: 2 * Math.PI + Math.PI / -4,
          duration: 0.5,
        });
        setOpacity(1, 0, 0);
        // 0.94 ~ 0.98보다 작을때
      } else if (scrollProgress > 0.94 && scrollProgress <= 0.98) {
        gsap.to(characterGroupRef.current.rotation, {
          y: 2 * Math.PI + Math.PI / 4,
          duration: 0.5,
        });
        setOpacity(0, 0, 1);
      }
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: characterGroupRef.current.parentNode,
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: 1,
        onUpdate: () => handleScrollProgress(scrollYProgress.get()), // 스크롤업데이트
        onEnterBack: () =>
          gsap.to(characterGroupRef.current.position, {
            y: initialPosition,
            duration: 0.5,
          }),
      },
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [actions]);

  // 뷰포트 크기에 따라 모델 크기 설정
  const scale = useMemo(
    () => Math.min(viewport.width, viewport.height) / 4,
    [viewport.width, viewport.height]
  );

  return (
    <group ref={triggerRef} position={position} dispose={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />
      <group
        ref={characterGroupRef}
        position={[0, -1.8, 0]}
        scale={8}
        rotation={[(-Math.PI / 180) * 20, 0, 0]}
      >
        {/* 캐릭터 그룹 추가 */}
        <group name="robot" ref={robotRef}>
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
