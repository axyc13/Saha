import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/privacy/Hero";
import Content from "@/src/components/privacy/Content";
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
