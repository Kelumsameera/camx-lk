"use client";

import { motion } from "framer-motion";

export default function Providers() {
  const brands = [
    { name: "Hikvision", logo: "https://static.cdnlogo.com/logos/h/87/hikvision.svg" },
    { name: "Dahua", logo: "/dahua.svg" },
    { name: "EZVIZ", logo: "/ezviz.svg" },
    { name: "TP-Link", logo: "/tplink.svg" },
    { name: "Ubiquiti", logo: "/ubiquiti.svg" },
    { name: "Uniview", logo: "/uniview.svg" },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Our <span className="text-cyan-400">Trusted Providers</span>
          </h2>
          <p className="text-lg text-gray-400">
            Authorized brands we install & support
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={false}                 // ✅ SSR SAFE
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 object-contain transition"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
