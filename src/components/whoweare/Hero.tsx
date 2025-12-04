import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function Hero() {
  return (
    <section className="w-screen max-h-screen text-black flex flex-col gap-8">
      <div>
        <Image
          src={placeholder}
          alt="Placeholder"
          className="w-screen h-[56vh] object-cover"
        />
      </div>
      <div className="flex flex-col gap-8 justify-center lg:justify-normal p-8 lg:px-16">
        <h1 className="text-4xl lg:text-6xl">Who We Are</h1>
        <p className="text-sm lg:text-base break-normal w-[80vw]">
          At Saha, we help clients build trust and reinvent so they can turn
          complexity into competitive advantage. We&apos;re passionate about
          helping businesses succeed, the public sector to achieve more, and our
          communities to grow.
        </p>
      </div>
    </section>
  );
}
