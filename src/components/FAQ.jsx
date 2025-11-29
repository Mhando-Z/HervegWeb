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
      "HERVEg.05 leverages Village Saving and Loan Associations (VSLA) groups as a way to efficiently reach large numbers of vulnerable people. By working within these established groups, we can ensure that we are reaching those most in need. This approach maximizes our impact and resource utilization.Here's a breakdown of the benefits of this model:",
    list: [
      "  Reaching more farmers: We can connect with a larger number of farmers in a shorter time frame.",
      "  Efficient resource allocation: We leverage existing community structures to streamline program delivery.",
      " Building Trust Together: We believe that building trust and fostering lasting relationships with our community is fundamental to our success.",
      ' Community building: We promote a sense of community and shared responsibility within VSLA groups. This approach maximizes our impact and resource utilization, making our model "BIG, SIMPLE, and CHEAP."',
    ],
  },

  {
    question: "Where does HERVeg.05 operate?",
    answer:
      "HERVEg.05 prioritizes working in areas with high malnutrition rates. We focus our efforts on vulnerable communities within Tanzania to create the most significant impact. Currently we are working in Njombe region and planning to expand in Ruvuma, Iringa, Mbeya, Rukwa, Kigoma and Songwe regions.",
  },
  {
    question:
      "What is HERVeg.05's vision, and how does it translate into our core values?",
    answer:
      "HERVeg.05 envisions a Tanzania free from malnutrition, where empowered farmers, particularly women, can achieve sustainable livelihoods. Our core values directly contribute to achieving this vision:",
    list: [
      " Empowering Impact: We combine efficiency and innovation to optimize resources, streamline processes, and maximize the positive change we bring to communities.",
      "  Unwavering Quality: We are committed to providing high-quality seeds, training, and support, empowering our farmers with the tools they need to succeed.",
      " Building Trust Together: We believe that building trust and fostering lasting relationships with our community is fundamental to our success.",
      "  Collaborative Spirit: We champion teamwork and collaboration, recognizing that powerful solutions come from working together.",
    ],
  },
  {
    question: "How is HERVeg.05's Team Structured to Support Farmers?",
    answer:
      "Our team consists of agricultural experts, field coordinators, sustainability consultants, and community liaisons who work together to provide comprehensive support to farmers at every stage of their journey.",
  },
  {
    question: "Can I donate to HERVEg.05?",
    answer:
      'Absolutely! We are grateful for your interest in supporting our mission. We have a streamlined process in place to accept donations to help us empower even more communities. Your generous contribution can make a real difference in the lives of Tanzanian farmers and their families. To donate, you can easily visit our website\'s "Contact" page.',
  },
  {
    question: "How does HERVeg.05 measure the impact of its program?",
    answer:
      "HERVEg.05 prioritizes sustainability through:HERVEg.05 prioritizes sustainability through:",
    list: [
      "Knowledge transfer: Our program emphasizes education and skill-building, empowering farmers to maintain and replicate success beyond the initial support provided.",
      "  Focus on return on investment (ROI): We measure program effectiveness and impact, using data to demonstrate success and attract further funding and support for expansion.",
      " Constant Innovation: We at HERVEg.05 believe in continuous improvement. We actively seek new methods and technologies to enhance our program's effectiveness and reach.",
      "  Scalability by Design: The program's core elements, like mobile payments and training modules, are designed to be easily replicated and expanded to reach a wider range of communities.",
      "   Focus on Impact and Value: Our core mission is to create lasting change. We prioritize solutions that deliver tangible benefits to farmers, such as improved nutrition, financial security, and sustainable farming practices.",
    ],
  },
  {
    question: "How prepared is HERVEg.05 for the next 10 years?",
    answer:
      "HERVEg.05 is committed to long-term impact. We are actively planning for the next decade with a focus on:",
    list: [
      "Scale (Expansion): We aim to strategically expand our program to reach more communities experiencing malnutrition in Tanzania.",
      " Human-Centered Design and Value Creation: We believe in empowering farmers. We'll actively involve them in program development through a Human-Centered Design approach.",
      " Innovation: We continuously explore innovative approaches to address evolving challenges and enhance program effectiveness.",
      " Monitoring and Evaluation: We remain committed to a robust monitoring and evaluation system By focusing on these key areas, HERVEg.05 is well-positioned to make a significant contribution to tackling malnutrition and building a stronger, more sustainable agricultural future for Tanzania for the next decade and beyond.",
    ],
  },
  {
    question: "How do we define our impact?",
    answer:
      "HERVEg.05 defines its impact as the positive and measurable change we create in the lives of farmers and their communities. This encompasses: increased agricultural productivity, improved livelihoods, enhanced food security, and strengthened community resilience through sustainable practices.",
    list: [
      "Improved Nutritional Outcomes: Increased dietary diversity, reduced malnutrition rates, and better overall health within participating households.",
      "Enhanced Livelihoods: Increased agricultural productivity, higher incomes from vegetable sales, and greater household food security for participating farmers.",
      "Empowerment and Knowledge Gain: Improved knowledge of nutrition and sustainable farming practices among participating farmers, leading to long-term self-sufficiency.",
    ],
    remark:
      "By measuring these key areas, HERVEg.05 can effectively demonstrate our contribution to a healthier, more prosperous future for Tanzanian farming communities",
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
                  className="shrink-0"
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
                      {/* Bullet list renderer */}
                      {faq.list && faq.list.length > 0 && (
                        <ul className="list-decimal ml-6 space-y-2">
                          {faq.list.map((item, i) => (
                            <li key={i} className="text-gray-700">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {faq.remark && <p className="mt-2 ">{faq.remark}</p>}
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
