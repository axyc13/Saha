import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function Hero() {
  return (
    <section className="w-screen h-screen text-black flex flex-col gap-10">
      <div>
        <Image
          src={placeholder}
          alt="Placeholder"
          className="w-screen h-[55vh]"
        />
      </div>
      <div className="flex flex-col gap-8 px-10">
        <h1 className="text-6xl">Contact Us</h1>
        <p className="break-normal w-[80vw]">
          Whether it&apos;s business-related inquiries or if you&apos;re curious
          about Saha, our team of experts are more than happy to connect with
          you.
        </p>
      </div>
    </section>
  );
}
