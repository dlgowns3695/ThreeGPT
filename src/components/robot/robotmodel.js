import React, { useState, useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion"; // 스크롤 관련 애니메이션 처리 라이브러리
import * as THREE from "three"; // THREE.js 모듈 추가

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { useGsapTimelineScrollTrigger } from "../../hook/useGsapTimelineScrollTrigger";
// import { useGsapTimelineScrollTrigger } from "../../hook2/useGsapTimelineScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function Model(props) {
  const { viewport } = useThree(); // 뷰포트 정보를 가져옴
  const characterGroupRef = useRef(null); // 캐릭터 그룹 참조 변수
  const cameraRef = useRef(); // 카메라 참조 변수
  const { scrollYProgress } = useScroll(); // 스크롤 진행도 정의
  const [initialPosition, setInitialPosition] = useState(null); // 초기 위치 상태 설정

  // 스크롤 진행도를 상태로 관리
  const [scrollProgress, setScrollProgress] = useState(0);
  const modelPath = process.env.PUBLIC_URL + "/test/robot1018(4).glb";

  const starRef = useRef(null);
  const voiceRef = useRef(null);
  const chatRef = useRef(null);
  const triggerRef = useRef(null);
  const robotRef = useRef(null);

  const position = props.position;
  // const lightIntensity = props.lightIntensity; // 밝기 기존 4
  // const lightPosition = props.lightPosition; // 위치 기존  0 2 10
  const {
    lightIntensity: initialLightIntensity,
    lightPosition: initialLightPosition,
  } = props;

  const [lightIntensity, setLightIntensity] = useState(initialLightIntensity);
  const [lightPosition, setLightPosition] = useState(initialLightPosition);

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
    // if (characterGroupRef.current) {
    //   setInitialPosition(characterGroupRef.current.position.y); // 초기화된 후 위치 저장
    // }

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

  // 스크롤 진행에 따른 업데이트 로직
  const handleScrollProgress = (progress) => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 5 + (progress / 0.2) * 2;
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

    if (!characterGroupRef.current) return; // 초기 위치가 설정되지 않았다면 종료

    // 초기위치
    if (progress <= 0.1) {
      setLightIntensity(4); // 조명 밝기 설정
      setLightPosition([0, 2, 10]); // 조명 위치 설정
      console.log("조명 켜짐, 밝기:", lightIntensity, "위치:", lightPosition);
      setOpacity(0, 0, 0);
      actions[Object.keys(actions)[0]].play();
      console.log("애니메이션 시작");
      gsap.to(characterGroupRef.current.position, {
        y: -1.8,
        duration: 0.5,
      });
      console.log("애니메이션 y 1.8");
      gsap.to(characterGroupRef.current.rotation, { y: 0, duration: 1 });
    }
    // 로봇 아래로 내려가기 및 애니메이션 종료
    else if (progress > 0.1 && progress <= 0.52) {
      gsap.to(characterGroupRef.current.position, { y: -12, duration: 0.5 });
      // console.log("애니메이션 y -12");
      actions[Object.keys(actions)[0]].stop();
      console.log("애니메이션 정지");
    }
    // 로봇 다시 나타나고 chat이미지 같이 나오기
    else if (progress > 0.52 && progress <= 0.86) {
      setLightIntensity(4); // 조명 밝기 설정
      setLightPosition([-90, 1, 1]); // 조명 위치 설정
      setOpacity(0, 1, 0);
      gsap
        .timeline()
        .to(characterGroupRef.current.position, { y: -1, duration: 1 })
        .to(
          characterGroupRef.current.rotation,
          { y: Math.PI / -4, duration: 1 },
          0
        );
    }
    // star 이미지 같이 나오기
    else if (progress > 0.86 && progress <= 0.91) {
      gsap.to(characterGroupRef.current.rotation, {
        y: 2 * Math.PI + Math.PI / -4,
        duration: 0.5,
      });
      setOpacity(1, 0, 0);
    }
    // voice 이미지 같이 나오기
    else if (progress > 0.94) {
      gsap.to(characterGroupRef.current.rotation, {
        y: 2 * Math.PI + Math.PI / 4,
        duration: 0.5,
      });
      setOpacity(0, 0, 1);
    }
  };

  // useFrame에서 마우스 위치 및 스크롤 상태 업데이트
  useFrame(() => {
    const { x, y } = mousePosition;
    updateEyePosition(leftEyeRef, x, y, -0.05);
    updateEyePosition(rightEyeRef, x, y, 0.05);

    // 현재 스크롤 진행도에 따른 업데이트
    handleScrollProgress(scrollProgress);
  });

  // GSAP 애니메이션 및 ScrollTrigger 설정
  useEffect(() => {
    const actionKeys = Object.keys(actions);

    if (actionKeys.length > 0) {
      const firstActionName = actionKeys[0]; // 첫 번째 애니메이션 이름 선택
      actions[firstActionName].play(); // 첫 번째 애니메이션 재생
    }

    if (!characterGroupRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: characterGroupRef.current.parentNode,
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress); // 스크롤 진행도 상태 업데이트
        },
      },
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [actions]); // actions가 변경될 때마다 useEffect 실행

  // 뷰포트 크기에 따라 모델 크기 설정
  // const scale = useMemo(
  //   () => Math.min(viewport.width, viewport.height) / 4,
  //   [viewport.width, viewport.height]
  // );

  return (
    <group ref={triggerRef} position={position} dispose={null}>
      <directionalLight intensity={lightIntensity} position={lightPosition} />
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
