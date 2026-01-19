import React from "react";
import Image from "next/image";
import saha from "@/public/sahaExample.png";

export default function Examples() {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center gap-8 py-16 px-8 lg:px-24 h-screen w-screen">
      <h1 className="text-4xl lg:text-6xl text-center">Our Previous work</h1>
      <div className="flex flex-row gap-16">
        <div className="border rounded-lg p-1 w-[72vw] lg:w-[40vw] h-auto">
          <Image
            src={saha}
            alt="Saha Website"
            className="w-auto h-full object-contain rounded-lg border border-white"
          />
        </div>
      </div>
      <button className="text-lg">See More</button>
    </section>
  );
}
