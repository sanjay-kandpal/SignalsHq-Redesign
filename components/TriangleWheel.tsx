// components/EnhancedTriangleWheel.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, Star } from 'lucide-react';

// Define the section type
interface Section {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  borderColor: string;
  hoverColor: string;
  fillColor: string;
}

// Define the sections type
interface Sections {
  efficiency: Section;
  compliance: Section;
  satisfaction: Section;
}

// Define valid section names
type SectionName = keyof Sections;

const EnhancedTriangleWheel = () => {
  const [activeSection, setActiveSection] = useState<SectionName>('efficiency');
  const [isHovering, setIsHovering] = useState(false);
  const [animationVariant, setAnimationVariant] = useState(0);

  // Cycle through different animation variants
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationVariant((prev) => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const sections: Sections = {
    efficiency: {
      title: "Efficiency",
      description: "Boost your audit staff efficiency with smart automation. Say goodbye to manual vouching and focus on real risk identification.",
      icon: <Zap size={24} />,
      color: "bg-indigo-600",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-600",
      hoverColor: "hover:bg-indigo-50",
      fillColor: "#4f46e5" // Indigo-600 equivalent
    },
    compliance: {
      title: "Compliance",
      description: "Stay compliant with Auditing Standards. Minimize human error and ensure accuracy with clear citations and audit trails.",
      icon: <CheckCircle2 size={24} />,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      hoverColor: "hover:bg-blue-50",
      fillColor: "#3b82f6" // Blue-500 equivalent
    },
    satisfaction: {
      title: "Client Satisfaction",
      description: "Deliver exceptional value to your clients with faster turnaround times and more insightful audit findings.",
      icon: <Star size={24} />,
      color: "bg-purple-500",
      textColor: "text-purple-500",
      borderColor: "border-purple-500",
      hoverColor: "hover:bg-purple-50",
      fillColor: "#a855f7" // Purple-500 equivalent
    }
  };

  // Different animation variants
  const triangleAnimations = [
    {
      // Pulsing animation
      triangle: {
        scale: [1, 1.05, 1],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      },
      icons: {
        scale: [1, 1.2, 1],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut", staggerChildren: 0.3 }
      }
    },
    {
      // Rotation animation
      triangle: {
        rotate: [0, 360],
        transition: { duration: 20, repeat: Infinity, ease: "linear" }
      },
      icons: {
        y: [0, -5, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut", staggerChildren: 0.2 }
      }
    },
    {
      // Glowing/opacity animation
      triangle: {
        opacity: [0.7, 1, 0.7],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      },
      icons: {
        opacity: [0.7, 1, 0.7],
        scale: [1, 1.1, 1],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut", staggerChildren: 0.4 }
      }
    }
  ];

  const currentAnimation = triangleAnimations[animationVariant];

  // Content animations
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Audit Solution<span className="text-indigo-600">.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform is designed to revolutionize how audit teams work by addressing the three key pillars of modern auditing.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Triangle Visualization */}
          <div 
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Triangle Base */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={isHovering ? { rotate: 360 } : {}}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <motion.svg 
                viewBox="0 0 200 200" // Changed viewBox to 200x200 for better positioning
                className="w-full h-full"
                animate={currentAnimation.triangle}
              >
                {/* Base triangle */}
                <path
                  d="M100 20 L180 160 L20 160 Z"
                  fill="none"
                  stroke="#e2e2e2"
                  strokeWidth="1"
                  className="transition-all duration-500"
                />
                
                {/* Active triangle */}
                <motion.path
                  d="M100 20 L180 160 L20 160 Z"
                  fill="none"
                  stroke={sections[activeSection].fillColor}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="transition-all duration-500"
                  animate={{
                    strokeDashoffset: [0, 200],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Animated gradient fill */}
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={sections.efficiency.fillColor} stopOpacity="0.1" />
                    <stop offset="50%" stopColor={sections.compliance.fillColor} stopOpacity="0.05" />
                    <stop offset="100%" stopColor={sections.satisfaction.fillColor} stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M100 20 L180 160 L20 160 Z"
                  fill="url(#triangleGradient)"
                  className="transition-all duration-500"
                />
                
                {/* Animated Icons instead of circles */}
                {Object.entries(sections).map(([key, section], index) => {
                  const isActive = activeSection === key;
                  const positions = [
                    { x: 100, y: 20 },  // Top
                    { x: 180, y: 160 }, // Bottom right
                    { x: 20, y: 160 }   // Bottom left
                  ];
                  
                  return (
                    <g key={key}>
                      {/* Pulse ring for active node */}
                      {isActive && (
                        <motion.circle
                          cx={positions[index].x}
                          cy={positions[index].y}
                          r={30} // Increased radius
                          fill="transparent"
                          stroke={section.fillColor}
                          strokeWidth="1"
                          initial={{ scale: 0.8, opacity: 0.8 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeOut" 
                          }}
                        />
                      )}
                      
                      {/* Icon Background */}
                      <motion.circle
                        cx={positions[index].x}
                        cy={positions[index].y}
                        r={isActive ? 28 : 24} // Increased radius
                        fill={isActive ? section.fillColor : "white"}
                        stroke={section.fillColor}
                        strokeWidth="1.5"
                        className="cursor-pointer drop-shadow-md transition-all duration-300"
                        onClick={() => setActiveSection(key as SectionName)}
                        whileHover={{ scale: 1.2 }}
                        animate={currentAnimation.icons}
                        custom={index}
                      />
                      
                      {/* Icon */}
                      <foreignObject
                        x={positions[index].x - 12}
                        y={positions[index].y - 12}
                        width="24"
                        height="24"
                        className="cursor-pointer"
                        onClick={() => setActiveSection(key as SectionName)}
                      >
                        <div 
                          className={`w-full h-full flex items-center justify-center ${
                            isActive ? 'text-white' : section.textColor
                          }`}
                        >
                          {section.icon}
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}
              </motion.svg>
            </motion.div>
          </div>
          {/* Content Section */}
          <div className="md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <motion.div 
                  variants={itemVariants}
                  className={`w-16 h-16 ${sections[activeSection].color} rounded-full flex items-center justify-center text-white mb-6`}
                >
                  {sections[activeSection].icon}
                </motion.div>
                <motion.h3 
                  variants={itemVariants} 
                  className={`text-2xl font-bold mb-4 ${sections[activeSection].textColor}`}
                >
                  {sections[activeSection].title}
                </motion.h3>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-600 leading-relaxed"
                >
                  {sections[activeSection].description}
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className="mt-6"
                >
                  <button 
                    className={`px-5 py-2 border ${sections[activeSection].borderColor} rounded-full ${sections[activeSection].textColor} font-medium ${sections[activeSection].hoverColor} transition-colors duration-300`}
                  >
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-6 mt-12">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key as SectionName)}
              className="group flex flex-col items-center"
            >
              <span className={`text-sm font-medium mb-2 ${
                activeSection === key ? section.textColor : 'text-gray-400'
              } transition-colors duration-300 group-hover:${section.textColor}`}>
                {section.title}
              </span>
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === key ? section.color : 'bg-gray-200'
                } group-hover:${section.color}`}
                whileHover={{ scale: 1.3 }}
                animate={
                  activeSection === key 
                    ? { scale: [1, 1.2, 1], transition: { duration: 1.5, repeat: Infinity } }
                    : {}
                }
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedTriangleWheel;