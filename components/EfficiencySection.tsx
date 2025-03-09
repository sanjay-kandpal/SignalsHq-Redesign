// components/EfficiencySection.tsx
"use client"
import React, { useEffect, useRef, useState } from 'react';

const EfficiencySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Generate random bar heights
  const generateBars = (count: number) => {
    return Array(count).fill(null).map(() => 20 + Math.random() * 60);
  };

  const barHeights = generateBars(8);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation is triggered
        }
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Text Content (Left Side) */}
          <div className={`w-full md:w-1/2 transition-all duration-700 transform 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="mb-3 text-sm font-medium text-indigo-600">Smart Automation</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 leading-tight md:text-4xl lg:text-5xl">
              Boost the efficiency<br />of your audit staff
            </h2>
            <p className="text-gray-700 max-w-lg">
              Say goodbye to manual vouching and test of details, and let 
              your staff focus on real risk identification in forming a true and 
              fair view
            </p>
          </div>
          
          {/* Animated Graph Search (Right Side) */}
          <div className={`w-full md:w-1/2 transition-all duration-700 transform 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-64 w-full md:h-80 lg:h-96 bg-white rounded-lg overflow-hidden shadow-lg p-6">
              {/* Labels */}
              <div className="absolute inset-x-0 top-0 flex justify-between p-6 text-sm text-gray-600 bg-white/90">
                <span className="font-medium">Revenue Analysis</span>
                <span className="font-medium">Q4 2023</span>
              </div>

              {/* Graph Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pt-16 pb-8 px-6">
                {[0, 1, 2, 3, 4].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-full border-t border-gray-100 transition-all duration-700 delay-${i * 100} 
                      ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
                  />
                ))}
              </div>

              {/* Bar Chart */}
              <div className="absolute inset-x-6 bottom-8 flex items-end justify-between h-[60%] pt-16">
                {barHeights.map((height, i) => (
                  <div
                    key={i}
                    className={`w-8 bg-indigo-200 rounded-t-sm transform transition-all duration-700 
                      ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
                    style={{
                      height: `${height}%`,
                      transitionDelay: `${i * 100}ms`,
                      transformOrigin: 'bottom'
                    }}
                  >
                    <div
                      className="w-full bg-indigo-600 rounded-t-sm transition-all duration-500"
                      style={{ height: '3px' }}
                    />
                  </div>
                ))}
              </div>

              {/* Trend Line */}
              <svg 
                className="absolute inset-x-6 bottom-8 h-[60%]" 
                preserveAspectRatio="none"
              >
                <path
                  d={`M 0,${Math.random() * 100} ${barHeights.map((_, i, arr) => 
                    `L ${(i + 1) * (100 / arr.length)},${Math.random() * 100}`
                  ).join(' ')}`}
                  className={`stroke-indigo-500 stroke-2 fill-none transition-all duration-1000 
                    ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  pathLength="1"
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: isVisible ? 0 : 1
                  }}
                />
              </svg>

              {/* Search Animation */}
              {isVisible && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 relative animate-search">
                    <div className="absolute w-12 h-12 border-4 border-indigo-600 rounded-full opacity-30" />
                    <div className="absolute w-6 h-4 bg-indigo-600 rounded-full transform rotate-45 translate-x-8 translate-y-8 opacity-30" />
                  </div>
                </div>
              )}

              {/* Bottom Labels */}
              <div className="absolute inset-x-0 bottom-0 flex justify-between p-6 text-sm text-gray-600 bg-white/90">
                <span className="font-medium">Transaction Volume</span>
                <span className="font-medium">Risk Assessment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;