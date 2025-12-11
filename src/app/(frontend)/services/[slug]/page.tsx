import { getService } from "@/src/lib/payload/servicePage";
import NotFound from "../../[...notFound]/page";
import ServicePageContent from "@/src/components/services/ServicePageContent";
import ServicePageHero from "@/src/components/services/ServicePageHero";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await getService(slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <ServicePageHero service={service} />
      <ServicePageContent service={service} />
      <Footer />
    </div>
  );
}
