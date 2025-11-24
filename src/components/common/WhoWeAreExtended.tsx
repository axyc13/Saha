import React from "react";
import Link from "next/link";

export default function WhoWeAreExtended() {
  return (
    <div className=" text-white bg-black ">
      <div className="flex flex-row px-15 py-5">
        <div className="border-r-2 pr-15">
          <h2 className="text-2xl pb-8">Who We Are</h2>
          <p className="text-sm break-normal w-50 pb-8">
            Short description why Saha does services or smth. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Mauris eu molestie felis, nec
            imperdiet metus.
          </p>
          <Link href="/whoweare">
            <button>Explore</button>
          </Link>
        </div>
        <div className="flex flex-col flex-1 pl-15 justify-center">
          <Link
            href="/whoweare"
            className="border-b p-5 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Overview</h2>
          </Link>
          <Link
            href="/whoweare/governance"
            className="border-b p-5 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Governance</h2>
          </Link>
          <Link
            href="/whoweare"
            className="border-b p-5 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Our Values</h2>
          </Link>
          <Link
            href="/whoweare/people"
            className="border-b p-5 hover:bg-white hover:text-black"
          >
            <h2 className="text-xl">Our People</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
