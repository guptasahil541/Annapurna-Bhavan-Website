import type { Metadata } from "next";

import { Overlock, Mozilla_Headline } from "next/font/google";

import "./globals.css";

const overlock = Overlock({
  variable: "--font-overlock",
  subsets: ["latin"],
  weight: ["400"],
});

const mozillaHeadline = Mozilla_Headline({
  variable: "--font-mozilla-headline",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Annapurna Bhavan - Indian Vegetarian Restaurant & Bar",
  description: "Experience the Taste of India in every bite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${overlock.variable} ${mozillaHeadline.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
