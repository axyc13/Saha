import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/people/Hero";
import Second from "@/src/components/people/Second";
import Team from "@/src/components/people/Team";
import Final from "@/src/components/people/Final";
import "../../globals.css";

export default async function WhoWeArePage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8">
        <Second />
        <Final />
      </div>
      <Team />
      <Footer />
    </div>
  );
}
