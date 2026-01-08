import React from "react";
import { Ulux } from "@/src/types/ulux";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";

interface UluxProp {
  ulux: Ulux;
}

export default function UluxPageContent({ ulux }: UluxProp) {
  return (
    <section className="w-screen h-auto text-black p-16 px-24  flex flex-col items-center gap-8 lg:gap-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16  max-w-[92vw]">
        <div className="lg:py-16 text-sm lg:text-base leading-relaxed">
          <RichText data={ulux.paragraph1} />
          <br />
          <RichText data={ulux.paragraph2} />
        </div>
        <div className="flex justify-end w-full">
          <div className="flex border rounded-4xl w-[80vw] lg:w-[32vw] h-auto flex-col items-center p-8 gap-4 text-sm lg:text-base">
            <h1 className="text-xl lg:text-2xl text-center">What We Do</h1>
            <RichText data={ulux["bullet-points"]} />
            <Link href="/contactus">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
