"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Sprout,
  Heart,
  Users,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import agents from "../../../public/aboutus/011.png";

const FoundingStory = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const challenges = [
    { icon: Droplets, text: "Rains come late or too little" },
    { icon: Sprout, text: "Soil fertility is declining" },
    { icon: Sprout, text: "Seeds fail to grow reliably" },
    { icon: Heart, text: "Livestock get sick and die" },
    {
      icon: TrendingUp,
      text: "Food isn't enough to feed families or generate income",
    },
  ];

  const solutions = [
    { icon: Heart, text: "Healthy, one-month-old SASSO chickens" },
    {
      icon: Sprout,
      text: "Fast-growing vegetables and biofortified maize seed",
    },
    { icon: Sprout, text: "Organic fertilizer" },
    { icon: Users, text: "Hands-on training and last mile delivery" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-6 md:px-12 lg:px-24 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-700 ">
              Our Founding Story
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-green-800">
              "It All Began with a Simple Observation"
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            In rural areas, farming is more than work—it's life itself. But for
            smallholder farmers, especially women and youth, every day brings
            challenges.
          </motion.p>
        </div>
      </motion.section>

      {/* Challenges Section */}
      <motion.section
        className="py-16 px-6 md:px-12 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700"
            variants={itemVariants}
          >
            The Daily Struggles
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-linear-to-r from-green-900 to-green-800 p-6 rounded-lg border-2 border-green-600 hover:border-yellow-400 transition-colors"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <challenge.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <p className="text-gray-300">{challenge.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-2xl font-semibold text-green-800 mb-4">
              Still, they persevere.
            </p>
            <p className="text-lg  max-w-3xl mx-auto">
              Many come together in women's savings groups, supporting one
              another, saving little by little, and sharing knowledge. These
              groups are full of potential—they just need a boost to reach it.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* The Turning Point */}
      <motion.section
        className="py-16 px-6 md:px-12 lg:px-24  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <Lightbulb className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          </motion.div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">
            That's Why HERVeg.05 Was Founded
          </h3>

          <motion.p
            className="text-xl max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            In 2024, our founder launched HERVeg.05 after working closely with
            farming communities and recognizing both their challenges and
            strengths. Built to collaborate with, not work for, these
            communities.
          </motion.p>
        </div>
      </motion.section>

      {/* Video/Image Section */}
      <motion.section
        className="mb-10 px-6 md:px-12 lg:px-24 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative  rounded-lg overflow-hidden  aspect-video"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Placeholder for video/image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={agents}
                alt="Founder with Community"
                className="object-cover mask-b-from-90% w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section
        className="py-16 px-6 md:px-12 lg:px-24 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-700"
            variants={itemVariants}
          >
            What We Provide
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-linear-to-r from-green-900 to-green-800 p-8 rounded-lg border-2 border-yellow-400 hover:border-green-400 transition-colors"
                variants={cardVariants}
                whileHover={{ scale: 1.03, x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-yellow-400 shrink-0 mt-1" />
                  <p className="text-lg text-white">{solution.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Goal Section */}
      <motion.section
        className="py-16 px-6 md:px-12 lg:px-24 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <TrendingUp className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
            Our Goal
          </h3>
          <p className="text-xl  mb-12">
            Help farmers grow more food, increase income, and improve their
            families' lives—all while letting them make the decisions
            themselves.
          </p>
        </div>
      </motion.section>

      {/* Key Principle Section */}
      <motion.section
        className="mb-20 px-6 md:px-12 lg:px-24 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-linear-to-b from-green-950 to-green-800 p-10 md:p-16 rounded-2xl border-4 border-yellow-400 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-16 h-16 text-yellow-400" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-yellow-400">
              Key Principle: Respect
            </h3>

            <p className="text-xl md:text-2xl text-center text-gray-300 leading-relaxed">
              This isn't old-school aid. Farmers choose how to use the
              resources, when to invest, and what decisions to make.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default FoundingStory;
