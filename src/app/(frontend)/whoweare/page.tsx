import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import WhoWeAreLanding from "@/src/components/whoweare/WhoWeAreLanding";
import "../globals.css";

export default async function WhoWeArePage() {
  return (
    <div>
      <Header />
      <WhoWeAreLanding />
      <Footer />
    </div>
  );
}
