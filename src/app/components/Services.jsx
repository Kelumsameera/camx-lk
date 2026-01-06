"use client";

import { Camera, Eye, Shield, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "Installation",
      description:
        "Professional CCTV camera installation with strategic placement for maximum coverage",
    },
    {
      icon: Eye,
      title: "Monitoring",
      description:
        "24/7 remote monitoring services to keep your property secure around the clock",
    },
    {
      icon: Shield,
      title: "Maintenance",
      description:
        "Regular maintenance and support to ensure your security system runs flawlessly",
    },
    {
      icon: Clock,
      title: "Emergency Response",
      description:
        "Rapid response team available for any security concerns or system issues",
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Services</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Comprehensive security solutions tailored to your needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Service Card ---------------- */

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="mb-4 text-cyan-400 transition-transform group-hover:scale-110">
        <Icon className="h-12 w-12" />
      </div>

      <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </div>
  );
}
