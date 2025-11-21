import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Hero from "@/app/components/careers/Hero";
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
