import React from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, CallIcon } from "@hugeicons/core-free-icons";

export default function Second({
  name,
  title,
  phone,
  email,
  image,
}: {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
}) {
  return (
    <div className="p-8 w-[72vw] lg:w-[40vw] h-[40vw] lg:h-[24vw] bg-white text-black flex items-center justify-center drop-shadow-xl">
      <div className="flex flex-row items-center justify-center gap-4 lg:gap-8 w-full h-full">
        <div>
          <Image
            src={image}
            alt="placeholder"
            width={288}
            height={320}
            className="object-cover w-32 h-36 md:w-48 md:h-56 lg:w-80 lg:h-72 "
          />
        </div>

        <div className="flex flex-col justify-center gap-4 lg:gap-8 w-auto lg:w-full h-auto">
          <h1 className="text-xl lg:text-3xl">{name}</h1>
          <p className="text-sm lg:text-base">{title}</p>
          <div className="flex flex-row gap-2 lg:gap-4 items-center">
            <HugeiconsIcon
              icon={CallIcon}
              className="w-3  h-3  lg:w-6  lg:h-6"
            />
            <p className="text-xs lg:text-sm">{phone}</p>
          </div>
          <div className="flex flex-row gap-2 lg:gap-4 items-center">
            <HugeiconsIcon
              icon={Mail01Icon}
              className="w-3 h-3 lg:w-6 lg:h-6"
            />
            <p className="text-xs lg:text-sm">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
