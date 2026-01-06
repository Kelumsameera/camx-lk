"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* ---------------- 3D Tilt Wrapper ---------------- */
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
          e.currentTarget.style.transform =
            "rotateX(0deg) rotateY(0deg)";
        }}
        className="transition-transform duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <Head>
        <title>About Us - CAMX Secure</title>
        <meta
          name="description"
          content="Learn about CAMX Secure, Sri Lanka's trusted provider of professional security solutions."
        />
      </Head>

      <main className="pt-20 min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">

        {/* Glow Background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 blur-[140px] rounded-full" />

        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="py-20 text-center relative z-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold">
            About{" "}
            <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              CAMX Secure
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Your trusted partner in security solutions
          </p>
        </motion.section>

        {/* CONTENT */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-12 relative z-10"
        >
          <div className="max-w-4xl mx-auto px-6 space-y-8">

            {/* WHO WE ARE */}
            <motion.div variants={fadeUp}>
              <TiltCard>
                <div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 
                  rounded-2xl p-8 shadow-2xl shadow-black/40
                  hover:shadow-cyan-500/30 transition"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <h2
                    className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-4"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    Who We Are
                  </h2>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    CAMX Secure is a leading provider of professional security
                    solutions in Sri Lanka. Founded by Kalana Kavinda Gamage, we
                    specialize in delivering comprehensive security systems that
                    protect what matters most to our clients.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed mt-4">
                    With years of experience in the security industry, we have
                    built a reputation for excellence, reliability, and
                    innovation. Our certified technicians ensure every
                    installation meets the highest standards of quality and
                    performance.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* MISSION */}
            <motion.div variants={fadeUp}>
              <TiltCard>
                <div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 
                  rounded-2xl p-8 shadow-2xl shadow-black/40
                  hover:shadow-green-500/30 transition"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <h2 className="text-2xl lg:text-3xl font-bold text-green-400 mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our mission is to provide state-of-the-art security solutions
                    that give our clients peace of mind. We believe everyone
                    deserves to feel safe in their homes and businesses, and we
                    deliver that through cutting-edge technology and exceptional
                    service.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* WHY CHOOSE US */}
            <motion.div variants={fadeUp}>
              <TiltCard>
                <div
                  className="backdrop-blur-xl bg-white/5 border border-white/10 
                  rounded-2xl p-8 shadow-2xl shadow-black/40
                  hover:shadow-cyan-500/30 transition"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <h2 className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-6">
                    Why Choose Us
                  </h2>

                  <div className="space-y-5">
                    <Feature
                      title="Professional Excellence"
                      desc="Certified technicians with extensive industry experience ensure flawless installation."
                    />
                    <Feature
                      title="Premium Brands"
                      desc="We partner with leading brands like Hikvision, EZVIZ, TVT, Tiandy, and more."
                    />
                    <Feature
                      title="Comprehensive Support"
                      desc="24/7 technical support and maintenance services."
                    />
                    <Feature
                      title="Reliability"
                      desc="Solutions built to last, providing consistent protection you can depend on."
                    />
                  </div>
                </div>
              </TiltCard>
            </motion.div>

          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20 relative z-10"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-2xl shadow-black/40">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Let's Work Together
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Ready to secure your property with the best in the business?
              </p>

              <Link
                href="/contact"
                className="inline-block mt-8 px-10 py-4 rounded-lg 
                bg-linear-to-r from-green-500 to-blue-500 
                text-white text-lg font-semibold 
                hover:scale-105 transition shadow-lg shadow-green-500/30"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </>
  );
}

/* ---------- Small Helper ---------- */
function Feature({ title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-green-400 text-2xl">✓</span>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
