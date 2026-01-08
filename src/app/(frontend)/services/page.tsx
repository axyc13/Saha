import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/services/Hero";
import "../globals.css";
import Finance from "@/src/components/services/Finance";
import ULux from "@/src/components/services/ULux";
import Web from "@/src/components/services/Web";

export default async function ServicesPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Finance />
      <ULux />
      <Web />
      <Footer />
    </div>
  );
}
