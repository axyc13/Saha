"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Service } from "@/src/types/service";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface ServiceProps {
  services: Service[];
}

export default function ServiceDisplay({ services }: ServiceProps) {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);
  const activeService = services.find((s) => s.id === hoveredServiceId);

  return (
    <section className="w-screen min-h-screen text-black p-8 lg:p-16 flex flex-col gap-8 lg:gap-16 items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl">Overview</h1>

      {/* Service List*/}
      <div className="flex flex-row gap-32 justify-center items-center">
        <div className="flex flex-col justify-center text-lg">
          {services.map((s) => (
            <Link
              href={`/services/${s.slug}`}
              key={s.id}
              onMouseEnter={() => setHoveredServiceId(s.id)}
              onMouseLeave={() => setHoveredServiceId(null)}
              className="border-b p-4 hover:bg-black hover:text-white"
            >
              <h2 className="text-base lg:text-base">{s.title}</h2>
            </Link>
          ))}
        </div>

        {/* Service Info Box */}
        <div className="hidden md:flex border rounded-4xl w-100 h-auto flex-col items-center p-8 gap-4 text-sm">
          {activeService ? (
            <>
              <div className="flex flex-col items-center p-4 gap-4">
                <h1 className="text-xl lg:text-2xl text-center">
                  {activeService.title}
                </h1>
                <RichText data={activeService["bullet-points"]} />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center p-4 gap-4">
              <h1 className="text-xl lg:text-2xl text-center">What We Offer</h1>
              <ul className="list-disc gap-2 flex flex-col">
                <li>Hover on a service to get an overview</li>
                <li>Click on a service to explore further</li>
                <li>Scroll down to view all services</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
