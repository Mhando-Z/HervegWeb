"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import farmers from "../../public/images/21.jpg";

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full  overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={farmers}
          alt="Happy woman farmer"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* linear overlays for better text readability */}
        <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-black/50"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="hidden mb-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full"
              >
                <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">
                  Our Impact Story
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                What We've Built —<br />
                <span className="text-green-400">and Where We're Going</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                We've reached{" "}
                <span className="font-bold text-green-400">1,500 farmers</span>,
                70% of them women. Families have raised{" "}
                <span className="font-bold text-white">7,500 poultry</span>,
                built a{" "}
                <span className="font-bold text-white">92% savings habit</span>,
                grown yields by{" "}
                <span className="font-bold text-white">88%</span>, and improved
                diets through simple nutrition gardens.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="hidden grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-green-400/40 transition-all duration-300 shadow-xl"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-base font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-300">{stat.highlight}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Expansion Goals Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Expanding to Reach{" "}
                <span className="text-green-400">10,000 Farmers</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {expansionGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-white"
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
                    <p className="text-lg text-gray-100 leading-relaxed flex-1 pt-1.5">
                      {goal}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-10 flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-linear-to-r hidden from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-10 py-4 rounded-full shadow-2xl transition-all duration-300 text-lg flex items-center space-x-3 group"
                >
                  <span>Join Our Mission</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default PromoStats;
