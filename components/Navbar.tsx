"use client"
// components/Navbar.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
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
                  style={{ objectFit: 'cover' }} // Changed to 'contain' to ensure the entire logo is visible
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
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Three buttons on the right */}
          <div className="hidden sm:flex items-center space-x-4">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
              Blog
            </button>
            <button className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">
              Contact
            </button>
            <button className="rounded-md border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105">
              Write to us ->
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden mt-2 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-2">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
              Button 1
            </button>
            <button className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">
              Button 2
            </button>
            <button className="rounded-md border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105">
              Button 3
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;