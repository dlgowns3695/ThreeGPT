import React, { useRef, useMemo, useEffect, useState } from "react";
import {
  useGLTF,
  useAnimations,
  PerspectiveCamera,
} from "@react-three/drei";
import { useGraph, useFrame, useThree } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";
import { useScroll } from "framer-motion";

export default function Model({ position }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/main_.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  const { viewport } = useThree();
  const characterGroupRef = useRef();
  const cameraRef = useRef();

  const [currentAnimation, setCurrentAnimation] = useState("default");

  const greenMetalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#00FF00",
        metalness: 0.7,
        roughness: 0.2,
      }),
    []
  );
  const whiteMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#FFFFFF" }),
    []
  );

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log(actions);
    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    }
  }, [actions, currentAnimation]);

  useFrame(() => {
    const scrollProgress = scrollYProgress.get();

    // 카메라 z축 이동 (0% ~ 33% 스크롤)
    if (scrollProgress <= 0.01) {
      if (cameraRef.current) {
        cameraRef.current.position.z = 2 + (scrollProgress / 0.01) * 2;
      }
    }

    // 모델 회전 (33% ~ 66% 스크롤)
    if (scrollProgress > 0.01 && scrollProgress <= 0.02) {
      if (characterGroupRef.current) {
        const rotationProgress = (scrollProgress - 0.01) / 0.01;
        characterGroupRef.current.rotation.y = rotationProgress * Math.PI * 2;
      }
    }

    // 애니메이션 변경 (66% ~ 100% 스크롤)
    if (scrollProgress > 0.02) {
      if (currentAnimation !== "run") {
        setCurrentAnimation("run");
      }
    } else {
      if (currentAnimation !== "default") {
        setCurrentAnimation("default");
      }
    }
  });

  const scale = useMemo(
    () => Math.min(viewport.width, viewport.height) / 4,
    [viewport.width, viewport.height]
  );

  return (
    <group ref={group} scale={scale} position={position} dispose={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 0]} />
      <group ref={characterGroupRef} position={[0, -0.4, 0]} scale={3}>
        <group name="Scene">
          <group name="Armature" position={[0, -0.187, 0]} scale={0.317}>
            <primitive object={nodes.Bone} />
            <primitive object={nodes.Bone002} />
            <primitive object={nodes.Bone003} />
            <primitive object={nodes.Bone004} />
            <primitive object={nodes.Bone005} />
            <skinnedMesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={whiteMaterial}
              skeleton={nodes.Cube.skeleton}
            />
          </group>
          <mesh
            name="Curve002"
            geometry={nodes.Curve002.geometry}
            material={greenMetalMaterial}
            position={[-0.167, -0.013, 0.174]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.972}
          />
          <mesh
            name="Curve001"
            geometry={nodes.Curve001.geometry}
            material={greenMetalMaterial}
            position={[-0.167, -0.013, 0.174]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.972}
          />
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

useGLTF.preload("/models/main_.glb");
