import React from "react";
import Image from "next/image";
import three from "@/public/3.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";

interface HeroProps {
  onArrowClick?: () => void;
}

export default function TierThree({ onArrowClick }: HeroProps) {
  return (
    <section className="relative w-screen h-screen bg-black text-white">
      <Image
        src={three}
        alt="background"
        className="w-full h-full object-cover absolute inset-0 z-0 opacity-60"
      />

      <div className="flex flex-col justify-between lg:px-0 pt-32 pb-16 h-full items-center lg:items-start relative z-10">
        <h1 className="arapey text-2xl lg:text-4xl px-8 lg:px-24 ">
          SHARK : The Stewardship
        </h1>
        <p className="text-sm lg:text-base text-center px-8 lg:px-24">
          A constant, unobstrusive presence throughout your journey.
        </p>
        <p className="arapey text-lg md:text-xl lg:text-3xl px-8 lg:px-24 text-center">
          “A curated odyssey, guided by wisdom and grace”
        </p>
        <div className="flex flex-col justify-center items-start gap-8">
          <div className="transition-transform hover:scale-120 w-screen flex justify-center">
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
