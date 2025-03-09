"use client"
// components/FAQ.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How does SignalsHQ work?",
      answer: "SignalsHQ is like your extended team. It brings all your data management in one place, where you can request PBC from clients, standardize the data, analyse flux and finally conduct test of details for relevant transactions. All of this is done in one place with complete audit trails."
    },
    {
      question: "Is my data secure?",
      answer: "Rest assured, we take your data security seriously. Our robust measures ensure that your information is kept safe and secure at all times. We employ industry-standard encryption, regular security audits, and strict access controls to protect your valuable data."
    },
    {
      question: "What use cases does SignalsHQ work for?",
      answer: "SignalsHQ is designed for accounting firms, auditors, and financial professionals who need to streamline their data collection and analysis processes. It's particularly effective for audit engagements, financial reviews, due diligence, and any scenario requiring structured data collection and analysis from multiple sources."
    },
    {
      question: "How do I get started?",
      answer: "Getting started with SignalsHQ is simple. Sign up for a free trial on our website, and our onboarding team will guide you through the setup process. We provide comprehensive training and support to ensure you get the most out of our platform from day one."
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. For anything else, please reach out to our support team at{' '}
            <a 
              href="mailto:contact@signalsHQ.io" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              contact@signalsHQ.io
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-xl font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-600 flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;