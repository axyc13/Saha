import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section className="flex flex-col justify-center gap-8 py-16 px-8 lg:px-24 w-screen h-screen">
      <h1 className="text-4xl lg:text-6xl lg:text-center ">
        Ready to transform your online presence?
      </h1>
      <p className="lg:text-center text-base lg:text-lg">
        Let&apos;s build something amazing together. Get in touch today.
      </p>
      <Link href="/contactus" className="lg:flex justify-center">
        <button className="text-base lg:text-lg">Contact Us</button>
      </Link>
    </section>
  );
}
