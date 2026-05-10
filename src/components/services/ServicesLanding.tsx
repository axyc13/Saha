import Link from "next/link";

import { servicesLandingStats, servicesLandingTiles } from "./data";

export default function ServicesLanding() {
  return (
    <div id="section-svc">
      <div className="svc-landing-hero">
        <div className="lh-grid" />
        <div className="lh-glow" />
        <p className="lh-eyebrow">Our Services</p>
        <h1 className="lh-title" style={{ position: "relative", zIndex: 1 }}>
          Where expertise
          <br />
          <em>meets execution.</em>
        </h1>
        <p
          className="lh-body"
          style={{ position: "relative", zIndex: 1, marginBottom: "1.5rem" }}
        >
          Saha provides focused consulting services across AI, personal
          development, and digital — built for individuals and businesses ready
          to move forward with clarity and confidence.
        </p>
        <p className="lh-disclaimer">
          Saha is not a licensed financial advice provider (FAP) under the
          Financial Markets Conduct Act 2013. Nothing on this website
          constitutes regulated financial advice.
        </p>
      </div>

      <div className="sector-tiles">
        {servicesLandingTiles.map((tile) => (
          <Link className="sector-tile" href={tile.href} key={tile.href}>
            <p className="st-num">{tile.number}</p>
            <div className="st-icon">{tile.icon}</div>
            <h2 className="st-name">{tile.name}</h2>
            <p className="st-desc">{tile.description}</p>
            <span className="st-link">
              Explore <span className="st-arr">→</span>
            </span>
          </Link>
        ))}
      </div>

      <section className="landing-overview">
        <div className="lo-left">
          <p className="section-eyebrow">Why Saha</p>
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
            One firm. <em>Three disciplines.</em>
          </h2>
          <p>
            Most people looking for consulting support find themselves juggling
            multiple advisors who don&apos;t talk to each other. Saha brings AI,
            personal, and digital consulting together so your advisor sees the
            whole picture — and gives you advice that actually connects.
          </p>
          <p>
            We don&apos;t hand you a template and wish you luck. We work
            alongside you — through the complexity, through the milestones, and
            through whatever comes next.
          </p>
        </div>
        <div className="lo-right">
          {servicesLandingStats.map((stat) => (
            <div className="lo-stat" key={stat.label}>
              <span className="lo-stat-num">
                {stat.value === "100%" ? (
                  <>
                    100<span>%</span>
                  </>
                ) : (
                  stat.value
                )}
              </span>
              <span className="lo-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
