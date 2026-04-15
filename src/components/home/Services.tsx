import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="site-section panel-dark reveal relative overflow-hidden">
      <div className="absolute inset-0 grid-muted pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p
              className="section-eyebrow"
              style={{ color: "var(--accent-light)" }}
            >
              Services
            </p>
            <h2 className="section-title section-title--light">
              What <em>does</em> Saha do?
            </h2>
            <p className="mt-6 text-body text-body--light max-w-xl">
              Saha delivers a full-spectrum advisory service, combining deep
              hands-on management with strategic insight. We design and run your
              finance function so you can move with confidence.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[1.25rem] border border-white/8 bg-white/5 p-6 transition-colors hover:bg-blue-500/10">
              <p className="text-2xl mb-5">01</p>
              <h3 className="mb-2 text-xl font-semibold text-white">Finance</h3>
              <p className="text-sm leading-7 text-white/35">
                Budgeting, reporting, cash-flow and the operational backbone.
              </p>
            </article>
            <article className="rounded-[1.25rem] border border-white/8 bg-white/5 p-6 transition-colors hover:bg-blue-500/10">
              <p className="text-2xl mb-5">02</p>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Strategy
              </h3>
              <p className="text-sm leading-7 text-white/35">
                Structuring growth, capital, and decision-making with clarity.
              </p>
            </article>
            <article className="rounded-[1.25rem] border border-white/8 bg-white/5 p-6 transition-colors hover:bg-blue-500/10">
              <p className="text-2xl mb-5">03</p>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Execution
              </h3>
              <p className="text-sm leading-7 text-white/35">
                Ongoing support that keeps the business moving day to day.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/services" className="btn-shared btn-shared--accent">
            Learn More
          </Link>
          <Link href="/contactus" className="btn-shared btn-shared--outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
