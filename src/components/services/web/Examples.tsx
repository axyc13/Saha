import React from "react";

export default function Examples() {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center gap-8 py-16 px-8 lg:px-24 h-screen w-screen">
      <h1 className="text-4xl lg:text-6xl text-center ">Our Previous work</h1>
      <div className="flex flex-row gap-8">
        <div className="border rounded-lg p-1 lg:w-[56vw] w-[80vw] h-[32vh] lg:h-[48vh]">
          <div className="border rounded-lg p-8 h-full items-center flex flex-col gap-8">
            <h2 className="text-2xl">Saha</h2>
            <p className="text-base">
              A modern, responsive website for a consulting firm.
            </p>
          </div>
        </div>
      </div>
      <button className="text-lg">See More</button>
    </section>
  );
}
