"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import { useEffect, useRef, useState, Suspense } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= MODEL ================= */

function CCTVModel() {
  const { scene } = useGLTF("/models/cctv-ultra.glb");
  const modelRef = useRef();

  const baseRotation = {
    x: -Math.PI / 1.05,
    y: Math.PI,
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

  useFrame(({ clock }) => {
    if (!modelRef.current) return;
    const t = clock.getElapsedTime();
    modelRef.current.rotation.y =
      baseRotation.y + Math.sin(t * 0.18) * 0.08;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[1, 1, 0]}
      scale={[1.4, 1.4, 1.4]}
      rotation={[baseRotation.x, baseRotation.y, baseRotation.z]}
    />
  );
}

/* ================= CAMERA SCROLL ================= */

function CameraScroll() {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
      },
    });

    tl.to(camera.position, { x: -2, y: 2, z: 2 })
      .to(camera.position, { x: 0, y: 2, z: 3 })
      .to(camera.position, { x: 0, y: 2, z: 5 });

    return () => tl.kill();
  }, [camera]);

  return null;
}

/* ================= MAIN ================= */

export default function Hero3D() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // ❌ Disable 3D on mobile
    if (window.innerWidth < 768) return;

    const t = setTimeout(() => setShow3D(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show3D) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [4, 2, 5], fov: 38 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.6} />
        <hemisphereLight intensity={1.0} />

        <Suspense fallback={null}>
          <CCTVModel />
        </Suspense>

        <CameraScroll />
      </Canvas>
    </div>
  );
}
