import React from "react";

export default function Second() {
  return (
    <section className="text-black flex flex-col items-center border-b lg:border-b-0 lg:border-r p-8">
      <div className="flex flex-col gap-8 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
        <h1 className="text-2xl lg:text-4xl">The People Who Shape Us</h1>
        <p>
          Our team brings experience across finance, accounting, analytics, and
          business strategy but more importantly, we bring perspective. We stay
          calm under pressure, focus on true understanding, and always aim to do
          the right thing, even when no one is watching.
        </p>
        <p>
          We&apos;re lifelong learners, critical thinkers, and disciplined
          executors. We get things done and we do them well.
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
