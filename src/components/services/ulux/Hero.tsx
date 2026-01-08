import React from "react";
import bg from "@/public/bg.png";
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
      <div className="flex flex-col justify-end py-8 h-full items-center relative z-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="text-2xl lg:text-4xl">Craft Your Journey</h3>
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
