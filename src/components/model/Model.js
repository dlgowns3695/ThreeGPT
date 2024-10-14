import React, { useRef, useMemo, useEffect, useState } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"; // 3D 로딩 및 애니메이션 처리 관련 hooks
import { useGraph, useFrame, useThree } from "@react-three/fiber"; // Three.js에 대한 fiber 라이브러리
import { SkeletonUtils } from "three-stdlib"; // Three.js의 skeleton utils로 clone 작업에 사용
import * as THREE from "three"; // Three.js 관련 라이브러리
import { useScroll } from "framer-motion"; // 스크롤 관련 애니메이션 처리 라이브러리

export default function Model({ position }) {
  const group = useRef(); // 그룹 참조 변수
  const { scene, animations } = useGLTF("/models/robotY.glb"); // GLB 모델과 애니메이션 데이터를 로드
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]); // Scene을 클론하여 재사용
  const { nodes, materials } = useGraph(clone); // 클론된 scene의 노드와 머티리얼을 가져옴
  const { actions } = useAnimations(animations, group); // 애니메이션 액션 설정
  const { viewport } = useThree(); // 뷰포트 정보를 가져옴
  const characterGroupRef = useRef(); // 캐릭터 그룹 참조 변수
  const cameraRef = useRef(); // 카메라 참조 변수

  const [currentAnimation, setCurrentAnimation] = useState("default"); // 현재 애니메이션 상태 설정

  // 녹색 메탈 머티리얼 생성
  const greenMetalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#00FF00",
        metalness: 0.7,
        roughness: 0.2,
      }),
    []
  );

  // 흰색 머티리얼 생성
  const whiteMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#fff" }),
    []
  );

  const { scrollYProgress } = useScroll(); // 스크롤 진행 상태 가져오기

  useEffect(() => {
    console.log(actions); // 액션 로깅
    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play(); // 현재 설정된 애니메이션 실행
    }
  }, [actions, currentAnimation]); // 액션 또는 애니메이션 상태가 변경될 때마다 재실행

  useFrame(() => {
    const scrollProgress = scrollYProgress.get(); // 스크롤 진행도를 가져옴

    // 스크롤 진행도에 따라 카메라 z축 이동 (0% ~ 33%)
    if (scrollProgress <= 0.01) {
      if (cameraRef.current) {
        cameraRef.current.position.z = 2 + (scrollProgress / 0.01) * 2; // 카메라 위치 설정
      }
    }

    // 스크롤 진행도에 따라 모델 회전 (33% ~ 66%)
    if (scrollProgress > 0.01 && scrollProgress <= 0.02) {
      if (characterGroupRef.current) {
        const rotationProgress = (scrollProgress - 0.01) / 0.01; // 회전 비율 계산
        characterGroupRef.current.rotation.y = rotationProgress * Math.PI * 2; // y축 회전 설정
      }
    }

    // 스크롤 진행도에 따라 애니메이션 변경 (66% ~ 100%)
    if (scrollProgress > 0.02) {
      if (currentAnimation !== "run") {
        setCurrentAnimation("run"); // 'run' 애니메이션으로 변경
      }
    } else {
      if (currentAnimation !== "default") {
        setCurrentAnimation("default"); // 'default' 애니메이션으로 변경
      }
    }
  });

  // 뷰포트 크기에 따라 모델 크기 설정
  const scale = useMemo(
    () => Math.min(viewport.width, viewport.height) / 4,
    [viewport.width, viewport.height]
  );

  return (
    <group ref={group} scale={scale} position={position} dispose={null}>
      {/* 그룹 요소로 모델 및 카메라 배치 */}
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />
      {/* 퍼스펙티브 카메라 설정 */}
      <group ref={characterGroupRef} position={[0, -0.4, 0]} scale={3}>
        {/* 캐릭터 모델 그룹 */}
        <group name="Scene">
          {/* 애니메이션 및 모델 그룹 */}
          <group name="Armature" position={[0, -0.187, 0]} scale={0.317}>
            {/* 본 설정 */}
            <primitive object={nodes.Bone} />
            <primitive object={nodes.Bone002} />
            <primitive object={nodes.Bone003} />
            <primitive object={nodes.Bone004} />
            <primitive object={nodes.Bone005} />
            {/* 흰색 머티리얼로 스킨 처리된 메시 */}
            <skinnedMesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={whiteMaterial}
              skeleton={nodes.Cube.skeleton}
            />
          </group>
          {/* 녹색 메탈 머티리얼로 처리된 메시 */}
          <mesh
            name="Curve002"
            geometry={nodes.Curve002.geometry}
            material={greenMetalMaterial}
            position={[-0.167, -0.013, 0.174]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.972}
          />
          {/* 녹색 메탈 메시 (다른 커브) */}
          <mesh
            name="Curve001"
            geometry={nodes.Curve001.geometry}
            material={greenMetalMaterial}
            position={[-0.167, -0.013, 0.174]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.972}
          />
          {/* 또 다른 녹색 메탈 메시 */}
          <mesh
            name="Curve"
            geometry={nodes.Curve.geometry}
            material={greenMetalMaterial}
            position={[-0.167, -0.013, 0.174]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.972}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/robotY.glb");
// "/models/robotY.glb" 경로에 있는 GLB 모델 미리 로드
