import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function OurPeople() {
  return (
    <section className="w-screen md:min-h-screen text-black p-8 flex flex-col justify-center items-center gap-8 lg:gap-16">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-[92vw]">
        <div className="flex flex-col gap-8 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
          <h1 className="text-4xl lg:text-6xl">Our People</h1>
          <p>
            At Saha, everything begins with our people. Our team is driven by
            curiosity, grounded in honesty, and committed to creating real
            outcomes for businesses. Whether we&apos;re helping clients build
            stronger financial foundations or guiding them through strategic
            decisions, it&apos;s our collaboration, discipline, and shared
            values that move us forward.
          </p>
          <p>
            We believe in limitless potential; and together, we make
            possibilities happen.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/whoweare/people">
              <button>Learn More</button>
            </Link>
          </div>
        </div>

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
