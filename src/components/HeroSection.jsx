"use client";

import React, { useState, useEffect } from "react";
import image1 from "../../public/hero/01.jpg";
import image3 from "../../public/hero/03.jpg";
import image4 from "../../public/hero/04.jpg";
import image5 from "../../public/hero/05.jpg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    image: image1,
    text: " Innovation Rooted in Community Impact",
    description:
      "From mobile payments to streamlined training modules, HERVeg.05 prioritizes simple, scalable solutions designed to reach thousands of farmers efficiently while ensuring long‑term behavioral and agricultural improvements.",
  },
  {
    image: image3,
    text: "A Vision for a Malnutrition‑Free Tanzania",
    description:
      "Currently active in Njombe and expanding to regions like Ruvuma, Iringa, Mbeya, Rukwa, Kigoma, and Songwe, HERVeg.05 aims to build a Tanzania free from malnutrition through farmer‑driven transformation.",
  },
  {
    image: image4,
    text: "Growing Communities, Strengthening Livelihoods",
    description:
      "Through innovative and cost‑effective approaches, HERVeg.05 partners with vulnerable communities to boost food security, build trust, and create sustainable income pathways for smallholder farmers.",
  },
  {
    image: image5,
    text: "Empowering Tanzanian Farmers Through Sustainable Solutions",
    description:
      "HERVeg.05 is a rapidly growing agricultural initiative founded in 2023, working to fight malnutrition and uplift farmers—especially women—through high‑quality seeds, training, and scalable community‑based models like VSLA groups.",
  },
];

function HeroSection() {
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState(1);

  // timer Logic
  useEffect(() => {
    if (!data || data.length === 0) return;

    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (direction === 1) {
          if (prevValue >= data.length - 1) {
            setDirection(-1);
            return prevValue - 1;
          } else {
            return prevValue + 1;
          }
        } else {
          if (prevValue <= 0) {
            setDirection(1);
            return prevValue + 1;
          } else {
            return prevValue - 1;
          }
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [direction]);

  const handleNext = () => {
    setValue((prevValue) => (prevValue + 1) % data.length);
  };

  const handlePrev = () => {
    setValue((prevValue) =>
      prevValue === 0 ? data.length - 1 : prevValue - 1
    );
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full Screen Background Images */}
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1 }}
          animate={{
            opacity: index === value ? 1 : 0,
            transition: { duration: 1 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={item.image}
            alt={item.text}
            className="absolute inset-0 object-cover w-full h-full"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-50"></div>
        </motion.div>
      ))}

      {/* Text Overlay */}
      <motion.div
        key={value}
        className="absolute bottom-0 left-0 right-0 p-8 text-center bg-linear-to-t from-black/70 to-transparent"
      >
        <motion.h1
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl xl:text-5xl font-roboto font-bold text-white md:text-5xl"
        >
          {data[value]?.text}
        </motion.h1>
        <motion.p
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl font-raleway text-sm md:text-base mx-auto mb-6 text-gray-100"
        >
          {data[value]?.description}
        </motion.p>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="p-3 text-green-700 border border-gray-500 rounded-full shadow-lg hover:bg-opacity-10 hover:text-white hover:bg-green-50/20"
          >
            <FaAngleLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="p-3 text-green-700 border border-gray-500 rounded-full shadow-lg hover:bg-opacity-10 hover:text-white hover:bg-green-50/20"
          >
            <FaAngleRight />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
