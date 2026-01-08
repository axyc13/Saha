"use client";

import { useRef } from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import Pricing from "./Pricing";
import Footer from "../../common/Footer";

export default function PageScroll() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="snap-start h-screen"
      >
        <Hero onArrowClick={() => scrollToSection(1)} />
      </div>

      <div
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="snap-start h-screen"
      >
        <Menu onArrowClick={() => scrollToSection(2)} />
      </div>

      <div
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="snap-start h-auto"
      >
        <Pricing />
        <Footer />
      </div>
    </section>
  );
}
