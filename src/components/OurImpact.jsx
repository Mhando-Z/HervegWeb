"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ image, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default function OurImpact() {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
      title: "Who We Serve",
      description:
        "Women and youth farmers facing hunger, exclusion, malnutrition, and climate stress.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
      title: "Smart Savings",
      description: "Mobile-based savings. No loans, no debt, full control.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      title: "Custom Bundles",
      description:
        "Biofortified maize, nutrient-rich vegetables, vaccinated chickens for better nutrition, income, and soil.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      title: "Last Mile Delivery",
      description:
        "Inputs delivered directly to villages, precisely when needed.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      title: "Hands-On Training",
      description:
        "Learning by doing: poultry care, composting, climate-smart farming.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 via-white to-green-50 py-16 px-4">
      <div className="flex gap-5 flex-col md:flex-row items-center container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" mb-16"
        >
          <h1 className="text-5xl font-roboto font-bold text-green-800 mb-6">
            Rooted in Resilience
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl  mb-8 leading-relaxed">
            Farmers trust us for tailored, climate-smart solutions that turn
            small plots into thriving farms.Many farmers choose to work with us
            to feed their families and improve their lives
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center xl:py-3 gap-2 bg-green-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            See Our Impact
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Cards Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}

            {/* Bottom Accent */}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 text-center"
          >
            <div className="inline-block h-1 w-32 bg-linear-to-r from-green-400 to-green-600 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
