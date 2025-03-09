import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
import HeroSection from "@/components/HeroSection";

import RoiStatsSection from "@/components/RoiStateSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQ";

import TriangleWheel from "@/components/TriangleWheel";
import Footer from "@/components/Footer";
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
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <Navbar />
          <HeroSection />
          <RoiStatsSection />
          <FeaturesSection />
          <TriangleWheel />
          <FAQSection />
          <Footer />    
        </>
      </body>
    </html>
  );
}
