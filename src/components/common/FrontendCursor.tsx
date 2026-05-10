"use client";

import { useEffect } from "react";

export default function FrontendCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;

      if (cursor) {
        cursor.style.left = `${mx}px`;
        cursor.style.top = `${my}px`;
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ring) {
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
      }

      frame = window.requestAnimationFrame(animateRing);
    };

    const hoverTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "button,a,input,textarea,select,label,.intro-service-row,.value-block,.feature-card,.area-item,.check-item,.sector-tile,.wwa-tile,.btn-svc,.person-mini,.badge",
      ),
    );

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.width = "18px";
        cursor.style.height = "18px";
        cursor.style.background = "rgba(96,165,250,0.6)";
      }

      if (ring) {
        ring.style.width = "54px";
        ring.style.height = "54px";
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursor.style.background = "var(--accent-bright)";
      }

      if (ring) {
        ring.style.width = "36px";
        ring.style.height = "36px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    frame = window.requestAnimationFrame(animateRing);
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(frame);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  );
}
