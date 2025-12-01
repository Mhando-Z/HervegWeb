"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import landscape from "../../public/landscapes.png";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Neema Mlowola",
    role: "VSLA Member – Njombe",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
    content:
      "Before joining HERVEg.05, my family often struggled with food shortages. The high-quality seeds and practical training helped me triple my harvest this season. I finally feel empowered as a woman farmer.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bernard Mwakalinga",
    role: "Smallholder Farmer – Ruvuma",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    content:
      "HERVEg.05’s VSLA approach makes everything simple and affordable. We learn together, grow together, and now our whole community sees real change in both income and nutrition.",
    rating: 5,
  },
  {
    id: 3,
    name: "Asha Mshana",
    role: "Sunflower Grower – Iringa",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content:
      "What impressed me most about HERVEg.05 is their commitment to quality. The seeds they provided were strong and the constant support from field coordinators made everything easy to follow.",
    rating: 5,
  },
  {
    id: 4,
    name: "Victor Mnyenyelwa",
    role: "Youth Farmer – Songea",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
    content:
      "Their training changed everything for me. I didn’t just receive inputs—I received knowledge. Now I understand soil health, spacing, and how to increase ROI with simple techniques.",
    rating: 5,
  },
  {
    id: 5,
    name: "Janeth Haule",
    role: "Women Group Leader – Njombe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "HERVEg.05 builds trust. They listen to our challenges and walk with us step by step. I’ve seen many organizations come and go, but this one truly cares about farmers.",
    rating: 5,
  },
  {
    id: 6,
    name: "Kasim Mwakaleli",
    role: "Farmer – Kigoma",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content:
      "The model is BIG, SIMPLE, and CHEAP—just like they say. With mobile payment options and easy-to-understand training, even older farmers in our group participate confidently.",
    rating: 5,
  },
  {
    id: 7,
    name: "Zainabu Rashid",
    role: "Vegetable Farmer – Mbeya",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    content:
      "My children’s nutrition has improved because I now grow more diverse and healthy crops. HERVEg.05 is helping us fight malnutrition from the ground up.",
    rating: 5,
  },
  {
    id: 8,
    name: "Thomas Mchome",
    role: "Community VSLA Chairperson – Songwe",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
    content:
      "What makes HERVEg.05 different is that they focus on sustainability. Even if the project ended today, our group now has the skills to continue growing and expanding on our own.",
    rating: 5,
  },
  {
    id: 9,
    name: "Rehema Joseph",
    role: "Maize Farmer – Rukwa",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    content:
      "I joined the program hoping for better seeds. I ended up gaining knowledge, confidence, and a community of farmers who support each other.",
    rating: 5,
  },
  {
    id: 10,
    name: "Moses Charles",
    role: "Field Group Member – Njombe",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop",
    content:
      "HERVEg.05 changed our village. Every farming season now starts with training sessions, new ideas, and a sense of hope for better harvests and better lives.",
    rating: 5,
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  // BACKGROUND ANIMATION CONTROL
  const sectionRef = useRef(null);
  const [bgAnimate, setBgAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBgAnimate(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1); // slide to next
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, current]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ scale: 1 }}
      animate={bgAnimate ? { scale: 1.06 } : { scale: 1 }}
      transition={{ duration: 6, ease: "easeOut" }}
      style={{
        backgroundImage: `url(${landscape.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen w-full  dark:text-gray-100 inset-0 flex items-center justify-center p-4"
    >
      <div className="max-w-4xl  w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-roboto font-bold text-gray-900 mb-3">
            What Farmers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="">
          <div
            className=" rounded-2xl shadow overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                }}
                className="bg-white rounded-2xl shadow overflow-hidden p-12 z-10"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-6"
                >
                  <Quote className="w-16 h-16 text-green-500 opacity-20" />
                </motion.div>
                <div className="flex flex-col items-center text-center">
                  <motion.img
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-24 h-24 rounded-full object-cover mb-6 ring-4 ring-green-100"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-1 mb-6"
                  >
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="w-6 h-6 fill-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-700 text-xl mb-6 italic leading-relaxed"
                  >
                    "{testimonials[current].content}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonials[current].name}
                    </h3>
                    <p className="text-yellow-700 font-medium">
                      {testimonials[current].role}
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mt-4 flex justify-end items-end"
                >
                  <Quote className="w-16 h-16 text-green-500 opacity-20" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-8 bg-white" : "w-2 bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
