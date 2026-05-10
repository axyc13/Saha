import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import ServiceDetailPage from "@/src/components/services/ServiceDetailPage";
import { digitalServicePage } from "@/src/components/services/data";
import "../../globals.css";

export default function DigitalServicesPage() {
  return (
    <div>
      <Header />
      <ServiceDetailPage {...digitalServicePage} />
      <Footer />
    </div>
  );
}
