"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

import TiltCard from "./TiltCard";

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
      className="relative py-28 px-4 overflow-hidden
      bg-gradient-to-b from-[#02061713] via-[#020617]/95 to-[#0206170a]"
    >
      <motion.div style={{ y }} className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-semibold tracking-tight text-camx-text">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-camx-muted">
            Security, IT & mobile solutions you can trust
          </p>
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

        <p className="mt-20 text-center text-camx-warning text-sm">
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
        <h3 className="text-3xl md:text-4xl font-semibold text-camx-cyan">
          {title}
        </h3>
        <p className="mt-3 text-camx-muted">
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
        className="group relative rounded-3xl
        bg-camx-glass p-8 backdrop-blur-xl
        border border-camx-border
        hover:bg-white/6
        hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.22)]
        transition-all duration-500 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="mb-5 text-camx-cyan"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-12 w-12 drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]" />
        </motion.div>

        <h4
          className="mb-3 text-xl font-semibold tracking-tight text-camx-cyan"
          style={{ transform: "translateZ(30px)" }}
        >
          {service.title}
        </h4>

        <p
          className="text-camx-text/80 leading-relaxed text-sm md:text-base"
          style={{ transform: "translateZ(20px)" }}
        >
          {service.description}
        </p>
      </motion.div>
    </TiltCard>
  );
}
