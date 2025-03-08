// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Hyperscale your Audit<br /> & Advisory firm with AI
          </h1>
          <p className="mx-auto max-w-4xl text-center text-lg text-gray-700">
            SignalsHQ improves the performance of Audit & Advisory firms with agents to collect, extract, analyse, verify and reference documentation at scale
          </p>
        </div>

        {/* Dashboard Image */}
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://framerusercontent.com/images/2mWEfhFVLm62HjNg8br9Kp46Xdc.png"
              alt="Analytics Dashboard"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 