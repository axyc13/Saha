import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function Hero() {
  return (
    <section
      className="w-screen min-h-screen p-8 bg-black text-white flex flex-col lg:flex-row 
      items-center justify-center lg:justify-around gap-8 lg:gap-16"
    >
      {/* Text content */}
      <div className="flex flex-col gap-4 md:gap-8 max-w-lg text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl">
          Sky&apos;s the Limit
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl">Saha</h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Helping people and businesses build clarity, make confident decisions,
          and realise limitless possibilities.
        </p>
        <div className="mt-4 flex justify-center md:justify-start">
          <Link href="/contactus">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center w-full sm:w-auto">
        <Image
          src={placeholder}
          alt="Placeholder"
          className="w-100 h-60 md:w-150 md:h-80 lg:w-96 object-cover"
        />
      </div>
    </section>
  );
}
