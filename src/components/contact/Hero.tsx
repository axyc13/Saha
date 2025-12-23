import React from "react";

export default function Hero() {
  return (
    <section className="w-screen h-[40vh] bg-black text-white flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl">Contact Us</h1>
        <p className="text-sm lg:text-base break-normal w-[80vw]">
          Whether it&apos;s business-related inquiries or if you&apos;re curious
          about Saha, our team of experts are more than happy to connect with
          you.
        </p>
      </div>
    </section>
    // <section className="w-screen h-[80vh] text-black flex flex-col gap-8">
    //   <div>
    //     <Image
    //       src={placeholder}
    //       alt="Placeholder"
    //       className="w-screen h-[56vh] object-cover"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-8 justify-center lg:justify-normal px-8 lg:px-16">
    //     <h1 className="text-4xl lg:text-6xl">Contact Us</h1>
    //     <p className="text-sm lg:text-base break-normal w-[80vw]">
    //       Whether it&apos;s business-related inquiries or if you&apos;re curious
    //       about Saha, our team of experts are more than happy to connect with
    //       you.
    //     </p>
    //   </div>
    // </section>
  );
}
