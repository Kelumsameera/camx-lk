"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Camera,
  Shield,
  Lock,
  Eye,
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

/* ---------------- Services Data ---------------- */
const DATA = {
  security: [
    {
      icon: Camera,
      title: "CCTV Installation",
      description:
        "Indoor & outdoor CCTV systems with proper placement and clean installation.",
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
        "Affordable security planning based on property layout and risks.",
    },
    {
      icon: Eye,
      title: "Monitoring & Support",
      description:
        "Reliable after-installation assistance and troubleshooting.",
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description:
        "Low-cost servicing, cleaning, and long-term system care.",
    },
    {
      icon: Users,
      title: "Customer Training",
      description:
        "Simple training to use systems confidently without complexity.",
    },
  ],

  it: [
    {
      icon: Laptop,
      title: "Home Visit PC Repair",
      description:
        "On-site PC repair services at home or office.",
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
  ],

  mobile: [
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
        "Touch issues, lines, flickering & black screen fixes.",
    },
  ],
};

/* ---------------- Main Component ---------------- */
export default function Services() {
  const [active, setActive] = useState("security");

  /* Parallax effect */
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      <motion.div style={{ y }} className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Services</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Security, IT & mobile solutions you can trust
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {["security", "it", "mobile"].map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              active={active}
              onClick={() => setActive(tab)}
            />
          ))}
        </div>

        {/* Animated Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {DATA[active].map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Note */}
        {active === "mobile" && (
          <p className="mt-8 text-center text-yellow-400 text-sm">
            Currently, we offer display replacement services only.
          </p>
        )}

      </motion.div>
    </section>
  );
}

/* ---------------- Tab Button ---------------- */
function TabButton({ label, active, onClick }) {
  const isActive = active === label;

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-full border transition font-medium
        ${
          isActive
            ? "bg-cyan-500 text-black border-cyan-400"
            : "border-white/20 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
        }`}
    >
      {label.toUpperCase()}
    </motion.button>
  );
}



function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <TiltCard>
      <motion.div
        className="group relative rounded-2xl border border-white/10 
        bg-white/5 p-8 backdrop-blur-md 
        hover:bg-white/10 hover:shadow-2xl 
        hover:shadow-cyan-500/30 transition"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.04 }}
      >
        {/* ICON – FLOATING */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="mb-4 text-cyan-400"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Icon className="h-12 w-12 drop-shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
        </motion.div>

        {/* TITLE */}
        <h3
          className="mb-3 text-xl font-bold"
          style={{ transform: "translateZ(30px)" }}
        >
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="text-gray-400"
          style={{ transform: "translateZ(20px)" }}
        >
          {service.description}
        </p>
      </motion.div>
    </TiltCard>
  );
}
