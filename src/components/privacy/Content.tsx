import React from "react";
import type { Policy } from "@/src/types/policy";
import { getPolicies } from "@/src/lib/payload/policies";

export default async function Contact() {
  const sections: Policy[] = await getPolicies();

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
