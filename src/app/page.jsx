"use client";

import Header from "./components/Header";
import Hero3D from "./components/Hero3D";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactSection from "./components/Contact";
import Providers from "./components/Providers";
import Footer from "./components/Footer";

export default function CamXHomepage() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">

      {/* 🌌 FIXED BACKGROUND SVG */}
      <img
        src="/bg.svg"
        className="fixed top-20 left-1/2 -translate-x-1/2 
        w-full h-[80%] object-cover opacity-30 
        z-0 pointer-events-none"
        alt="Background"
      />

      {/* 🎥 GLOBAL 3D BACKGROUND (ONCE ONLY) */}
      <Hero3D />

      {/* 🔝 HEADER */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* 📦 MAIN CONTENT */}
      <main className="relative z-10">

        {/* HERO */}
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32">
          <Services />
        </section>

        {/* PROVIDERS */}
        <section id="providers" className="py-32">
          <Providers />
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32">
          <ContactSection />
        </section>

      </main>

      {/* 👣 FOOTER */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
