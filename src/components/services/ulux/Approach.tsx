import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

interface HeroProps {
  onArrowClick?: () => void;
}

export default function Approach({ onArrowClick }: HeroProps) {
  return (
    <section className="pt-8 justify-center items-center h-screen flex flex-col px-8 lg:px-24 bg-[#f2f1ed] text-center">
      <div className="flex flex-col justify-between px-8 lg:px-0 pt-32 pb-16 h-full items-center relative z-10">
        <h1 className="arapey text-3xl lg:text-5xl text-center">
          We do not create itineraries, <br /> We shape experiences.
        </h1>
        <h1 className="arapey text-3xl lg:text-5xl">
          Every journey begins with intent and
          <br /> unfolds with discretion.
        </h1>
        <div className="flex flex-col justify-center items-center gap-4">
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
