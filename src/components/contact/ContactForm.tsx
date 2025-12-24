"use client";
import React, { useState } from "react";
import Form from "next/form";
import Link from "next/link";
import { sendFormEmail } from "./Form";

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
    <section className="w-screen min-h-screen text-black p-16 flex flex-col gap-8 justify-center items-center relative">
      <Form action={handleSubmit}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-around items-center">
            {/* Personal Details */}
            <div className="flex flex-col gap-8 [&_input]:lg:w-[32vw] [&_input]:h-[8vh] flex-1">
              <input name="topic" placeholder="Topic*" required />
              <input name="firstName" placeholder="First Name*" required />
              <input name="lastName" placeholder="Last Name*" required />
              <input name="email" placeholder="Email*" type="email" required />
              <input
                name="phone"
                placeholder="Phone Number*"
                type="number"
                required
              />
            </div>

            {/* Saha Address */}
            <div className="border w-80 h-80 hidden lg:flex flex-col p-8 gap-2 text-sm">
              <h1 className="text-2xl">Satyam Saha CA</h1>
              <p>
                <b>Auckland:</b>
                <br />
                20 Boundary Road, Blockhouse Bay, Auckland 0600
              </p>
              <p>
                <b>Hawke&apos;s Bay:</b>
                <br />
                1105B Karamu Road North, Hastings
              </p>
              <p>
                <b>Email:</b>
                <br />
                satyamsaha.ca@gmail.com
              </p>
              <p>
                <b>Phone:</b>
                <br />
                022 315 5751
              </p>
            </div>
          </div>

          {/* Message Box */}
          <textarea
            name="message"
            className="w-full h-[32vh] lg:h-[50vh] resize-none p-8 rounded-[45px] border border-black"
            placeholder="Your Message*"
            required
          />

          {/* Terms and Submit Box */}
          <div className="flex flex-row gap-2 justify-center">
            <input type="checkbox" required />
            <span className="text-xs lg:text-sm">
              I have read and accept the{" "}
              <Link
                href="/termsofuse"
                target="_blank"
                className="underline text-[#299ff9]"
              >
                Terms of Use.
              </Link>{" "}
              Please read our{" "}
              <Link
                href="/privacy"
                target="_blank"
                className="underline text-[#299ff9]"
              >
                Privacy Policy
              </Link>{" "}
              to understand how we plan to use your personal information.
            </span>
          </div>

          <div className="flex justify-center">
            <button type="submit">Submit</button>
          </div>
        </div>
      </Form>

      {/* Notification */}
      {status !== "idle" && (
        <div
          className={` px-6 py-4 rounded-lg text-white font-medium transition-all duration-300
            ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {status === "success"
            ? "Message sent successfully!"
            : "Failed to send message."}
        </div>
      )}
    </section>
  );
}
