"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Camera, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

            {/* Company Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                {/* <div className="bg-linear-to-br from-green-500 to-blue-500 p-2 rounded-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div> */}
                <img src="/logo.png" className="flex object-cover h-20"></img>
                <div>
                  {/* <span className="text-2xl font-bold text-green-400">CAMX</span>
                  <span className="text-2xl font-bold text-blue-400"> Secure</span> */}
                </div>
              </div>

              <p className="text-gray-300 text-sm">
                Professional security solutions provider in Sri Lanka.
              </p>
              <p className="text-gray-400 text-sm">
                Founded by Kalana Kavinda Gamage
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                {[
                  { href: "https://facebook.com", icon: <FaFacebookF /> },
                  { href: "https://instagram.com", icon: <FaInstagram /> },
                  { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
                  { href: "https://youtube.com", icon: <FaYoutube /> },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                href="tel:0722400123"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
              >
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-2 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                072 2 400 123
              </a>

              <a
                href="mailto:camxsecure@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
              >
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-2 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                info@camx.lk
              </a>

              <a
                href="https://camx.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
              >
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-2 rounded-lg">
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
              <div className="text-gray-300 text-sm leading-relaxed">
                187/B/1 Colombo–Horana Road,<br />
                Bokundara, Piliyandala,<br />
                Sri Lanka
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CAMX Secure. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#home" className="text-gray-400 hover:text-green-400">
                Home
              </a>
              <a href="#services" className="text-gray-400 hover:text-green-400">
                Services
              </a>
              <a href="#about" className="text-gray-400 hover:text-green-400">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-green-400">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/94722400123"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          <div className="relative bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl shadow-green-500/50 hover:scale-110 transition">
            <FaWhatsapp className="w-7 h-7 text-white" />
          </div>
        </div>
      </a>
    </>
  );
}
