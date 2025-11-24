import React from "react";
import { getTerms } from "../../lib/payload/terms";
import type { Term } from "src/types/Terms";

export default async function Contact() {
  const sections: Term[] = await getTerms();

  return (
    <section className="w-screen text-black px-30 justify-between py-10">
      <div className="flex flex-col gap-10">
        {sections.map((sec) => (
          <div key={sec.id}>
            <h1 className="text-3xl">{sec.title}</h1>
            <p className="text-md whitespace-pre-line">{sec.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
