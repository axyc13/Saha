import React from "react";
import { Service } from "@/src/types/service";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";

interface ServiceProp {
  service: Service;
}

export default function ServiceList({ service }: ServiceProp) {
  return (
    <section className="">
      <div className="w-full h-auto overflow-scroll text-white flex flex-col justify-center items-center border-l-4 p-4 lg:p-8 group hover:bg-white transition-colors hover:border-black">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Link
            href={`/services/finance/${service.slug}`}
            className="flex flex-col justify-center text-sm lg:text-base leading-relaxed gap-4"
          >
            <h1 className="text-base lg:text-xl group-hover:text-black">
              {service.title}
            </h1>
            <RichText
              data={service.paragraph2}
              className="text-xs lg:text-sm group-hover:text-black [&_p]:text-left!"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
