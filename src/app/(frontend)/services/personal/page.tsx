import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import ServiceDetailPage from "@/src/components/services/ServiceDetailPage";
import { personalServicePage } from "@/src/components/services/data";
import "../../globals.css";

export default function PersonalServicesPage() {
  return (
    <div>
      <Header />
      <ServiceDetailPage {...personalServicePage} />
      <Footer />
    </div>
  );
}
