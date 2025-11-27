import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/governance/Hero";
import Second from "@/src/components/governance/Second";
import Structures from "@/src/components/governance/Structures";
import Final from "@/src/components/governance/Final";

export default async function WhoWeArePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Second />
      <Structures />
      <Final />
      <Footer />
    </div>
  );
}
