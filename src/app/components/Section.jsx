"use client";

import { CheckCircle, Award, Users, Shield, Clock } from "lucide-react";

export default function Section() {
  const features = [
    "High-definition 4K cameras",
    "Night vision technology",
    "Motion detection alerts",
    "Cloud storage solutions",
    "Mobile app access",
    "Weatherproof equipment",
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/20 bg-linear-to-br from-blue-500/10 to-cyan-500/10 p-12 backdrop-blur-md">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Content */}
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Why Choose{" "}
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  CamX?
                </span>
              </h2>

              <p className="mb-8 text-xl text-gray-400">
                Industry-leading technology combined with exceptional service
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 shrink-0 text-cyan-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-2 gap-6">
              <FeatureCard
                icon={Award}
                title="Certified"
                desc="Licensed & insured professionals"
              />

              <FeatureCard
                icon={Users}
                title="Expert Team"
                desc="Skilled technicians at your service"
              />

              <FeatureCard
                icon={Shield}
                title="Warranty"
                desc="2-year comprehensive coverage"
              />

              <FeatureCard
                icon={Clock}
                title="24/7 Support"
                desc="Always here when you need us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Feature Card ---------------- */

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
      <Icon className="mb-4 h-12 w-12 text-cyan-400 transition-transform group-hover:scale-110" />
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
