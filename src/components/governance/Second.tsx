import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";

export default function Second() {
  return (
    <section className="w-screen h-[200vh] text-black ">
      <div className="flex flex-col justify-center gap-16">
        <div className="flex justify-end">
          <h1 className="text-5xl  text-end px-24 max-w-[40ch]">
            A commitment to strong, responsible business practices
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-16 max-w-[48vw] justify-center">
            <p className="break-normal">
              We hold ourselves to high standards not because we have to, but
              because it&apos;s who we are. Our governance approach ensures
              we&apos;re always acting responsibly, ethically, and in the best
              interests of our clients, our people, and our community. These
              include:
            </p>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl">• Ethical decision-making</h1>
              <p>
                We operate with integrity and transparency, putting honesty
                first in every interaction.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl">• Accountability & performance</h1>
              <p>
                We measure our progress, reflect deeply, and stay disciplined.
                If something can be done better, we own it and improve it.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-end">
            <Image
              src={placeholder}
              alt="Placeholder"
              className="max-w-lg h-auto"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center gap-16">
          <div className="flex flex-col gap-8 items-end">
            <Image
              src={placeholder}
              alt="Placeholder"
              className="max-w-lg h-auto"
            />
          </div>
          <div className="flex flex-col gap-16 max-w-[48vw] justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl">• Clear communication</h1>
              <p>
                We simplify complexity and keep clients fully informed so they
                always know where things stand.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl">• Risk awareness & calm execution</h1>
              <p>
                We stay composed under pressure, think clearly, and make
                decisions grounded in logic and experience.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl">• Inclusive and supportive culture</h1>
              <p>
                We foster an environment where people help each other grow,
                share knowledge openly, and treat everyone with respect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
