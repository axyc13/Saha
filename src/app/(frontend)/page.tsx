import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/home/Hero";
import AboutUs from "@/src/components/home/AboutUs";
import Services from "@/src/components/home/Services";
import Insights from "@/src/components/home/Insights";
import "./globals.css";

export default async function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Insights />
      <Footer />
    </div>
  );
}
