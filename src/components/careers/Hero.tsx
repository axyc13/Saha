import React from "react";

export default function Hero() {
  return (
    <section className="panel-dark relative overflow-hidden px-6 py-28 md:px-10 lg:px-16">
      <div className="absolute inset-0 grid-muted pointer-events-none" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
        <div>
          <p className="section-eyebrow light">Careers</p>
          <h1 className="section-title section-title--light text-[clamp(3rem,5vw,5rem)]">
            Work With <em>Us</em>
          </h1>
          <p className="mt-6 max-w-2xl text-body text-body--light text-base md:text-lg">
            At Saha, your career is more than a job. It&apos;s a chance to shape
            tomorrow while working with talented people solving important
            problems for clients, communities, and society.
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-white/8 bg-white/5 p-6 text-white/45">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/30">
            Open To
          </p>
          <p className="text-sm leading-7">
            Internships, placements, and direct enquiries that should go to the
            same inbox listed on Contact Us.
          </p>
        </div>
      </div>
    </section>
  );
}
