import React from "react";

import { DM_Mono, Instrument_Serif, Playfair_Display } from "next/font/google";

import FrontendCursor from "@/src/components/common/FrontendCursor";

import "./globals.css";

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

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  void children;

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <body style={{ margin: 0, padding: 0 }}>
        <FrontendCursor />
        <main style={{ width: "100vw", height: "100vh" }}>{children}</main>
      </body>
    </html>
  );
}
