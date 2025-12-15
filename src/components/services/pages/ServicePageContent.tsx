import React from "react";
import { Service } from "@/src/types/service";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface ServiceProp {
  service: Service;
}

export default function ServicePageContent({ service }: ServiceProp) {
  return (
    <section className="w-screen min-h-screen md:min-h-screen text-black p-8 flex flex-col items-center gap-8 lg:gap-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-[92vw]">
        <div className="lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
          <RichText data={service.paragraph1} />
        </div>

        <div className="flex justify-center lg:max-w-[48%] w-full">
          <Image
            src={service.photo.url}
            alt={service.photo.alt}
            className="w-100 h-60 md:w-150 md:h-80 lg:w-full lg:h-auto object-cover"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-[92vw]">
        <div className="flex justify-center lg:max-w-[48%] w-full">
          <div className="flex border rounded-4xl w-[80vw] lg:w-[32vw] h-auto lg:h-[64vh] flex-col items-center p-8 gap-4 text-sm lg:text-base">
            <h1 className="text-xl lg:text-2xl text-center">What We Do</h1>
            <RichText data={service["bullet-points"]} />
            <Link href="/contactus">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>

        <div className="lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
          <RichText data={service.paragraph2} />
        </div>
      </div>
    </section>
  );
}
