import React from "react";
import { Service } from "@/src/types/service";
import BreadCrumb from "../../../common/BreadCrumb";

interface ServiceProp {
  service: Service;
}

export default function ServicePageHero({ service }: ServiceProp) {
  return (
    <section className="w-[screen] h-[40vh] bg-black text-white flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8 w-[80vw]">
        <BreadCrumb />
        <h1 className="text-3xl lg:text-5xl">{service.title}</h1>
      </div>
    </section>
  );
}
