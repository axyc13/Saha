import Link from "next/link";

const featureCards = [
  {
    description:
      "Honesty first. We lead with truth, even when it's difficult — in our advice, our reporting, and how we hold ourselves accountable.",
    icon: "⚖️",
    title: "Kia Pono",
  },
  {
    description:
      "Always learning. We stay curious, invest in knowledge, and ask better questions — because the world changes and so must we.",
    icon: "🎓",
    title: "Kia Ako",
  },
  {
    description:
      "Getting things done. We execute with discipline, follow through on commitments, and deliver the outcomes we promise.",
    icon: "⚡",
    title: "Kia Mahi",
  },
  {
    description:
      "Backing our people. Nobody carries the weight alone. We back our team and our clients fully — every step of the way.",
    icon: "🤝",
    title: "Kia Tūhono",
  },
];

export default function HomeFeatureBand() {
  return (
    <section className="feature-band reveal">
      <div className="feature-band-bg" />
      <div className="feature-band-grid" />
      <div className="feature-left">
        <p className="feature-eyebrow">Why Saha</p>
        <h2 className="feature-heading">
          We get in
          <br />
          the trenches
          <br />
          <em>with you.</em>
        </h2>
        <p className="feature-body">
          We don&apos;t hand you a template and wish you luck. We work alongside
          you — through the complexity, the milestones, and whatever comes next.
          Every engagement is tied to real outcomes.
        </p>
        <Link className="feature-btn" href="/whoweare">
          See how we work →
        </Link>
      </div>
      <div className="feature-right">
        {featureCards.map((card) => (
          <div className="feature-card" key={card.title}>
            <div className="fc-icon">{card.icon}</div>
            <div className="fc-title">{card.title}</div>
            <div className="fc-desc">{card.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
