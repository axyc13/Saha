import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-screen h-[40vh] bg-black text-white flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8 md:gap-4">
        <h1 className="text-3xl lg:text-5xl">Terms of Use</h1>
        <h2 className="text-base lg:text-2xl">Last Updated: 17/11/25</h2>
      </div>
      <div>
        <Link href="/privacy">
          <button className="text-sm lg:text-base">
            View the Privacy Policy
          </button>
        </Link>
      </div>
    </section>
  );
}
