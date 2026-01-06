"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className=" px-4 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative ">
        {/* Heading */}
        <div className="max-w-3xl mb-2">
          <div className="inline-block p-5 w-full text-center backdrop-blur-md bg-blue-900/10 border border-cyan-500/20 rounded-full ">
            <span className="text-white text-2xl p-1 font-medium">Contact Us</span>
          </div>
          <h2 className="text-6xl font-bold bg-linear-to-rrom-white to-gray-400 bg-clip-text text-transparent">
            Let's Build Something Secure Together
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ready to elevate your security infrastructure? Our team of experts is here to help you design the perfect solution.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Left - Contact Methods */}
          <div className="space-y-6">
            {/* Call */}
            <div className="group relative backdrop-blur-xl bg-white/2 border border-white/10 p-8 rounded-3xl hover:bg-white/5sition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white">Call Us Directly</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-2">+94 (72) 400-123</p>
                  <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-6PM EST</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>

            {/* Email */}
            <div className="group relative backdrop-blur-xl bg-white/2 border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white">Email Us</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-2">info@camx.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>

            {/* Address */}
            <div className="group relative backdrop-blur-xl bg-white/2 border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white">Visit Our Office</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-2">123 Security St</p>
                  <p className="text-sm text-gray-500">Your City, ST 12345</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full min-h-125 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/2">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=123%20Security%20St%20Your%20City&output=embed"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative backdrop-blur-xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-12 rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-8">
              Schedule a free consultation with our security experts and discover how we can protect what matters most to you.
            </p>
            <button className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}