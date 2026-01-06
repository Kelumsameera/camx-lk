"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth spring (Apple-like)
  const springX = useSpring(rotateX, { stiffness: 120, damping: 14 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 14 });

  // Optional glare highlight
  const glare = useTransform(
    rotateY,
    [-15, 15],
    ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.15)"]
  );

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set((x - centerX) / 18);
    rotateX.set(-(y - centerY) / 18);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{
          rotateX: springX,
          rotateY: springY,
          backgroundColor: glare,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-2xl"
      >
        {children}
      </motion.div>
    </div>
  );
}
