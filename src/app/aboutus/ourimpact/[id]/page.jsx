"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
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
  Award,
  LineChart,
  PieChart,
  Beaker,
  ArrowRight,
} from "lucide-react";

function page() {
  const { id } = useParams();

  const [activeSection, setActiveSection] = useState(id);
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

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const sections = [
    {
      id: "income",
      title: "Income & Yield Growth",
      icon: TrendingUp,
      color: "emerald",
    },
    {
      id: "poultry",
      title: "Poultry Sustainability",
      icon: Sprout,
      color: "emerald",
    },
    {
      id: "nutrition",
      title: "Nutrition & Food Security",
      icon: Heart,
      color: "emerald",
    },
    {
      id: "resilience",
      title: "Resilience",
      icon: Shield,
      color: "emerald",
    },
    {
      id: "methodology",
      title: "How We Measure Impact",
      icon: BarChart3,
      color: "emerald",
    },
  ];

  return (
    <div className="md:mt-20">
      {/* Income & Yield Growth Section */}
      {activeSection === "income" && (
        <motion.section
          initial={{ opacity: 1, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 1, height: 0 }}
          className="py-16 px-6 "
        >
          <div className="xl:container mx-auto px-2">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-emerald-800">
                Income & Yield Growth
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-emerald-700">
                  2024 Impact Metrics
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Increase in vegetable yields",
                      value: "34%",
                      icon: TrendingUp,
                    },
                    {
                      label: "New monthly income from vegetables",
                      value: "$35 USD",
                      icon: DollarSign,
                    },
                    {
                      label: "Farmers reduced synthetic fertilizer",
                      value: "67%",
                      icon: Leaf,
                    },
                    {
                      label: "Improved input affordability",
                      value: "83%",
                      icon: CheckCircle2,
                    },
                    {
                      label: "Yield increase from CSA training",
                      value: "80%",
                      icon: Award,
                    },
                  ].map((metric, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 8 }}
                      className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <metric.icon className="w-6 h-6 text-emerald-600" />
                        <span className="text-gray-700">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-emerald-700">
                        {metric.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-linear-to-br from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl shadow-lg"
              >
                <div className="mb-6">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Farmer Story</h3>
                </div>
                <blockquote className="text-lg italic leading-relaxed mb-4">
                  "Before HERVeg.05, I only planted maize. I struggled to feed
                  my children and buy school supplies. Now I have chickens that
                  lay eggs, vegetables to eat and sell, and my soil is more
                  fertile. I even joined a savings group. I feel in control for
                  the first time."
                </blockquote>
                <p className="font-semibold">
                  Amina, Mother of Four, Magoda District
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-emerald-700 flex items-center gap-3">
                <Target className="w-8 h-8" />
                How We Measure Our Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Yield Tracking",
                    points: [
                      "Baseline and endline surveys",
                      "Plot sizes & harvest volumes",
                      "Field officer spot checks",
                    ],
                  },
                  {
                    title: "Income Monitoring",
                    points: [
                      "Monthly income from eggs & crops",
                      "Purchase receipts validation",
                      "VSLA savings behavior",
                    ],
                  },
                  {
                    title: "VSLA Transaction Data",
                    points: [
                      "Savings contributions frequency",
                      "Loan uptake & repayment",
                      "Farmer investment behavior",
                    ],
                  },
                  {
                    title: "Livestock Performance",
                    points: [
                      "Monthly poultry audits",
                      "Feed access & manure use",
                      "Mortality & egg production",
                    ],
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-emerald-50 rounded-xl">
                    <h4 className="font-bold text-lg mb-3 text-emerald-800">
                      {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
      {/* Poultry Sustainability Section */}
      {activeSection === "poultry" && (
        <motion.section
          initial={{ opacity: 1, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 1, height: 0 }}
          className="py-16 px-6 "
        >
          <div className="container mx-auto px-2">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-emerald-800">
                Poultry Sustainability
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Award, value: "97%", label: "Poultry Survival Rate" },
                {
                  icon: DollarSign,
                  value: "$20-35",
                  label: "Monthly Income from Eggs",
                },
                {
                  icon: Target,
                  value: "<8 weeks",
                  label: "To First Cash Returns",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <stat.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-emerald-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInUp}
                className="bg-linear-to-br from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl shadow-lg"
              >
                <Sprout className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Farmer Story</h3>
                <blockquote className="text-lg italic leading-relaxed mb-4">
                  "I never thought I could raise chickens that bring in money
                  and food. After getting my first batch from HERVeg.05, I
                  started selling eggs in just three weeks. Now I feed them with
                  leftover vegetables and use their manure for my maize.
                  Everything is connected and I don't depend on expensive feeds
                  anymore."
                </blockquote>
                <p className="font-semibold">Neema, 23, Young Farmer, Kanani</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  {
                    value: "90%",
                    label: "Farmers produce feed from vegetable waste",
                    icon: Leaf,
                  },
                  {
                    value: "68%",
                    label: "Reduction in input costs",
                    icon: TrendingUp,
                  },
                ].map((metric, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-4">
                      <metric.icon className="w-10 h-10 text-emerald-600" />
                      <div>
                        <div className="text-3xl font-bold text-emerald-700">
                          {metric.value}
                        </div>
                        <div className="text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-emerald-700">
                Our Poultry Model
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Ready-to-Lay Birds",
                    items: [
                      "Dual-purpose SASSO breed",
                      "4-5 weeks old at delivery",
                      "Fully vaccinated",
                      "Suited for low-input environments",
                    ],
                  },
                  {
                    title: "Low-Cost Feeding",
                    items: [
                      "Convert vegetable scraps to feed",
                      "Use local grains",
                      "Circular waste approach",
                      "Cut feed expenses significantly",
                    ],
                  },
                  {
                    title: "Integrated Manure Use",
                    items: [
                      "Collect & compost droppings",
                      "Apply to vegetable & maize fields",
                      "Boost soil fertility naturally",
                      "Eliminate synthetic fertilizer costs",
                    ],
                  },
                  {
                    title: "Resale & Emergency Cash",
                    items: [
                      "Quick cash from mature birds",
                      "Local market accessibility",
                      "Liquid asset for tough seasons",
                      "Financial safety net",
                    ],
                  },
                ].map((section, idx) => (
                  <div key={idx} className="p-6 bg-emerald-50 rounded-xl">
                    <h4 className="font-bold text-lg mb-3 text-emerald-800">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
      {/* Nutrition Section */}
      {activeSection === "nutrition" && (
        <motion.section
          initial={{ opacity: 1, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 1, height: 0 }}
          className="py-16 px-6 "
        >
          <div className="container mx-auto px-2">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-green-800">
                Nutrition & Food Security
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { value: "70%", label: "Improved Dietary Diversity" },
                { value: "40%", label: "Reduction in Food Insecurity" },
                { value: "20%", label: "Increase in Surplus Sales" },
                { value: "80%", label: "Use Biofortified Crops" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInUp}
                className="bg-linear-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg"
              >
                <Heart className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Farmer Story</h3>
                <blockquote className="text-lg italic leading-relaxed mb-4">
                  "I used to worry about feeding my children during the dry
                  season. Now, with the support from HERVeg.05, I have a steady
                  supply of nutritious eggs and vegetables. The extra income
                  from selling surplus food has made all the difference for my
                  family."
                </blockquote>
                <p className="font-semibold"> Amina, 36, Farmer, Itulaumba</p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-green-700">
                  Program Impact
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Biofortified Crops",
                      desc: "Vitamin A maize and iron-rich vegetables combat nutrient deficiencies",
                      icon: Sprout,
                    },
                    {
                      title: "Egg Production",
                      desc: "Essential protein and micronutrients for maternal and child health",
                      icon: Heart,
                    },
                    {
                      title: "Surplus Food Sales",
                      desc: "Income from surplus helps families weather hunger months",
                      icon: DollarSign,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 bg-green-50 rounded-xl"
                    >
                      <item.icon className="w-8 h-8 text-green-600 shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-3">
                <BarChart3 className="w-8 h-8" />
                Data-Driven Monitoring
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "HDDS",
                    desc: "Household Diet Diversity Score tracks diet variety improvements",
                  },
                  {
                    title: "FIES",
                    desc: "Food Insecurity Experience Scale measures household security",
                  },
                  {
                    title: "WEAI",
                    desc: "Women's Empowerment in Agriculture Index assesses empowerment",
                  },
                ].map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-green-50 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {metric.title}
                    </div>
                    <p className="text-gray-700 text-sm">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
      {/* Resilience Section */}
      {activeSection === "resilience" && (
        <motion.section
          initial={{ opacity: 1, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 1, height: 0 }}
          className="py-16 px-6 "
        >
          <div className="container mx-auto px-2">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-green-800">
                Building Climate Resilience
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Shield, value: "85%", label: "Improved Soil Health" },
                {
                  icon: Target,
                  value: "40%",
                  label: "Reduced Drought Vulnerability",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <stat.icon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <div className="text-5xl font-bold text-green-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInUp}
                className="bg-linear-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg"
              >
                <Shield className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Farmer Story</h3>
                <blockquote className="text-lg italic leading-relaxed mb-4">
                  "Before learning about adaptive farming, drought would
                  devastate my crops. Now, with manure to improve soil health
                  and extra income from poultry and vegetables, I can weather
                  tough seasons. I feel more secure and ready for anything."
                </blockquote>
                <p className="font-semibold">
                  Mwajuma, 44, Smallholder Farmer, Kisilo
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  {
                    title: "Manure for Soil Health",
                    desc: "Enhanced soil structure and water retention for stronger crops",
                    icon: Leaf,
                  },
                  {
                    title: "Diversified Income",
                    desc: "Multiple income sources buffer against climate shocks",
                    icon: DollarSign,
                  },
                  {
                    title: "Adaptive Training",
                    desc: "Climate-smart practices from soil conservation to water management",
                    icon: Award,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <item.icon className="w-10 h-10 text-green-600 shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-green-800 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-3">
                <BarChart3 className="w-8 h-8" />
                Data-Driven Monitoring
              </h3>
              <p className="text-gray-700 mb-6">
                We assess resilience through internationally recognized tools
                like the{" "}
                <strong>
                  FAO's Resilience Index Measurement and Analysis (RIMA)
                </strong>
                , ensuring we track progress and adjust practices based on data.
              </p>
            </motion.div>
          </div>
        </motion.section>
      )}
      {/* Methodology Section */}
      {activeSection === "methodology" && (
        <motion.section
          initial={{ opacity: 1, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 1, height: 0 }}
          className="py-16 px-6 "
        >
          <div className="container mx-auto px-2">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-green-800">
                How We Measure Impact
              </h2>
            </motion.div>

            {/* SROI Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-3">
                <PieChart className="w-8 h-8" />
                Social Return on Investment (SROI)
              </h3>
              <p className="text-gray-700 mb-6">
                SROI is a framework for understanding, measuring, and valuing
                the broader impact of our work beyond traditional financial
                metrics.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg text-green-800 mb-4">
                    Current SROI
                  </h4>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-600 mb-2">
                      $3:$1
                    </div>
                    <p className="text-gray-700">
                      Every $1 invested creates $2 in social value
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg text-green-800 mb-4">
                    Target SROI by 2034
                  </h4>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-600 mb-2">
                      $6:$1
                    </div>
                    <p className="text-gray-700">
                      Through improved tracking and verification
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-800 mb-3">
                    What SROI Measures
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Increased household income",
                      "Higher agricultural productivity",
                      "Improved nutrition & health",
                      "Women's decision-making power",
                      "Time saved",
                      "Strengthened community networks",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-green-800 mb-3">
                    How We Use It
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Evaluate cost-effectiveness",
                      "Make data-informed decisions",
                      "Communicate impact transparently",
                      "Advocate for high-impact areas",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* What is Impact */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-3">
                <Target className="w-8 h-8" />
                What is Impact?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Impact is the{" "}
                <strong>
                  net change in well-being that can be causally attributed to a
                  specific intervention
                </strong>
                . This includes both intended and unintended, positive and
                negative changes in income, health, resilience, and empowerment.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Economic",
                    desc: "Income & assets",
                    icon: DollarSign,
                  },
                  {
                    title: "Nutritional",
                    desc: "Diet & health",
                    icon: Heart,
                  },
                  {
                    title: "Climate Resilience",
                    desc: "Soil health & diversification",
                    icon: Shield,
                  },
                  {
                    title: "Social Empowerment",
                    desc: "Women & youth",
                    icon: Users,
                  },
                ].map((domain, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-green-50 rounded-xl text-center"
                  >
                    <domain.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <h4 className="font-bold text-green-800 mb-1">
                      {domain.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{domain.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why We Measure */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8" />
                Why We Measure Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Prove Effectiveness",
                    desc: "Know with confidence whether our programs create meaningful outcomes",
                  },
                  {
                    title: "Improve Program Design",
                    desc: "Real-time data helps us course-correct early and adapt training",
                  },
                  {
                    title: "Ensure Cost-Efficiency",
                    desc: "Understand cost per outcome to allocate resources strategically",
                  },
                  {
                    title: "Build Trust",
                    desc: "Rigorous data builds credibility with partners and communities",
                  },
                  {
                    title: "Drive Learning & Scale",
                    desc: "Impact data provides the greenprint for replication and growth",
                  },
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">{reason.title}</h4>
                      <p className="text-green-100 text-sm">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RCT Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-3">
                <Beaker className="w-8 h-8" />
                Using RCTs to Prove Impact
              </h3>
              <p className="text-gray-700 mb-6">
                Randomized Controlled Trials (RCTs) are the gold standard in
                impact evaluation, allowing us to isolate the impact of our
                interventions with scientific rigor.
              </p>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h4 className="font-bold text-lg text-green-800 mb-4">
                  What is an RCT?
                </h4>
                <p className="text-gray-700 mb-4">
                  An RCT randomly assigns participants to treatment and control
                  groups. By comparing changes across both groups, we can
                  confidently attribute impact to our program rather than
                  external factors.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">
                      Treatment Group
                    </h5>
                    <p className="text-sm text-gray-600">
                      Receives the HERVeg.05 intervention
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">
                      Control Group
                    </h5>
                    <p className="text-sm text-gray-600">
                      Does not receive intervention during study
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-lg text-green-800 mb-4">
                  Why HERVeg.05 Uses RCTs
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Generate reliable, unbiased evidence",
                    "Validate program outcomes",
                    "Identify most effective interventions",
                    "Build credibility with stakeholders",
                    "Improve training methods",
                    "Prepare for data-driven scaling",
                  ].map((reason, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 bg-green-50 rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg text-green-800 mb-4">
                  Our RCT Implementation Process
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Control Pre-Survey & Matching",
                      desc: "Pre-survey among control group farmers with similar characteristics",
                    },
                    {
                      step: 2,
                      title: "Sample Size Design",
                      desc: "Statistical power calculations to detect meaningful differences",
                    },
                    {
                      step: 3,
                      title: "Team Training",
                      desc: "Intensive training on RCT protocols and ethical data collection",
                    },
                    {
                      step: 4,
                      title: "Data Collection",
                      desc: "Identical data collected from both treatment and control groups",
                    },
                    {
                      step: 5,
                      title: "Quality Checks",
                      desc: "Outlier flagging, cross-validation, and error correction",
                    },
                    {
                      step: 6,
                      title: "Follow-Up Surveys",
                      desc: "Endline surveys 2-3 months post-intervention to track lasting changes",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 8 }}
                      className="flex gap-4 p-4 bg-green-50 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-green-800 mb-1">
                          {item.title}
                        </h5>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg text-center"
            >
              <LineChart className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Evidence-Driven Impact
              </h3>
              <p className="text-lg mb-6">
                RCTs enable us to go beyond assumptions and anecdotes, providing
                the confidence to say our programs work and prove it with data.
              </p>
              <p className="text-green-100">
                We are actively developing partnerships with research
                institutions to embed RCTs into future program rollouts across
                new regions.
              </p>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Navigation Cards */}
      <motion.section
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="xl:container mx-auto px-2">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-left mb-12 text-gray-800"
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
                className={`p-6 rounded-2xl shadow-lg text-left transition-all duration-300 ${
                  activeSection === section.id
                    ? `bg-linear-to-br from-${section.color}-600 to-${section.color}-700 text-white`
                    : "bg-white hover:shadow-xl"
                }`}
              >
                <section.icon
                  className={`w-12 h-12 mb-4 ${
                    activeSection === section.id
                      ? "text-white"
                      : `text-${section.color}-600`
                  }`}
                />
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                {activeSection === section?.id ? (
                  <div />
                ) : (
                  <div className="flex cursor-pointer flex-row items-center gap-2">
                    <p
                      className={`text-sm ${
                        activeSection === section.id
                          ? "text-white"
                          : `text-${section.color}-600`
                      } text-green-800`}
                    >
                      Read more
                    </p>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        activeSection === section.id
                          ? "text-white"
                          : `text-${section.color}-600`
                      }`}
                    />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default page;
