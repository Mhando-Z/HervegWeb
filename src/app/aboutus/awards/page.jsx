"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  TrendingUp,
  Users,
  Target,
  Sparkles,
} from "lucide-react";

const awards = [
  {
    id: 1,
    year: "2024",
    title: "Elevating the Voices of Women in Agriculture (EVWA) Changemaker",
    description:
      "Acknowledged for creating impactful change through grassroots leadership in women farming",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 2,
    year: "2024",
    title: "ClimAccelerator Winner",
    description:
      "Winner among 10 start-ups in Tanzania focused on solving the problem of climate change. Recognized for our scalable model addressing climate resilience and food security through the VSLA model.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    year: "2024",
    title: "D-Prize Winner",
    description:
      "Honored for unlocking economic opportunity in last-mile communities through VSLAs.",
    icon: Trophy,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    year: "2025",
    title: "Finalist, Ashoka Power of Local Challenge",
    description:
      "Recognized for our circular, community-driven farming systems prioritizing youth and women.",
    icon: Target,
    color: "from-green-500 to-cyan-500",
  },
  {
    id: 5,
    year: "2025",
    title: "Winner of The Annual MEDA Pitch Competition",
    description:
      "Excellence in innovative agricultural solutions and community impact.",
    icon: Award,
    color: "from-cyan-500 to-green-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function RecognitionAwards() {
  return (
    <section className="min-h-screen bg-linear-to-br md:mt-20 from-slate-50 via-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-linear-to-br from-green-400 to-emerald-600 shadow-lg"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Recognition & Awards
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our work is gaining national and international recognition for its
            innovative and inclusive approach to climate-smart farming.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12"
        >
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={award.id}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* linear Border Effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon and Year */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${award.color} shadow-md`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`h-1 bg-linear-to-r ${award.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-center"
        >
          <p className="text-white text-lg sm:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
            These accolades affirm our belief that{" "}
            <span className="font-bold underline decoration-white/50">
              local solutions, when led by those closest to the challenges, can
              drive global impact.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
