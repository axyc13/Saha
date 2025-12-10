import React from "react";
import { getTerms } from "src/lib/payload/terms";
import type { Term } from "@/src/types/term";

export default async function Contact() {
  const sections: Term[] = await getTerms();

  return (
    <section className="w-screen min-h-screen text-black p-8 lg:px-32 lg:py-8">
      <div className="flex flex-col gap-8">
        {sections.map((sec) => (
          <div key={sec.id} className="px-8 md:px-16">
            <h1 className="text-2xl md:text-3xl">{sec.title}</h1>
            <br />
            <p className="text-sm md:text-base whitespace-pre-line">
              {sec.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
