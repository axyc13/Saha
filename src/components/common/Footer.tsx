import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook02Icon,
  NewTwitterIcon,
  Linkedin02Icon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer className="relative w-full h-92 lg:h-112 text-white bg-black flex flex-col justify-around p-2 lg:p-8">
      <div className="flex flex-row md:gap-16 lg:gap-32 justify-center md:justify-normal items-center ">
        <div>
          <Image
            src={logo}
            alt="Saha logo"
            className="hidden md:flex rounded-full md:w-60 lg:w-80 md:h-60 lg:h-80"
          />
        </div>

        <div className="flex flex-row gap-16">
          <div>
            <h2 className="text-xl lg:text-3xl pb-8">Quick Links</h2>
            <div className="flex flex-col gap-5 text-sm md:text-md lg:text-[17px]">
              <Link href="/whoweare">About Saha</Link>
              <Link href="/whoweare/#values">Our Values</Link>
              <Link href="/whoweare/people">Our People</Link>
              <Link href="/services">What We Do</Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl lg:text-3xl pb-8">Get Involved</h2>
            <div className="flex flex-col gap-5 text-sm md:text-md lg:text-[17px]">
              <Link href="/contactus">Contact Us</Link>
              <Link href="/careers">Careers</Link>
            </div>
            <div className="md:hidden grid grid-cols-2 gap-y-3 py-6">
              <HugeiconsIcon icon={Linkedin02Icon} className="w-6 h-6 " />
              <HugeiconsIcon icon={Facebook02Icon} className="w-6 h-6" />
              <HugeiconsIcon icon={NewTwitterIcon} className="w-6 h-6" />
              <HugeiconsIcon icon={InstagramIcon} className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-row gap-5 absolute sm:right-22 right-16 bottom-24">
        <Link
          href="https://www.linkedin.com/company/sahaca/posts/"
          target="_blank"
        >
          <HugeiconsIcon
            icon={Linkedin02Icon}
            className="w-6 md:w-8 h-6 md:h-8"
          />
        </Link>

        <Link href="/facebook" target="_blank">
          <HugeiconsIcon
            icon={Facebook02Icon}
            className="w-6 md:w-8 h-6 md:h-8"
          />
        </Link>

        <Link href="/x" target="_blank">
          <HugeiconsIcon
            icon={NewTwitterIcon}
            className="w-6 md:w-8 h-6 md:h-8"
          />
        </Link>

        <Link href="/instagram" target="_blank">
          <HugeiconsIcon
            icon={InstagramIcon}
            className="w-6 md:w-8 h-6 md:h-8"
          />
        </Link>
      </div>

      {/* Bottom Line */}
      <div className="w-full lg:grid grid-cols-3 px-8 lg:px-0 flex flex-row gap-8 justify-center text-center">
        <div className="hidden md:flex" />
        <div className="flex justify-center">
          <p className="text-[9px] lg:text-sm">
            © 2025 Saha. All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-end gap-4 lg:gap-8 pr-4 lg:pr-16">
          <Link
            href="/termsofuse"
            className="text-[9px] lg:text-sm"
            target="_blank"
          >
            Terms of Use
          </Link>
          <Link
            href="/privacy"
            className="text-[9px] lg:text-sm"
            target="_blank"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
