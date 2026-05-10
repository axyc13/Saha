"use client";

import { useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/whoweare", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
];

const serviceRows = [
  {
    name: "AI Consulting",
    tag: "Strategy · Automation · Training · Integration",
  },
  {
    name: "Personal Consulting",
    tag: "Career · Life Coaching · Study · Social Skills",
  },
  {
    name: "Digital Consulting",
    tag: "Web · Social Media · SEO · Automation",
  },
];

const featureCards = [
  {
    icon: "⚖️",
    title: "Kia Pono",
    description:
      "Honesty first. We lead with truth, even when it's difficult — in our advice, our reporting, and how we hold ourselves accountable.",
  },
  {
    icon: "🎓",
    title: "Kia Ako",
    description:
      "Always learning. We stay curious, invest in knowledge, and ask better questions — because the world changes and so must we.",
  },
  {
    icon: "⚡",
    title: "Kia Mahi",
    description:
      "Getting things done. We execute with discipline, follow through on commitments, and deliver the outcomes we promise.",
  },
  {
    icon: "🤝",
    title: "Kia Tūhono",
    description:
      "Backing our people. Nobody carries the weight alone. We back our team and our clients fully — every step of the way.",
  },
];

const values = [
  {
    title: "Honesty",
    maori: "Kia Pono",
    description:
      "Transparency is our standard. We lead with truth in every client interaction, every piece of advice, and every deliverable.",
  },
  {
    title: "Curiosity",
    maori: "Kia Ako",
    description:
      "We never stop asking better questions. Staying current is part of the service we provide — not an afterthought.",
  },
  {
    title: "Execution",
    maori: "Kia Mahi",
    description:
      "Words without action mean nothing. We execute with discipline and follow through on every commitment we make.",
  },
  {
    title: "People",
    maori: "Kia Tūhono",
    description:
      "We invest in our clients and our team the same way — fully. No one carries the weight alone at Saha.",
  },
];

const tickerItems = [
  "AI Strategy & Advisory",
  "AI Implementation",
  "Process Automation",
  "AI Training & Enablement",
  "Career Coaching",
  "Life Coaching & Goal Setting",
  "Study & Academic Coaching",
  "Relationship & Social Skills",
  "Web Presence & Branding",
  "Social Media Consulting",
  "SEO & Online Visibility",
  "Content & Copywriting",
  "Digital Tools & Automation",
  "E-Commerce Solutions",
];

const revealClasses =
  "opacity-0 translate-y-8 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100";

const monoCaps =
  "font-[var(--font-mono)] text-[0.6rem] uppercase tracking-[0.28em]";

