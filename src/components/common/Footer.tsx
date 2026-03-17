import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook02Icon,
  NewTwitterIcon,
  Linkedin02Icon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer className="w-screen bg-[#1E2A38] text-[#f2f2f2] border-t border-[#324355]">
      <div className="w-full px-8 py-5 md:py-6">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="shrink-0 flex items-center gap-2">
            <Image
              src={logo}
              alt="Saha logo"
              className="w-7 h-7 rounded-full object-cover"
            />
            <Link href="/" className="text-xl leading-none">
              Saha
            </Link>
          </div>

          <nav
            className="flex-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:text-[13px] text-[#d8dee5]"
            aria-label="Footer navigation"
          >
            <Link href="/whoweare" className="hover:text-white transition-colors">
              About
            </Link>
            {/* <Link href="/whoweare/#values" className="hover:text-white transition-colors">
              Our Values
            </Link>
            <Link href="/whoweare/people" className="hover:text-white transition-colors">
              Our People
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              What We Do
            </Link> */}
            <Link href="/contactus" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
          </nav>

          <div className="flex items-center gap-3 text-[#d8dee5] md:justify-end">
            <Link
              href="/facebook"
              target="_blank"
              aria-label="Visit Saha on Facebook"
              className="hover:text-white transition-colors"
            >
              <HugeiconsIcon icon={Facebook02Icon} className="w-[15px] h-[15px]" />
            </Link>
            <Link
              href="/x"
              target="_blank"
              aria-label="Visit Saha on X"
              className="hover:text-white transition-colors"
            >
              <HugeiconsIcon icon={NewTwitterIcon} className="w-[15px] h-[15px]" />
            </Link>
            <Link
              href="/instagram"
              target="_blank"
              aria-label="Visit Saha on Instagram"
              className="hover:text-white transition-colors"
            >
              <HugeiconsIcon icon={InstagramIcon} className="w-[15px] h-[15px]" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/sahaca/posts/"
              target="_blank"
              aria-label="Visit Saha on LinkedIn"
              className="hover:text-white transition-colors"
            >
              <HugeiconsIcon icon={Linkedin02Icon} className="w-[15px] h-[15px]" />
            </Link>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="mt-4 pt-3 border-t border-[#324355] flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs md:text-[12px] text-[#c2cbd4]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <p>© 2025 Saha. All rights reserved.</p>
            <p>
              Designed by{" "}
              <Link
                target="_blank"
                href="https://www.andrewxychen.com"
                className="hover:text-white transition-colors"
              >
                Andrew Chen
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/privacy" target="_blank" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/termsofuse" target="_blank" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
