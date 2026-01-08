"use client";

import Link from "next/link";
type Props = {
  onBack: () => void; // for mobile back button
  onLinkClick: () => void; // for link clicks
};

export default function ServicesExtended({ onBack, onLinkClick }: Props) {
  return (
    <div className="text-white bg-black h-auto lg:py-8">
      <div className="hidden md:flex flex-row px-16 py-4">
        <div className="border-r-2 pr-16">
          <h2 className="text-2xl pb-8">Our Services</h2>
          <p className="text-sm break-normal w-56 pb-8">
            Saha provides industry-focused services for public and private
            clients. Our experienced staff, combined with our global network,
            allow us to provide the support you need - wherever you need it. We
            aim to provide trust through assurance and help you transform, grow
            and operate.
          </p>
          <Link href="/services" onClick={onLinkClick}>
            <button>Explore</button>
          </Link>
        </div>
        <div className="flex flex-col px-16 justify-center w-full">
          <Link
            href="/services"
            onClick={onLinkClick}
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Overview</h2>
          </Link>
          <Link
            href="/services/finance"
            onClick={onLinkClick}
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Finance & Advisory</h2>
          </Link>
          <Link
            href="/services/ulux"
            onClick={onLinkClick}
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">ULux</h2>
          </Link>
          <Link
            href="/services/web"
            onClick={onLinkClick}
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Website Development</h2>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col p-8 gap-8">
        <div className="flex flex-row items-center gap-8">
          <h2 className="text-2xl">Our Services</h2>
          <button onClick={onBack}>Back</button>
        </div>

        <p className="text-xs md:text-sm break-normal">
          Saha provides industry-focused services for public and private
          clients. Our experienced staff, combined with our global network,
          allow us to provide the support you need - wherever you need it. We
          aim to provide trust through assurance and help you transform, grow
          and operate.
        </p>

        <div className="flex flex-col">
          <Link
            href="/services"
            onClick={onLinkClick}
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-sm md:text-md">Overview</h2>
          </Link>
          <Link
            href="/services/finance"
            onClick={onLinkClick}
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-sm md:text-md">Finance & Advisory</h2>
          </Link>
          <Link
            href="/services/ulux"
            onClick={onLinkClick}
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-sm md:text-md">ULux</h2>
          </Link>
          <Link
            href="/services/web"
            onClick={onLinkClick}
            className="border-b p-4 hover:bg-white hover:text-black"
          >
            <h2 className="text-sm md:text-md">Website Development</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