export default function HomePage() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let ringFrame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      ringFrame = requestAnimationFrame(animateRing);
    };

    const hoverables = Array.from(
      document.querySelectorAll<HTMLElement>("button, a, [data-cursor-hover]"),
    );

    const handleEnter = () => {
      cursor.style.width = "18px";
      cursor.style.height = "18px";
      ring.style.width = "54px";
      ring.style.height = "54px";
      cursor.style.background = "rgba(96,165,250,0.6)";
    };

    const handleLeave = () => {
      cursor.style.width = "10px";
      cursor.style.height = "10px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      cursor.style.background = "#60a5fa";
    };

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const handleScroll = () => {
      const heroImage =
        document.querySelector<HTMLElement>("[data-hero-image]");
      if (heroImage) {
        heroImage.style.transform = `scale(1.08) translateY(${window.scrollY * 0.25}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    ringFrame = requestAnimationFrame(animateRing);
    hoverables.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });
    reveals.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(ringFrame);
      observer.disconnect();
      hoverables.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-[#0a1628] font-sans text-white cursor-default">
        <div
          id="cursor"
          className="pointer-events-none fixed left-0 top-0 z-9999 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#60a5fa] mix-blend-screen transition-[transform,width,height,background] duration-300"
        />
        <div
          id="cursorRing"
          className="pointer-events-none fixed left-0 top-0 z-9998 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#60a5fa66] transition-[transform,width,height] duration-300 ease-out"
        />

        <nav className="fixed inset-x-0 top-0 z-200 flex h-16 items-center justify-between border-b border-white/10 bg-[#0a1628]/95 px-5 backdrop-blur-xl lg:px-12">
          <Link
            href="/"
            className="shrink-0 font-(--font-display) text-2xl tracking-[-0.02em]"
          >
            saha.
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "rounded-[5px] px-4 py-2 font-sans text-[0.72rem] font-medium uppercase tracking-[0.09em] whitespace-nowrap transition-colors duration-200",
                  link.active
                    ? "bg-[#2563eb]/20 text-white"
                    : "text-white/50 hover:bg-white/7 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="hidden items-center gap-2 p-0 font-sans text-[0.72rem] font-medium uppercase tracking-[0.09em] text-white/50 transition-colors hover:text-white"
              style={{ display: "none" }}
            >
              ← Back
            </button>
            <Link
              href="/contactus"
              className="rounded-md bg-[#2563eb] px-5 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.09em] whitespace-nowrap text-white transition hover:-translate-y-px hover:bg-[#3b82f6]"
            >
              Work with us
            </Link>
          </div>
        </nav>

        <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
          <div
            data-hero-image
            className="absolute inset-0 scale-[1.08] bg-[radial-gradient(circle_at_top,#1e3460_0%,#122040_36%,#0a1628_75%)] bg-cover bg-[center_30%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,22,40,1)_0%,rgba(10,22,40,0.7)_35%,rgba(10,22,40,0.2)_65%,rgba(10,22,40,0.4)_100%),linear-gradient(to_right,rgba(10,22,40,0.5)_0%,transparent_60%)]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-4"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          <div className="relative z-2 w-full px-8 pb-20 pt-32 sm:px-10 lg:px-20 lg:pb-24">
            <p
              className={`${monoCaps} mb-8 flex items-center gap-3 text-[#60a5fa]`}
              style={{ animation: "fadeUp 1s ease 0.3s both" }}
            >
              <span className="h-px w-7 bg-[#60a5fa]" />
              Australasia
            </p>

            <h1
              className="mb-8 w-full font-(--font-display) text-[clamp(3.5rem,9vw,9.5rem)] leading-[0.9] tracking-[-0.04em] text-white"
              style={{ animation: "fadeUp 1s ease 0.5s both" }}
            >
              We make individuals
              <br />
              &amp; businesses
              <br />
              <em className="block font-normal italic text-white/45">
                work better.
              </em>
            </h1>

            <p
              className="mb-12 max-w-[460px] font-(--font-mono) text-[0.82rem] leading-[1.9] text-white/45"
              style={{ animation: "fadeUp 1s ease 0.7s both" }}
            >
              AI, personal, and digital consulting — all under one roof. Saha is
              Australasia&apos;s partner for individuals and organisations that
              want to grow with clarity and confidence.
            </p>

            <div
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
              style={{ animation: "fadeUp 1s ease 0.9s both" }}
            >
              <button className="inline-flex items-center gap-3 rounded bg-[#2563eb] px-10 py-4 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.15em] text-white transition hover:-translate-y-0.5 hover:bg-[#3b82f6]">
                Work with us →
              </button>
              <button className="inline-flex items-center gap-[0.6rem] font-(--font-mono) text-[0.72rem] uppercase tracking-[0.15em] text-white/50 transition hover:text-white">
                Explore services ↓
              </button>
            </div>
          </div>

          <div
            className="absolute bottom-20 right-8 z-2 hidden flex-col items-center gap-3 lg:flex"
            style={{ animation: "fadeUp 1.2s ease 1.2s both" }}
          >
            <div className="h-[60px] w-px animate-[scrollPulse_2s_ease-in-out_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.3))]" />
            <span className="text-[0.52rem] uppercase tracking-[0.22em] text-white/25 [writing-mode:vertical-rl]">
              Scroll
            </span>
          </div>
        </section>

        <div className="group relative overflow-hidden border-y border-white/10 bg-[#2563eb] py-[0.85rem]">
          <div
            className="flex w-max group-hover:[animation-play-state:paused]"
            style={{ animation: "ticker 28s linear infinite" }}
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center gap-10 px-10 font-(--font-mono) text-[0.68rem] uppercase tracking-[0.22em] whitespace-nowrap text-white/95"
                aria-hidden={copy === 1}
              >
                {tickerItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-10"
                  >
                    {item}
                    <span className="text-[0.5rem] text-white/40">—</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section
          data-reveal
          className={`${revealClasses} grid gap-16 bg-[#faf8f4] px-8 py-20 text-[#0a1628] lg:grid-cols-2 lg:gap-32 lg:px-24 lg:py-32`}
        >
          <div>
            <p
              className={`${monoCaps} mb-6 flex items-center gap-3 text-[#2563eb]`}
            >
              <span className="h-px w-6 bg-[#2563eb]" />
              About saha.
            </p>

            <h2 className="mb-8 font-(--font-display) text-[clamp(2.5rem,4vw,3.8rem)] leading-none tracking-[-0.03em]">
              One firm.
              <br />
              <em className="italic text-[#0a1628]/30">Three disciplines.</em>
            </h2>

            <p className="mb-10 max-w-2xl text-[0.8rem] leading-loose text-[#0a1628]/55">
              Whether you&apos;re looking to harness AI, grow your career, or
              sharpen your digital presence — Saha brings together expertise
              across three disciplines so your advisor understands the full
              picture and gives you guidance that actually connects.
            </p>

            <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-[#0a1628]/10 pt-8">
              <div>
                <div className="mb-1 font-(--font-display) text-[2.8rem] leading-none tracking-[-0.04em]">
                  3
                </div>
                <div className="text-[0.62rem] uppercase tracking-[0.12em] text-[#0a1628]/40">
                  Service disciplines
                </div>
              </div>
              <div>
                <div className="mb-1 font-(--font-display) text-[2.8rem] leading-none tracking-[-0.04em]">
                  100<span className="text-[#2563eb]">%</span>
                </div>
                <div className="text-[0.62rem] uppercase tracking-[0.12em] text-[#0a1628]/40">
                  Outcome focused
                </div>
              </div>
              <div>
                <div className="mb-1 font-(--font-display) text-[2rem] leading-none tracking-[-0.04em]">
                  NZ
                </div>
                <div className="text-[0.62rem] uppercase tracking-[0.12em] text-[#0a1628]/40">
                  Auckland based
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xs bg-[#0a1628]/8">
            {serviceRows.map((service, index) => (
              <div
                key={service.name}
                data-cursor-hover
                className={[
                  "group flex cursor-pointer items-center justify-between border-l-[3px] border-transparent bg-[#f7f8fa] px-8 py-[1.8rem] transition-all duration-300 hover:border-[#2563eb] hover:bg-white hover:pl-10",
                  index < serviceRows.length - 1
                    ? "border-b border-[#0a1628]/8"
                    : "",
                ].join(" ")}
              >
                <div>
                  <div className="font-(--font-display) text-[1.15rem] tracking-[-0.01em] text-[#0a1628]">
                    {service.name}
                  </div>
                  <div className="text-[0.58rem] uppercase tracking-[0.15em] text-[#0a1628]/30">
                    {service.tag}
                  </div>
                </div>
                <span className="text-base text-[#0a1628]/20 transition duration-300 group-hover:translate-x-1 group-hover:text-[#2563eb]">
                  →
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          data-reveal
          className={`${revealClasses} relative grid gap-16 overflow-hidden bg-[#122040] px-8 py-20 text-white lg:grid-cols-2 lg:gap-32 lg:px-24 lg:py-32`}
        >
          <div className="pointer-events-none absolute -right-[200px] -top-[200px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="relative z-1">
            <p className={`${monoCaps} mb-6 text-[#60a5fa]`}>Why Saha</p>

            <h2 className="mb-8 font-(--font-display) text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] tracking-[-0.04em]">
              We get in
              <br />
              the trenches
              <br />
              <em className="font-normal italic text-white/30">with you.</em>
            </h2>

            <p className="mb-12 max-w-[440px] text-[0.8rem] leading-loose text-white/40">
              We don&apos;t hand you a template and wish you luck. We work
              alongside you — through the complexity, the milestones, and
              whatever comes next. Every engagement is tied to real outcomes.
            </p>

            <button className="inline-flex items-center gap-3 font-(--font-mono) text-[0.65rem] uppercase tracking-[0.18em] text-[#60a5fa] transition-[gap] duration-300 hover:gap-5">
              See how we work →
            </button>
          </div>

          <div className="relative z-1 grid overflow-hidden rounded-xs bg-white/5 md:grid-cols-2">
            {featureCards.map((card, index) => (
              <div
                key={card.title}
                data-cursor-hover
                className={[
                  "bg-[#0a1628]/60 px-8 py-10 transition-colors duration-300 hover:bg-[#2563eb]/10",
                  index % 2 === 0 ? "md:border-r md:border-white/5" : "",
                  index < 2 ? "border-b border-white/5" : "",
                ].join(" ")}
              >
                <div className="mb-5 text-[1.8rem]">{card.icon}</div>
                <div className="mb-2 font-(--font-display) text-[1.05rem] tracking-[-0.01em] text-white">
                  {card.title}
                </div>
                <div className="text-[0.73rem] leading-[1.75] text-white/35">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          data-reveal
          className={`${revealClasses} bg-[#faf8f4] px-8 py-20 text-[#0a1628] lg:px-24 lg:py-28`}
        >
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-(--font-display) text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-[-0.035em]">
              Built on trust.
              <br />
              <em className="italic text-[#0a1628]/25">Driven by people.</em>
            </h2>

            <p className="max-w-[300px] text-left text-[0.75rem] leading-[1.9] text-[#0a1628]/45 lg:text-right">
              At Saha, we help clients build trust and turn complexity into
              competitive advantage — across Australasia and beyond.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-xs bg-[#0a1628]/8 gap-px md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.maori}
                data-cursor-hover
                className="relative overflow-hidden bg-[#f7f8fa] px-8 py-12 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-[#2563eb] before:transition-transform before:duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_40px_rgba(10,22,40,0.12)] hover:before:scale-x-100"
              >
                <div className="mb-1 font-(--font-display) text-[1.6rem] tracking-[-0.02em] text-[#0a1628]">
                  {value.title}
                </div>
                <div className="my-3 h-0.5 w-5 bg-[#2563eb]" />
                <div className="mb-4 text-[0.6rem] uppercase tracking-[0.15em] text-[#0a1628]/35">
                  {value.maori}
                </div>
                <p className="text-[0.75rem] leading-[1.8] text-[#0a1628]/55">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          data-reveal
          className={`${revealClasses} relative overflow-hidden bg-[#0a1628] px-8 py-24 text-center text-white lg:px-24 lg:py-40`}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563eb]/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563eb]/15" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)]" />

          <p className={`${monoCaps} relative z-1 mb-8 text-[#60a5fa]`}>
            Ready when you are
          </p>

          <h2 className="relative z-1 mb-8 font-(--font-display) text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.04em]">
            Let&apos;s build
            <br />
            something
            <br />
            <em className="font-normal italic text-white/30">that lasts.</em>
          </h2>

          <p className="relative z-[1] mx-auto mb-14 max-w-[460px] text-[0.8rem] leading-[1.9] text-white/40">
            Tell us about yourself or your business and what you&apos;re working
            toward. We&apos;ll come back to you within one business day — no
            jargon, no obligation.
          </p>

          <div className="relative z-1 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="rounded bg-[#2563eb] px-11 py-[1.1rem] font-(--font-mono) text-[0.72rem] uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#3b82f6]">
              Work with us →
            </button>
            <button className="rounded border border-white/15 px-11 py-[1.1rem] font-(--font-mono) text-[0.72rem] uppercase tracking-[0.18em] text-white/50 transition hover:border-white/50 hover:text-white">
              View careers
            </button>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#0a1628]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-8 py-8 text-white lg:px-16">
            <span className="font-(--font-display) text-[1.3rem]">saha.</span>

            <div className="flex flex-wrap items-center gap-6">
              <button className="font-(--font-mono) text-[0.58rem] uppercase tracking-widest text-white/35 transition hover:text-white/80">
                Privacy
              </button>
              <button className="font-(--font-mono) text-[0.58rem] uppercase tracking-widest text-white/35 transition hover:text-white/80">
                Terms
              </button>
              <button className="font-(--font-mono) text-[0.58rem] uppercase tracking-widest text-white/35 transition hover:text-white/80">
                Contact
              </button>
            </div>

            <span className="font-(--font-mono) text-[0.55rem] uppercase tracking-widest text-white/20">
              © 2025 Saha NZ Limited
            </span>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scaleY(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
