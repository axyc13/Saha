import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/services/finance/Hero";
import ServiceSection from "@/src/components/services/finance/ServiceSection";
import "../../globals.css";
import ServiceTest from "@/src/components/services/finance/ServicesList";
import { getServices } from "@/src/lib/payload/services";
import type { Service } from "@/src/types/service";
import Link from "next/link";

export default async function ServicesPage() {
  const services: Service[] = await getServices();

  return (
    <div>
      <Header />
      <Hero />
      <ServiceSection />
      <div className="grid grid-cols-1 lg:grid-cols-4 place-items-start w-screen h-auto py-16 px-8 lg:px-24 bg-black gap-x-8 gap-y-8">
        {services.map((s) => (
          <ServiceTest key={s.id} service={s} />
        ))}
        <div className="w-[48vw] lg:w-full h-[40vh] lg:h-full text-white hidden md:flex flex-col justify-center items-center border-l-4 p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex flex-col justify-center text-sm lg:text-base leading-relaxed gap-4">
              <Link href="/contactus">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center bg-black p-8">
        <Link href="/contactus">
          <button>Contact Us</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
