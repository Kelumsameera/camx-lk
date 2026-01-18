"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav
      className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/5 border-b border-white/10"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* ✅ LOGO (CLS + SEO FIXED) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="CAMX Secure CCTV Installation Sri Lanka"
              width={176}
              height={70}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition ${
                  isActive(link.path)
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center
            bg-linear-to-r from-blue-500 to-cyan-500
            px-6 py-2 rounded-lg font-medium text-white
            hover:shadow-lg hover:shadow-cyan-500/50 transition"
            aria-label="Get CCTV installation quote"
          >
            Get Quote
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-300"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {sidebarOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/5 border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`block font-medium transition ${
                  isActive(link.path)
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setSidebarOpen(false)}
              className="block text-center bg-linear-to-r from-blue-500 to-cyan-500
              px-6 py-2 rounded-lg font-medium text-white"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
