import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
import HeroSection from "@/components/HeroSection";
// import Stri  pedBackground from "@/components/StripedBackground";
import RoiStatsSection from "@/components/RoiStateSection";
import FeaturesSection from "@/components/FeaturesSection";

import TriangleWheel from "@/components/TriangleWheel";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SignalsHQ - AI for Auditors",
  description: "Improve the performance of Audit & Advisory firms with AI agents",
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
        {/* <StripedBackground /> */}
        {/* <div className="relative z-10"> */}
          <Navbar />
          <HeroSection />
          <RoiStatsSection />
          <FeaturesSection />
          <TriangleWheel />
          {/* {children} */}
        {/* </div> */}
      </body>
    </html>
  );
}
