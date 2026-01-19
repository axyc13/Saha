import React from "react";
import Image from "next/image";
import two from "@/public/2.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";

interface HeroProps {
  onArrowClick?: () => void;
}

export default function TierTwo({ onArrowClick }: HeroProps) {
  return (
    <section className="relative w-screen h-screen bg-black text-white">
      <Image
        src={two}
        alt="background"
        className="w-full h-full object-cover absolute inset-0 z-0 opacity-60"
      />

      <div className="flex flex-col justify-between px-8 lg:px-0 pt-32 pb-16 h-full items-center relative z-10">
        <h1 className="arapey text-2xl lg:text-4xl">
          PIGEON : The Arrangement
        </h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-sm lg:text-base text-center">
            Everything aligned, quietly and precisely handled by ULUX.
          </p>
          <p className="arapey text-lg md:text-xl lg:text-3xl text-center">
            “Where intention becomes experience, excuted quietly, enjoyed
            fully.”
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
