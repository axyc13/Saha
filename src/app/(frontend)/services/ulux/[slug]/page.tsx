import { getUluxOption } from "@/src/lib/payload/uluxOption";
import NotFound from "../../../[...notFound]/page";
import UluxPageContent from "@/src/components/services/ulux/pages/UluxPageContent";
import UluxPageHero from "@/src/components/services/ulux/pages/UluxPageHero";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import "../../../globals.css";

export default async function UluxPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const ulux = await getUluxOption(slug);

  if (!ulux) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <UluxPageHero ulux={ulux} />
      <UluxPageContent ulux={ulux} />
      <Footer />
    </div>
  );
}
