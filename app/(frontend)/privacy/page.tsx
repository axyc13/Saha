import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Hero from "@/app/components/privacy/Hero";
import Content from "@/app/components/privacy/Content";
import "../globals.css";

export default async function PrivacyPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
