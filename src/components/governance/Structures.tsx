import React from "react";

export default function Structures() {
  return (
    <section className="w-screen h-screen text-black flex flex-col justify-center items-center gap-16">
      <h1 className="text-5xl">Governance structures at Saha</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 gap-x-32">
        <div className="w-80 h-72 border-2 flex flex-col justify-center gap-8 px-4 items-center rounded-4xl shadow-2xl">
          <h2 className="text-2xl text-center">Leadership Oversight</h2>

          <p className="text-center">
            Our leaders set the tone, uphold our values, and ensure every part
            of the business reflects the standards we expect.
          </p>
        </div>
        <div className="w-80 h-72 border-2 flex flex-col justify-center gap-8 px-4 items-center rounded-4xl shadow-2xl">
          <h2 className="text-2xl text-center">Privacy & Data Protection</h2>

          <p className="text-center">
            We follow the New Zealand Privacy Act 2020, maintain strict data
            security practices, and protect client information with discipline
            and care.
          </p>
        </div>
        <div className="w-80 h-72 border-2 flex flex-col justify-center gap-8 px-4 items-center rounded-4xl shadow-2xl">
          <h2 className="text-2xl text-center">Transparent Policies</h2>

          <p className="text-center">
            Clear, simple guidelines shape how we operate from client
            engagements to internal decision-making.
          </p>
        </div>
        <div className="w-80 h-72 border-2 flex flex-col justify-center px-4 gap-8 items-center rounded-4xl shadow-2xl">
          <h2 className="text-2xl text-center">Continuous Learning</h2>

          <p className="text-center">
            We continually review our practices to ensure they reflect best
            practice and evolving standards.
          </p>
        </div>
      </div>
    </section>
  );
}
