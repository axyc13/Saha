import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Services from "@/src/components/home/Services";
import Insights from "@/src/components/home/Insights";
import "./globals.css";
import HeroToAboutScroll from "@/src/components/home/HeroToAboutScroll";

export default async function HomePage() {
  return (
    <div>
      <Header />
      <HeroToAboutScroll />
      <Services />
      <Insights />
      <Footer />
    </div>
  );
}
