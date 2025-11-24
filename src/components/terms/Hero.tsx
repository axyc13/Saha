import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-screen h-[40vh] bg-black text-white flex flex-row items-center gap-10 px-30 justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl">Terms of Use</h1>
        <h2 className="text-2xl">Last Updated: 17/11/25</h2>
      </div>
      <div>
        <Link href="/privacy">
          <button>View the Privacy Policy</button>
        </Link>
      </div>
    </section>
  );
}
