import { getServices } from "@/src/lib/payload/services";
import ServiceFunction from "./ServiceDisplay";

export default async function ServiceSection() {
  const services = await getServices();
  return <ServiceFunction services={services} />;
}
