import Link from 'next/link'
import Head from 'next/head'

export default function HomePage() {
  const brands = [
    'Hikvision',
    'EZVIZ',
    'TVT',
    'Tiandy',
    'Tuya',
    'Smart Life',
    'PGST',
  ]

  const features = [
    {
      title: 'Professional Installation',
      description: 'Expert installation services by certified technicians ensuring optimal system performance.',
      icon: '🔧',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services for your peace of mind.',
      icon: '🛡️',
    },
    {
      title: 'Premium Brands',
      description: 'We work with leading security brands to deliver reliable and cutting-edge solutions.',
      icon: '⭐',
    },
  ]

  return (
    <>
      <Head>
        <title>CAMX Secure - Professional Security Solutions in Sri Lanka</title>
        <meta name="description" content="Leading provider of CCTV systems, alarm systems, and access control solutions in Sri Lanka." />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="flex flex-col items-center text-center gap-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Professional
                <span className="block text-primary-green">Security Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl">
                CCTV • Alarm Systems • Access Control
              </p>
              <p className="text-lg text-gray-500 max-w-2xl">
                Protecting what matters most with cutting-edge security technology and expert installation services across Sri Lanka.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary-green text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-transparent border-2 border-primary-blue text-primary-blue text-lg font-semibold rounded-lg hover:bg-primary-blue hover:text-white transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-dark-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Why Choose <span className="text-primary-green">CAMX Secure</span>
            </h2>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-dark-bg border border-dark-border rounded-xl lg:w-1/3"
                >
                  <div className="text-6xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-blue">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Trusted <span className="text-primary-blue">Brands</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-8 py-4 bg-dark-card border border-dark-border rounded-lg hover:border-primary-green transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-300">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-dark-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Secure Your Property?
              </h2>
              <p className="text-xl text-gray-400">
                Contact us today for a free consultation and quote
              </p>
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-green text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-colors mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}