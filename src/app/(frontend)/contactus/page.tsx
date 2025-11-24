import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/contact/Hero";
import "../globals.css";

export default async function ContactPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
