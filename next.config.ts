import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  images: {
    domains: ['framerusercontent.com'], // Add the domain(s) of your external images
  },
};

export default nextConfig;
