import React from "react";

export default function Second() {
  return (
    <section className="w-screen min-h-screen text-black flex flex-col justify-center p-8 lg:p-16 gap-8 lg:gap-0 items-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          A commitment to strong, responsible business practices
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 w-full max-w-[88vw]">
        <div
          className="flex flex-col gap-8 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed
            [&_h1]:text-xl [&_h1]:lg:text-2xl"
        >
          <div className="flex flex-col gap-4">
            <h1>• Ethical decision-making</h1>
            <p>
              We operate with integrity and transparency, putting honesty first
              in every interaction.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1>• Accountability & performance</h1>
            <p>
              We measure our progress, reflect deeply, and stay disciplined. If
              something can be done better, we own it and improve it.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1>• Clear communication</h1>
            <p>
              We simplify complexity and keep clients fully informed so they
              always know where things stand.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-8 lg:gap-16 lg:max-w-[48vw] lg:py-16 justify-center text-sm lg:text-base leading-relaxed 
            [&_h1]:text-xl [&_h1]:lg:text-2xl"
        >
          <div className="flex flex-col gap-4">
            <h1>• Risk awareness & calm execution</h1>
            <p>
              We stay composed under pressure, think clearly, and make decisions
              grounded in logic and experience.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1>• Inclusive and supportive culture</h1>
            <p>
              We foster an environment where people help each other grow, share
              knowledge openly, and treat everyone with respect.
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center lg:max-w-[48%] w-full">
            <Image
              src={placeholder}
              alt="Placeholder"
              className="w-100 h-60 md:w-150 md:h-80 lg:w-full lg:h-auto object-cover"
            />
          </div> */}
      </div>

      {/* <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full max-w-[92vw]">
          <div className="hidden lg:flex justify-center lg:max-w-[48%] w-full">
            <Image
              src={placeholder}
              alt="Placeholder"
              className="w-100 h-60 md:w-150 md:h-80 lg:w-full lg:h-auto object-cover"
            />
          </div>
        </div> */}
    </section>
  );
}
