import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "CCTV Installation & Security Services in Sri Lanka | CAMX Secure",
  description:
    "Professional CCTV installation services in Colombo, Piliyandala, Kesbewa, Horana and Bandaragama. Trusted security solutions by CAMX Secure.",
  alternates: {
    canonical: "https://camx.lk/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesClient />
      <Footer />
    </>
  );
}
