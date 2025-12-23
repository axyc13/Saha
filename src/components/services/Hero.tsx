import React from "react";

export default function Hero() {
  return (
    <section className="w-screen h-[40vh] bg-black text-white flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl">Our Services</h1>
        <p className="text-sm lg:text-base break-normal w-[80vw]">
          Saha provides industry-focused services for public and private
          clients. Our experienced staff, combined with our global network,
          allow us to provide the support you need - wherever you need it. We
          aim to provide trust through assurance and help you transform, grow
          and operate.
        </p>
      </div>
    </section>
    // <section className="w-screen max-h-screen text-white text-shadow-lg">
    //   <div className="relative w-full h-[64vh] flex items-baseline-last py-16">
    //     <Image
    //       src={placeholder}
    //       alt="Placeholder"
    //       className="absolute inset-0 z-0 w-full h-full"
    //     />

    //     <div className="flex flex-col gap-8 px-8 lg:px-16 relative z-10">
    //       <h1 className="text-4xl lg:text-6xl">Our Services</h1>
    //       <p className="break-normal w-[80vw] text-sm lg:text-base">
    //         Saha provides industry-focused services for public and private
    //         clients. Our experienced staff, combined with our global network,
    //         allow us to provide the support you need - wherever you need it. We
    //         aim to provide trust through assurance and help you transform, grow
    //         and operate.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
}
