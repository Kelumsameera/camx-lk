"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- MODEL ---------------- */

function CCTVModel() {
  const { scene } = useGLTF("/models/cctv.glb");
  const modelRef = useRef();

  // 🔒 Hero base pose (UNCHANGED)
  const baseRotation = {
    x: -Math.PI / 1.05,
    y: Math.PI / 1,
    z: 0,
  };

  useEffect(() => {
    const box = new Box3().setFromObject(scene);
    const center = new Vector3();
    box.getCenter(center);
    scene.position.sub(center);

    const size = new Vector3();
    box.getSize(size);
    const maxAxis = Math.max(size.x, size.y, size.z);
    scene.scale.multiplyScalar(2 / maxAxis);
  }, [scene]);

  // 🎥 Idle animation (hero feel)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y =
        baseRotation.y + Math.sin(t) * 0.3;
      modelRef.current.rotation.x =
        baseRotation.x + Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[1, 1, 0]}                 // ✅ hero position
      scale={[1.5, 1.5, 1.5]}
      rotation={[
        baseRotation.x,
        baseRotation.y,
        baseRotation.z,
      ]}
    />
  );
}

/* ---------------- CAMERA SCROLL ---------------- */

function CameraScroll() {
  const { camera } = useThree();

  useEffect(() => {
    // HERO → camera stays still
    gsap.to(camera.position, {
      x: 2,
      y: 2,
      z: 4,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // SERVICES → camera moves
    gsap.to(camera.position, {
      x: -2,
      y: 2,
      z: 1,
      scrollTrigger: {
        trigger: "#services",
        start: "top center",
        end: "bottom",
        scrub: true,
      },
    });

     gsap.to(camera.position, {
      x: 1,
      y: 2,
      z: 3,
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // PROVIDERS → zoom out
    gsap.to(camera.position, {
      x: 0,
      y: 2,
      z: 5,
      scrollTrigger: {
        trigger: "#providers",
        start: "top center",
        end: "top",
        scrub: true,
      },
    });
  }, [camera]);

  return null;
}

/* ---------------- MAIN ---------------- */

export default function Hero3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [2, 2, 4], fov: 35 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <hemisphereLight intensity={1.2} />

        <CCTVModel />
        <CameraScroll />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/cctv.glb");
