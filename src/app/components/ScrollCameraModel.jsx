"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3, Group } from "three";

export default function ScrollCameraModel() {
  const groupRef = useRef();
  const modelRef = useRef();
  const { scene } = useGLTF("/models/cctv.glb");

  useEffect(() => {
    // 1️⃣ Get bounding box
    const box = new Box3().setFromObject(scene);
    const center = new Vector3();
    box.getCenter(center);

    // 2️⃣ Move model so its center is at (0,0,0)
    scene.position.sub(center);

    // 3️⃣ Normalize size
    const size = new Vector3();
    box.getSize(size);
    const maxAxis = Math.max(size.x, size.y, size.z);
    scene.scale.multiplyScalar(1 / maxAxis);
  }, [scene]);

  // Rotation stays perfect
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* CHANGE SIZE HERE – rotation center will NOT change */}
      <primitive
        ref={modelRef}
        object={scene}
        scale={[1.4, 0.8, 1.2]} // width, height, depth
      />
    </group>
  );
}

useGLTF.preload("/models/cctv.glb");
