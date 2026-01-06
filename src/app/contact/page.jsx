"use client";

import Head from "next/head";
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
            rotateX(${-y / 18}deg)
            rotateY(${x / 18}deg)
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

export default function ContactPage() {
  return (
    <>
      <Header />
      <Head>
        <title>Contact Us - CAMX Secure</title>
        <meta
          name="description"
          content="Get in touch with CAMX Secure for all your security solution needs."
        />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black text-white pt-20 relative overflow-hidden">

        {/* Glow Background */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/20 blur-[140px] rounded-full" />

        <main className="relative z-10">

          {/* HERO */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="py-20 text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold">
              Contact{" "}
              <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              We're here to help with all your security needs
            </p>
          </motion.section>

          {/* CONTENT */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-12"
          >
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">

              {/* INFO */}
              <motion.div variants={fadeUp} className="lg:w-1/2">
                <TiltCard>
                  <div
                    className="relative backdrop-blur-xl bg-white/5 border border-white/10 
                    rounded-2xl p-8 shadow-2xl shadow-black/40
                    hover:shadow-cyan-500/30 transition"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                      Get In Touch
                    </h2>

                    <p className="text-gray-400 mb-6">
                      Have questions or need a security consultation?
                    </p>

                    <div className="space-y-4 text-gray-300">
                      <div>
                        <span className="text-green-400 font-semibold">
                          Phone
                        </span>
                        <br /> 072 2 400 123
                      </div>
                      <div>
                        <span className="text-green-400 font-semibold">
                          Email
                        </span>
                        <br /> camxsecure@gmail.com
                      </div>
                      <div>
                        <span className="text-green-400 font-semibold">
                          Website
                        </span>
                        <br /> https://camx.lk
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>

              {/* FORM */}
              <motion.div variants={fadeUp} className="lg:w-1/2">
                <TiltCard>
                  <div
                    className="relative backdrop-blur-xl bg-white/5 border border-white/10 
                    rounded-2xl p-8 shadow-2xl shadow-black/40
                    hover:shadow-green-500/30 transition"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                      Send Us a Message
                    </h2>

                    <form className="space-y-4">
                      <input
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-green-400"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-green-400"
                      />
                      <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-green-400 resize-none"
                      />
                      <button className="w-full py-4 rounded-lg bg-linear-to-r from-green-500 to-blue-500 font-semibold hover:scale-[1.04] transition">
                        Send Message
                      </button>
                    </form>
                  </div>
                </TiltCard>
              </motion.div>

            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </>
  );
}
