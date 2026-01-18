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

      {/* 🌌 FIXED BACKGROUND SVG (CLS SAFE) */}
      <img
        src="/bg.svg"
        width={1920}
        height={1080}
        className="fixed top-20 left-1/2 -translate-x-1/2 
        w-full h-[80%] object-cover opacity-30 
        z-0 pointer-events-none"
        alt=""
        aria-hidden="true"
      />

      {/* 🎥 GLOBAL 3D BACKGROUND (RESERVED SPACE) */}
      <div className="fixed inset-0 z-0 pointer-events-none min-h-screen">
        <Hero3D />
      </div>

      {/* 🔝 HEADER */}
      <header className="relative z-20">
        <Header />
      </header>

      {/* 📦 MAIN CONTENT */}
      <main className="relative z-10">

        {/* HERO */}
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        {/* SERVICES */}
        <section id="services" className="py-2">
          <Services />
        </section>

        {/* PROVIDERS */}
        <section id="providers">
          <Providers />
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-2">
          <ContactSection />
        </section>

      </main>

      {/* 👣 FOOTER */}
      <footer className="relative z-10">
        <Footer />
      </footer>

    </div>
  );
}
