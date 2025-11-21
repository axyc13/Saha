import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Hero from "@/app/components/whoweare/Hero";
import "../globals.css";

export default async function WhoWeArePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
