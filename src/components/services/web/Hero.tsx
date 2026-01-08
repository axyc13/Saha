import React from "react";

export default function Hero() {
  return (
    <section className="w-screen h-[40vh] bg-black text-white flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl">Website Development</h1>
        <p className="text-sm lg:text-base break-normal w-[80vw]">
          Saha delivers end-to-end website design and development services,
          guiding your business from initial idea to a fully deployed digital
          presence.
        </p>
      </div>
    </section>
  );
}
