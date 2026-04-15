import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="site-section panel-cream reveal">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-title">
            What is <em>Saha</em>?
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-body text-[1rem] lg:text-[1.08rem]">
            At Saha, we help clients build trust and reinvent so they can turn
            complexity into competitive advantage. We&apos;re passionate about
            helping businesses succeed, the public sector to achieve more, and
            our communities to grow.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/whoweare/governance"
              className="btn-shared btn-shared--primary"
            >
              Governance
            </Link>
            <Link
              href="/whoweare/#values"
              className="btn-shared btn-shared--primary"
            >
              Our Values
            </Link>
            <Link
              href="/whoweare/people"
              className="btn-shared btn-shared--primary"
            >
              Our People
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
