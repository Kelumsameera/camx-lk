"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { tr } from "framer-motion/client";

function Phone() {
  const { scene } = useGLTF("/models/mobile.glb");

  return (
    <primitive
      object={scene}
      scale={[10, 10, 10]}
      rotation={[0, Math.PI / 2, 0]}
      position={[1, 0, 0]}
    />
  );
}

export default function MobileModel() {
  return (
    <Canvas
      camera={{ position: [4, 2, 5], fov: 35 }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Phone />
      <OrbitControls enableZoom={true} enablePan={true}
        enableRotate={true} autoRotate={false} />
    </Canvas>
  );
}
