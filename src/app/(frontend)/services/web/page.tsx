import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/services/web/Hero";
import "../../globals.css";
import Features from "@/src/components/services/web/Features";
import CTA from "@/src/components/services/web/CTA";
import Examples from "@/src/components/services/web/Examples";
import Process from "@/src/components/services/web/Process";

export default async function WebServicePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Examples />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
