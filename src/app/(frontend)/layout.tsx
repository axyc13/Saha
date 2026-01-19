import React from "react";

import { Roboto_Serif, Inter, Arapey } from "next/font/google";

const robotoserif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-robotoserif",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const arapey = Arapey({
  subsets: ["latin"],
  variable: "--font-arapey",
  weight: ["400"],
});

export const metadata = {
  description: "Saha website",
  title: "Saha",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html
      lang="en"
      className={`${robotoserif.variable} ${inter.variable} ${arapey.variable}`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
