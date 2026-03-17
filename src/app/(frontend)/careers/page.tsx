import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import CareersLanding from "@/src/components/careers/CareersLanding";
import "../globals.css";

export default async function CareersPage() {
  return (
    <div>
      <Header />
      <CareersLanding />
      <Footer />
    </div>
  );
}
