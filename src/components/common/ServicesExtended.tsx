import React from "react";
import Link from "next/link";

export default function ServicesExtended() {
  return (
    <div className="text-white bg-black">
      <div className="flex flex-row px-15 py-5">
        <div className="border-r-2 pr-15">
          <h2 className="text-2xl pb-8">Our Services</h2>
          <p className="text-sm break-normal w-50 pb-8">
            Short description why Saha does services or smth. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Mauris eu molestie felis, nec
            imperdiet metus.
          </p>
          <Link href="/services">
            <button>Explore</button>
          </Link>
        </div>
        <div className="flex flex-col flex-1 pl-15 justify-center">
          <Link
            href="/services"
            className="border-b p-3 hover:bg-white hover:text-black"
          >
            <h2 className="text-md">Financial Management & Oversight</h2>
          </Link>
          <Link
            href="/services"
            className="border-b p-3 hover:bg-white hover:text-black"
          >
            <h2 className="text-md">Strategic Planning & Advisory</h2>
          </Link>
          <Link
            href="/services"
            className="border-b p-3 hover:bg-white hover:text-black"
          >
            <h2 className="text-md">Regulatory Compliance & Risk</h2>
          </Link>
          <Link
            href="/services"
            className="border-b p-3 hover:bg-white hover:text-black"
          >
            <h2 className="text-md">
              Operational Efficiency & Process Improvement
            </h2>
          </Link>
          <Link
            href="/services"
            className="border-b p-3 hover:bg-white hover:text-black"
          >
            <h2 className="text-md">
              Performance Monitoring & Business Insights
            </h2>
          </Link>
          <Link
            href="/services"
            className="border-b p-3 hover:bg-white hover:text-black"
          >
            <h2 className="text-md">Funding & Capital Structuring</h2>
          </Link>
          <Link
            href="/services"
            className="border-b p-3 hover:bg-white hover:text-black"
          >
            <h2 className="text-md">Add-On Services</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
