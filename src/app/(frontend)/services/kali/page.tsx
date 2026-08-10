import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import "../../globals.css";

const KALI_URL = "https://www.kali-foundation.com";

export const metadata: Metadata = {
  description:
    "Kali Foundation is Saha's not-for-profit arm, helping New Zealand charities, schools and community organisations use AI carefully — as a support layer for admin and reporting, not a replacement for people.",
  title: "Kali Foundation | Saha",
};

const highlights = [
  {
    description:
      "Built for volunteer boards, tight budgets and funder reporting cycles — not adapted from corporate advice.",
    icon: "🌱",
    title: "Sector-first",
  },
  {
    description:
      "AI drafts, summarises and spots patterns. A board, not an algorithm, makes the call.",
    icon: "🤝",
    title: "Human oversight",
  },
  {
    description:
      "We'd rather teach your team something they still use in two years than sell them something they're stuck with.",
    icon: "🎓",
    title: "Capability, not dependency",
  },
];

const gridCards = [
  {
    description:
      "A short, scoped engagement that looks at your workflows, data, team confidence and governance position — and hands back an honest picture of where AI could help, where it can't, and what order to tackle things in.",
    icon: "🧭",
    title: "AI Readiness Assessment",
  },
  {
    description:
      "The repetitive work: the same report reformatted five ways, the inbox triaged every morning, the spreadsheet that's really three spreadsheets stitched together by hand.",
    icon: "⚙️",
    title: "AI Automation",
  },
  {
    description:
      "Support that scales up and down month to month — someone to call when a question comes up. Is this tool safe to use? Would it actually save time? What should our AI policy say?",
    icon: "🔄",
    title: "Ongoing Consulting",
  },
  {
    description:
      "Privacy, data security and governance treated as the starting point rather than the paperwork at the end — including honest advice about where AI shouldn't be used at all.",
    icon: "🛡️",
    title: "Responsible AI & Governance",
  },
];

export default function KaliFoundationPage() {
  return (
    <div>
      <Header />
      <div id="section-svc">
        <div className="service-hero">
          <div className="sh-grid" />
          <div className="sh-glow" />
          <div className="sh-left">
            <p className="sh-eyebrow">Kali Foundation</p>
            <h1 className="sh-title">
              Strengthening the organisations
              <br />
              <em>that strengthen our communities.</em>
            </h1>
            <p className="sh-body">
              Kali Foundation is our not-for-profit arm. It helps New Zealand
              charities, schools and community organisations use AI carefully —
              as a support layer for admin, reporting and everyday workflows,
              never as a replacement for the people doing the work.
            </p>
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
            <p className="section-eyebrow">What Kali Foundation does</p>
            <h2 className="section-title">
              Practical help, <em>with the load they already have.</em>
            </h2>
            <p>
              Most not-for-profits are running on less than they need. Reporting
              to multiple funders, chasing the same information across different
              spreadsheets, writing the same update for the fifth time this
              quarter. None of it is the mission — all of it takes time away
              from the mission.
            </p>
          </div>
          <div className="services-grid two-col">
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
            <h2>Visit Kali Foundation</h2>
            <p>
              Kali Foundation has its own site, with the full picture of how it
              works, who it's for, and the story behind it.
            </p>
          </div>
          <div className="cta-strip-right">
            <Link
              className="btn-svc accent"
              href={KALI_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open kali-foundation.com →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
