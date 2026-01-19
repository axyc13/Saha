"use client";

import { useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import Footer from "../../common/Footer";
import Approach from "./Approach";
import TierOne from "./TierOne";
import TierTwo from "./TierTwo";
import TierThree from "./TierThree";
import TierFour from "./TierFour";
import LoadingScreen from "./LoadingScreen";

export default function PageScroll() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Wrap setState in timeout to avoid cascading renders
    const handleLoadComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoadComplete();
    } else {
      window.addEventListener("load", handleLoadComplete);
      return () => window.removeEventListener("load", handleLoadComplete);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
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
          <Approach onArrowClick={() => scrollToSection(3)} />
        </div>

        <div
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="snap-start h-auto"
        >
          <TierOne onArrowClick={() => scrollToSection(4)} />
        </div>

        <div
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          className="snap-start h-auto"
        >
          <TierTwo onArrowClick={() => scrollToSection(5)} />
        </div>

        <div
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
          className="snap-start h-auto"
        >
          <TierThree onArrowClick={() => scrollToSection(6)} />
        </div>

        <div
          ref={(el) => {
            sectionsRef.current[6] = el;
          }}
          className="snap-start h-auto"
        >
          <TierFour onArrowClick={() => scrollToSection(7)} />
        </div>

        <div
          ref={(el) => {
            sectionsRef.current[7] = el;
          }}
          className="snap-start h-auto"
        >
          <Footer />
        </div>
      </section>
    </>
  );
}
