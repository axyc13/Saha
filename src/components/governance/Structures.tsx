import React from "react";

export default function Structures() {
  return (
    <section className="w-screen min-h-screen text-black flex flex-col justify-center items-center p-8 gap-16">
      <h1 className="text-4xl lg:text-5xl ">Governance Structures at Saha</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-32 bg-white
        [&_div]:lg:w-80 [&_div]:lg:h-72 [&_div]:w-64 [&_div]:h-56 [&_div]:border-2 [&_div]:flex [&_div]:flex-col [&_div]:justify-center 
        [&_div]:gap-8 [&_div]:px-4 [&_div]:items-center [&_div]:rounded-4xl [&_div]:shadow-xl
        [&_h2]:lg:text-2xl [&_h2]:text-xl text-center 
        [&_p]:lg:text-base [&_p]:text-xs"
      >
        <div>
          <h2>Leadership Oversight</h2>
          <p>
            Our leaders set the tone, uphold our values, and ensure every part
            of the business reflects the standards we expect.
          </p>
        </div>
        <div>
          <h2>Privacy & Data Protection</h2>
          <p>
            We follow the New Zealand Privacy Act 2020, maintain strict data
            security practices, and protect client information with discipline
            and care.
          </p>
        </div>
        <div>
          <h2>Transparent Policies</h2>
          <p>
            Clear, simple guidelines shape how we operate from client
            engagements to internal decision-making.
          </p>
        </div>
        <div>
          <h2>Continuous Learning</h2>
          <p>
            We continually review our practices to ensure they reflect best
            practice and evolving standards.
          </p>
        </div>
      </div>
    </section>
  );
}
