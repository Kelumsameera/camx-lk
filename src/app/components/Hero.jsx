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
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
              Protect What{" "}
              <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Matters Most
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
              AI-powered CCTV security, real-time monitoring, and next-generation{" "}
              <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                surveillance systems
              </span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="bg-linear-to-r from-green-500 to-blue-500 
                px-7 py-3 rounded-lg font-medium text-base sm:text-lg
                shadow-lg shadow-green-500/40
                hover:scale-105 transition-all"
              >
                Get Protected
              </button>

              <button
                className="backdrop-blur-md bg-white/10 
                border border-white/20 
                px-7 py-3 rounded-lg 
                hover:bg-white/20 hover:scale-105 
                transition-all font-medium text-base sm:text-lg"
              >
                View Solutions
              </button>
            </div>
          </motion.div>

          <div className="h-[280px] sm:h-[360px] lg:h-[520px]">
            <MobileModel />
          </div>



        </div>
      </div>
    </section>
  );
}
