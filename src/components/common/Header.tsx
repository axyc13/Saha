"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ArrowDropDown from "@/public/arrowDropDown.png";
import WhoWeAreExtended from "./WhoWeAreExtended";
import ServicesExtended from "./ServicesExtended";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";

export default function Header() {
  type HeaderType = "whoweare" | "services" | "mobile" | undefined;
  type MobilePage = "whoweare" | "services" | "menu";

  const [desktopOpen, setDesktopOpen] = useState<HeaderType>(undefined);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePage, setMobilePage] = useState<MobilePage>("menu");
  const toggleOpen = (type: HeaderType) => {
    setDesktopOpen(desktopOpen === type ? undefined : type);
  };

  // Refs
  const extendedMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Clicking Outside Menu Closes Menu
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        (desktopOpen === "whoweare" &&
          extendedMenuRef.current &&
          !extendedMenuRef.current.contains(e.target as Node) &&
          headerRef.current &&
          !headerRef.current.contains(e.target as Node)) ||
        (desktopOpen === "services" &&
          extendedMenuRef.current &&
          !extendedMenuRef.current.contains(e.target as Node) &&
          headerRef.current &&
          !headerRef.current.contains(e.target as Node))
      ) {
        setDesktopOpen(undefined);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopOpen]);

  return (
    <header className="relative text-white bg-black">
      <div
        className="px-8 py-4 flex justify-center items-center gap-8 md:gap-16"
        ref={headerRef}
      >
        {/* Saha Logo */}
        <div>
          <Link
            href="/"
            onClick={(e) => {
              // Closes menu when menu is open, else redirects to home
              if (mobileOpen || desktopOpen) {
                e.preventDefault();
                setMobileOpen(false);
                setDesktopOpen(undefined);
              }
            }}
          >
            <h1 className="text-3xl shrink-0">Saha</h1>
          </Link>
        </div>

        {/* Desktop Nav Bar */}
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
                desktopOpen === "whoweare" ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleOpen("services")}
          >
            Chapters
            <Image
              src={ArrowDropDown}
              alt="Arrow"
              className={`transition-transform duration-300 ${
                desktopOpen === "services" ? "rotate-180" : "rotate-0"
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

        {/* Mobile Nav Burger*/}
        <nav
          className="flex md:hidden justify-end flex-1 flex-row gap-2"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setDesktopOpen("mobile");
          }}
        >
          <p>Menu</p>
          <HugeiconsIcon icon={mobileOpen ? Cancel01Icon : Menu01Icon} />
        </nav>

        <p className="text-sm">NZ-EN</p>
      </div>

      {/* Extended Menu */}
      <div ref={extendedMenuRef}>
        {/* Who We Are */}
        <div
          className={`absolute left-0 top-full w-full z-80 transition-all duration-300 ${
            desktopOpen === "whoweare"
              ? "extendedAnimationOpen"
              : "extendedAnimationClose"
          }`}
        >
          <div>
            <WhoWeAreExtended
              onBack={() => {
                setMobilePage("menu"); // mobile back
                setDesktopOpen(undefined);
              }}
              onLinkClick={() => {
                setDesktopOpen(undefined); // close menu on link click
                setMobileOpen(false);
              }}
            />
          </div>
        </div>

        {/* Services */}
        <div
          className={`absolute left-0 top-full w-full z-80 transition-all duration-300 ${
            desktopOpen === "services"
              ? "extendedAnimationOpen"
              : "extendedAnimationClose"
          }`}
        >
          <div>
            <ServicesExtended
              onBack={() => {
                setMobilePage("menu");
                setDesktopOpen(undefined);
              }}
              onLinkClick={() => {
                setDesktopOpen(undefined);
                setMobileOpen(false);
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
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
            Chapters
            <Image src={ArrowDropDown} alt="Arrow" className="rotate-270" />
          </div>
          <Link href="/contactus">Contact Us</Link>
          <Link href="/careers">Careers</Link>
        </div>
      )}
    </header>
  );
}
