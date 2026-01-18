"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 relative overflow-hidden"
      aria-label="Contact CAMX Secure"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">

        {/* ===== SEO Heading ===== */}
        <div className="mb-16 text-center">
          {/* ONE H1 ONLY */}
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

        {/* ===== Contact Grid ===== */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          {/* LEFT: Contact Methods */}
          <div className="space-y-6">

            {/* Phone */}
            <div className="group relative backdrop-blur-xl bg-white/2 border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2 text-white">
                    Call Our CCTV Installation Team
                  </h2>
                  <a
                    href="tel:+94722400123"
                    className="text-2xl font-bold text-cyan-400 mb-2 block"
                  >
                    +94 72 240 0123
                  </a>
                  <p className="text-sm text-gray-300">
                    Colombo & suburbs • Mon–Sat 9AM–6PM
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>

            {/* Email */}
            <div className="group relative backdrop-blur-xl bg-white/2 border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2 text-white">
                    Email CCTV Installation Enquiries
                  </h2>
                  <a
                    href="mailto:info@camx.lk"
                    className="text-2xl font-bold text-cyan-400 mb-2 block"
                  >
                    info@camx.lk
                  </a>
                  <p className="text-sm text-gray-300">
                    We usually respond within 24 hours
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>

            {/* Address */}
            <div className="group relative backdrop-blur-xl bg-white/2 border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2 text-white">
                    CCTV Service Office – Piliyandala
                  </h2>
                  <p className="text-lg font-bold text-cyan-400 mb-1">
                    187/B, 1 Colombo–Horana Road
                  </p>
                  <p className="text-sm text-gray-300">
                    Bokundara, Piliyandala – Sri Lanka
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* RIGHT: Google Map */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full min-h-105 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/2">
              <iframe
                title="CAMX Secure CCTV Installation Location - Piliyandala"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126750.55934604845!2d79.83781178238414!3d6.895988566833155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8410a125f3%3A0xae041b5d6455618d!2sCamX.lk!5e0!3m2!1sen!2slk!4v1767783854953!5m2!1sen!2slk"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="relative backdrop-blur-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-12 rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Need CCTV Installation in Colombo, Piliyandala or Nearby Areas?
            </h2>
            <p className="text-gray-400 mb-8">
              Schedule a <strong>free CCTV consultation</strong> with our
              security experts and protect what matters most.
            </p>
            <a
              href="tel:+94722400123"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Call Now for Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
