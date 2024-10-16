// import React, { useRef, useEffect, useMemo, useState } from "react";
// import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
// import { useGraph, useFrame, useThree } from "@react-three/fiber";
// import { useScroll } from "framer-motion"; // 스크롤 관련 애니메이션 처리 라이브러리
// import * as THREE from "three"; // THREE.js 모듈 추가

// export function Model(props) {
//   const { viewport } = useThree(); // 뷰포트 정보를 가져옴
//   const characterGroupRef = useRef(); // 캐릭터 그룹 참조 변수
//   const cameraRef = useRef(); // 카메라 참조 변수
//   const { scrollYProgress } = useScroll(); // 스크롤 진행도 정의
//   const modelPath = process.env.PUBLIC_URL + "/models/robotY.glb";

//   const { nodes, animations } = useGLTF("/models/robotY.glb"); // 모델과 애니메이션 로드
//   // const { nodes, animations } = useGLTF(modelPath); // 모델과 애니메이션 로드
//   const robotRef = useRef(null); // 로봇 참조 변수
//   const { actions } = useAnimations(animations, robotRef); // 애니메이션 사용 설정

//   // 현재 애니메이션 상태 설정
//   // const [currentAnimation, setCurrentAnimation] = useState("default"); // 현재 애니메이션 상태 설정

//   // 머터리얼 정의 **********************************
//   const greenMetalMaterial = useMemo(
//     () =>
//       new THREE.MeshStandardMaterial({
//         color: "#00FF00",
//         metalness: 0.7,
//         roughness: 0.2,
//       }),
//     []
//   );

//   const redMetalMaterial = useMemo(
//     () =>
//       new THREE.MeshStandardMaterial({
//         color: "#FF4500", // 오렌지색의 빨간색
//         metalness: 0.7,
//         roughness: 0.3,
//       }),
//     []
//   );

//   const whiteMaterial = useMemo(
//     () => new THREE.MeshStandardMaterial({ color: "#fff" }),
//     []
//   );

//   useEffect(() => {
//     const actionKeys = Object.keys(actions); // 애니메이션 키 가져오기
//     if (actionKeys.length > 0) {
//       const firstActionName = actionKeys[0]; // 첫 번째 애니메이션 이름 선택
//       actions[firstActionName].play(); // 첫 번째 애니메이션 재생
//       console.log(`첫 번째 애니메이션(${firstActionName})이 실행됩니다.`);
//     } else {
//       console.log("사용 가능한 애니메이션이 없습니다.");
//     }
//   }, [actions, animations]);

//   // 현재 애니메이션 변경 부분 주석 처리
//   // useEffect(() => {
//   //   if (actions[currentAnimation]) {
//   //     actions[currentAnimation].reset().fadeIn(0.5).play(); // 현재 설정된 애니메이션 실행
//   //   }
//   // }, [actions, currentAnimation]);

//   useFrame(() => {
//     const scrollProgress = scrollYProgress.get(); // 스크롤 진행도 가져오기
//     console.log(scrollProgress + " << scrollProgress");

//     // 스크롤 진행도에 따라 카메라 z축 이동 (0% ~ 20%)
//     if (scrollProgress <= 0.2) {
//       if (cameraRef.current) {
//         cameraRef.current.position.z = 5 + (scrollProgress / 0.2) * 2; // 카메라 위치 설정
//       }
//     }

//     // 스크롤 진행도에 따라 모델 회전 (30% ~ 40%)
//     if (scrollProgress > 0.2 && scrollProgress <= 0.4) {
//       if (characterGroupRef.current) {
//         const rotationProgress = (scrollProgress - 0.2) / 0.2; // 회전 비율 계산
//         characterGroupRef.current.rotation.y = rotationProgress * Math.PI * 2; // y축 회전 설정
//       }
//     }

//     // 스크롤 진행도에 따라 카메라 z축 가까워지기 (50% ~ 70%)
//     if (scrollProgress > 0.4 && scrollProgress <= 0.7) {
//       if (cameraRef.current) {
//         cameraRef.current.position.z = 7 - ((scrollProgress - 0.4) / 0.3) * 3; // 카메라 위치 설정
//       }
//     }
//   });

