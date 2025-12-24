import React from "react";

export default function SearchBar() {
  return (
    <section className="w-screen h-[56vh] text-black flex flex-col items-center gap-8 px-8 lg:px-32 py-16 justify-center lg:justify-between">
      <h1 className="flex justify-center text-2xl lg:text-4xl">
        Search All Positions
      </h1>
      <input
        name="message"
        className="w-[80vw] lg:w-[56vw] h-[8vh] resize-none p-8 rounded-[45px] border border-black text-sm flex justify-center items-center"
        placeholder="Search"
        required
      />

      <p className="text-sm lg:text-base break-normal w-[80vw]">
        At this stage we have wonderful people contributing to saha. Please feel
        free to send us a copy of your CV to <u>satyamsaha.ca@gmail.com</u> and
        we will be in touch.
      </p>
    </section>
  );
}
