"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Styled button
  const buttonStyle = `
    bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg
    transition-all duration-300 hover:bg-blue-800 hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-blue-500
  `;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg shadow-md transition-shadow duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32 cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image
                src="https://framerusercontent.com/images/zdRCe2FWpGK3G2FYOQhaN8mcKMY.png"
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
                className="object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-6">
            <button className={buttonStyle}>Blog</button>
            <button className={buttonStyle}>Contact</button>
            <button className={buttonStyle}>
              Write to us <span className="ml-1">→</span>
            </button>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter work email"
                className="px-4 py-2 bg-white/90 focus:outline-none w-40 md:w-auto"
              />
              <button className={`${buttonStyle} rounded-none px-4`}>
                Get a demo
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md transition-transform duration-300 hover:scale-110 focus:ring-2 focus:ring-gray-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-3 mt-3 p-4 bg-white/90 rounded-lg shadow-lg">
            <button className={buttonStyle}>Blog</button>
            <button className={buttonStyle}>Contact</button>
            <button className={buttonStyle}>
              Write to us <span className="ml-1">→</span>
            </button>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter work email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <button className={buttonStyle}>Get a demo</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
