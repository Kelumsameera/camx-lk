"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 relative overflow-hidden"
      aria-label="Contact CAMX Secure"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">

        {/* ===== SEO H1 ===== */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Contact CCTV Installation Experts in Colombo & Piliyandala
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Get in touch with <strong>CAMX Secure</strong> for professional{" "}
            <strong>
              CCTV installation services in Colombo, Piliyandala, Bokundara,
              Kesbewa, Boralesgamuwa, Horana and Bandaragama
            </strong>
            . Free consultation for homes, shops and offices across Sri Lanka.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          {/* LEFT */}
          <div className="space-y-6">

            {/* Phone */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2">
                    Call Our CCTV Installation Team
                  </h2>
                  <a
                    href="tel:+94722400123"
                    className="text-2xl font-bold text-cyan-400 block"
                  >
                    +94 72 240 0123
                  </a>
                  <p className="text-sm text-gray-400">
                    Colombo & suburbs • Mon–Sat 9AM–6PM
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2">
                    Email CCTV Installation Enquiries
                  </h2>
                  <a
                    href="mailto:info@camx.lk"
                    className="text-xl font-bold text-cyan-400 block"
                  >
                    info@camx.lk
                  </a>
                  <p className="text-sm text-gray-400">
                    We usually respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-1">
                    CCTV Service Office – Piliyandala
                  </h2>
                  <p className="text-cyan-400 font-semibold">
                    187/B, 1 Colombo–Horana Road
                  </p>
                  <p className="text-sm text-gray-400">
                    Bokundara, Piliyandala – Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – STATIC MAP */}
          <a
            href="https://www.google.com/maps?q=CAMX+Secure+Piliyandala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CAMX Secure location on Google Maps"
            className="relative block rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src="/maps/camx-location.webp"
              alt="CAMX Secure CCTV Installation Office in Piliyandala Sri Lanka"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="px-6 py-3 bg-black/60 backdrop-blur-md text-white rounded-full font-semibold">
                View on Google Maps
              </span>
            </div>
          </a>
        </div>

        {/* ===== CTA ===== */}
        <div className="backdrop-blur-xl bg-cyan-500/10 border border-cyan-500/20 p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need CCTV Installation in Colombo or Nearby Areas?
          </h2>
          <p className="text-gray-400 mb-8">
            Schedule a <strong>free CCTV consultation</strong> with our security experts.
          </p>
          <a
            href="tel:+94722400123"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:shadow-lg"
          >
            Call Now for Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* ===== LocalBusiness Schema ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://camx.lk/#contact",
            name: "CAMX Secure",
            url: "https://camx.lk",
            telephone: "+94722400123",
            email: "info@camx.lk",
            image: "https://camx.lk/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "187/B, 1 Colombo–Horana Road",
              addressLocality: "Piliyandala",
              addressCountry: "LK"
            },
            areaServed: [
              "Colombo",
              "Piliyandala",
              "Kesbewa",
              "Boralesgamuwa",
              "Horana",
              "Bandaragama",
              "Bokundara"
            ],
            openingHours: "Mo-Sa 09:00-18:00",
            priceRange: "$$"
          }),
        }}
      />
    </section>
  );
}
