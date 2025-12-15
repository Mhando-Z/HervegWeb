// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Sprout,
//   Handshake,
//   Users,
//   Heart,
//   TrendingUp,
// } from "lucide-react";
// import Link from "next/link";

// const HeroAndStory = () => {
//   // Animation variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const scaleIn = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { duration: 0.5 },
//   };

//   return (
//     <div className="bg-white font-roboto">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-linear-to-br from-emerald-900/90 via-emerald-800/85 to-green-900/90 z-10" />
//           <Image
//             src={agents}
//             alt="Women farmers in the field"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
//           <motion.div
//             initial="initial"
//             animate="animate"
//             variants={staggerContainer}
//             className="text-center"
//           >
//             <motion.div variants={fadeInUp} className="mb-6">
//               <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-emerald-100 text-sm font-medium border border-white/20">
//                 HERVeg.05
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
//             >
//               Fighting Malnutrition,
//               <br />
//               <span className="text-emerald-300">One Farm at a Time</span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="text-xl md:text-2xl text-emerald-50 mb-12 max-w-4xl mx-auto leading-relaxed"
//             >
//               At HERVeg.05, we help smallholder farmers take control of their
//               future with a practical, people-first approach that fits how they
//               actually live, grow, and earn.
//             </motion.p>

//             <motion.div variants={fadeInUp}>
//               <Link href={"/aboutus/ourimpact/"}>
//                 <button className="group relative cursor-pointer inline-flex items-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
//                   See Our Impact
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>
//             </motion.div>

//             {/* Floating Stats */}
//             <motion.div
//               variants={fadeInUp}
//               className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
//             >
//               {[
//                 { icon: Users, label: "Farmers Supported", value: "500+" },
//                 { icon: Sprout, label: "Communities", value: "25+" },
//                 { icon: TrendingUp, label: "Income Growth", value: "40%" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
//                 >
//                   <stat.icon className="w-8 h-8 text-emerald-300 mb-3 mx-auto" />
//                   <div className="text-3xl font-bold text-white mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-emerald-100 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.5 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
//           >
//             <div className="w-1.5 h-1.5 bg-white rounded-full" />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Our Founding Story Section */}
//       <section className="py-24 bg-linear-to-b from-white to-emerald-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//           >
//             {/* Section Header */}
//             <motion.div variants={fadeInUp} className="text-center mb-16">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
//                 <Heart className="w-4 h-4" />
//                 Our Story
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 It All Began with a{" "}
//                 <span className="text-emerald-600">Simple Observation</span>
//               </h2>
//             </motion.div>

//             {/* Introduction */}
//             <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mb-16">
//               <p className="text-xl text-gray-700 leading-relaxed text-center">
//                 In rural areas, farming is more than work—it's life itself. But
//                 for smallholder farmers, especially women and youth, every day
//                 brings challenges:
//               </p>
//             </motion.div>

//             {/* Challenges Grid */}
//             <motion.div
//               variants={staggerContainer}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
//             >
//               {[
//                 {
//                   icon: "🌧️",
//                   text: "Rains come late or too little",
//                 },
//                 {
//                   icon: "🌱",
//                   text: "Soil fertility is declining",
//                 },
//                 {
//                   icon: "🌾",
//                   text: "Seeds fail to grow reliably",
//                 },
//                 {
//                   icon: "🐔",
//                   text: "Livestock get sick and die",
//                 },
//                 {
//                   icon: "🍽️",
//                   text: "Food isn't enough to feed families",
//                 },
//                 {
//                   icon: "💰",
//                   text: "Limited income generation",
//                 },
//               ].map((challenge, index) => (
//                 <motion.div
//                   key={index}
//                   variants={scaleIn}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
//                 >
//                   <div className="text-4xl mb-3">{challenge.icon}</div>
//                   <p className="text-gray-700 font-medium">{challenge.text}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Still They Persevere */}
//             <motion.div
//               variants={fadeInUp}
//               className="bg-linear-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-center mb-16 shadow-2xl"
//             >
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 Still, they persevere.
//               </h3>
//               <p className="text-emerald-50 text-lg max-w-3xl mx-auto">
//                 Many come together in women's savings groups, supporting one
//                 another, saving little by little, and sharing knowledge. These
//                 groups are full of potential—they just need a boost to reach it.
//               </p>
//             </motion.div>

