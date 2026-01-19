import React from "react";
import Link from "next/link";

export default function ULux() {
  return (
    <section className="relative w-full h-[72vh] text-black flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mx-auto bg-gray-50">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-[80vw] lg:w-[88vw] gap-8 lg:gap-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">
          Ultra Luxury Service
        </h1>
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
          {/* Text */}
          <div className="flex flex-col gap-8 text-left text-sm lg:text-lg leading-relaxed">
            <p>
              &apos;U Lux&apos; or Ultra Luxury redefines the way high-end
              travel is experienced. More than a planning service, we provide a
              wide range of solutions from managing itineraries, logistics and
              reservations. Our mission is simple: to remove complexity and give
              discerning travellers effortless, personalised journeys.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/services/ulux">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
