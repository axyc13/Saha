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
  );
}
