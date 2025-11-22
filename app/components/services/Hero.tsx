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
          <h1 className="text-6xl">Our Services</h1>
          <p className="break-normal w-[80vw]">
            Short sumamry of services , Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris eu molestie felis, nec imperdiet metus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            molestie felis, nec imperdiet metus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris eu molestie felis, nec imperdiet
            metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
