import React from "react";
import { Ulux } from "@/src/types/ulux";
import BreadCrumb from "../../../common/BreadCrumb";

interface UluxProp {
  ulux: Ulux;
}

export default function UluxPageHero({ ulux }: UluxProp) {
  return (
    <section className="w-[screen] h-[40vh] bg-black text-white flex flex-col md:flex-row items-center gap-8 px-8 lg:px-32 justify-center lg:justify-between">
      <div className="flex flex-col gap-8 w-[80vw]">
        <BreadCrumb />
        <h1 className="text-3xl lg:text-5xl">{ulux.title}</h1>
      </div>
    </section>
  );
}
