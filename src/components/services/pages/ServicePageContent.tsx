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
    <section className="w-screen min-h-screen text-black p-16 flex flex-col items-center gap-8 lg:gap-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16  max-w-[92vw]">
        <div className="lg:max-w-[48vw] lg:py-16 text-sm lg:text-base leading-relaxed">
          <RichText data={service.paragraph1} />
          <br />
          <RichText data={service.paragraph2} />
        </div>
        <div className="flex justify-center lg:max-w-[48vw] w-full">
          <div className="flex border rounded-4xl w-[80vw] lg:w-[32vw] h-auto flex-col items-center p-8 gap-4 text-sm lg:text-base">
            <h1 className="text-xl lg:text-2xl text-center">What We Do</h1>
            <RichText data={service["bullet-points"]} />
            <Link href="/contactus">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
