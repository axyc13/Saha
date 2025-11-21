import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Hero from "@/app/components/contact/Hero";
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
