import React from "react";
import bg from "@/public/planeBg.png";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";

interface HeroProps {
  onArrowClick?: () => void;
}

export default function Hero({ onArrowClick }: HeroProps) {
  return (
    <section className="relative w-screen h-screen bg-black text-white">
      <Image
        src={bg}
        alt="background image"
        className="object-cover w-full h-full absolute inset-0 z-0 opacity-60"
      />
      <div className="flex flex-col justify-end py-16 h-full items-center relative z-10">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl lg:text-2xl w-[80vw] lg:w-[56vw] text-center">
            “We offer a curated range of private travel planning services,
            designed for individuals who value exclusivity.”
          </h3>
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
