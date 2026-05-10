const valueBlocks = [
  {
    description:
      "Transparency is our standard. We lead with truth in every client interaction, every piece of advice, and every deliverable.",
    english: "Kia Pono",
    maori: "Honesty",
  },
  {
    description:
      "We never stop asking better questions. Staying current is part of the service we provide — not an afterthought.",
    english: "Kia Ako",
    maori: "Curiosity",
  },
  {
    description:
      "Words without action mean nothing. We execute with discipline and follow through on every commitment we make.",
    english: "Kia Mahi",
    maori: "Execution",
  },
  {
    description:
      "We invest in our clients and our team the same way — fully. No one carries the weight alone at Saha.",
    english: "Kia Tūhono",
    maori: "People",
  },
];

export default function HomeValuesStrip() {
  return (
    <section className="values-strip reveal">
      <div className="vs-header">
        <h2 className="vs-heading">
          Built on trust.
          <br />
          <em>Driven by people.</em>
        </h2>
        <p className="vs-sub">
          At Saha, we help clients build trust and turn complexity into
          competitive advantage — across Australasia and beyond.
        </p>
      </div>
      <div className="values-row">
        {valueBlocks.map((value) => (
          <div className="value-block" key={value.english}>
            <div className="vb-maori">{value.maori}</div>
            <div className="vb-divider" />
            <div className="vb-english">{value.english}</div>
            <p className="vb-desc">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
