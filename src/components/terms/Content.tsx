import React from "react";
import { getTerms } from "src/lib/payload/terms";
import type { Term } from "@/src/types/term";

export default async function Contact() {
  const sections: Term[] = await getTerms();

  return (
    <section className="w-screen text-black px-30 justify-between py-10">
      <div className="flex flex-col gap-10">
        {sections.map((sec) => (
          <div key={sec.id} className="px-15">
            <h1 className="text-3xl">{sec.title}</h1>
            <br />
            <p className="text-md whitespace-pre-line">{sec.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
