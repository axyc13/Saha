"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowDropDown from "@/public/arrowDropDown.png";
import WhoWeAreExtended from "./WhoWeAreExtended";
import ServicesExtended from "./ServicesExtended";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const toggleOpen = (tab: string) => {
    setOpen(open === tab ? null : tab);
  };

  return (
    <header className="relative text-white bg-black ">
      <div className="px-10 py-3 flex items-center gap-15">
        <Link href="/">
          <h1 className="text-3xl shrink-0">Saha</h1>
        </Link>
        <nav className="flex gap-6 flex-1 items-center text-sm">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleOpen("whoweare")}
          >
            Who We Are
            <Image
              src={ArrowDropDown}
              alt="Arrow"
              className={`transition-transform duration-300 ${
                open === "whoweare" ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleOpen("services")}
          >
            Our Services
            <Image
              src={ArrowDropDown}
              alt="Arrow"
              className={`transition-transform duration-300 ${
                open === "services" ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <Link href="/contactus" className="pl-2">
            Contact Us
          </Link>
          <Link href="/careers" className="pl-4">
            Careers
          </Link>
        </nav>
        <p className="shrink-0 p-1 text-sm">NZ-EN</p>
      </div>

      <div
        className={`
      absolute left-0 top-full w-full z-50
      transition-all duration-300
      ${
        open === "whoweare" ? "extendedAnimationOpen" : "extendedAnimationClose"
      }
    `}
      >
        <WhoWeAreExtended />
      </div>

      <div
        className={`
      absolute left-0 top-full w-full z-50
      transition-all duration-300
      ${
        open === "services" ? "extendedAnimationOpen" : "extendedAnimationClose"
      }
    `}
      >
        <ServicesExtended />
      </div>
    </header>
  );
}
