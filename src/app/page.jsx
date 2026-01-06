"use client";

import Header from "./components/Header";
import Hero3D from "./components/Hero3D";
import Section from "./components/Section";
import Services from "./components/Services";
import ContactSection from "./components/Contact";
import Providers from "./components/Providers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function CamXHomepage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black text-white">
      
      {/* 🔥 Fixed 3D background */}
      <Header />

      {/* Content ABOVE 3D */}
      <div className="flex w-full justify-center" >
        
        <div className="relative z-0">
          <Hero3D />

        {/* HERO SECTION */}
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

        
      </div>
        </div>
        <Footer />
    </div>
  );
}
