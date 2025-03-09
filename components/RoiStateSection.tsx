"use client"
import React, { useEffect, useState } from 'react';


// Define the props interface for StatRow
interface StatRowProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color: string;
  duration: number;
}

const RoiStatsSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gray-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-10"></div>
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 md:text-5xl">
          Our customers achieve <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">outstanding ROI</span>
        </h2>

        <div className="flex flex-col max-w-4xl mx-auto space-y-8">
          {/* Stat Row 1 */}
          <StatRow
            icon="📉"
            title="Reduction in manual effort"
            value="80%"
            description="Our AI agents automate document collection and processing, reducing manual effort by 80% compared to traditional methods."
            color="indigo"
            duration={2}
          />

          {/* Stat Row 2 */}
          <StatRow
            icon="🔍"
            title="Risk identification"
            value="5X"
            description="SignalsHQ's analysis capabilities identify 5 times more potential compliance issues than manual review processes."
            color="purple"
            duration={2.5}
          />

          {/* Stat Row 3 */}
          <StatRow
            icon="📚"
            title="Document processing speed"
            value="2X"
            description="Process documents twice as fast while maintaining higher accuracy, allowing your team to focus on high-value advisory work."
            color="blue"
            duration={1.8}
          />
        </div>
      </div>

      {/* Animated Horizontal Divider */}
      <div className="container mx-auto mt-16 px-4">
        <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500">
          <div className="h-full w-0 bg-white animate-divider"></div>
        </div>
      </div>
    </section>
  );
};

// StatRow component with water fill animation
const StatRow = ({ icon, title, value, description, color, duration }: StatRowProps) => {
  const [fillWidth, setFillWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setIsVisible(true);
    
    // Animate fill width after a short delay
    const timer = setTimeout(() => {
      setFillWidth(100);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Set color variables based on the color prop
  let bgColor, textColor, lightColor;
  
  switch (color) {
    case 'indigo':
      bgColor = 'bg-indigo-500';
      textColor = 'text-indigo-600';
      lightColor = 'bg-indigo-100';
      break;
    case 'purple':
      bgColor = 'bg-purple-500';
      textColor = 'text-purple-600';
      lightColor = 'bg-purple-100';
      break;
    case 'blue':
    default:
      bgColor = 'bg-blue-500';
      textColor = 'text-blue-600';
      lightColor = 'bg-blue-100';
      break;
  }

  return (
    <div 
      className={`relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      style={{ transitionDelay: `${duration * 0.1}s` }}
    >
      {/* Background fill animation */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className={`h-full ${bgColor} opacity-10`} 
          style={{ 
            width: `${fillWidth}%`, 
            transition: `width ${duration}s ease-out`
          }}
        ></div>
      </div>
      
      {/* Content row */}
      <div className="relative flex items-center p-6 z-10">
        {/* Icon */}
        <div className={`flex-shrink-0 h-12 w-12 mr-6 rounded-full ${lightColor} flex items-center justify-center text-2xl`}>
          {icon}
        </div>
        
        {/* Title and description */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className={`text-3xl font-extrabold mt-2 md:mt-0 ${textColor}`}>
              {value}
            </div>
          </div>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
      
      {/* Animated bottom border */}
      <div className="h-1 w-full bg-gray-100">
        <div 
          className={`h-full ${bgColor}`}
          style={{ 
            width: `${fillWidth}%`, 
            transition: `width ${duration}s ease-out` 
          }}
        ></div>
      </div>
    </div>
  );
};

export default RoiStatsSection;