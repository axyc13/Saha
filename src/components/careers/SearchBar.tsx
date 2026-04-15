import React from "react";
import Link from "next/link";
import { CONTACT_MAILTO } from "@/src/lib/site";

export default function SearchBar() {
  return (
    <section className="panel-cream px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.25rem] border border-(--light) bg-white p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-eyebrow">Search Roles</p>
          <h2 className="section-title">
            Search all <em>positions</em>
          </h2>
          <p className="mt-5 text-body max-w-2xl">
            At this stage we have wonderful people contributing to Saha. If you
            want to introduce yourself, send us your CV or reach out directly.
          </p>
        </div>

        <div className="space-y-4">
          <input
            name="message"
            className="w-full rounded-md border border-(--light) bg-(--off-white) px-4 py-3 text-sm text-(--navy) outline-none"
            placeholder="Search"
            required
          />
          <p className="text-sm leading-7 text-[rgba(10,22,40,0.62)]">
            Please feel free to send us a copy of your CV to{" "}
            <Link href={CONTACT_MAILTO} className="underline text-(--accent)">
              business@saha.co.nz
            </Link>{" "}
            and we will be in touch.
          </p>
          <Link href={CONTACT_MAILTO} className="btn-shared btn-shared--accent">
            Email Us
          </Link>
        </div>
      </div>
    </section>
  );
}
