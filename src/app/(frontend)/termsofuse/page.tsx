import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/terms/Hero";
import Content from "@/src/components/terms/Content";
import "../globals.css";

export default async function TermsPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
