"use client";
import "./globals.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Custom cursor tracking
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    });

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animRing);
    };
    animRing();

    // Cursor scale on hover
    document
      .querySelectorAll(
        "button,a,.intro-service-row,.value-block,.feature-card",
      )
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.style.width = "18px";
          cursor.style.height = "18px";
          ring.style.width = "54px";
          ring.style.height = "54px";
          cursor.style.background = "rgba(96,165,250,0.6)";
        });
        el.addEventListener("mouseleave", () => {
          cursor.style.width = "10px";
          cursor.style.height = "10px";
          ring.style.width = "36px";
          ring.style.height = "36px";
          cursor.style.background = "var(--accent-bright)";
        });
      });

    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((el) => obs.observe(el));

    // Parallax hero image on scroll
    window.addEventListener("scroll", () => {
      const s = window.scrollY;
      const img = document.querySelector(".hero-img") as HTMLElement;
      if (img) {
        img.style.transform = `scale(1.08) translateY(${s * 0.25}px)`;
      }
    });
  }, []);

  return (
    <body className="home-page">
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      {/* NAVIGATION */}
      <nav>
        <span className="nav-logo">saha.</span>
        <div className="nav-center">
          <button className="nav-link active">Home</button>
          <button className="nav-link">Who We Are</button>
          <button className="nav-link">Services</button>
          <button className="nav-link">Careers</button>
        </div>
        <div className="nav-right">
          <button className="nav-back-btn" style={{ display: "none" }}>
            ← Back
          </button>
          <button className="nav-work-btn">Work with us</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-img"></div>
        <div className="hero-gradient"></div>
        <div className="hero-grain"></div>
        <div className="hero-content">
          <p className="hero-location">Australasia</p>
          <h1 className="hero-headline">
            We make individuals
            <br />
            &amp; businesses
            <br />
            <em>work better.</em>
          </h1>
          <p className="hero-sub">
            AI, personal, and digital consulting — all under one roof. Saha is
            Australasia&apos;s partner for individuals and organisations that
            want to grow with clarity and confidence.
          </p>
          <div className="hero-actions">
            <button className="btn-hero-primary">Work with us →</button>
            <button className="btn-hero-secondary">Explore services ↓</button>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span className="hero-scroll-text">Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <div className="ticker-item">
            AI Strategy &amp; Advisory <span className="ticker-sep">—</span>
            AI Implementation <span className="ticker-sep">—</span>
            Process Automation <span className="ticker-sep">—</span>
            AI Training &amp; Enablement <span className="ticker-sep">—</span>
            Career Coaching <span className="ticker-sep">—</span>
            Life Coaching &amp; Goal Setting{" "}
            <span className="ticker-sep">—</span>
            Study &amp; Academic Coaching <span className="ticker-sep">—</span>
            Relationship &amp; Social Skills{" "}
            <span className="ticker-sep">—</span>
            Web Presence &amp; Branding <span className="ticker-sep">—</span>
            Social Media Consulting <span className="ticker-sep">—</span>
            SEO &amp; Online Visibility <span className="ticker-sep">—</span>
            Content &amp; Copywriting <span className="ticker-sep">—</span>
            Digital Tools &amp; Automation <span className="ticker-sep">—</span>
            E-Commerce Solutions <span className="ticker-sep">—</span>
          </div>
          <div className="ticker-item" aria-hidden="true">
            AI Strategy &amp; Advisory <span className="ticker-sep">—</span>
            AI Implementation <span className="ticker-sep">—</span>
            Process Automation <span className="ticker-sep">—</span>
            AI Training &amp; Enablement <span className="ticker-sep">—</span>
            Career Coaching <span className="ticker-sep">—</span>
            Life Coaching &amp; Goal Setting{" "}
            <span className="ticker-sep">—</span>
            Study &amp; Academic Coaching <span className="ticker-sep">—</span>
            Relationship &amp; Social Skills{" "}
            <span className="ticker-sep">—</span>
            Web Presence &amp; Branding <span className="ticker-sep">—</span>
            Social Media Consulting <span className="ticker-sep">—</span>
            SEO &amp; Online Visibility <span className="ticker-sep">—</span>
            Content &amp; Copywriting <span className="ticker-sep">—</span>
            Digital Tools &amp; Automation <span className="ticker-sep">—</span>
            E-Commerce Solutions <span className="ticker-sep">—</span>
          </div>
        </div>
      </div>

      {/* INTRO SPLIT */}
      <section className="intro reveal">
        <div className="intro-left">
          <p className="intro-eyebrow">About saha.</p>
          <h2 className="intro-heading">
            One firm.
            <br />
            <em>Three disciplines.</em>
          </h2>
          <p className="intro-body">
            Whether you&apos;re looking to harness AI, grow your career, or
            sharpen your digital presence — Saha brings together expertise
            across three disciplines so your advisor understands the full
            picture and gives you guidance that actually connects.
          </p>
          <div className="intro-stat-row">
            <div className="intro-stat">
              <div className="intro-stat-num">3</div>
              <div className="intro-stat-label">Service disciplines</div>
            </div>
            <div className="intro-stat">
              <div className="intro-stat-num">
                100<span>%</span>
              </div>
              <div className="intro-stat-label">Outcome focused</div>
            </div>
            <div className="intro-stat">
              <div className="intro-stat-num" style={{ fontSize: "2rem" }}>
                NZ
              </div>
              <div className="intro-stat-label">Auckland based</div>
            </div>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-service-row">
            <div>
              <div className="intro-service-name">AI Consulting</div>
              <div className="intro-service-tag">
                Strategy · Automation · Training · Integration
              </div>
            </div>
            <span className="intro-service-arr">→</span>
          </div>
          <div className="intro-service-row">
            <div>
              <div className="intro-service-name">Personal Consulting</div>
              <div className="intro-service-tag">
                Career · Life Coaching · Study · Social Skills
              </div>
            </div>
            <span className="intro-service-arr">→</span>
          </div>
          <div className="intro-service-row">
            <div>
              <div className="intro-service-name">Digital Consulting</div>
              <div className="intro-service-tag">
                Web · Social Media · SEO · Automation
              </div>
            </div>
            <span className="intro-service-arr">→</span>
          </div>
        </div>
      </section>

      {/* FEATURE BAND */}
      <section className="feature-band reveal">
        <div className="feature-band-bg"></div>
        <div className="feature-band-grid"></div>
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
            We don&apos;t hand you a template and wish you luck. We work
            alongside you — through the complexity, the milestones, and whatever
            comes next. Every engagement is tied to real outcomes.
          </p>
          <button className="feature-btn">See how we work →</button>
        </div>
        <div className="feature-right">
          <div className="feature-card">
            <div className="fc-icon">⚖️</div>
            <div className="fc-title">Kia Pono</div>
            <div className="fc-desc">
              Honesty first. We lead with truth, even when it&apos;s difficult —
              in our advice, our reporting, and how we hold ourselves
              accountable.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon">🎓</div>
            <div className="fc-title">Kia Ako</div>
            <div className="fc-desc">
              Always learning. We stay curious, invest in knowledge, and ask
              better questions — because the world changes and so must we.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon">⚡</div>
            <div className="fc-title">Kia Mahi</div>
            <div className="fc-desc">
              Getting things done. We execute with discipline, follow through on
              commitments, and deliver the outcomes we promise.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon">🤝</div>
            <div className="fc-title">Kia Tūhono</div>
            <div className="fc-desc">
              Backing our people. Nobody carries the weight alone. We back our
              team and our clients fully — every step of the way.
            </div>
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
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
          <div className="value-block">
            <div className="vb-maori">Honesty</div>
            <div className="vb-divider"></div>
            <div className="vb-english">Kia Pono</div>
            <p className="vb-desc">
              Transparency is our standard. We lead with truth in every client
              interaction, every piece of advice, and every deliverable.
            </p>
          </div>
          <div className="value-block">
            <div className="vb-maori">Curiosity</div>
            <div className="vb-divider"></div>
            <div className="vb-english">Kia Ako</div>
            <p className="vb-desc">
              We never stop asking better questions. Staying current is part of
              the service we provide — not an afterthought.
            </p>
          </div>
          <div className="value-block">
            <div className="vb-maori">Execution</div>
            <div className="vb-divider"></div>
            <div className="vb-english">Kia Mahi</div>
            <p className="vb-desc">
              Words without action mean nothing. We execute with discipline and
              follow through on every commitment we make.
            </p>
          </div>
          <div className="value-block">
            <div className="vb-maori">People</div>
            <div className="vb-divider"></div>
            <div className="vb-english">Kia Tūhono</div>
            <p className="vb-desc">
              We invest in our clients and our team the same way — fully. No one
              carries the weight alone at Saha.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section reveal">
        <div className="cta-bg-circle1"></div>
        <div className="cta-bg-circle2"></div>
        <div className="cta-bg-circle3"></div>
        <p className="cta-eyebrow">Ready when you are</p>
        <h2 className="cta-heading">
          Let&apos;s build
          <br />
          something
          <br />
          <em>that lasts.</em>
        </h2>
        <p className="cta-sub">
          Tell us about yourself or your business and what you&apos;re working
          toward. We&apos;ll come back to you within one business day — no
          jargon, no obligation.
        </p>
        <div className="cta-actions">
          <button className="btn-cta">Work with us →</button>
          <button className="btn-cta-outline">View careers</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="main-footer">
        <div className="footer-top">
          <span className="footer-logo">saha.</span>
          <div className="footer-links-row">
            <button className="footer-nav-link">Privacy</button>
            <button className="footer-nav-link">Terms</button>
            <button className="footer-nav-link">Contact</button>
          </div>
          <span className="footer-note">© 2025 Saha NZ Limited</span>
        </div>
      </footer>
    </body>
  );
}
