import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/services/Hero";
import ServiceSection from "@/src/components/services/ServiceSection";
import "../globals.css";

export default async function ServicesPage() {
  return (
    <div>
      <Header />
      <Hero />
      <ServiceSection />
      <Footer />
    </div>
  );
}
