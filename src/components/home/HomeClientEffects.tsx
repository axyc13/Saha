"use client";

import { useEffect } from "react";

export default function HomeClientEffects() {
  useEffect(() => {
    const heroImage = document.querySelector<HTMLElement>("#section-home .hero-img");
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("#section-home .reveal"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const handleScroll = () => {
      if (heroImage) {
        heroImage.style.transform = `scale(1.08) translateY(${window.scrollY * 0.25}px)`;
      }
    };

    reveals.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
