import React from "react";

export default function Final() {
  return (
    <section className="text-black flex flex-col items-center p-8">
      <div className="flex flex-col gap-8 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
        <h1 className="text-2xl lg:text-4xl">Built on trust, and discipline</h1>
        <p>
          Saha is built on a simple idea: <b>people first.</b> Our culture is
          rooted in integrity, support, humility, and clear thinking. These
          values guide our work and shape how we show up for our clients, our
          partners, and each other.
        </p>
        <p>
          At Saha, we&apos;re here to create meaningful impact, not just deliver
          services. We show up for our clients with honesty, clarity, and the
          belief that there is always room to grow. When we work together, the
          sky truly is the limit.
        </p>
      </div>

      {/* <div className="flex justify-center lg:max-w-[48%] w-full">
          <Image
            src={placeholder}
            alt="Placeholder"
            className="w-100 h-60 md:w-150 md:h-80 lg:w-full lg:h-auto object-cover"
          />
        </div> */}
    </section>
  );
}
