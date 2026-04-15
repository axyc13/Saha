import React from "react";

const values = [
  {
    title: "Tika",
    subtitle: "Integrity",
    description: "Transparent advice grounded in practical judgment.",
  },
  {
    title: "Mahi",
    subtitle: "Work",
    description: "Hands-on support that keeps decisions moving forward.",
  },
  {
    title: "Whanaungatanga",
    subtitle: "Relationships",
    description: "Built on trust, continuity, and long-term partnership.",
  },
];

export default function Insights() {
  return (
    <section className="site-section panel-cream reveal" id="values">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Values</p>
            <h2 className="section-title">
              Built around <em>principles</em>
            </h2>
          </div>
          <p className="text-body max-w-xl">
            The reference design leans on a restrained, editorial rhythm. These
            cards mirror that tone while keeping the site readable and grounded.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="relative overflow-hidden rounded-[1.15rem] bg-white p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,22,40,0.12)]"
              style={{ border: "1px solid var(--light)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "var(--accent)" }}
              />
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[rgba(10,22,40,0.35)]">
                {value.subtitle}
              </p>
              <h3
                className="mb-2 text-3xl font-black"
                style={{ color: "var(--navy)" }}
              >
                {value.title}
              </h3>
              <p className="text-sm leading-7 text-[rgba(10,22,40,0.58)]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
