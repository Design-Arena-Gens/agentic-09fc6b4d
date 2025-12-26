import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoSkip — AI Habit Tracker With Proof-Based Accountability",
  description:
    "NoSkip is the camera-verified habit tracker that blends AI coaching, accountability squads, and tangible rewards to eliminate negative behaviours.",
  keywords: [
    "habit tracker",
    "AI accountability",
    "camera verification",
    "rewarded routines",
    "NoSkip app",
  ],
  openGraph: {
    title: "NoSkip · Proof-Based AI Habit Tracker",
    description:
      "Eliminate negative behaviours with camera-led verification, adaptive coaching, and rewards you can cash in.",
    url: "https://agentic-09fc6b4d.vercel.app",
    siteName: "NoSkip",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoSkip — AI Habit Tracker With Proof-Based Accountability",
    description:
      "Camera-verified routines, accountability circles, and a reward marketplace built for zero skips.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
