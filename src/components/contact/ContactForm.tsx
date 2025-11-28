"use client";
import React from "react";
import Form from "next/form";
import Link from "next/link";
import { sendFormEmail } from "./Form";

export default function ContactForm() {
  return (
    <section className="w-screen h-[145vh] text-black px-8 flex justify-center items-center">
      <Form action={sendFormEmail}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-64 items-center">
            <div className="flex flex-col gap-8">
              <input
                name="topic"
                className="w-[25vw] h-[8vh]"
                placeholder="Topic*"
                required
              />
              <input
                name="firstName"
                className="w-[25vw] h-[8vh]"
                placeholder="First Name*"
                required
              />
              <input
                name="lastName"
                className="w-[25vw] h-[8vh]"
                placeholder="Last Name*"
                required
              />
              <input
                name="email"
                className="w-[25vw] h-[8vh]"
                placeholder="Email*"
                type="email"
                required
              />
              <input
                name="phone"
                className="w-[25vw] h-[8vh]"
                placeholder="Phone Number*"
                type="number"
                required
              />
            </div>
            <div className="border w-80 h-80 flex flex-col p-8 gap-2 text-sm">
              <h1 className="text-2xl">Saha Auckland</h1>
              <p> 123 Address Place, Auckland, 1234</p>
              <p>
                <b>Postage:</b>
                <br />
                Private Bag 1234 Auckland
              </p>
              <p>
                <b>Email:</b>
                <br />
                help@saha.co.nz
              </p>
              <p>
                <b>Phone:</b>
                <br />
                +64 123 4567
              </p>
              <p>
                <b>Fax:</b>
                <br />
                +64 123 4567
              </p>
            </div>
          </div>
          <textarea
            name="message"
            className="w-full h-[50vh] resize-none p-8 rounded-[45px] border border-black"
            placeholder="Your Message*"
            required
          />

          <div className="flex flex-row gap-2 justify-center">
            <input type="checkbox" required></input>
            <span className="text-sm">
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
    </section>
  );
}
