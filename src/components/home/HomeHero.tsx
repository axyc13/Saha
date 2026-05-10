import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-img" />
      <div className="hero-gradient" />
      <div className="hero-grain" />
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
          Australasia&apos;s partner for individuals and organisations that want
          to grow with clarity and confidence.
        </p>
        <div className="hero-actions">
          <Link className="btn-hero-primary" href="/contactus">
            Work with us →
          </Link>
          <Link className="btn-hero-secondary" href="/services">
            Explore services ↓
          </Link>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}