//             {/* Why HERVeg.05 */}
//             <motion.div variants={fadeInUp} className="text-center mb-16">
//               <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
//                 That's Why <span className="text-emerald-600">HERVeg.05</span>{" "}
//                 Was Founded
//               </h3>
//               <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
//                 In 2024, our founder launched HERVeg.05 after working closely
//                 with farming communities and recognizing both their challenges
//                 and strengths. Built to collaborate with, not work for, these
//                 communities.
//               </p>
//             </motion.div>

//             {/* What We Provide */}
//             <motion.div
//               variants={staggerContainer}
//               className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
//             >
//               {[
//                 {
//                   icon: "🐓",
//                   title: "SASSO Chickens",
//                   description:
//                     "Healthy, one-month-old SASSO chickens for sustainable farming",
//                 },
//                 {
//                   icon: "🌽",
//                   title: "Quality Seeds",
//                   description:
//                     "Fast-growing vegetables and biofortified maize seed",
//                 },
//                 {
//                   icon: "🌿",
//                   title: "Organic Fertilizer",
//                   description: "Natural soil enhancement for better yields",
//                 },
//                 {
//                   icon: "📚",
//                   title: "Training & Delivery",
//                   description:
//                     "Hands-on training and last mile delivery support",
//                 },
//               ].map((service, index) => (
//                 <motion.div
//                   key={index}
//                   variants={scaleIn}
//                   whileHover={{ scale: 1.03 }}
//                   className="bg-white rounded-xl p-8 shadow-sm border-emerald-500 hover:shadow-2xl transition-all"
//                 >
//                   <div className="text-5xl mb-4">{service.icon}</div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">
//                     {service.title}
//                   </h4>
//                   <p className="text-gray-600">{service.description}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Our Goal */}
//             <motion.div
//               variants={fadeInUp}
//               className="bg-emerald-50 rounded-2xl p-12 mb-16"
//             >
//               <div className="max-w-3xl mx-auto text-center">
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//                   Our Goal
//                 </h3>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Help farmers grow more food, increase income, and improve
//                   their families' lives—all while letting them make the
//                   decisions themselves.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Key Principle */}
//             <motion.div
//               variants={scaleIn}
//               className="bg-linear-to-br from-emerald-600 to-emerald-800 rounded-2xl p-12 text-center shadow-2xl"
//             >
//               <div className="flex items-center justify-center mb-6">
//                 <Handshake className="w-16 h-16 text-white" />
//               </div>
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 Key Principle: Respect
//               </h3>
//               <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
//                 This isn't old-school aid. Farmers choose how to use the
//                 resources, when to invest, and what decisions to make.
//               </p>
//             </motion.div>

//             {/* Video Section Placeholder */}
//             <motion.div variants={fadeInUp} hidden className="mt-16">
//               <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
//                 <div className="w-full h-full flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-10 h-10 text-white ml-1"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M8 5v14l11-7z" />
//                       </svg>
//                     </div>
//                     <p className="text-white text-lg">
//                       Watch Our Founder's Story
//                       <br />
//                       <span className="text-emerald-300 text-sm">
//                         Video Coming Soon
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroAndStory;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import agents from "../../../../public/aboutus/011.png";
import Image from "next/image";
import Link from "next/link";

