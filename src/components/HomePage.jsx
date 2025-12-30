"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Users,
  DollarSign,
  Sprout,
  Truck,
  BookOpen,
  ArrowRight,
  CloudDrizzle,
} from "lucide-react";
import farmers from "../../public/hero/sasso.jpg";
import Image from "next/image";
import youth from "../../public/hero/youth.jpg";
import donate from "../../public/hero/donate1.jpg";
import Donorbox from "@/app/donate/Donorbox";
import PromoStats from "./PromoStats";
import Link from "next/link";
import image1 from "../../public/images/11.png";
import image2 from "../../public/images/22.jpg";
import image3 from "../../public/profiles/Mgeta.jpg";
import image4 from "../../public/images/06.jpg";

const HomePage = () => {
  const [Visible, setIsVisible] = useState(false);
  const [showDonor, setShowDonor] = useState(false);

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

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Who We Serve",
      description:
        "Women and youth farmers facing hunger, exclusion, and climate stress.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "How Farmers Save",
      description:
        "Farmers save small amounts on their phones via USSD   a debt-free system that builds confidence and control.",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "What Farmers Receive",
      description:
        "Biofortified maize, nutrient-rich vegetable seeds, and vaccinated chickens that immediately improve diets and support income growth.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "How We Reach Farmers",
      description:
        "We deliver inputs and training directly to villages at the start of each season, reducing cost and travel time.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "How Farmers Learn",
      description:
        "Hands-on learning builds real skills   from composting to poultry care and climate-smart farming.",
    },
    {
      icon: <CloudDrizzle className="w-8 h-8" />,
      title: "How We Build Climate Resilience: ",
      description:
        "Organic inputs and diversified production reduce climate risk and dependence on costly chemicals.",
    },
  ];

  const stories = [
    {
      image_url: image1,
      title: "How Women Farmers Are Saving Their Way to Food Security",
      summary:
        "When people think about financial inclusion in rural Africa, the image that often comes to mind is one of sleek fintech apps, digital wallets, or readily available micro-loans. However, for millions of smallholder farmers, particularly women and youth, the real challenges are fundamental",
      link: "/articles/article1/",
    },
    {
      image_url: image2,
      title:
        "Before the Rain: How Tanzania’s Farmers Could Win or Lose the Season After the Elections",
      summary:
        "In a few weeks, Tanzanians will cast their votes. By the time the ballots are counted and the speeches fade, the skies will begin to shift, the smell of rain hanging in the air. For millions of smallholder farmers, this is not just another season. It’s the moment that decides whether the next year will bring food to the table or another stretch of hunger.",
      link: "/articles/article2/",
    },
    {
      image_url: image3,
      title:
        "Feathers of Resilience: How SASSO Poultry Is Feeding Hope in Tanzania’s Highlands",
      summary:
        "The morning air in Njombe carries a strange mix these days, the damp scent of soil before rain, and the soft chorus of chickens. Not the scrawny local kind scratching for scraps, but sturdy SASSO birds   brown, full-bodied, confident. For women like Anna Mkalawa, a 42-year-old farmer in Ihalula village, those birds are more than livestock. They’re insurance against hunger, and a small rebellion against poverty.",
      link: "/articles/article3/",
    },
    {
      image_url: image4,
      title:
        "Six Steps to Change Farming Forever: How USSD Puts Power in Farmers’ Hands",
      summary:
        "Farming is the main source of income for millions of smallholder farmers in Tanzania and across Sub-Saharan Africa. Yet, many still struggle to make a decent living. For instance, in Rwanda, agriculture makes up over 30% of the country's GDP, but most farmers work on less than one hectare of land. They face challenges such as limited access to quality seeds, credit, farming advice, and reliable markets. Many depend on costly middlemen to sell their crops.",
      link: "/articles/article4/",
    },
  ];

  const openDonatePopup = () => {
    setShowDonor(!showDonor);
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section
        className={`relative h-screen flex justify-center items-center overflow-hidden ${
          Visible ? "mask-b-from-95%" : ""
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r md:via-20% from-black/60 to-transparent via-black/60 md:to-black/40 z-10" />
          <Image
            src={farmers}
            alt="Woman farmer in field"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full text-center md:text-left px-6 md:px-0 container mx-auto xl:mt-72  text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl max-w-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Ending Malnutrition and Poverty for Tanzania's Farmers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl mb-10 max-w-3xl  font-light leading-relaxed"
          >
            We help women and youth farmers grow more nutritious food, earn
            steady income, and restore their soil using simple tools that work
            in real villages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/aboutus/whoweare/">
              <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-8 py-3 md:py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn About Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* How We Drive Change */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How We Drive Change
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Simple tools, powerful results
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our solutions tackle malnutrition, poverty, and climate stress.
              Over 70% of our farmers are women, and each household grows up to
              4× more vegetables within one season.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          {/* hidden button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center hidden"
          >
            <a href="/model">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                See How It Works
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Youth Empowered Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={youth}
                  alt="Rehema on her farm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Youth Empowered Through Farming
              </h2>

              <div className="bg-emerald-50 p-8 rounded-2xl mb-6">
                <div className="text-emerald-600 mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed italic mb-4">
                  I never thought I could farm without borrowing money. With
                  HERVeg.05, I saved little by little on my phone, got my
                  chickens and seeds delivered to my village, and learned by
                  doing. Now I feed my siblings and sell the extra vegetables.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Rehema now feeds her siblings and sells 50% of her extra
                  harvest locally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Give Today Section */}
      <section className="py-20 bg-linear-to-br from-yellow-500 to-green-600 mask-t-from-95% mask-b-from-95% text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Give Today, Grow Tomorrow
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                HERVeg.05 farmers grow 3× more vegetables, raise healthy
                poultry, and increase incomes by 60% all without debt.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openDonatePopup}
                  className="bg-white cursor-pointer text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {showDonor ? "close donorbox" : " Donate Today"}
                </button>
                <Link href="/donate/">
                  <button className="bg-transparent cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>

            {showDonor ? (
              <motion.div className="flex flex-col items-end justify-end ">
                <Donorbox />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={donate}
                  alt="Woman harvesting vegetables"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Promo section */}
      {/* <PromoStats /> */}

      {/* Features & Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Features & Stories
            </h2>
            <p className="text-xl text-gray-600">
              Discover the impact we're making together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {stories?.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story?.image_url}
                    alt={story.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                    {story.summary}
                  </p>
                  <Link href={story.link}>
                    <button className="text-emerald-600 cursor-pointer font-semibold hover:text-emerald-700 inline-flex items-center gap-2 group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
