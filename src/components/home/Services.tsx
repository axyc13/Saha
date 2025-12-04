import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function Services() {
  return (
    <section className="w-screen min-h-screen text-black p-8 flex flex-col justify-center items-center gap-8 lg:gap-16">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center">
        What Does Saha Do?
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-6xl">
        {/* Text */}
        <div className="flex flex-col gap-8 lg:max-w-[48%] text-left text-sm lg:text-base leading-relaxed">
          <p>
            Saha delivers a full-spectrum financial advisory service, combining
            deep hands-on management with strategic insights. We partner with
            you to design and run your finance function — from budgeting to
            cash-flow monitoring to accounting, and more.
          </p>
          <p>
            Beyond the numbers, Saha strengthens your business&apos;s backbone.
            Whether you&apos;re aiming to raise capital, plan for future growth,
            or improve profitability, our global reach and industry-tailored
            expertise, will help you transform, grow, and operate with
            confidence.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/services">
              <button>Learn More</button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:max-w-[48%] w-full">
          <Image
            src={placeholder}
            alt="Placeholder"
            className="w-100 h-60 md:w-150 md:h-80 lg:w-full lg:h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
