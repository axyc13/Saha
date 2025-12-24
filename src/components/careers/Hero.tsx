import React from "react";

export default function Hero() {
  return (
    <section className="w-screen h-[40vh] text-white bg-black flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl">Careers</h1>
        <p className="text-sm lg:text-base break-normal w-[80vw]">
          At Saha, your career is more than a job, it&apos;s a chance to shape
          tomorrow. As part of our network, you&apos;ll collaborate with
          talented people from all around the world, solving important problems
          for clients, communities, and society.
        </p>
      </div>
    </section>

    // <section className="w-screen h-screen text-black flex flex-col gap-8">
    //   <div>
    //     <Image
    //       src={placeholder}
    //       alt="Placeholder"
    //       className="w-screen h-[56vh]"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-8 px-8">
    //     <h1 className="text-6xl">Careers</h1>
    //     <p className="break-normal w-[80vw]">
    //       At Saha, your career is more than a job, it&apos;s a chance to shape
    //       tomorrow. As part of our network, you&apos;ll collaborate with
    //       talented people from all around the world, solving important problems
    //       for clients, communities, and society.
    //     </p>
    //   </div>
    // </section>
  );
}
