"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PromoStats = () => {
  const stats = [
    { number: "1,500", label: "Farmers Reached", highlight: "70% Women" },
    { number: "7,500", label: "Poultry Raised", highlight: "By Families" },
    { number: "92%", label: "Savings Habit", highlight: "Built" },
    { number: "88%", label: "Yield Growth", highlight: "Achieved" },
  ];

  const expansionGoals = [
    "Helping families save in small steps",
    "Training youth sales agents to reach more villages",
    "Bringing inputs closer to home",
    "Teaching practical, hands-on skills",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/happy-woman-farmer.jpg"
                alt="Happy woman farmer"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6"
            >
              <div className="text-4xl font-bold text-green-600">70%</div>
              <div className="text-sm text-gray-600 font-medium">
                Women Farmers
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What We've Built — and Where We're Going
              </h2>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {stat.highlight}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Achievement Text */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                We've reached{" "}
                <span className="font-bold text-green-600">1,500 farmers</span>,
                70% of them women. Families have raised{" "}
                <span className="font-bold">7,500 poultry</span>, built a{" "}
                <span className="font-bold">92% savings habit</span>, grown
                yields by <span className="font-bold">88%</span>, and improved
                diets through simple nutrition gardens.
              </p>
            </motion.div>

            {/* Expansion Goals */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Expanding to Reach 10,000 Farmers
              </h3>
              <div className="space-y-3">
                {expansionGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-green-600 hidden hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors duration-200">
                Join Our Mission
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoStats;
