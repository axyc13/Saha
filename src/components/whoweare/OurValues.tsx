import React from "react";
import Link from "next/link";
import Footer from "@/src/components/common/Footer";

type ValueItem = {
  maori: string;
  english: string;
  body: string;
};

const values: ValueItem[] = [
  {
    maori: "Kia Pono",
    english: "Honesty before Anything",
    body: "We tell the truth even when it is uncomfortable. Our clients trust us with their livelihoods - that trust is earned through transparency, every single time.",
  },
  {
    maori: "Kia Mārama",
    english: "Education before Literacy",
    body: "Understanding matters more than just knowing the numbers. We make sure our clients genuinely understand their financial position, not just receive a report they cannot read.",
  },
  {
    maori: "Kia Mahi",
    english: "Getting Things Done",
    body: "We are not a firm that sits on things. We move, we execute, and we deliver. Our clients come to us to solve problems - so we solve them.",
  },
  {
    maori: "Kia Ātea",
    english: "Calmness over Chaos",
    body: "In high-pressure moments we do not panic - we think. We are the steady hand our clients need when things feel uncertain, complex, or overwhelming.",
  },
  {
    maori: "Kia Ako",
    english: "Always Something to Learn",
    body: "We never think we know it all. The financial world evolves constantly and so do we - always sharpening our knowledge so our clients benefit from the best thinking available.",
  },
  {
    maori: "Kia Tūhono",
    english: "Support Each Other",
    body: "We back our people the way we back our clients - fully. A strong team makes for strong outcomes, and at Saha no one carries the weight alone.",
  },
  {
    maori: "Kia Māmā",
    english: "Keep Things Simple",
    body: "We strip away the jargon and the noise. Complex problems deserve clear solutions, and we pride ourselves on making the complicated feel manageable.",
  },
  {
    maori: "Kia Tirohanga Whānui",
    english: "Look at the Big Picture",
    body: "We do not just look at the numbers in front of us - we look at where our clients are going. Our job is to help them see the full horizon, not just today's bottom line.",
  },
];

export default function OurValues() {
  return (
    <div id="values" className="w-screen bg-[#f6f7f4] text-[#1f2a35]">
      {/* Hero Section */}
      <section className="px-8 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[0.18em] uppercase text-[#5f6b76] mb-3">
            Our Values
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-6xl">
            The values that shape how we work.
          </h1>
          <p className="mt-6 text-sm md:text-base leading-7 text-[#3c4651] max-w-3xl">
            At Saha, our values are not words on a wall - they are the way we
            show up every day. For our clients, for each other, and for the
            businesses we help build.
          </p>
          <p className="mt-4 text-sm md:text-base leading-7 text-[#3c4651] max-w-3xl">
            They guide how we think, how we serve, and how we move.
          </p>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="px-8 py-14 md:py-16 bg-[#eef2f5]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[0.18em] uppercase text-[#5f6b76] mb-3">
            Ūpoko | Our Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            &ldquo;He tangata, he tangata, he tangata&rdquo;
          </h2>
          <p className="mt-3 text-lg md:text-xl text-[#2f3d4a]">
            It is the people, it is the people, it is the people.
          </p>
          <p className="mt-6 text-sm md:text-base leading-7 text-[#3c4651] max-w-4xl">
            At the heart of Saha is a simple belief: people come first. Our work
            is built on trust, care, clarity, and long-term thinking. Every
            relationship, every decision, and every outcome begins there.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-8 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[0.18em] uppercase text-[#5f6b76] mb-3">
            Our Core Values
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-3xl">
            Principles that shape how we think, advise, and deliver.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <article
                key={value.maori}
                className="rounded-sm border border-[#e7ebef] bg-[#f8fafc]/70 p-7 md:p-8"
              >
                <h3 className="text-2xl md:text-[1.7rem] text-[#1f2a35]">{value.maori}</h3>
                <p className="mt-2 text-sm md:text-[0.95rem] text-[#4b5865]">
                  {value.english}
                </p>
                <p className="mt-5 text-sm md:text-base leading-7 text-[#3c4651]">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="px-8 py-14 md:py-16 bg-[#eef2f5]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[0.18em] uppercase text-[#5f6b76] mb-3">
            Tō Mātou Rerekētanga | What Makes Us Different
          </p>
          <div className="max-w-4xl">
            <p className="text-3xl md:text-5xl leading-[1.15] text-[#1f2a35]">
              Anyone can file a return.
            </p>
            <p className="mt-3 text-3xl md:text-5xl leading-[1.15] text-[#1f2a35]">
              Anyone can run a payroll.
            </p>
            <p className="mt-3 text-3xl md:text-5xl leading-[1.15] text-[#1f2a35]">
              What sets Saha apart is that we treat your business like it is our own.
            </p>
          </div>
          <p className="mt-10 text-sm md:text-base leading-7 max-w-4xl text-[#4a5560]">
            We do not wait to be asked - we anticipate, we advise, and we advocate.
          </p>
          <p className="mt-5 text-sm md:text-base leading-7 max-w-4xl text-[#4a5560]">
            Our clients do not just get an accountant or an advisor. They get a
            partner who is invested in where they are going, not just where they
            have been.
          </p>
          <p className="mt-5 text-sm md:text-base leading-7 max-w-4xl text-[#4a5560]">
            That is the Saha difference.
          </p>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="px-8 py-14 md:py-16 bg-[#f6f7f4]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] max-w-3xl">
            Built on clarity, trust, and action.
          </h2>
          <p className="mt-5 text-sm md:text-base leading-7 max-w-3xl text-[#3c4651]">
            If you&apos;re looking for a team that values honesty, calm thinking,
            and meaningful partnership, we&apos;d love to hear from you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base bg-[#1E2A38] text-[#f7f7f4] border border-[#1E2A38] hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base border border-[#1E2A38] text-[#1E2A38] hover:bg-[#1E2A38] hover:text-[#f7f7f4] transition-colors"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
