import React from "react";
import Link from "next/link";

export default function Web() {
  return (
    <section className="relative w-full h-[72vh] text-black flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mx-auto bg-gray-100">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-[80vw] lg:w-[88vw] gap-8 lg:gap-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">
          Website Development
        </h1>
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
          {/* Text */}
          <div className="flex flex-col gap-8 text-left text-sm lg:text-lg leading-relaxed">
            <p>
              Saha delivers end-to-end website design and development services,
              guiding your business from initial idea to a fully deployed
              digital presence. We&apos;ll work closely with you at every stage,
              from design mockups to launch day
            </p>
            <p>
              Beyond aesthetics, we build websites that perform. Saha ensures
              your website is fast, secure, and built to grow with your
              business. Whether you&apos;re launching a new brand or refining an
              existing one, we help you create a confident, credible online
              presence.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/services/web">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
