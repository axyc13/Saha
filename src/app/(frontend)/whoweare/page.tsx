import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/whoweare/Hero";
import Governance from "@/src/components/whoweare/Governance";
import OurPeople from "@/src/components/whoweare/OurPeople";
import OurValues from "@/src/components/whoweare/OurValues";
import "../globals.css";

export default async function WhoWeArePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Governance />
      <OurValues />
      <OurPeople />
      <Footer />
    </div>
  );
}
