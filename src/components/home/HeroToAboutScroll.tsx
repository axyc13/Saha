"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";

export default function HeroToAboutScroll() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Overlay fades in as you scroll
  const overlayOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  const heroTextOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);
  const heroTextY = useTransform(
    scrollYProgress,
    [0.05, 0.25],
    ["0vh", "-6vh"]
  );

  return (
    <section ref={ref} className="relative h-[172vh]">
      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen">
        <Hero
          textStyle={{
            opacity: heroTextOpacity,
            y: heroTextY,
          }}
        />

        {/* Dark overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 bg-black"
        />
      </div>

      {/* AboutUs reveal */}
      <motion.div className="relative z-10">
        <AboutUs />
      </motion.div>
    </section>
  );
}
