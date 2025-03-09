"use client"
// components/Navbar.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to create the enhanced button style
  const enhancedButtonStyle = `
    bg-blue-900/50 backdrop-blur-lg
    rounded-md px-4 py-2 font-medium
    text-white cursor-pointer
    animate-pulse
    hover:bg-blue-900/70
    transition-all duration-300
    transform hover:scale-105
  `;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/">
              <div className="relative h-8 w-24 sm:h-10 sm:w-32 cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image 
                  src="https://framerusercontent.com/images/zdRCe2FWpGK3G2FYOQhaN8mcKMY.png"
                  alt="Logo" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Navigation buttons and email input on the right */}
          <div className="hidden sm:flex items-center space-x-4">
            <button className={enhancedButtonStyle}>
              Blog
            </button>
            <button className={enhancedButtonStyle}>
              Contact
            </button>
            <button className={enhancedButtonStyle}>
              Write to us <span className="ml-1">→</span>
            </button>
            {/* Email input and demo button */}
            <div className="flex items-center rounded-md border border-gray-300 overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter work email"
                className="px-4 py-2 focus:outline-none bg-white/90 backdrop-blur-sm w-40 md:w-auto"
              />
              <button className={enhancedButtonStyle}>
                Get a demo
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden mt-2 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-3 p-2 rounded-lg bg-white/80 backdrop-blur-sm">
            <button className={enhancedButtonStyle}>
              Blog
            </button>
            <button className={enhancedButtonStyle}>
              Contact
            </button>
            <button className={enhancedButtonStyle}>
              Write to us <span className="ml-1">→</span>
            </button>
            {/* Email input and demo button for mobile */}
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter work email"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none bg-white/90 backdrop-blur-sm"
              />
              <button className={enhancedButtonStyle}>
                Get a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;