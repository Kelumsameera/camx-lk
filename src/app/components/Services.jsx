"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  Camera,
  Shield,
  Lock,
  Wrench,
  Users,
  Laptop,
  Settings,
  Monitor,
  Smartphone,
} from "lucide-react";

/* ---------------- TiltCard Component ---------------- */
function TiltCard({ children }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 120, damping: 14 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 14 });

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

/* ---------------- Animation Variants ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- Services Data ---------------- */
const SECURITY_SERVICES = [
  {
    icon: Camera,
    title: "CCTV Installation",
    description:
      "Indoor & outdoor CCTV systems with clean installation and optimal camera placement.",
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    description:
      "Biometric, card, keypad, and smart lock access solutions.",
  },
  {
    icon: Shield,
    title: "Security Consulting",
    description:
      "Practical security planning based on property layout and risk analysis.",
  },
  {
    icon: Wrench,
    title: "System Maintenance",
    description:
      "Affordable servicing, cleaning, and long-term system care.",
  },
  {
    icon: Users,
    title: "Customer Training",
    description:
      "Simple guidance so customers can operate systems confidently.",
  },
];

const IT_SERVICES = [
  {
    icon: Laptop,
    title: "Home Visit PC Repair",
    description:
      "On-site PC repair services for homes and offices.",
  },
  {
    icon: Settings,
    title: "PC Troubleshooting",
    description:
      "Fix slow systems, crashes, and software issues.",
  },
  {
    icon: Monitor,
    title: "Software Installation",
    description:
      "Windows, drivers, antivirus & essential software setup.",
  },
  {
    icon: Wrench,
    title: "Hardware Diagnosis",
    description:
      "RAM, HDD/SSD, PSU fault detection (no chip-level repair).",
  },
];

const MOBILE_SERVICES = [
  {
    icon: Smartphone,
    title: "Screen Replacement",
    description:
      "Broken or cracked smartphone display replacement.",
  },
  {
    icon: Smartphone,
    title: "Touch & Display Fix",
    description:
      "Touch issues, flickering, lines & black screen fixes.",
  },
];

/* ---------------- Main Component ---------------- */
export default function Services() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="services"
      className="relative py-20 px-4 overflow-hidden bg-linear-to-b from-slate-900/10 via-slate-900/60 to-slate-900/5"
    >
      <motion.div style={{ y }} className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-20 text-left">
          <h2 className="mb-4 text-4xl md:text-5xl font-semibold text-white">
            Our{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="w-full text-lg leading-relaxed text-gray-300">
            Security, IT & mobile solutions you can trust
          </p>

          {/* Divider */}
          <div className="mt-6 h-px w-40 bg-linear-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* 🔐 Security Section */}
        <Section
          title="Security Services"
          subtitle="Professional surveillance & protection solutions"
          services={SECURITY_SERVICES}
        />

        {/* 💻 IT Section */}
        <Section
          title="IT Services"
          subtitle="Reliable computer & software support"
          services={IT_SERVICES}
        />

        {/* 📱 Mobile Section */}
        <Section
          title="Mobile Services"
          subtitle="Smartphone display & touch repairs"
          services={MOBILE_SERVICES}
        />

        <p className="mt-20 text-center text-amber-500 text-sm">
          Mobile services currently include display replacement only.
        </p>

      </motion.div>
    </section>
  );
}

/* ---------------- Section Component ---------------- */
function Section({ title, subtitle, services }) {
  return (
    <div className="mb-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-cyan-400">
          {title}
        </h3>
        <p className="mt-3 text-gray-400">
          {subtitle}
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </motion.div>
    </div>
  );
}

/* ---------------- Service Card ---------------- */
function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <TiltCard>
      <motion.div
        variants={cardVariants}
        className="group relative rounded-3xl bg-white/5 p-8 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.22)] transition-all duration-500 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="mb-5 text-cyan-400"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-12 w-12 drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]" />
        </motion.div>

        <h4
          className="mb-3 text-xl font-semibold tracking-tight text-cyan-400"
          style={{ transform: "translateZ(30px)" }}
        >
          {service.title}
        </h4>

        <p
          className="text-white/80 leading-relaxed text-sm md:text-base"
          style={{ transform: "translateZ(20px)" }}
        >
          {service.description}
        </p>
      </motion.div>
    </TiltCard>
  );
}