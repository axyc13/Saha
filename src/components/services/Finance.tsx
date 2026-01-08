import React from "react";
import Link from "next/link";

export default function Finance() {
  return (
    <section className="relative w-full h-[72vh] text-black flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mx-auto bg-white">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-[80vw] lg:w-[88vw] gap-8 lg:gap-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">Finance & Advisory</h1>
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
          {/* Text */}
          <div className="flex flex-col gap-8 text-left text-sm lg:text-lg leading-relaxed">
            <p>
              Saha delivers a full-spectrum financial advisory service,
              combining deep hands-on management with strategic insights. We
              partner with you to design and run your finance function — from
              budgeting to cash-flow monitoring to accounting, and more.
            </p>
            <p>
              Beyond the numbers, Saha strengthens your business&apos;s
              backbone. Whether you&apos;re aiming to raise capital, plan for
              future growth, or improve profitability, our global reach and
              industry-tailored expertise, will help you transform, grow, and
              operate with confidence.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/services/finance">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
