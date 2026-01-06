"use client";

import Header from "./components/Header";
import Hero3D from "./components/Hero3D";
import Services from "./components/Services";
import ContactSection from "./components/Contact";
import Providers from "./components/Providers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function CamXHomepage() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">

      {/* 🌌 Background image */}
      <img
        src="/bg.png"
        className="fixed top-20 left-1/2 -translate-x-1/2 w-1/2 h-[80%] object-cover opacity-30 z-0 pointer-events-none"
        alt="Background"
      />

      {/* 🎥 3D BACKGROUND */}
      <Hero3D />

      {/* 🔝 HEADER */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* 📦 CONTENT */}
      <main className="relative z-10">

        {/* HERO */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="min-h-screen flex items-center justify-center"
        >
          <Services />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <ContactSection />
        </section>

        {/* PROVIDERS */}
        <section
          id="providers"
          className="min-h-screen flex items-center justify-center"
        >
          <Providers />
        </section>

      </main>

      {/* 👣 FOOTER */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
