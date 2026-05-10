import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import ServiceDetailPage from "@/src/components/services/ServiceDetailPage";
import { aiServicePage } from "@/src/components/services/data";
import "../../globals.css";

export default function AIServicesPage() {
  return (
    <div>
      <Header />
      <ServiceDetailPage {...aiServicePage} />
      <Footer />
    </div>
  );
}
