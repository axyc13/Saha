import { getServices } from "@/src/lib/payload/services";
import ServiceDisplay from "./ServiceDisplay";

export default async function ServiceSection() {
  const services = await getServices();
  return <ServiceDisplay services={services} />;
}
