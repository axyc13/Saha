import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/careers/Hero";
import "../globals.css";

export default async function CareersPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
