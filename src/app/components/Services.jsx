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
    title: "CCTV Installation Services",
    description:
      "Professional CCTV installation in Colombo, Piliyandala, Kesbewa, Boralesgamuwa, Horana and Bandaragama for homes and businesses.",
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    description:
      "Biometric, card, keypad and smart lock access control solutions.",
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
      "Affordable CCTV system servicing, cleaning and long-term support.",
  },
  {
    icon: Users,
    title: "Customer Training",
    description:
      "Easy guidance to confidently operate CCTV and security systems.",
  },
];

const IT_SERVICES = [
  {
    icon: Laptop,
    title: "Home Visit PC Repair",
    description:
      "On-site computer repair services for homes and offices.",
  },
  {
    icon: Settings,
    title: "PC Troubleshooting",
    description:
      "Fix slow systems, crashes and software issues.",
  },
  {
    icon: Monitor,
    title: "Software Installation",
    description:
      "Windows, drivers, antivirus and essential software setup.",
  },
  {
    icon: Wrench,
    title: "Hardware Diagnosis",
    description:
      "RAM, HDD/SSD and power supply fault detection.",
  },
];

const MOBILE_SERVICES = [
  {
    icon: Smartphone,
    title: "Screen Replacement",
    description:
      "Broken or cracked smartphone display replacement service.",
  },
  {
    icon: Smartphone,
    title: "Touch & Display Fix",
    description:
      "Touch issues, flickering, lines and black screen fixes.",
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

        {/* SEO H1 */}
        <div className="mb-20 text-left">
          <h1 className="mb-4 text-4xl md:text-5xl font-semibold text-white">
            CCTV Installation & Security Services in Colombo & Surrounding Areas
          </h1>

          <p className="w-full text-lg leading-relaxed text-gray-300">
            We provide professional <strong>CCTV installation services</strong> in
            Colombo, Piliyandala, Bokundara, Kesbewa, Boralesgamuwa, Horana and
            Bandaragama and nearby areas. Trusted security, IT and mobile solutions for homes,
            shops and offices across Sri Lanka.
          </p>

          <div className="mt-6 h-px w-40 bg-linear-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* 🔐 Security Section */}
        <Section
          title="Security & CCTV Installation Services in Sri Lanka"
          subtitle="Professional surveillance and protection solutions"
          services={SECURITY_SERVICES}
        />

        {/* Internal Links */}
        <div className="mb-24 text-center text-sm text-gray-400">
          CCTV installation areas we serve:&nbsp;
          <a href="/services/cctv-installation-colombo" className="text-cyan-400">Colombo</a>,{" "}
          <a href="/services/cctv-installation-piliyandala" className="text-cyan-400">Piliyandala</a>,{" "}
          <a href="/services/cctv-installation-kesbewa" className="text-cyan-400">Kesbewa</a>,{" "}
          <a href="/services/cctv-installation-boralesgamuwa" className="text-cyan-400">Boralesgamuwa</a>,{" "}
          <a href="/services/cctv-installation-horana" className="text-cyan-400">Horana</a>,{" "}
          <a href="/services/cctv-installation-bandaragama" className="text-cyan-400">Bandaragama</a>
        </div>

        {/* 💻 IT Section */}
        <Section
          title="IT & Computer Repair Services"
          subtitle="Reliable computer and software support"
          services={IT_SERVICES}
        />

        {/* 📱 Mobile Section */}
        <Section
          title="Mobile Repair Services"
          subtitle="Smartphone display and touch repairs"
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-cyan-400">
          {title}
        </h2>
        <p className="mt-3 text-gray-400">
          {subtitle}
        </p>
      </motion.div>

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

        <h3
          className="mb-3 text-xl font-semibold tracking-tight text-cyan-400"
          style={{ transform: "translateZ(30px)" }}
        >
          {service.title}
        </h3>

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
