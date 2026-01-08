import React from "react";

export default function Pricing() {
  return (
    <section className="py-32 h-auto flex flex-col gap-8 lg:px-24">
      <h1 className="text-4xl md:text-5xl text-center">Pricing Plans</h1>
      <p className="text-xl px-8 text-center">
        Choose the package that fits your needs
      </p>

      <div className="flex flex-row gap-4 items-center p-8 justify-start lg:justify-center overflow-x-auto">
        {[
          {
            name: "Starter",
            price: "$__",
            description: "Service Details",
            features: ["Same as previous", "1", "2"],
          },
          {
            name: "Intermediate",
            price: "$__",
            description: "Service Details",
            features: ["Same as previous", "3", "4"],
            popular: true,
          },
          {
            name: "Experienced",
            price: "$__",
            description: "Service Details",
            features: ["Same as previous", "5", "6"],
          },
          {
            name: "Advanced",
            price: "$__",
            description: "Service Details",
            features: ["Same as previous", "7", "8"],
          },
        ].map((plan) => (
          <div
            key={plan.name}
            className={`transform hover:scale-105 transition-transform flex flex-col gap-8 items-center h-auto border border-black rounded-lg p-8 relative shrink-0 w-70 ${plan.popular ? "bg-black text-white" : ""}`}
          >
            <h2 className="text-2xl">{plan.name}</h2>
            <div className="text-4xl">{plan.price}</div>
            <p className="text-base">{plan.description}</p>

            <button>Get Started</button>

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
