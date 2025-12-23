import React from "react";
import BreadCrumb from "../common/BreadCrumb";

export default function Hero() {
  return (
    <section className="w-screen h-[48vh] bg-black text-white flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8">
        <BreadCrumb />
        <h1 className="text-4xl lg:text-6xl">
          Possibility Starts With Our People
        </h1>
        <p className="text-sm lg:text-base break-normal w-[80vw]">
          At Saha, everything begins with our people. Our team is driven by
          curiosity, grounded in honesty, and committed to creating real
          outcomes for businesses.
        </p>
      </div>
    </section>
    // <section className="w-screen h-[72vh] text-white text-shadow-lg">
    //   <div className="relative w-full h-[64vh] flex items-baseline-last py-16">
    //     <Image
    //       src={placeholder}
    //       alt="Placeholder"
    //       className="absolute inset-0 z-0 w-full h-full object-cover"
    //     />
    //     <div className="flex flex-col gap-8 px-8 lg:px-16 relative z-10 ">
    //       <BreadCrumb />
    //       <h1 className="text-4xl lg:text-6xl">
    //         Possibility Starts With Our People
    //       </h1>
    //       <p className="break-normal w-[80vw] text-sm lg:text-base">
    //         At Saha, everything begins with our people. Our team is driven by
    //         curiosity, grounded in honesty, and committed to creating real
    //         outcomes for businesses. Whether we&apos;re helping clients build
    //         stronger financial foundations or guiding them through strategic
    //         decisions, it&apos;s our collaboration, discipline, and shared
    //         values that move us forward.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
}
