"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function CCTVCamera3D() {
  const ref = useRef();
  const { scene } = useGLTF("/cctv.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.4}
      position={[0, -0.5, 0]}
    />
  );
}

// optional preload
useGLTF.preload("/cctv.glb");
