import Link from "next/link";

type ServiceItem = {
  description: string;
  icon: string;
  title: string;
};

export type ServiceDetailPageProps = {
  ctaBody: string;
  ctaLabel: string;
  ctaTitle: string;
  eyebrow: string;
  gridCards: ServiceItem[];
  gridColumns: 2 | 3;
  introBody: string;
  introTitleEmphasis: string;
  introTitlePrefix: string;
  summary: string;
  titleEmphasis: string;
  titlePrefix: string;
  highlights: ServiceItem[];
};

export default function ServiceDetailPage({
  ctaBody,
  ctaLabel,
  ctaTitle,
  eyebrow,
  gridCards,
  gridColumns,
  introBody,
  introTitleEmphasis,
  introTitlePrefix,
  summary,
  titleEmphasis,
  titlePrefix,
  highlights,
}: ServiceDetailPageProps) {
  return (
    <div id="section-svc">
      <div className="service-hero">
        <div className="sh-grid" />
        <div className="sh-glow" />
        <div className="sh-left">
          <p className="sh-eyebrow">{eyebrow}</p>
          <h1 className="sh-title">
            {titlePrefix}
            <br />
            <em>{titleEmphasis}</em>
          </h1>
          <p className="sh-body">{summary}</p>
        </div>
        <div className="sh-right">
          <div className="sh-highlights">
            {highlights.map((highlight) => (
              <div className="sh-highlight" key={highlight.title}>
                <span className="sh-h-icon">{highlight.icon}</span>
                <div className="sh-h-text">
                  <strong>{highlight.title}</strong>
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="services-grid-section">
        <div className="sg-intro">
          <p className="section-eyebrow">What we do</p>
          <h2 className="section-title">
            {introTitlePrefix}, <em>{introTitleEmphasis}</em>
          </h2>
          <p>{introBody}</p>
        </div>
        <div className={`services-grid${gridColumns === 2 ? " two-col" : ""}`}>
          {gridCards.map((card) => (
            <div className="svc-card" key={card.title}>
              <div className="svc-icon">{card.icon}</div>
              <h3 className="svc-title">{card.title}</h3>
              <p className="svc-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-left">
          <h2>{ctaTitle}</h2>
          <p>{ctaBody}</p>
        </div>
        <div className="cta-strip-right">
          <Link className="btn-svc accent" href="/contactus">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
