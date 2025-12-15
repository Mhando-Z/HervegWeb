"use client";

import React, { useState, useEffect } from "react";
import image3 from "../../public/hero/03.jpg";
import image4 from "../../public/hero/04.jpg";
import image5 from "../../public/hero/05.jpg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    image: image5,
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
  const [Visible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 5) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleNext = () => {
    setValue((prevValue) => (prevValue + 1) % data.length);
  };

  const handlePrev = () => {
    setValue((prevValue) =>
      prevValue === 0 ? data.length - 1 : prevValue - 1
    );
  };

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden  ${
        Visible ? "mask-b-from-95%" : ""
      }`}
    >
      {/* Full Screen Background Images */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={image3}
          alt="herveg herosection"
          className="absolute inset-0 object-cover w-full h-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-50"></div>
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        key={value}
        className="absolute bottom-0 items-center justify-center flex flex-col left-0 right-0 p-8 text-center bg-linear-to-t from-black/70 to-transparent"
      >
        <motion.h1
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl xl:max-w-5xl text-center xl:text-5xl  font-bold text-white md:text-5xl"
        >
          Empowering Tanzanian Farmers Through Sustainable Solutions
        </motion.h1>
        <motion.p
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl font-raleway text-sm md:text-base mx-auto mb-6 text-gray-100"
        >
          HERVeg.05 is a rapidly growing agricultural initiative founded in
          2023, working to fight malnutrition and uplift farmers—especially
          women—through high‑quality seeds, training, and scalable
          community‑based models like VSLA groups.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default HeroSection;
