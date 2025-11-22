import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Hero from "@/app/components/terms/Hero";
import Content from "@/app/components/terms/Content";
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
