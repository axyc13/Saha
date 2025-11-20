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
    <header>
      <div className="p-5 text-white bg-black flex items-center gap-15">
        <Link href="/">
          <h1 className="text-3xl shrink-0">Saha</h1>
        </Link>
        <nav className="flex gap-6 flex-1 items-center">
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
        <p className="shrink-0 p-1">NZ-EN</p>
      </div>
      {open == "whoweare" && <WhoWeAreExtended />}
      {open == "services" && <ServicesExtended />}
    </header>
  );
}
