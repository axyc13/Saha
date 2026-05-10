import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import GovernancePage from "@/src/components/whoweare/GovernancePage";
import "../../globals.css";

export default async function WhoWeArePage() {
  return (
    <div>
      <Header />
      <GovernancePage />
      <Footer />
    </div>
  );
}
