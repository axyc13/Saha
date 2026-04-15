"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const navClass = (href: string) =>
    `site-nav__link${pathname === href ? " active" : ""}`;

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
        <Link href="/" className={navClass("/")}>
          Home
        </Link>
        <Link href="/whoweare" className={navClass("/whoweare")}>
          Who We Are
        </Link>
        <Link href="/services" className={navClass("/services")}>
          Services
        </Link>
        <Link href="/careers" className={navClass("/careers")}>
          Careers
        </Link>
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Link href="/contactus" className="site-nav__cta">
          Work with us
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
            href="/"
            className={navClass("/")}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/whoweare"
            className={navClass("/whoweare")}
            onClick={() => setMobileOpen(false)}
          >
            Who We Are
          </Link>
          <Link
            href="/services"
            className={navClass("/services")}
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/careers"
            className={navClass("/careers")}
            onClick={() => setMobileOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="/contactus"
            className="site-nav__link"
            onClick={() => setMobileOpen(false)}
          >
            Work with us
          </Link>
        </div>
      )}
    </header>
  );
}
