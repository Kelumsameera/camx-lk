"use client";

import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* 3D background is fixed globally */}
      <Hero3D />

      {/* Hero content ABOVE 3D */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Protect What{" "}
              <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Matters Most
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              AI-powered CCTV security, real-time monitoring, and next-generation
              surveillance systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-linear-to-r from-green-500 to-blue-500 px-8 py-4 rounded-lg shadow-lg shadow-green-500/40 hover:shadow-green-500/60 hover:scale-105 transition-all font-medium text-lg">
                Get Protected
              </button>

              <button className="backdrop-blur-md bg-white/10 border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 hover:scale-105 transition-all font-medium text-lg">
                View Solutions
              </button>
            </div>
          </div>

          {/* RIGHT SPACE (3D already visible behind) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
