"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How long has HERVeg.05 been in existence?",
    answer:
      "HERVeg.05 is a relatively young organization, having been founded in December 2023. We began full operations in January 2024 and are actively working to expand our reach and impact.",
    isExpanded: true,
  },
  {
    question: "How does HERVeg.05 work with farmers?",
    answer:
      "We partner directly with local farmers to provide resources, training, and support for sustainable vegetable farming practices. Our team works closely with farming communities to understand their needs and develop tailored solutions.",
  },
  {
    question: "Where does HERVeg.05 operate?",
    answer:
      "HERVeg.05 currently operates across multiple regions, focusing on areas where sustainable farming practices can have the most significant impact. We're continuously expanding our geographical reach to serve more communities.",
  },
  {
    question:
      "What is HERVeg.05's vision, and how does it translate into our core values?",
    answer:
      "Our vision is to create a sustainable future through regenerative agriculture and community empowerment. This translates into our core values of sustainability, innovation, community partnership, and environmental stewardship.",
  },
  {
    question: "How is HERVeg.05's Team Structured to Support Farmers?",
    answer:
      "Our team consists of agricultural experts, field coordinators, sustainability consultants, and community liaisons who work together to provide comprehensive support to farmers at every stage of their journey.",
  },
  {
    question: "Can I donate to HERVEg.05?",
    answer:
      "Yes! We welcome donations from individuals and organizations who share our vision. Your contributions help us expand our programs, support more farmers, and promote sustainable agriculture practices.",
  },
  {
    question: "How does HERVeg.05 measure the impact of its program?",
    answer:
      "We use comprehensive metrics including crop yields, soil health indicators, farmer income improvements, environmental impact assessments, and community feedback to measure and track our program's success.",
  },
  {
    question: "How prepared is HERVEg.05 for the next 10 years?",
    answer:
      "We have developed a robust 10-year strategic plan that includes expansion goals, technology integration, partnership development, and scalable program frameworks to ensure long-term sustainability and growth.",
  },
  {
    question: "How do we define our impact?",
    answer:
      "Our impact is defined through multiple dimensions: environmental restoration, farmer livelihoods improvement, community resilience building, and the promotion of sustainable food systems that benefit both people and the planet.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen w-screen relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-white to-emerald-50/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-emerald-700">
            Learn more about HERVeg.05 and our mission
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset transition-all duration-200"
              >
                <span
                  className={`text-lg font-semibold pr-8 ${
                    expandedIndex === index
                      ? "text-emerald-700"
                      : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    className={`w-6 h-6 ${
                      expandedIndex === index
                        ? "text-emerald-600"
                        : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <motion.p
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-emerald-700">
            Have more questions? Feel free to reach out to our team.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
