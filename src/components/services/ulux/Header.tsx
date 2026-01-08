"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getUluxOptions } from "@/src/lib/payload/uluxOptions";
import type { Ulux } from "@/src/types/ulux";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [uluxOptions, setUluxOptions] = useState<Ulux[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const options = await getUluxOptions();
      setUluxOptions(options);
    };
    fetchOptions();
  }, []);

  return (
    <>
      {/* Header / nav */}
      <header className="fixed top-0 left-0 w-full z-50 text-white">
        <nav className="flex items-center justify-between px-8 lg:px-24 py-4 bg-black/20 backdrop-blur-sm text-white">
          <p
            className="cursor-pointer text-base lg:text-xl hover:underline"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </p>
          <h2 className="text-4xl lg:text-6xl">U Lux</h2>
          <Link href="/contactus">
            <p className="text-base lg:text-xl hover:underline">Contact Us</p>
          </Link>
        </nav>
      </header>

      {/* Slide-out menu overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-screen lg:w-[64vw] h-screen py-16 px-8 text-white bg-black/80 backdrop-blur-sm z-50 shadow-lg transition-transform duration-300 ease-in-out">
          <button
            className="text-black text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="flex flex-row w-full h-full gap-8 justify-between">
            <div className="flex flex-col w-full lg:w-1/4 h-full justify-center">
              {uluxOptions.map((option, index) => (
                <Link
                  key={option.id}
                  href={`/services/ulux/${option.slug}`}
                  className="p-8 border-b border-white hover:bg-white hover:text-black"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h2 className="text-xl">Option {index + 1}</h2>
                </Link>
              ))}
              <Link
                href="/"
                className="p-8 border-b border-white hover:bg-white hover:text-black"
                onMouseEnter={() => setHoveredIndex(null)}
              >
                <h2 className="text-xl">Back To Home</h2>
              </Link>
            </div>
            {hoveredIndex !== null && uluxOptions[hoveredIndex] && (
              <div className="w-[48vw] lg:w-[40vw] p-8 flex flex-col gap-8 justify-center items-center">
                <h2 className="text-2xl lg:text-4xl text-center">
                  {uluxOptions[hoveredIndex].title}
                </h2>
                <div className="text-center">
                  {uluxOptions[hoveredIndex].description}
                </div>
                <Image
                  src={uluxOptions[hoveredIndex].photo.url}
                  alt={uluxOptions[hoveredIndex].photo.alt}
                  width={400}
                  height={300}
                  unoptimized
                  className="h-auto w-3/4"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
