"use client";

import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { FaCartArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
// image import
import direct from "../../public/ibu2.png";
import Image from "next/image";

function OurServices() {
  const services = [
    {
      icon: <FaMoneyBillTrendUp className="text-2xl" />,
      path: "/servce/loans/",
      title: "Providing Training",
      description:
        "Comprehensive loan solutions tailored to meet diverse financial requirements and support member growth opportunities.",
      number: "01",
      color: "bg-linear-to-br from-green-600 to-cyan-300",
    },
    {
      icon: <FaCartArrowDown className="text-2xl" />,
      title: "Packaging and Delivery",
      path: "/servce/savings/",
      description:
        "Secure savings programs designed to help members build financial stability and achieve long-term financial objectives.",
      number: "02",
      color: "bg-linear-to-br from-green-600 to-cyan-300",
    },
    {
      icon: <HiUserGroup className="text-2xl" />,
      title: "Training ",
      path: "/servce/shares/",
      description:
        "Strategic shareholding opportunities that provide members with ownership benefits and sustainable financial growth.",
      number: "03",
      color: "bg-linear-to-br from-green-600 to-cyan-300",
    },
  ];

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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 relative mb-10 ">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with decorative circles */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Professional placeholder image */}
            <Image
              src={direct}
              alt="Professional"
              className="w-full xl:h-[560px] md:h-full object-cover object-right"
            />
            <div className="absolute top-0 left-0 via-15% right-0 bg-linear-to-t from-white via-transparent to-transparent bottom-0 dark:bg-linear-to-t dark:from-slate-900 dark:to-transparent dark:via-transparent"></div>
          </motion.div>

          {/* Right side - Services list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Section title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl dark:text-gray-200 font-bold text-slate-800 mb-4">
                Our Services
              </h2>
            </motion.div>

            {/* Dotted connecting line */}
            <div className="absolute left-8 top-32 bottom-0 w-0.5 border-l-2 border-dotted border-gray-600 dark:border-gray-300 -z-10"></div>

            {/* Services list */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-6 group"
                >
                  {/* Numbered circle */}
                  <motion.div
                    variants={circleVariants}
                    className={`shrink-0 w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.number}
                  </motion.div>

                  {/* Service content */}
                  <div className="flex-1">
                    <Link href={service.path}>
                      <motion.h3
                        className="text-xl md:text-2xl dark:text-gray-400 font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300 cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                    </Link>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    {/* <Link href={service.path}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                      >
                        Learn More
                        <svg
                          className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.button>
                    </Link> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
