import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/whoweare/Hero";
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
