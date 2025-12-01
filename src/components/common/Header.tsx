"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowDropDown from "@/public/arrowDropDown.png";
import WhoWeAreExtended from "./WhoWeAreExtended";
import ServicesExtended from "./ServicesExtended";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";

export default function Header() {
  type MenuTab = "whoweare" | "services" | "mobile" | undefined;
  type MobilePage = "whoweare" | "services" | "menu";
  const [open, setOpen] = useState<MenuTab>(undefined);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePage, setMobilePage] = useState<MobilePage>("menu");
  const toggleOpen = (tab: MenuTab) => {
    setOpen(open === tab ? undefined : tab);
  };

  return (
    <header className="relative text-white bg-black">
      <div className="px-8 py-4 flex justify-center items-center gap-8 md:gap-16">
        <div
          onClick={() => {
            {
              setMobileOpen(!mobileOpen);
              setOpen("mobile");
            }
          }}
        >
          <Link href="/">
            <h1 className="text-3xl shrink-0">Saha</h1>
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="md:gap-8 lg:gap-16 flex-1 items-center md:text-xs lg:text-sm hidden md:flex">
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
        {/* Mobile Nav */}
        <nav className="flex md:hidden justify-end flex-1 ">
          <HugeiconsIcon
            icon={mobileOpen ? Cancel01Icon : Menu01Icon}
            onClick={() => {
              {
                setMobileOpen(!mobileOpen);
                setOpen("mobile");
              }
            }}
          />
        </nav>
        <p className="text-sm">NZ-EN</p>
      </div>

      <div
        className={`
      absolute left-0 top-full w-full z-80
      transition-all duration-300
      ${
        open === "whoweare" ? "extendedAnimationOpen" : "extendedAnimationClose"
      }
    `}
      >
        <WhoWeAreExtended onBack={() => setOpen("mobile")} />
      </div>

      <div
        className={`
      absolute left-0 top-full w-full z-80
      transition-all duration-300
      ${
        open === "services" ? "extendedAnimationOpen" : "extendedAnimationClose"
      }
    `}
      >
        <ServicesExtended onBack={() => setOpen("mobile")} />
      </div>
      {/* MOBILE MENU DROPDOWN */}
      {mobileOpen && mobilePage === "menu" && (
        <div className="md:hidden absolute left-0 top-full w-screen h-screen bg-black text-white px-8 py-4 gap-8 flex flex-col z-50">
          <div
            onClick={() => toggleOpen("whoweare")}
            className="flex flex-row items-center cursor-pointer"
          >
            Who We Are
            <Image src={ArrowDropDown} alt="Arrow" className="rotate-270" />
          </div>
          <div
            onClick={() => toggleOpen("services")}
            className="flex flex-row items-center cursor-pointer"
          >
            Our Services
            <Image src={ArrowDropDown} alt="Arrow" className="rotate-270" />
          </div>
          <Link href="/contactus">Contact Us</Link>
          <Link href="/careers">Careers</Link>
        </div>
      )}
    </header>
  );
}
