"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">
            Ready to secure your property? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Call */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20 transition group">
            <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>

          {/* Email */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20 transition group">
            <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-400">info@camx.com</p>
          </div>

          {/* Address */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20 transition group">
            <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-400">123 Security St, Your City</p>
          </div>
        </div>
      </div>
    </section>
  );
}
