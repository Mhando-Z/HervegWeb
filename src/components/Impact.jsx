"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const AnimatedNumber = ({ value, suffix = "", duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = typeof value === "string" ? parseFloat(value) : value;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(easeOutQuart * numericValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {Math.round(displayValue)}
      {suffix}
    </span>
  );
};

const StatCard = ({ number, suffix, label, delay, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: delay + 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`text-5xl md:text-6xl font-bold mb-4 ${color}`}
      >
        <AnimatedNumber value={number} suffix={suffix} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="text-gray-700 text-lg font-medium text-center"
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default function ImpactStats() {
  const stats = [
    {
      number: 1000,
      suffix: "+",
      label: "Farmers Empowered",
      color: "text-emerald-600",
      delay: 0.1,
    },
    {
      number: 60,
      suffix: "%",
      label: "Income Growth",
      color: "text-emerald-600",
      delay: 0.2,
    },
    {
      number: 3,
      suffix: "x",
      label: "More Vegetables",
      color: "text-yellow-500",
      delay: 0.3,
    },
    {
      number: 5,
      suffix: "",
      label: "Villages Reached",
      color: "text-emerald-600",
      delay: 0.4,
    },
  ];

  return (
    <div className=" bg-linear-to-br from-emerald-50 via-white to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Impact in Numbers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real results from real farmers. See how{" "}
            <span className="text-emerald-600 font-semibold">HERVeg.05</span> is
            transforming lives across Tanzania.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-emerald-100 rounded-full px-8 py-4">
            <p className="text-emerald-800 font-medium">
              Growing stronger every day 🌱
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
