"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Users,
  Package,
  Heart,
  TrendingUp,
  Mail,
  HandHeart,
  BadgeDollarSign,
} from "lucide-react";
import Donorbox from "./Donorbox";
import Image from "next/image";
import donateHero from "../../../public/hero/03.jpg";

const DonatePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const donationImpacts = [
    {
      amount: 12,
      icon: <Sprout className="w-8 h-8" />,
      description:
        "Provides 5 fully vaccinated SASSO chickens to one youth farmer—diversifying their diet and generating up to $30 in income through egg and meat sales.",
      color: "from-emerald-500 to-green-600",
    },
    {
      amount: 25,
      icon: <Users className="w-8 h-8" />,
      description:
        "Trains 10–20 youth farmers in climate-smart agriculture, helping them farm sustainably and grow nutritious crops.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      amount: 45,
      icon: <Package className="w-8 h-8" />,
      description:
        "Supplies farming inputs like seedlings and organic fertilizer to 50 youth farmers, improving yields and soil health.",
      color: "from-amber-500 to-orange-600",
    },
    {
      amount: 60,
      icon: <Heart className="w-8 h-8" />,
      description:
        "Equips a youth farmer with a 1-acre starter kit, including biofortified maize, vegetable seeds, and 5 vaccinated SASSO chickens for food security and income.",
      color: "from-rose-500 to-pink-600",
    },
  ];

  const budgetBreakdown = [
    {
      category: "Training and farmers inputs",
      percentage: 70,
      color: "bg-green-500",
    },
    { category: "Program Operations", percentage: 15, color: "bg-blue-500" },
    {
      category: "Monitoring & Evaluation",
      percentage: 10,
      color: "bg-amber-500",
    },
    { category: "Administration", percentage: 5, color: "bg-gray-500" },
  ];

  const otherWays = [
    {
      title: "Corporate Partnerships",
      description: "Invest in sustainable agriculture with us",
      icon: <BadgeDollarSign className="w-6 h-6" />,
    },
    {
      title: "Start a Fundraiser",
      description: "Mobilize your network for impact",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Volunteer",
      description: "Share your time or expertise to grow our reach",
      icon: <HandHeart className="w-6 h-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="min-h-screen relative mask-b-from-90%">
        <Image
          src={donateHero}
          alt="Donate Hero"
          className="absolute hidden md:block inset-0 w-full h-full object-cover brightness-75 mask-b-from-90%"
          priority
        />
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:absolute top-0  bottom-0 left-0 right-0  py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r md:from-green-600/40 from-green-600 md:to-emerald-700/80 to-emerald-700 text-white overflow-hidden"
        >
          <div className="container gap-5 min-h-screen justify-between flex flex-col md:flex-row  mx-auto">
            <div className="w-full flex flex-col  items-start justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <Sprout className="w-16 h-16 mx-auto" />
              </motion.div>

              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl font-bold mb-4"
              >
                Donate
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl mb-3"
              >
                Empower young farmers. Cultivate resilience.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg opacity-90 max-w-2xl "
              >
                Your donation makes this possible. Every gift helps build a
                stronger, more resilient food system—starting at the village
                level.
              </motion.p>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <Donorbox />
            </div>
          </div>
        </motion.section>
      </div>

      {/* Impact Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Your Donation Can Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in action—and impact you can see. Here's how your
              support creates change on the ground:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {donationImpacts.map((impact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-linear-to-r ${impact.color}`}
                />

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-xl bg-linear-to-br ${impact.color} text-white`}
                    >
                      {impact.icon}
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-3xl font-bold text-gray-900">
                          ${impact.amount}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Budget Breakdown Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Where Your Money Goes
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to transparency and impact. Here's how every $1 is
              spent:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="space-y-6">
              {budgetBreakdown.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      {item.category}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {item.percentage}%
                    </span>
                  </div>

                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`absolute top-0 left-0 h-full ${item.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-200"
            >
              <p className="text-center text-gray-800 font-medium">
                <span className="text-green-700 font-bold">
                  Your gift directly empowers youth farmers.
                </span>{" "}
                70% of funds go straight to training, inputs, last mile delivery
                and on-farm support.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Be Part of the Change
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your donation doesn't just help a farmer—it fuels a movement.
            Whether you give once or monthly, your support builds pathways out
            of poverty and into self-reliance.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Heart className="w-6 h-6" />
            Give Now
          </motion.button>
        </motion.div>
      </section>

      {/* Other Ways Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Other Ways to Give
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {otherWays.map((way, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {way.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {way.title}
                </h3>
                <p className="text-gray-600">{way.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
              <Mail className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">
                Have questions about donating?{" "}
                <a
                  href="#contact"
                  className="text-green-600 font-semibold hover:text-green-700 underline"
                >
                  Contact us
                </a>{" "}
                — we're here to help.
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