//   // useFrame(() => {
//   //   const scrollProgress = scrollYProgress.get(); // 스크롤 진행도 가져오기
//   //   console.log(scrollProgress + " << scrollProgress");

//   //   // 스크롤 진행도에 따라 카메라 z축 이동 (0% ~ 33%)
//   //   if (scrollProgress <= 0.01) {
//   //     if (cameraRef.current) {
//   //       cameraRef.current.position.z = 5 + (scrollProgress / 0.01) * 2; // 카메라 위치 설정
//   //     }
//   //   }

//   //   // 스크롤 진행도에 따라 모델 회전 (33% ~ 66%)
//   //   if (scrollProgress > 0.01 && scrollProgress <= 0.02) {
//   //     if (characterGroupRef.current) {
//   //       const rotationProgress = (scrollProgress - 0.01) / 0.001; // 회전 비율 계산
//   //       characterGroupRef.current.rotation.y = rotationProgress * Math.PI * 2; // y축 회전 설정
//   //     }
//   //   }

//   //   // 애니메이션 변경 부분 주석 처리
//   //   // if (scrollProgress > 0.02) {
//   //   //   if (currentAnimation !== "run") {
//   //   //     setCurrentAnimation("run"); // 'run' 애니메이션으로 변경
//   //   //   }
//   //   // } else {
//   //   //   if (currentAnimation !== "default") {
//   //   //     setCurrentAnimation("default"); // 'default' 애니메이션으로 변경
//   //   //   }
//   //   // }
//   // });

//   // 뷰포트 크기에 따라 모델 크기 설정
//   const scale = useMemo(
//     () => Math.min(viewport.width, viewport.height) / 4,
//     [viewport.width, viewport.height]
//   );

//   // 메쉬가 존재하는지 확인 후 렌더링
//   if (!nodes.sphere_body) return null;

//   const position = props.position;

//   return (
//     <group ref={robotRef} {...props} position={position} dispose={null}>
//       <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />
//       <group ref={characterGroupRef} position={[0, -0.4, 0]} scale={3}>
//         {/* 캐릭터 그룹 추가 */}
//         <mesh
//           name="sphere_body"
//           geometry={nodes.sphere_body.geometry}
//           material={redMetalMaterial} //  머티리얼 적용
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/models/robotY.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/robot.glb -o src/components/robot/robot.js 
*/
import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  // 애니메이션 상태 관리
  const [currentAnimation, setCurrentAnimation] = useState("get"); // 현재 애니메이션 상태

  const { nodes, materials, animations } = useGLTF("/models/robotY.glb"); // useGLTF Hook으로 모델링 로드 전 버전
  // const { scene, animations } = useGLTF("models/robotY.glb"); // useGLTF Hook으로 모델링 로드
  const robotRef = useRef(null); // 댄서 모델에 대한 참조

  console.log(nodes); // nodes 객체를 콘솔에 출력
  console.log(materials); // nodes 객체를 콘솔에 출력
  console.log(animations); // nodes 객체를 콘솔에 출력

  const { actions } = useAnimations(animations, robotRef);

  useEffect(() => {
    // 애니메이션이 있는지 확인
    if (animations && animations.length > 0) {
      // console.log("애니메이션이 있습니다:", actions);
    } else {
      // console.log("애니메이션이 없습니다.");
    }

    // 사용 가능한 애니메이션 이름을 콘솔에 출력
    console.log("Available Actions:", actions);

    // 기본 애니메이션 이름으로 변경
    const defaultAction = actions[currentAnimation]; // 여기에 기본 애니메이션의 이름을 입력
    if (defaultAction) {
      defaultAction.play(); // 기본 애니메이션 재생
      console.log("실행");
    }
  }, [actions, animations]);

  // 메쉬가 존재하는지 확인 후 렌더링
  if (!nodes.sphere_body) return null; // sphere_body가 없는 경우 null 반환

  return (
    <group ref={robotRef} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="sphere_body"
          geometry={nodes.sphere_body.geometry}
          material={materials.sphere_color}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/robotY.glb");
