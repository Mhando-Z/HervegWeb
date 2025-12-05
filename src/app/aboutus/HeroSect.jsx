"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import image1 from "../../../public/aboutus/01.jpg";
import image2 from "../../../public/aboutus/02.jpg";
import image3 from "../../../public/aboutus/03.jpg";
import image4 from "../../../public/aboutus/04.jpg";
import image5 from "../../../public/aboutus/05.jpg";
import image6 from "../../../public/aboutus/06.jpg";
import image7 from "../../../public/aboutus/07.jpg";
import Image from "next/image";

const imagedata = [
  {
    id: 1,
    image_url: image1,
  },
  {
    id: 2,
    image_url: image2,
  },
  {
    id: 3,
    image_url: image3,
  },
  {
    id: 4,
    image_url: image4,
  },
  {
    id: 5,
    image_url: image5,
  },
  {
    id: 6,
    image_url: image6,
  },
  {
    id: 7,
    image_url: image7,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 1 },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HeroSect() {
  return (
    <div className="relative min-h-screen mt-20 overflow-hidden">
      {imagedata?.length === 0 ? (
        <div className="bg-white"></div>
      ) : (
        <motion.div
          className="pt-16 pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          variants={containerVariants}
        >
          <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
            <motion.div className="sm:max-w-lg">
              <motion.h1
                className="text-4xl text-green-700 md:max-w-[390px] font-roboto  max-w-[290px] xl:max-w-lg font-black tracking-tight md:text-5xl xl:text-6xl"
                variants={itemVariants}
              >
                Fighting Malnutrition, One Farm at a Time
              </motion.h1>
              <motion.p
                className="mt-4 dark:text-gray-300 text-base sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] text-gray-500 xl:text-lg"
                variants={itemVariants}
              >
                At HERVeg.05, we help smallholder farmers take control of their
                future with a practical, people-first approach that fits how
                they actually live, grow, and earn
              </motion.p>
            </motion.div>
            <div className="relative">
              <div className="mt-10">
                {/* Decorative image grid with staggering */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <motion.div
                    className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={gridContainerVariants}
                  >
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      {/* First Grid Section */}
                      <motion.div
                        className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                        variants={gridContainerVariants}
                      >
                        {imagedata.slice(0, 2).map((item, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-64 overflow-hidden rounded-lg w-44"
                          >
                            <Image
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              loading="lazy"
                              src={item?.image_url}
                              alt={`Hat conference pictures ${index}`}
                              className="object-cover object-center w-full h-full"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                      {/* Second Grid Section */}
                      <motion.div
                        className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                        variants={gridContainerVariants}
                      >
                        {imagedata.slice(2, 5).map((item, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-64 overflow-hidden rounded-lg w-44"
                          >
                            <Image
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              loading="lazy"
                              src={item?.image_url}
                              alt={`Hat conference pictures ${index + 2}`}
                              className="object-cover object-center w-full h-full"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                      {/* Third Grid Section */}
                      <motion.div
                        className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                        variants={gridContainerVariants}
                      >
                        {imagedata.slice(5, 7).map((item, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-64 overflow-hidden rounded-lg w-44"
                          >
                            <Image
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              loading="lazy"
                              src={item?.image_url}
                              alt={`Hat conference pictures ${index + 5}`}
                              className="object-cover object-center w-full h-full"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