const HeroAndStory = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-white font-roboto">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-900/90 via-emerald-800/85 to-green-900/90 z-10" />
          <Image
            src={agents}
            alt="Women farmers in the field"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Fighting Malnutrition,
              <br />
              <span className="text-emerald-300">One Farm at a Time</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-emerald-50 mb-12 max-w-4xl mx-auto"
            >
              At HERVeg.05, we help smallholder farmers take control of their
              future with a practical, people-first approach that fits how they
              actually live, grow, and earn
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link href={"/aboutus/ourimpact/"}>
                <button className="group cursor-pointer relative inline-flex items-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                  See Our Impact
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Founding Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                It All Began with a{" "}
                <span className="text-emerald-600">Simple Observation</span>
              </h2>
              <p className="text-xl text-gray-700 ">
                In rural areas, farming is more than work, it's life itself. But
                for smallholder farmers, especially women and youth, every day
                brings challenges:
              </p>
            </motion.div>

            {/* Challenges List */}
            <motion.div variants={fadeInUp} className="mb-16">
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>Rains come late or too little.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>Soil fertility is declining.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>Seeds fail to grow reliably.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>Livestock get sick and die.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>
                    The food they grow often isn't enough to feed their
                    families, nor nutritious or generate income.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Perseverance */}
            <motion.div variants={fadeInUp} className="mb-16">
              <p className="text-2xl font-semibold text-gray-900 mb-6">
                Still, they persevere.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Many come together in women's savings groups, supporting one
                another, saving little by little, and sharing knowledge. These
                groups are full of potential—they just need a boost to reach it.
              </p>
            </motion.div>

            {/* Why HERVeg.05 */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                That's Why <span className="text-emerald-600">HERVeg.05</span>{" "}
                Was Founded
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In 2024, our founder launched HERVeg.05 after working closely
                with farming communities and recognizing both their challenges
                and strengths. Built to collaborate with, not work for, these
                communities, HERVeg.05 provides:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>Healthy, one-month-old SASSO chickens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>
                    Fast-growing vegetables and biofortified maize seed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>Organic fertilizer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span>Hands-on training and last mile delivery</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Our goal:</span>{" "}
                help farmers grow more food, increase income, and improve their
                families' lives—all while letting them make the decisions
                themselves.
              </p>
            </motion.div>

            {/* Key Principle */}
            <motion.div
              variants={fadeInUp}
              className="border-l-4 border-emerald-600 pl-8 py-4"
            >
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Key Principle: Respect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This isn't old-school aid. Farmers choose how to use the
                resources, when to invest, and what decisions to make.
              </p>
            </motion.div>

            {/* Video Section Placeholder */}
            <motion.div variants={fadeInUp} className="mt-16">
              <div className="bg-gray-900 hidden rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white text-lg">
                      Watch Our Founder's Story
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            {/* Headline */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Growing Together:{" "}
                <span className="text-emerald-600">2025 Impact Report</span>
              </h2>
              <p className="text-2xl text-emerald-600 font-semibold">
                Coming Soon
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our 2025 Annual Report will showcase how HERVeg.05 is helping
                farmers save, grow, and earn through:
              </p>

              {/* Three Pillars */}
              <div className="max-w-3xl mx-auto space-y-6 text-left">
                <div className="flex items-start">
                  <span className="shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                    1
                  </span>
                  <p className="text-lg text-gray-700 pt-1">
                    Mobile layaway programs for flexible payments
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                    2
                  </span>
                  <p className="text-lg text-gray-700 pt-1">
                    VSLA partnerships for financial empowerment
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                    3
                  </span>
                  <p className="text-lg text-gray-700 pt-1">
                    Practical farm support for better yields and nutrition
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <div className="bg-linear-to-t py-10  from-[#1a4d3a] via-[#1a4d3a] to-green-800 mask-t-from-95%">
        <div className=" rounded-2xl  p-8 max-w-2xl mx-auto border">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Subscribe to See Our 2025 Impact Report
          </h3>
          <p className="text-gray-200 mb-6">
            Be the first to know when our 2025 report is released and get access
            to our 2024 impact data.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-200 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border text-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <button className="group inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-sm">
              Subscribe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroAndStory;
