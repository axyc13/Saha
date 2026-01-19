import React from "react";

export default function Process() {
  return (
    <section className="bg-gray-100 w-screen h-auto px-8 lg:px-24 py-16 flex flex-col justify-center items-center gap-16">
      <h1 className="text-4xl lg:text-6xl text-center">Our process</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-16 justify-center">
        {[
          {
            step: "01",
            title: "Elicitation",
            description:
              "We learn about your website goals and target audience",
          },
          {
            step: "02",
            title: "Design",
            description:
              "Draft and compare stunning designs that align with your brand",
          },
          {
            step: "03",
            title: "Development",
            description: "Build fast, secure, and scalable web applications",
          },
          {
            step: "04",
            title: "Delopyment+",
            description: "Deploy your site and provide ongoing maintenance",
          },
        ].map((item) => (
          <div key={item.step} className="text-center flex flex-col gap-8">
            <div className="text-4xl lg:text-6xl">{item.step}</div>
            <h2 className="text lg:text-xl text-center">{item.title}</h2>
            <p className="text-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
