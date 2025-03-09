"use client"
import React, { useEffect, useState } from 'react';
import { Zap, Grid, Star, CheckCircle2, FileText, Shield } from 'lucide-react';

type Feature = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

type Features = {
  efficiency: Feature[];
  integration: Feature[];
  productivity: Feature[];
};

type TabId = keyof Features;

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('efficiency');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'efficiency' as TabId, label: 'Efficiency', icon: <Zap size={20} /> },
    { id: 'integration' as TabId, label: 'Integration', icon: <Grid size={20} /> },
    { id: 'productivity' as TabId, label: 'Productivity', icon: <Star size={20} /> },
  ];

  const features : Features = {
    efficiency: [
      {
        icon: <FileText size={24} />,
        title: "Automated Document Collection",
        description: "Collect supporting documentation automatically from multiple sources, saving hours of manual work."
      },
      {
        icon: <CheckCircle2 size={24} />,
        title: "Standardized Workflows",
        description: "Standardize fieldwork with consistent workflows that ensure quality and compliance."
      },
      {
        icon: <Shield size={24} />,
        title: "Intelligent Risk Analysis",
        description: "Detect anomalies and potential issues with AI-powered risk assessment tools."
      }
    ],
    integration: [
      {
        icon: <Grid size={24} />,
        title: "Seamless Platform Integration",
        description: "Connect directly with your existing audit software platforms without disruption."
      },
      {
        icon: <FileText size={24} />,
        title: "Universal Document Support",
        description: "Works with all document types including PDFs, spreadsheets, and financial statements."
      },
      {
        icon: <Shield size={24} />,
        title: "Secure Data Transfer",
        description: "Bank-level encryption ensures your client data remains protected during every transfer."
      }
    ],
    productivity: [
      {
        icon: <Zap size={24} />,
        title: "80% Faster Documentation",
        description: "Process and analyze documentation up to 80% faster than traditional manual methods."
      },
      {
        icon: <Star size={24} />,
        title: "Focus on Value-Added Work",
        description: "Reduce time spent on administrative tasks and focus on strategic advisory services."
      },
      {
        icon: <CheckCircle2 size={24} />,
        title: "Improved Accuracy",
        description: "Reduce human error with automated verification and cross-referencing systems."
      }
    ]
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 to-indigo-700 py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Glowing orb effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            SignalsHQ is Built for Auditors<span className="text-indigo-300">.</span>
          </h2>
          <p className="text-indigo-100 text-lg md:text-xl">
            Designed specifically for audit and advisory firms to streamline workflows,
            integrate with existing tools, and save valuable time.
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="inline-flex bg-indigo-800/50 backdrop-blur-sm p-1 rounded-full shadow-lg border border-indigo-600/30">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-white text-indigo-800 shadow-md' 
                    : 'text-indigo-100 hover:bg-indigo-700/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features[activeTab].map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-indigo-100 feature-card animate-on-scroll transition-all duration-500 hover:shadow-2xl hover:translate-y-[-4px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <a 
            href="#demo" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-lg hover:bg-indigo-50 transition-all duration-200"
          >
            See how it works
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-card {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }
        
        .feature-card.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;