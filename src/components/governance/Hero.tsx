import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function Hero() {
  return (
    <section className="w-screen h-[72vh] text-white text-shadow-lg">
      <div className="relative w-full h-[64vh] flex items-baseline-last py-16">
        <Image
          src={placeholder}
          alt="Placeholder"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />

        <div className="flex flex-col gap-8 px-8 lg:px-16 relative z-10 ">
          <h1 className="text-4xl lg:text-6xl">
            Strong governance for a bold future
          </h1>
          <p className="break-normal w-[80vw] text-sm lg:text-base">
            Good governance sits at the heart of Saha. Our work is built on
            trust; trust that comes from honesty, discipline, and doing the
            right thing even when no one is watching. Across every engagement,
            our clients know what to expect from us: clarity, integrity, and
            commitment.
          </p>
        </div>
      </div>
    </section>
  );
}
