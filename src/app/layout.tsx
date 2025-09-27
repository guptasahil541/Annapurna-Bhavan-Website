import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import { Overlock, Mozilla_Headline } from "next/font/google";

import { Footer, Navbar } from "@/components";

import "./globals.css";

const overlock = Overlock({
  variable: "--font-overlock",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  weight: ["400"],
});

const mozillaHeadline = Mozilla_Headline({
  variable: "--font-mozilla-headline",
  fallback: ["Arial", "Helvetica", "sans-serif"],
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
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
