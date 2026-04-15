"use client";
import React, { useState } from "react";
import Form from "next/form";
import Link from "next/link";
import { sendFormEmail } from "./Form";
import { CONTACT_MAILTO } from "@/src/lib/site";
import "src/app/(frontend)/globals.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (formData: FormData) => {
    try {
      await sendFormEmail(formData);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="panel-cream px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div
          className="relative overflow-hidden rounded-[1.25rem] p-8 lg:p-10 text-white"
          style={{ background: "var(--navy)" }}
        >
          <div className="absolute inset-0 grid-muted pointer-events-none" />
          <div className="relative z-10">
            <p
              className="section-eyebrow"
              style={{ color: "var(--accent-light)" }}
            >
              Work With Us
            </p>
            <h2 className="section-title section-title--light text-[clamp(2rem,3vw,3rem)]">
              Start the <em>conversation</em>
            </h2>
            <p className="mt-5 max-w-md text-body text-body--light">
              If you have a project, proposal, or internship enquiry, send it
              through and we&apos;ll direct it to the right person.
            </p>
            <Link
              href={CONTACT_MAILTO}
              className="btn-shared btn-shared--accent mt-8"
            >
              Email business@saha.co.nz
            </Link>
          </div>
        </div>

        <div
          className="rounded-[1.25rem] border bg-white p-8 lg:p-10 shadow-[0_20px_60px_rgba(10,22,40,0.08)]"
          style={{ borderColor: "var(--light)", color: "var(--navy)" }}
        >
          <Form action={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="topic"
                placeholder="Topic*"
                required
                className="rounded-md border px-4 py-3"
                style={{
                  borderColor: "var(--light)",
                  background: "var(--off-white)",
                }}
              />
              <input
                name="phone"
                placeholder="Phone Number*"
                required
                className="rounded-md border px-4 py-3"
                style={{
                  borderColor: "var(--light)",
                  background: "var(--off-white)",
                }}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="firstName"
                placeholder="First Name*"
                required
                className="rounded-md border px-4 py-3"
                style={{
                  borderColor: "var(--light)",
                  background: "var(--off-white)",
                }}
              />
              <input
                name="lastName"
                placeholder="Last Name*"
                required
                className="rounded-md border px-4 py-3"
                style={{
                  borderColor: "var(--light)",
                  background: "var(--off-white)",
                }}
              />
            </div>
            <input
              name="email"
              placeholder="Email*"
              type="email"
              required
              className="rounded-md border px-4 py-3"
              style={{
                borderColor: "var(--light)",
                background: "var(--off-white)",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message*"
              required
              className="min-h-36 resize-y rounded-md border px-4 py-3"
              style={{
                borderColor: "var(--light)",
                background: "var(--off-white)",
              }}
            />

            <div className="flex flex-wrap items-start gap-3 pt-2">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4"
                style={{ accentColor: "var(--accent)" }}
              />
              <span className="text-xs lg:text-sm leading-6 text-[rgba(10,22,40,0.62)]">
                I have read and accept the{" "}
                <Link
                  href="/termsofuse"
                  target="_blank"
                  className="underline"
                  style={{ color: "var(--accent)" }}
                >
                  Terms of Use.
                </Link>{" "}
                Please read our{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  className="underline"
                  style={{ color: "var(--accent)" }}
                >
                  Privacy Policy
                </Link>{" "}
                to understand how we plan to use your personal information.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="max-w-sm text-xs text-[rgba(10,22,40,0.38)]">
                Replies are sent from the same inbox used for Contact Us.
              </p>
              <button type="submit" className="btn-shared btn-shared--primary">
                Submit
              </button>
            </div>
          </Form>

          {/* Notification */}
          {status !== "idle" && (
            <div
              className={`mt-5 rounded-lg px-6 py-4 text-white font-medium transition-all duration-300 ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
            >
              {status === "success"
                ? "Message sent successfully!"
                : "Failed to send message. Retry or email us directly."}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
