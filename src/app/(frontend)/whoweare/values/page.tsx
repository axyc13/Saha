import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import ValuesPage from "@/src/components/whoweare/ValuesPage";
import "../../globals.css";

export default async function WhoWeAreValuesPage() {
  return (
    <div>
      <Header />
      <ValuesPage />
      <Footer />
    </div>
  );
}
