"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation columns */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/documentation" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-600 hover:text-purple-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-600 hover:text-purple-600 transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/signalshq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://linkedin.com/company/signalshq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@signalshq.io" 
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-gray-600 mt-6">
              Streamlining data management for accounting and finance professionals.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SignalsHQ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-purple-600 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-purple-600 text-sm">
              Terms
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-purple-600 text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky logo at the bottom right */}
      <div className="absolute left-0 top-0 right-4  ">
        <Link href="/">
          <Image 
            src="https://framerusercontent.com/images/zdRCe2FWpGK3G2FYOQhaN8mcKMY.png" 
            alt="SignalsHQ Logo"
            width={500} 
            height={500}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;