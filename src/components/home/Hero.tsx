import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero.png";
import { motion } from "framer-motion";
import { MotionStyle } from "framer-motion";
import { CONTACT_MAILTO } from "@/src/lib/site";

export default function Hero({ textStyle }: { textStyle?: MotionStyle }) {
  return (
    <section
      className="relative min-h-screen overflow-hidden text-white flex items-end"
      style={{ background: "var(--navy)" }}
    >
      <Image
        src={hero}
        alt="hero image"
        fill
        priority
        className="object-cover object-center opacity-70"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,22,40,0.2),rgba(10,22,40,0.55)_45%,rgba(10,22,40,0.9))]" />
      <div className="absolute inset-0 grid-muted pointer-events-none" />

      <motion.div
        style={textStyle}
        className="relative z-10 w-full px-6 pb-16 pt-28 md:px-10 lg:px-16 lg:pb-20"
      >
        <div className="max-w-4xl">
          <p
            className="section-eyebrow mb-5"
            style={{ color: "var(--accent-light)" }}
          >
            Australasia&apos;s Consulting Partner
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            className="text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.96] tracking-[-0.05em] text-white max-w-5xl"
          >
            Sky&apos;s the{" "}
            <em className="font-normal italic text-white/35">Limit</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-[1.85] text-white/48">
            Helping people and businesses build clarity, make confident
            decisions, and realise limitless possibilities.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={CONTACT_MAILTO}
              className="btn-shared btn-shared--accent"
            >
              Contact Us
            </Link>
            <Link href="/services" className="btn-shared btn-shared--outline">
              Services
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
