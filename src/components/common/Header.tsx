"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CONTACT_MAILTO } from "@/src/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header ref={headerRef} className="site-nav">
      <Link
        href="/"
        className="site-nav__logo"
        onClick={() => setMobileOpen(false)}
      >
        saha.
      </Link>

      <nav className="site-nav__center hidden md:flex" aria-label="Primary">
        <Link href="/whoweare" className="site-nav__link">
          Who We Are
        </Link>
        <Link href="/services" className="site-nav__link">
          Services
        </Link>
        <Link href={CONTACT_MAILTO} className="site-nav__link">
          Contact Us
        </Link>
        <Link href="/careers" className="site-nav__link active">
          Work With Us
        </Link>
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Link href="/careers" className="site-nav__cta">
          Work With Us
        </Link>
      </div>

      <button
        type="button"
        className="md:hidden site-nav__link"
        onClick={() => setMobileOpen((value) => !value)}
        aria-expanded={mobileOpen}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? "Close" : "Menu"}
      </button>

      {mobileOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-[rgba(10,22,40,0.98)] border-t border-white/10 px-6 py-8 flex flex-col gap-4">
          <Link
            href="/whoweare"
            className="site-nav__link"
            onClick={() => setMobileOpen(false)}
          >
            Who We Are
          </Link>
          <Link
            href="/services"
            className="site-nav__link"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href={CONTACT_MAILTO}
            className="site-nav__link"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/careers"
            className="site-nav__link"
            onClick={() => setMobileOpen(false)}
          >
            Work With Us
          </Link>
        </div>
      )}
    </header>
  );
}
