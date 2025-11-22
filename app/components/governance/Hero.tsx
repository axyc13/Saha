import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function Hero() {
  return (
    <section className="w-screen h-screen text-white text-shadow-lg">
      <div className="relative w-full h-[60vh] flex items-center">
        <Image
          src={placeholder}
          alt="Placeholder"
          className="absolute inset-0 z-0 w-full h-full"
        />

        <div className="flex flex-col gap-8 px-10 relative z-10 ">
          <h1 className="text-6xl">Strong governance for a bold future</h1>
          <p className="break-normal w-[80vw]">
            Good governance sits at the heart of Saha. <br /> Our work is built
            on trust; trust that comes from honesty, discipline, and doing the
            right thing even when no one is watching. Across every engagement,
            our clients know what to expect from us: clarity, integrity, and
            commitment. <br /> As we grow, our governance approach ensures that
            our standards stay high, our decisions stay aligned to our purpose,
            and our people stay grounded in the values that define us.
          </p>
        </div>
      </div>
    </section>
  );
}
