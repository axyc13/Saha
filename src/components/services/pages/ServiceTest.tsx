import React from "react";
import { Service } from "@/src/types/service";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface ServiceProp {
  service: Service;
}

export default function ServiceTest({ service }: ServiceProp) {
  return (
    <section className="w-[48vw] lg:w-full h-[40vh] lg:h-full text-white flex flex-col justify-center items-center border-l-4 p-8 group hover:bg-white transition-colors hover:border-black">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-col justify-center text-sm lg:text-base leading-relaxed gap-4">
          <h1 className="text-base lg:text-xl group-hover:text-black">
            {service.title}
          </h1>
          <RichText
            data={service.paragraph1}
            className="text-xs lg:text-sm group-hover:text-black"
          />
        </div>
      </div>
    </section>
  );
}
