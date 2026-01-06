"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= MODEL ================= */

function CCTVModel({ enableIdle = true }) {
  const { scene } = useGLTF("/models/cctv.glb");
  const modelRef = useRef();

  // 🔒 HERO base pose (fixed)
  const baseRotation = {
    x: -Math.PI / 1.05,
    y: Math.PI / 1,
    z: 0,
  };

  useEffect(() => {
    // Center model
    const box = new Box3().setFromObject(scene);
    const center = new Vector3();
    box.getCenter(center);
    scene.position.sub(center);

    // Normalize size
    const size = new Vector3();
    box.getSize(size);
    const maxAxis = Math.max(size.x, size.y, size.z);
    scene.scale.multiplyScalar(2 / maxAxis);
  }, [scene]);

  // 🎥 Super slow gentle idle animation (optional)
  useFrame(({ clock }) => {
    if (!enableIdle || !modelRef.current) return;
    
    const t = clock.getElapsedTime();
    modelRef.current.rotation.y = baseRotation.y + Math.sin(t * 0.3) * 0.15;
    modelRef.current.rotation.x = baseRotation.x + Math.sin(t * 0.2) * 0.02;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[1, 1, 0]}
      scale={[1.6, 1.6, 1.6]}
      rotation={[baseRotation.x, baseRotation.y, baseRotation.z]}
    />
  );
}

/* ================= CAMERA SCROLL ================= */

function CameraScroll() {
  const { camera } = useThree();

  useEffect(() => {
    // Single timeline for entire page scroll (top to bottom)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
      },
    });

    // Smooth camera journey through all sections
    tl.to(camera.position, {
      x: -2,
      y: 2,
      z: 2,
      duration: 1,
      ease: "none",
    })
    .to(camera.position, {
      x: 0,
      y: 2,
      z: 3,
      duration: 1,
      ease: "none",
    })
    .to(camera.position, {
      x: 0,
      y: 2,
      z: 5,
      duration: 1,
      ease: "none",
    });

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.refresh();
    };
  }, [camera]);

  return null;
}

/* ================= MAIN ================= */

export default function Hero3D() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-0 top-0 pointer-events-none">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <Canvas
        camera={{ position: [4, 2, 5], fov: 38 }}
        onCreated={() => setIsLoaded(true)}
        gl={{ antialias: true, alpha: true }}
      >
        {/* LIGHTING */}
        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <hemisphereLight intensity={1.2} />

        {/* MODEL */}
        <CCTVModel enableIdle={true} />

        {/* SCROLL CAMERA */}
        <CameraScroll />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/cctv.glb");