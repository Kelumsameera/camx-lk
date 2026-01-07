"use client";

import MobileModel from "./MobileModel";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – TEXT + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Protect What{" "}
              <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Matters Most
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              AI-powered CCTV security, real-time monitoring, and next-generation{" "}
              <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                surveillance systems
              </span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onMouseEnter={() => window.__CAMERA_ZOOM__?.in()}
                onMouseLeave={() => window.__CAMERA_ZOOM__?.out()}
                className="bg-linear-to-r from-green-500 to-blue-500 
                px-8 py-4 rounded-lg font-medium text-lg
                shadow-lg shadow-green-500/40
                hover:scale-105 transition-all"
              >
                Get Protected
              </button>

              <button
                onMouseEnter={() => window.__CAMERA_ZOOM__?.in()}
                onMouseLeave={() => window.__CAMERA_ZOOM__?.out()}
                className="backdrop-blur-md bg-white/10 
                border border-white/20 
                px-8 py-4 rounded-lg 
                hover:bg-white/20 hover:scale-105 
                transition-all font-medium text-lg"
              >
                View Solutions
              </button>
            </div>
          </motion.div>

          {/* RIGHT – 3D MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block h-[420px] lg:h-[520px]"
          >
            <MobileModel />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
