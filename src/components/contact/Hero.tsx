import React from "react";
import Link from "next/link";
import { CONTACT_MAILTO } from "@/src/lib/site";

export default function Hero() {
  return (
    <section className="panel-dark relative overflow-hidden px-6 py-28 md:px-10 lg:px-16">
      <div className="absolute inset-0 grid-muted pointer-events-none" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="section-eyebrow--light">Contact</p>
          <h1 className="section-title section-title--light text-[clamp(3rem,5vw,5rem)]">
            Contact <em>Us</em>
          </h1>
          <p className="mt-6 max-w-2xl text-body text-body--light text-base md:text-lg">
            Whether it&apos;s business-related inquiries or if you&apos;re
            curious about Saha, our team is happy to connect with you.
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-white/8 bg-white/5 p-6 backdrop-blur-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/30">
            Direct Email
          </p>
          <Link
            href={CONTACT_MAILTO}
            className="break-all text-2xl font-black text-white"
          >
            business@saha.co.nz
          </Link>
          <p className="mt-4 text-sm leading-7 text-white/40">
            Use this address for general enquiries, proposals, and follow-up.
          </p>
        </div>
      </div>
    </section>
  );
}
