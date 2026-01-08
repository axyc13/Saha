import React from "react";

export default function Hero() {
  return (
    <section className="w-screen h-[40vh] bg-black text-white flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl">Financial & Advisory Services</h1>
        <p className="text-sm lg:text-base break-normal w-[80vw]">
          Saha provides industry-focused services for public and private
          clients. Our experienced staff, combined with our global network,
          allow us to provide the support you need - wherever you need it. We
          aim to provide trust through assurance and help you transform, grow
          and operate.
        </p>
      </div>
    </section>
  );
}
