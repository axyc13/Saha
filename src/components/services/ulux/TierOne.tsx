import React from "react";
import Image from "next/image";
import one from "@/public/1.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";

interface HeroProps {
  onArrowClick?: () => void;
}

export default function TierOne({ onArrowClick }: HeroProps) {
  return (
    <section className="relative w-screen h-screen bg-black text-white">
      <Image
        src={one}
        alt="background"
        className="w-full h-full object-cover absolute inset-0 z-0 opacity-60"
      />

      <div className="flex flex-col justify-between px-8 lg:px-0 pt-32 pb-16 h-full items-center relative z-10">
        <h1 className="arapey text-2xl lg:text-4xl">FALCON : The Design</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-sm lg:text-base text-center">
            First step of ULUX starts with distinguished blueprint, crafted for
            your preference.
          </p>
          <p className="arapey text-xl lg:text-3xl">
            “Where clarity takes form.”
          </p>
          <div className="transition-transform hover:scale-120">
            <HugeiconsIcon
              icon={ArrowUp01Icon}
              size={48}
              onClick={onArrowClick}
              className="rotate-180 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
