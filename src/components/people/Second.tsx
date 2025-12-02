import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function Second() {
  return (
    <section className="w-screen max-h-screen md:min-h-screen text-black p-8 flex flex-col items-center gap-8 lg:gap-16">
      <h1 className="lg:px-8 lg:self-end text-3xl md:text-5xl lg:text-6xl">
        The People Who Shape Us
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-[92vw]">
        <div className="flex flex-col gap-8 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
          <p>
            Saha is built on a simple idea: <b>people first.</b> Our culture is
            rooted in integrity, support, humility, and clear thinking. These
            values guide our work and shape how we show up for our clients, our
            partners, and each other.
          </p>
          <p>
            Our team brings experience across finance, accounting, analytics,
            and business strategy but more importantly, we bring perspective. We
            stay calm under pressure, focus on true understanding, and always
            aim to do the right thing, even when no one is watching.
          </p>
          <p>
            We&apos;re lifelong learners, critical thinkers, and disciplined
            executors. We get things done and we do them well.
          </p>
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
