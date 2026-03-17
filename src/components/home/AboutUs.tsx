import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative w-full h-[72vh] text-black flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mx-auto bg-white">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-[80vw] lg:w-[88vw] gap-8 lg:gap-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          What is Saha?
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
          {/* Text */}
          <div className="flex flex-col gap-8 text-left text-sm lg:text-lg xl:text-xl leading-relaxed">
            <p>
              At Saha, we help clients build trust and reinvent so they can turn
              complexity into competitive advantage. We&apos;re passionate about
              helping businesses succeed, the public sector to achieve more, and
              our communities to grow.
            </p>
            <div
              className="grid grid-cols-2 gap-8 lg:justify-start justify-center place-items-center
                [&>*:first-child]:col-span-2
                md:flex md:[&>*:first-child]:col-span-1"
            >
              <Link href="/whoweare/governance" className="w-fit">
                <button className="text-[10px] md:text-lg xl:text-xl w-fit bg-[#F2F2F2] !text-[#1E2A38] !border-[#1E2A38] hover:!bg-[#1E2A38] hover:!text-[#F2F2F2] hover:!border-[#1E2A38]">
                  Governance
                </button>
              </Link>
              <Link href="/whoweare/#values">
                <button className="text-[10px] md:text-lg xl:text-xl bg-[#F2F2F2] !text-[#1E2A38] !border-[#1E2A38] hover:!bg-[#1E2A38] hover:!text-[#F2F2F2] hover:!border-[#1E2A38]">
                  Our Values
                </button>
              </Link>
              <Link href="/whoweare/people">
                <button className="text-[10px] md:text-lg xl:text-xl bg-[#F2F2F2] !text-[#1E2A38] !border-[#1E2A38] hover:!bg-[#1E2A38] hover:!text-[#F2F2F2] hover:!border-[#1E2A38]">
                  Our People
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
