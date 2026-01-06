import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ServicesPage() {
  const services = [
    {
      title: "CCTV Systems",
      description:
        "High-definition surveillance systems with advanced features including night vision, motion detection, and remote monitoring capabilities. Perfect for homes, offices, and commercial spaces.",
      features: [
        "HD & 4K Camera Options",
        "Night Vision Technology",
        "Remote Mobile Access",
        "Cloud Storage Solutions",
        "Motion Detection Alerts",
      ],
    },
    {
      title: "Alarm Systems",
      description:
        "Advanced intrusion detection systems designed to protect your property 24/7 with immediate alerts and rapid response capabilities.",
      features: [
        "Door & Window Sensors",
        "Motion Detectors",
        "Glass Break Sensors",
        "Panic Buttons",
        "Mobile Notifications",
      ],
    },
    {
      title: "Access Control Systems",
      description:
        "Modern access management solutions including biometric readers, card access, and smart locks to control and monitor entry.",
      features: [
        "Fingerprint Recognition",
        "Card Access Systems",
        "Smart Lock Integration",
        "Visitor Management",
        "Access Logs & Reports",
      ],
    },
    {
      title: "Installation Services",
      description:
        "Professional installation by certified technicians ensuring optimal placement and system configuration.",
      features: [
        "Site Assessment",
        "Professional Mounting",
        "Cable Management",
        "System Configuration",
        "User Training",
      ],
    },
    {
      title: "Maintenance Services",
      description:
        "Comprehensive maintenance and support services to keep your security systems running at peak performance.",
      features: [
        "Regular System Checks",
        "Software Updates",
        "Hardware Repairs",
        "Emergency Support",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <>
    <Header />
      <Head>
        <title>Our Services - CAMX Secure</title>
        <meta
          name="description"
          content="Comprehensive security solutions including CCTV, alarm systems, access control, installation, and maintenance services."
        />
      </Head>

      <main className="pt-20 min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black text-white">
        {/* HERO */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Our{" "}
              <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to your needs
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40 hover:border-green-400/40 transition"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  Key Features
                </h3>

                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-2xl shadow-black/40">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Need a Custom Solution?
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Contact us for a personalized security assessment and quote
              </p>

              <Link
                href="/contact"
                className="inline-block mt-8 px-10 py-4 rounded-lg bg-linear-to-r from-green-500 to-blue-500 text-white text-lg font-semibold hover:scale-105 transition shadow-lg shadow-green-500/30"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      
    </>
  );
}
