import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function Governance() {
  return (
    <section className="w-screen md:min-h-screen text-black p-8 flex flex-col items-center gap-8 lg:gap-16">
      <h1 className="lg:px-8 lg:self-end text-4xl lg:text-6xl">Governance</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-[92vw]">
        <div className="flex flex-col gap-8 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed">
          <p>
            Governance at Saha isn&apos;t just a framework, is a mindset. Our
            core belief, Sky&apos;s the limit, guides how we operate, how we
            serve clients, and how we hold ourselves accountable.{" "}
          </p>
          <p>
            We are intentional about the company we are building. Every policy,
            process, and decision is shaped by the values that drive us. These
            values help us stay disciplined, transparent, and responsible in
            everything we do.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/whoweare/governance">
              <button>Learn More</button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:max-w-[48%] w-full">
          <Image
            src={placeholder}
            alt="Placeholder"
            className="w-100 h-60 md:w-150 md:h-80 lg:w-full lg:h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
