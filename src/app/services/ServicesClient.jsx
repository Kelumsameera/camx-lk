"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* Tilt Card */
function TiltCard({ children }) {
  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          e.currentTarget.style.transform = `
            rotateX(${-y / 20}deg)
            rotateY(${x / 20}deg)
          `;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
        }}
        className="transition-transform duration-300"
      >
        {children}
      </motion.div>
    </div>
  );
}


export default function ServicesClient() {
  const services = [
    {
      title: "CCTV Installation Services",
      description:
        "Professional CCTV installation for homes, shops and businesses across Colombo, Piliyandala, Kesbewa, Horana and Bandaragama.",
      features: [
        "HD & 4K Cameras",
        "Night Vision",
        "Mobile Remote Viewing",
        "Motion Detection Alerts",
        "Indoor & Outdoor Systems",
      ],
    },
    {
      title: "Alarm & Intrusion Systems",
      description:
        "Advanced alarm systems with real-time alerts and intrusion detection for complete property protection.",
      features: [
        "Door & Window Sensors",
        "Motion Detectors",
        "Panic Buttons",
        "Mobile Alerts",
      ],
    },
    {
      title: "Access Control Systems",
      description:
        "Biometric, card, keypad and smart lock systems to manage and monitor access securely.",
      features: [
        "Fingerprint Access",
        "RFID Card Systems",
        "Smart Locks",
        "Access Logs",
      ],
    },
    {
      title: "System Maintenance",
      description:
        "Affordable CCTV servicing, cleaning, upgrades and long-term technical support.",
      features: [
        "Routine Health Checks",
        "Camera Cleaning",
        "Software Updates",
        "Emergency Support",
      ],
    },
  ];


 return (
    <main className="pt-24 bg-linear-to-br from-gray-900 via-slate-900 to-black text-white">

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="py-16 text-center"
      >
        <h1 className="text-4xl lg:text-6xl font-bold">
          CCTV Installation &{" "}
          <span className="text-cyan-400">Security Services</span>
        </h1>
        <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto">
          Trusted CCTV installers across Sri Lanka
        </p>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 space-y-10 pb-12"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={fadeUp}>
            <TiltCard>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl text-cyan-400 font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA — NO EXTRA GAP */}
      <div className="pt-12 pb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need CCTV Installation in Your Area?
        </h2>
        <p className="text-gray-400 mb-6">
          Contact CAMX Secure for a free consultation.
        </p>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-linear-to-r from-cyan-500 to-blue-500 
          rounded-lg text-white font-semibold hover:scale-105 transition"
        >
          Get Free Consultation
        </Link>
      </div>
    </main>
  );
}
