import React from "react";
import ProfileCard from "./ProfileCard";
import type { Contact } from "@/src/types/contact";
import { getContacts } from "@/src/lib/payload/contacts";

export default async function Team() {
  const people: Contact[] = await getContacts();
  return (
    <section className="w-screen min-h-screen text-black flex items-center justify-center flex-col gap-8 py-8">
      <div className="flex flex-col gap-8 px-16">
        <h1 className="text-4xl lg:text-6xl">Our People</h1>
        <p className="text-sm lg:text-base">
          Our leaders and advisors help clients build clarity, make confident
          decisions, and grow sustainably. Their experience spans finance,
          accounting, business strategy, operations, and organisational
          improvement.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center w-full px-4 lg:px-16">
        {people.map((p) => (
          <ProfileCard
            key={p.id}
            name={p.name}
            title={p.title}
            phone={p.phone}
            email={p.email}
            image={p.photo.url}
          />
        ))}
      </div>
    </section>
  );
}
