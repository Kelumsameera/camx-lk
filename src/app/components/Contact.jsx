"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className=" px-4 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative  ">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Contact  <span className="text-cyan-400">Us</span>
          </h2>
          <p className="text-lg text-gray-400">
            Let's Build Something Secure Together
          </p>
        </div>
        {/* Heading */}
        

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
                  <p className="text-sm text-gray-300">Available Mon-Fri, 9AM-6PM EST</p>
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
                  <p className="text-sm text-gray-300">We'll respond within 24 hours</p>
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
                  <p className="text-2xl font-bold text-cyan-400 mb-2">187/B, 1 Colombo - Horana Rd, </p>
                  <p className="text-sm text-gray-300">Bokundara,Piliyandala</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126750.55934604845!2d79.83781178238414!3d6.895988566833155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8410a125f3%3A0xae041b5d6455618d!2sCamX.lk!5e0!3m2!1sen!2slk!4v1767783854953!5m2!1sen!2slk"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
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