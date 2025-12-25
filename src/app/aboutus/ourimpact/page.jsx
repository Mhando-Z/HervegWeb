"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Sprout,
  Heart,
  Shield,
  BarChart3,
  Leaf,
  DollarSign,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Award,
  LineChart,
  PieChart,
  Beaker,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import farmerImage from "../../../../public/hero/03.jpg";

const ImpactPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 1, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 1 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const sections = [
    {
      id: "income",
      title: "Income & Yield Growth",
      icon: TrendingUp,
      color: "emerald",
      path: "/aboutus/ourimpact/income",
    },
    {
      id: "poultry",
      title: "Poultry Sustainability",
      icon: Sprout,
      color: "emerald",
      path: "/aboutus/ourimpact/poultry",
    },
    {
      id: "nutrition",
      title: "Nutrition & Food Security",
      icon: Heart,
      color: "emerald",
      path: "/aboutus/ourimpact/nutrition",
    },
    {
      id: "resilience",
      title: "Resilience",
      icon: Shield,
      color: "emerald",
      path: "/aboutus/ourimpact/resilience",
    },
    {
      id: "methodology",
      title: "How We Measure Impact",
      icon: BarChart3,
      color: "emerald",
      path: "/aboutus/ourimpact/methodology",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="min-h-screen md:relative pb-40 md:pb-56">
        <Image
          src={farmerImage}
          alt="Farmer working in field"
          className="w-full h-full hidden md:block object-cover mask-b-from-70% brightness-75"
          priority
        />
        <motion.section
          className="md:absolute top-0 left-0 right-0 bottom-0 overflow-hidden h-full mask-b-from-90% bg-linear-to-r from-emerald-600 md:from-emerald-600/20 md:to-green-700/80 to-green-700 text-white py-20 px-6"
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto min-h-screen items-center justify-center flex flex-col">
            <motion.div variants={fadeInUp} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-block mb-6"
              >
                <Leaf className="w-16 h-16 mx-auto" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Impact
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                We're helping farmers grow more than food we're growing income,
                resilience, and hope.
              </p>
            </motion.div>
          </div>

          {/* Decorative wave */}
          <div className="absolute top-0 left-0 right-0">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#f0fdf4"
                opacity="0.5"
              ></path>
            </svg>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          className="py-16 px-6 md:absolute bottom-0 right-0 left-0 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  value: "84%",
                  label: "Increase in Vegetable Yields",
                  color: "emerald",
                },
                {
                  icon: DollarSign,
                  value: "$35",
                  label: "Average Monthly Income",
                  color: "emerald",
                },
                {
                  icon: Sprout,
                  value: "97%",
                  label: "Poultry Survival Rate",
                  color: "green",
                },
                {
                  icon: Users,
                  value: "70%",
                  label: "Improved Diet Diversity",
                  color: "green",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`bg-linear-to-br from-${stat.color}-50 to-white p-6 rounded-2xl shadow-lg border border-${stat.color}-100`}
                >
                  <stat.icon
                    className={`w-12 h-12 text-${stat.color}-600 mb-4`}
                  />
                  <div
                    className={`text-4xl font-bold text-${stat.color}-700 mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      {/* Navigation Cards */}
      <motion.section
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Explore Our Impact Areas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections?.map((section, idx) => (
              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(section.id)}
                className={`p-6 rounded-2xl bg-white hover:shadow-xl shadow-lg text-left transition-all duration-300 `}
              >
                <section.icon className={`w-12 h-12 mb-4 text-emerald-600`} />
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <Link href={section?.path} key={section.id}>
                  <div className="flex cursor-pointer flex-row items-center gap-2">
                    <p className={`text-sm text-green-800`}>Read more</p>
                    <ArrowRight className={`w-4 h-4`} />
                  </div>
                </Link>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-linear-to-t mask-t-from-95% from-[#1a4d3a]  via-[#1a4d3a] to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={scaleIn}>
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Join Us in Creating Lasting Impact
            </h2>
            <p className="text-xl mb-8">
              Every contribution helps transform lives, build resilience, and
              create sustainable futures for farming families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/donate/"}>
                <button className="bg-white cursor-pointer text-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 justify-center hover:scale-105">
                  Donate Now
                  <Heart className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
