import React from "react";

import { DM_Mono, Instrument_Serif, Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata = {
  description: "Saha. Australasia's Consulting Partner",
  title: "saha.",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
