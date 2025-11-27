import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";

type ValueCardProps = {
  icon:
    | [
        string,
        {
          [key: string]: string | number;
        }
      ][]
    | readonly (readonly [
        string,
        {
          readonly [key: string]: string | number;
        }
      ])[];
  text: string;
};

export default function ValueCard({ icon: Icon, text }: ValueCardProps) {
  return (
    <div className="flex flex-col py-8 items-center justify-between bg-white rounded-4xl drop-shadow-2xl w-56 h-56 transform hover:scale-110 transition-transform cursor-pointer">
      <HugeiconsIcon icon={Icon} className="w-24 h-24" />
      <p className="w-48 text-center">{text}</p>
    </div>
  );
}
