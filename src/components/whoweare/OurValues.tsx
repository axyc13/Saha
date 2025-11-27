import React from "react";
import ValueCard from "./ValueCard";
import type { Value } from "@/src/types/value";
import { getValues } from "@/src/lib/payload/values";
import {
  BalanceScaleIcon,
  Mortarboard01Icon,
  ZapIcon,
  HeartCheckIcon,
  Knowledge02Icon,
  UserGroupIcon,
  LayerIcon,
  ZoomInAreaIcon,
} from "@hugeicons/core-free-icons";

const icons = [
  BalanceScaleIcon,
  Mortarboard01Icon,
  ZapIcon,
  HeartCheckIcon,
  Knowledge02Icon,
  UserGroupIcon,
  LayerIcon,
  ZoomInAreaIcon,
];

export default async function OurValues() {
  const sections: Value[] = await getValues();

  return (
    <section
      id="values"
      className="w-screen h-screen text-black flex flex-col gap-8"
    >
      <h1 className="text-6xl px-8">Our Values</h1>

      <div className="bg-black w-screen h-screen grid grid-cols-4 grid-rows-2 place-items-center">
        {sections.map((v, id) => {
          const IconComponent = icons[id];
          return <ValueCard key={id} icon={IconComponent} text={v.text} />;
        })}
      </div>
    </section>
  );
}
