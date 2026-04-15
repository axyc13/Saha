import React from "react";
import Link from "next/link";
import { CONTACT_MAILTO } from "@/src/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Link href="/" className="site-footer__logo">
          saha.
        </Link>

        <div className="site-footer__links">
          <Link href="/whoweare" className="site-footer__link">
            Who We Are
          </Link>
          <Link href="/services" className="site-footer__link">
            Services
          </Link>
          <Link href={CONTACT_MAILTO} className="site-footer__link">
            Contact Us
          </Link>
          <Link href="/careers" className="site-footer__link">
            Work With Us
          </Link>
        </div>
      </div>

      <div className="site-footer__bar">
        <p className="site-footer__note">© 2025 Saha. All Rights Reserved.</p>
        <p className="site-footer__note">
          Designed by{" "}
          <Link href="https://www.andrewxychen.com" target="_blank">
            Andrew Chen
          </Link>
        </p>
        <div className="site-footer__links">
          <Link
            href="/termsofuse"
            className="site-footer__link"
            target="_blank"
          >
            Terms of Use
          </Link>
          <Link href="/privacy" className="site-footer__link" target="_blank">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
