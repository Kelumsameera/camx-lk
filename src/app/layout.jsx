import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
export const metadata = {
  title: {
    default: "CCTV Installation Sri Lanka | CAMX Secure",
    template: "%s | CAMX Secure",
  },
  description:
    "Professional CCTV installation in Sri Lanka including Colombo, Piliyandala, Kesbewa, Horana, Bandaragama and Boralesgamuwa. Affordable CCTV solutions for homes and businesses with warranty.",
  keywords: [
    "CCTV installation Sri Lanka",
    "CCTV installation Colombo",
    "CCTV installation Piliyandala",
    "CCTV installation Kesbewa",
    "CCTV installation Horana",
    "CCTV installation Bandaragama",
    "CCTV installation Boralesgamuwa",
    "CCTV camera prices Sri Lanka",
    "security cameras Sri Lanka",
    "CCTV camara",
    "CCTV camera price Sri Lanka",
    "aduwata CCTV camera ",
    "cctv camera",
    "cctv camera",
    "cctv camera price in sri lanka",
    "cctv camera png",
    "cctv camera colombo",
    "cctv camera pannipitiya",
    "cctv cameras in sri lanka",
    "cctv camera installation",
    "cctv camera price",
    "cctv camera logo",
    "cctv camera shop near me",
  ],
  metadataBase: new URL("https://camx.lk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CCTV Installation Sri Lanka | CAMX Secure",
    description:
      "Trusted CCTV installers in Sri Lanka. Professional CCTV solutions for homes and businesses with warranty.",
    url: "https://camx.lk",
    siteName: "CAMX Secure",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV Installation Sri Lanka | CAMX Secure",
    description:
      "Professional CCTV installation services in Colombo and surrounding areas.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script - async load */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DV09Q30PDC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DV09Q30PDC');
          `}
        </Script>
      </head>
      <body className="test-tailwind">
        {children}
        <GoogleAnalytics gaId="G-DV09Q30PDC" />

        {/* 🔹 Local Business Schema (Site-wide SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://camx.lk/#localbusiness",
              name: "CAMX Secure",
              url: "https://camx.lk",
              logo: "https://camx.lk/logo.png",
              image: "https://camx.lk/og-image.jpg",
              telephone: "+94722400123",
              address: {
                "@type": "PostalAddress",
                streetAddress: "187/B/1 Colombo–Horana Road",
                addressLocality: "Bokundara, Piliyandala",
                addressCountry: "LK",
              },
              areaServed: [
                "Colombo",
                "Piliyandala",
                "Kesbewa",
                "Horana",
                "Bandaragama",
                "Boralesgamuwa",
                "Bokundara",
              ],
              sameAs: [
                "https://www.facebook.com/camx.lk",
                "https://www.instagram.com/camx.lk",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Security Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CCTV Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Access Control Systems",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
