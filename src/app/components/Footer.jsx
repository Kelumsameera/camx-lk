"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 py-10 px-4">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

            {/* Company Info */}
            <div className="flex flex-col gap-4">
              <img
                src="/logo.png"
                alt="CAMX Secure Logo"
                className="h-20 w-auto object-contain"
              />

              <p className="text-gray-300 text-sm">
                Professional security solutions provider in Sri Lanka.
              </p>
              <p className="text-gray-400 text-sm">
                Founded by Kalana Kavinda Gamage
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                {[
                  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
                  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
                  { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
                  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="backdrop-blur-md bg-white/5 border border-white/10
                               p-3 rounded-lg text-gray-400
                               hover:text-green-400 hover:bg-white/10
                               hover:border-green-500/50
                               hover:shadow-lg hover:shadow-green-500/20
                               transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h3 className="text-green-400 font-semibold text-lg mb-2">
                Contact
              </h3>

              <a
                href="tel:+94722400123"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
              >
                <div className="bg-white/5 border border-white/10 p-2 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                +94 72 240 0123
              </a>

              <a
                href="mailto:info@camx.lk"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
              >
                <div className="bg-white/5 border border-white/10 p-2 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                info@camx.lk
              </a>

              <a
                href="https://camx.lk"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
              >
                <div className="bg-white/5 border border-white/10 p-2 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                camx.lk
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-3">
              <h3 className="text-green-400 font-semibold text-lg mb-2">
                Location
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                187/B/1 Colombo–Horana Road,<br />
                Bokundara, Piliyandala,<br />
                Sri Lanka
              </p>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CAMX Secure. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="/" className="text-gray-400 hover:text-green-400">Home</a>
              <a href="/services" className="text-gray-400 hover:text-green-400">Services</a>
              <a href="/about" className="text-gray-400 hover:text-green-400">About</a>
              <a href="/contact" className="text-gray-400 hover:text-green-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/94722400123"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-60" />
          <div className="relative bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl shadow-green-500/50 hover:scale-110 transition">
            <FaWhatsapp className="w-7 h-7 text-white" />
          </div>
        </div>
      </a>
    </>
  );
}
