import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";

type ValueCardProps = {
  icon:
    | [
        string,
        {
          [key: string]: string | number;
        },
      ][]
    | readonly (readonly [
        string,
        {
          readonly [key: string]: string | number;
        },
      ])[];
  text: string;
};

export default function ValueCard({ icon: Icon, text }: ValueCardProps) {
  return (
    <div
      className="flex flex-col py-8 items-center justify-between bg-white rounded-4xl drop-shadow-2xl w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64
      transform hover:scale-110 transition-transform cursor-pointer gap-2"
    >
      <HugeiconsIcon icon={Icon} className="w-24 h-24" />
      <p className="w-28 lg:w-48 text-center text-xs md:text-base xl:text-lg">
        {text}
      </p>
    </div>
  );
}
