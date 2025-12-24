import React from "react";
import Link from "next/link";

export default function Governance() {
  return (
    <section className="relative w-full h-[56vh] text-black flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mx-auto bg-gray-100">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-[80vw] lg:w-[88vw] gap-8 lg:gap-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">Our Governance</h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
          {/* Text */}
          <div className="flex flex-col gap-8 text-left text-sm lg:text-base leading-relaxed">
            <p>
              Governance at Saha isn&apos;t just a framework, is a mindset. Our
              core belief, Sky&apos;s the limit, guides how we operate, how we
              serve clients, and how we hold ourselves accountable.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/whoweare/governance">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
