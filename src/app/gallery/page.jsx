"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Camera, Grid3x3 } from "lucide-react";

import Image from "next/image";
import one from "../../../public/images/01.jpg";
import two from "../../../public/images/02.jpeg";
import three from "../../../public/images/03.jpeg";
import four from "../../../public/images/04.jpg";
import five from "../../../public/images/05.jpg";
import six from "../../../public/images/06.jpg";
import seven from "../../../public/images/07.jpg";
import eight from "../../../public/images/08.jpg";
import nine from "../../../public/images/09.jpeg";
import ten from "../../../public/images/10.png";
import eleven from "../../../public/images/11.png";
import twelve from "../../../public/images/12.jpg";
import thirteen from "../../../public/images/13.jpg";
import fifteen from "../../../public/images/15..jpg";
import sixteen from "../../../public/images/16.jpg";
import seventeen from "../../../public/images/17.jpg";
import eighteen from "../../../public/images/18.jpg";
import nineteen from "../../../public/images/19.jpg";
import twenty from "../../../public/images/20.jpg";
import twentyone from "../../../public/images/21.jpg";
import twentytwo from "../../../public/images/22.jpg";
import twentythree from "../../../public/hero/04.jpg";
import twentyfour from "../../../public/images/34.jpeg";
import twentyfive from "../../../public/images/23.jpeg";
import twentysix from "../../../public/hero/sasso.jpg";

const data = [
  {
    id: 1,
    image_url: one,
    title: "image one",
  },
  {
    id: 2,
    image_url: twentythree,
    title: "image two",
  },
  {
    id: 3,
    image_url: three,
    title: "image three",
  },
  {
    id: 4,
    image_url: four,
    title: "image four",
  },
  {
    id: 5,
    image_url: five,
    title: "image five",
  },
  {
    id: 6,
    image_url: six,
    title: "image six",
  },
  {
    id: 7,
    image_url: seven,
    title: "image seven",
  },
  {
    id: 8,
    image_url: eight,
    title: "image eight",
  },
  {
    id: 9,
    image_url: nine,
    title: "image nine",
  },
  {
    id: 10,
    image_url: ten,
    title: "image ten",
  },
  {
    id: 11,
    image_url: eleven,
    title: "image eleven",
  },
  {
    id: 12,
    image_url: twelve,
    title: "image twelve",
  },
  {
    id: 13,
    image_url: thirteen,
    title: "image thirteen",
  },
  {
    id: 15,
    image_url: fifteen,
    title: "image fifteen",
  },
  {
    id: 16,
    image_url: sixteen,
    title: "image sixteen",
  },
  {
    id: 18,
    image_url: two,
    title: "image eighteen",
  },
  {
    id: 19,
    image_url: nineteen,
    title: "image nineteen",
  },
  {
    id: 20,
    image_url: twenty,
    title: "image twenty",
  },
  {
    id: 21,
    image_url: twentyone,
    title: "image twentyone",
  },
  {
    id: 22,
    image_url: twentytwo,
    title: "image twentytwo",
  },
  {
    id: 23,
    image_url: eighteen,
    title: "image twentythree",
  },
  {
    id: 24,
    image_url: twentyfour,
    title: "image twentyfour",
  },
  {
    id: 25,
    image_url: twentyfive,
    title: "image twentyfive",
  },
  {
    id: 26,
    image_url: twentysix,
    title: "image twentysix",
  },
];

function Gallery() {
  const [gallery] = useState(data);
  const [mainIndex, setMainIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance main carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % gallery?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [gallery?.length, isAutoPlaying]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, gallery?.length));
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsAutoPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsAutoPlaying(true);
  };

  const navigateLightbox = (direction) => {
    setLightboxIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % gallery?.length;
      } else {
        return (prev - 1 + gallery?.length) % gallery?.length;
      }
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br mt-10 md:mt-0 from-slate-50 via-white to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto md:mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Main Feature Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {/* Main Image */}
            <div className="lg:col-span-2 relative group">
              <motion.div
                key={mainIndex}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={gallery[mainIndex]?.image_url}
                  alt={gallery[mainIndex]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3
                    key={`title-${mainIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold mb-2"
                  >
                    {/* {gallery[mainIndex]?.title} */}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-white/80"
                  >
                    {mainIndex + 1} of {gallery?.length}
                  </motion.p>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                      setMainIndex(
                        (prev) => (prev - 1 + gallery?.length) % gallery?.length
                      )
                    }
                    className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 shadow-lg hover:bg-white transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                      setMainIndex((prev) => (prev + 1) % gallery?.length)
                    }
                    className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 shadow-lg hover:bg-white transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Progress Indicators */}
              <div className="flex gap-2 mt-4 justify-center">
                {gallery?.slice(0, 5).map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setMainIndex(idx)}
                    className="relative h-1 flex-1 bg-slate-200 rounded-full overflow-hidden max-w-16"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-green-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: mainIndex === idx ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Thumbnail Sidebar */}
            <div className="hidden lg:block">
              <div className="h-[600px] overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                {gallery?.slice(0, visibleCount).map((item, idx) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMainIndex(idx)}
                    className={`relative h-[290px] rounded-xl overflow-hidden cursor-pointer transition-all ${
                      mainIndex === idx
                        ? "ring-4 ring-green-500 shadow-xl"
                        : "ring-2 ring-transparent hover:ring-slate-300 shadow-md"
                    }`}
                  >
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity ${
                        mainIndex === idx
                          ? "bg-black/20"
                          : "bg-black/0 hover:bg-black/10"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Grid Gallery */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <Grid3x3 className="w-5 h-5 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">All Photos</h2>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {gallery?.slice(0, visibleCount).map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openLightbox(idx)}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow group"
                >
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0  left-0 right-0 p-3">
                      <p className="text-white text-sm font-medium truncate">
                        {/* {item.title} */}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {visibleCount < gallery?.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-end mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLoadMore}
                  className="px-8 py-3 text-green-800 cursor-pointer font-medium rounded-full  transition-all"
                >
                  Load More Photos
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
              onClick={closeLightbox}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={gallery[lightboxIndex]?.image_url}
                  alt={gallery[lightboxIndex]?.title}
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent rounded-b-2xl">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                    {/* {gallery[lightboxIndex]?.title} */}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {lightboxIndex + 1} of {gallery?.length}
                  </p>
                </div>

                {/* Lightbox Navigation */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                  <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateLightbox("prev");
                    }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors shadow-xl"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateLightbox("next");
                    }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors shadow-xl"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Gallery;
