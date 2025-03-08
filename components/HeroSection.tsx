// components/HeroSection.tsx
"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  useEffect(() => {
    const animateSpecificWords = () => {
      // Define the words and their corresponding line numbers
      const targetWords = [
        { word: 'Audit ', line: 1 },
        { word: 'Advisory', line: 2 }
      ];
      
      targetWords.forEach(({ word, line }, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.opacity = '0';
        span.style.backgroundColor = '#000';
        span.style.color = '#fff';
        span.style.padding = '2px 8px';
        span.style.borderRadius = '4px';
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(20px)';
        span.className = 'animated-word';

        // Target the specific line div
        const lineElement = document.querySelector(`.heading-text div:nth-child(${line + 1})`);
        if (lineElement) {
          lineElement.innerHTML = lineElement.innerHTML.replace(
            word,
            span.outerHTML
          );
        }

        setTimeout(() => {
          const animatedSpan = document.querySelector(
            `.heading-text div:nth-child(${line + 1}) .animated-word`
          );
          if (animatedSpan) {
            animatedSpan.style.transition = 'all 0.5s ease';
            animatedSpan.style.opacity = '1';
            animatedSpan.style.transform = 'translateY(0)';
          }
        }, (index + 1) * 1000);
      });
    };

    const animateVideoThumbnail = () => {
      const videoThumbnail = document.querySelector('.video-thumbnail');
      if (videoThumbnail) {
        videoThumbnail.style.opacity = '0';
        videoThumbnail.style.transform = 'scale(0.8)';

        setTimeout(() => {
          videoThumbnail.style.transition = 'all 0.5s ease';
          videoThumbnail.style.opacity = '0.75';
          videoThumbnail.style.transform = 'scale(1)';
        }, 500);
      }
    };

    const animateBoxShadow = () => {
      const imageContainer = document.querySelector('.image-container');
      if (imageContainer) {
        imageContainer.style.animation = 'boxShadowPulse 2s infinite';
      }
    };

    animateSpecificWords();
    animateVideoThumbnail();
    animateBoxShadow();
  }, []);

  return (
    <section className="bg-gray-200 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-4">
          {/* Text Content */}
          <div className="mb-8 md:mb-0 md:mr-8 md:w-1/2 text-center md:text-left">
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.2] mb-6">
              <div className="heading-text flex flex-col items-start">
                <div>Hyperscale your</div>
                <div>Audit </div>&
                <div>Advisory firm</div>
                <div>with AI</div>
              </div>
            </h1>
            <p className="mx-auto md:mx-0 max-w-4xl text-center md:text-left text-lg text-gray-500">
              SignalsHQ improves the performance of Audit & Advisory firms with agents to collect, extract, analyse, verify and reference documentation at scale
            </p>
          </div>

          {/* Dashboard Image with Video Thumbnail - Reduced Size */}
          <div className="w-full md:w-1/3 relative">
            {/* Dashboard Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg image-container">
              <Image
                src="https://framerusercontent.com/images/2mWEfhFVLm62HjNg8br9Kp46Xdc.png"
                alt="Analytics Dashboard"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-lg"
              />
            </div>

            {/* Video Thumbnail */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg shadow-lg flex items-center justify-center z-10 video-thumbnail opacity-75 group">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-800 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <svg className="w-24 h-24 text-white group-hover:scale-110 transition-transform duration-300 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;