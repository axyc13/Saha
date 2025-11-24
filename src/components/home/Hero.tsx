import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.jpg";

export default function Hero() {
  return (
    <section className="w-screen h-screen bg-black text-white flex flex-row items-center justify-center gap-15">
      <div className="flex flex-col gap-8 max-w-lg">
        <h1 className="text-6xl">Sky&apos;s the Limit</h1>
        <h2 className="text-2xl">Saha</h2>
        <p className="break-normal">
          Short Blub, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris eu molestie felis, nec imperdiet metus.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Mauris eu molestie felis, nec
          imperdiet metus.
        </p>
        <Link href="/contactus">
          <button>Contact Us</button>
        </Link>
      </div>
      <div>
        <Image
          src={placeholder}
          alt="Placeholder"
          className="max-w-lg h-auto"
        />
      </div>
    </section>
  );
}
