"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsCalendarEvent } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
// image imports
import one from "../../../public/images/01.jpg";
import two from "../../../public/images/02.jpeg";
import three from "../../../public/images/03.jpeg";
import four from "../../../public/images/04.jpg";
import five from "../../../public/images/05.jpg";
import six from "../../../public/images/06.jpg";
import seven from "../../../public/images/07.jpg";
import eight from "../../../public/images/08.jpg";
import nine from "../../../public/images/09.jpeg";

const data = [
  {
    topic: "Mathematics",
    description:
      "Mathematics is the abstract science of number, quantity, and space, either as abstract concepts (pure mathematics), or as applied to other disciplines such as physics and engineering (applied mathematics).",
    image_path: one,
    ratings: 4.8,
  },
  {
    topic: "Cooking",
    description:
      "Cooking is the process of preparing food by combining, mixing, and heating ingredients. It is an art and science that combines flavor, nutrition, and technique to create delicious meals.",
    image_path: two,
    ratings: 4.5,
  },
  {
    topic: "Programming",
    description:
      "Programming is the process of creating software, applications, and websites by writing code in programming languages like Python, JavaScript, and C++. It is a key skill in modern technology development.",
    image_path: five,
    ratings: 4.9,
  },
  {
    topic: "Technology",
    description:
      "Technology refers to the tools, machines, techniques, and systems used to solve problems and enhance human life. It encompasses areas such as electronics, computing, and biotechnology.",
    image_path: three,
    ratings: 4.7,
  },
  {
    topic: "Health",
    description:
      "Health is the state of physical, mental, and social well-being in which an individual is free from disease, injury, and physical or mental discomfort. It includes practices for maintaining and improving overall well-being.",
    image_path: four,
    ratings: 4.6,
  },
  {
    topic: "Sports",
    description:
      "Sports are physical activities that involve skill, competition, and physical exertion. They include a variety of games and activities that promote physical fitness and teamwork.",
    image_path: five,
    ratings: 4.4,
  },
  {
    topic: "Business",
    description:
      "Business is the activity of making, buying, or selling goods or services in exchange for money. It encompasses a range of industries and plays a significant role in the economy.",
    image_path: six,
    ratings: 4.2,
  },
  {
    topic: "Education",
    description:
      "Education is the process of acquiring knowledge, skills, values, and attitudes through teaching, training, or research. It plays a vital role in personal and societal development.",
    image_path: seven,
    ratings: 4.8,
  },
  {
    topic: "Music",
    description:
      "Music is an art form that involves organized sound, often accompanied by rhythm and melody. It is a form of expression and entertainment that can evoke emotions and connect people.",
    image_path: eight,
    ratings: 4.6,
  },
  {
    topic: "Travel",
    description:
      "Travel involves moving from one place to another, often for leisure or business purposes. It allows people to explore new cultures, experience different environments, and learn from various places around the world.",
    image_path: nine,
    ratings: 4.7,
  },
];

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ToDay = data;

  const slideWidth = 250; // Adjust this to the width of each slide

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % ToDay.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [ToDay.length]);

  return (
    <div className="container md:mt-20 relative flex py-6 mx-auto overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: -activeIndex * slideWidth }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {ToDay?.map((day, index) => (
          <motion.div
            key={index + day?.topic}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative rounded-xl p-8 h-[400px] flex flex-col justify-between overflow-hidden ${
              index === activeIndex
                ? "min-w-[250px] md:min-w-[600px]"
                : "min-w-[250px]"
            } transition-all duration-300`}
          >
            <Link href={`/TrendingDetails/${day?.id}`}>
              {/* poster image overlay  */}
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <Image
                  src={
                    index === activeIndex ? day?.image_path : day?.image_path
                  }
                  alt={day?.topic}
                  width={100}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent via-50% to-transparent" />
              </div>

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                {/* Series Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`md:text-2xl text-xl font-bold text-white ${
                    index === activeIndex ? "" : ""
                  }`}
                >
                  {day?.topic}
                  <span
                    className={`flex items-center gap-2 ${
                      index === activeIndex ? "" : "hidden"
                    }`}
                  >
                    {/* <span className="text-sm font-medium md:text-xl">
                      {day?.ratings?.toFixed(1)}
                    </span> */}
                    {/* <Rating value={day?.ratings} /> */}
                    {/* <BsCalendarEvent className="text-md" /> */}
                    {/* <span>{day?.first_air_date?.split("-")[0]}</span> */}
                  </span>
                </motion.h2>

                {/* Series Overview */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`${
                    index === activeIndex
                      ? "text-white/80 line-clamp-3 text-xs md:text-sm"
                      : "hidden"
                  }`}
                >
                  {day?.description}
                </motion.p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SuccessStories;
