import React from "react";
import Link from "next/link";

export default function OurPeople() {
  return (
    <section className="relative w-full h-[56vh] text-black flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mx-auto bg-gray-100">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-[80vw] lg:w-[88vw] gap-8 lg:gap-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">Our People</h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
          {/* Text */}
          <div className="flex flex-col gap-8 text-left text-sm lg:text-base leading-relaxed">
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
        </div>
      </div>
    </section>
  );
}
