import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Head>
        <title>About Us - CAMX Secure</title>
        <meta
          name="description"
          content="Learn about CAMX Secure, Sri Lanka's trusted provider of professional security solutions."
        />
      </Head>

      <main className="pt-20 min-h-screen bg-linear-to-brrom-gray-900 via-slate-900 to-black text-white">
        {/* HERO */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold">
              About{" "}
              <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                CAMX Secure
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Your trusted partner in security solutions
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 space-y-8">

            {/* WHO WE ARE */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
              <h2 className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                CAMX Secure is a leading provider of professional security
                solutions in Sri Lanka. Founded by Kalana Kavinda Gamage, we
                specialize in delivering comprehensive security systems that
                protect what matters most to our clients.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                With years of experience in the security industry, we have built
                a reputation for excellence, reliability, and innovation. Our
                certified technicians ensure every installation meets the
                highest standards of quality and performance.
              </p>
            </div>

            {/* MISSION */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-400 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to provide state-of-the-art security solutions
                that give our clients peace of mind. We believe everyone
                deserves to feel safe in their homes and businesses, and we
                deliver that through cutting-edge technology and exceptional
                service.
              </p>
            </div>

            {/* WHY CHOOSE US */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
              <h2 className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-6">
                Why Choose Us
              </h2>

              <div className="space-y-5">
                <Feature
                  title="Professional Excellence"
                  desc="Certified technicians with extensive industry experience ensure flawless installation."
                />
                <Feature
                  title="Premium Brands"
                  desc="We partner with leading brands like Hikvision, EZVIZ, TVT, Tiandy, and more."
                />
                <Feature
                  title="Comprehensive Support"
                  desc="24/7 technical support and maintenance services."
                />
                <Feature
                  title="Reliability"
                  desc="Solutions built to last, providing consistent protection you can depend on."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-2xl shadow-black/40">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Let's Work Together
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Ready to secure your property with the best in the business?
              </p>

              <Link
                href="/contact"
                className="inline-block mt-8 px-10 py-4 rounded-lg bg-linear-to-r from-green-500 to-blue-500 text-white text-lg font-semibold hover:scale-105 transition shadow-lg shadow-green-500/30"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      
    </>
  );
}

/* ---------- Small Helper ---------- */

function Feature({ title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-green-400 text-2xl">✓</span>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
