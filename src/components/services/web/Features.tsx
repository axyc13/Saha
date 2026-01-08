import React from "react";

export default function LandingPage() {
  return (
    <section className="justify-center min-h-screen w-screen flex flex-col gap-8 py-16 px-8 lg:px-24">
      <h1 className="text-4xl md:text-5xl text-center">What we do</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-8">
          <h2 className="text-2xl mb-4">Design</h2>
          <p className="opacity-70">
            Website design including user interface, user experience, and
            branding. Come to us with your ideas, and we&apos;ll make them a
            reality.
          </p>
        </div>

        <div className="border rounded-lg p-8">
          <h2 className="text-2xl mb-4">Website Design & Development</h2>
          <p className="opacity-70">
            We use the latest technologies to build fast, secure, and scalable
            web applications based on your designs
          </p>
        </div>

        <div className="border rounded-lg p-8">
          <h2 className="text-2xl mb-4">E-commerce Solutions</h2>
          <p className="opacity-70">
            Custom online stores with payment integration and inventory
            management
          </p>
        </div>

        <div className="border rounded-lg p-8">
          <h2 className="text-2xl mb-4">Web Hosting and Maintanence</h2>
          <p className="opacity-70">
            Reliable hosting solutions with ongoing maintenance and support to
            keep your website running smoothly
          </p>
        </div>
      </div>
    </section>
  );
}
