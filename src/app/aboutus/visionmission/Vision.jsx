"use client";

import { motion, useScroll } from "framer-motion";
import {
  Sprout,
  ShoppingBasket,
  Handshake,
  Home,
  Heart,
  Leaf,
  Users,
  TrendingUp,
  Shield,
  Target,
  MessageCircle,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";
import heroImage from "../../../../public/images/09.jpeg";
import Link from "next/link";

const VisionValues = () => {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const journeyStages = [
    {
      stage: "Hunger",
      quote: "There were days our children went to bed hungry.",
      description: "Many families face food insecurity daily",
      icon: "🍽️",
      color: "from-emerald-500 to-yellow-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      stage: "Access",
      quote:
        "Joining the savings group was my first step to getting seeds and chickens.",
      description: "First steps toward economic empowerment",
      icon: <Sprout className="w-10 h-10" />,
      color: "from-orange-500 to-green-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      stage: "Self-Sufficiency",
      quote: "Now, I grow enough to feed my family and sell at the market.",
      description: "Building sustainable livelihoods",
      icon: <ShoppingBasket className="w-10 h-10" />,
      color: "from-green-500 to-yellow-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      stage: "Dignity",
      quote:
        "Farming used to feel like a struggle now people come to me for advice.",
      description: "Recognition and community leadership",
      icon: <Handshake className="w-10 h-10" />,
      color: "from-lime-500 to-green-600",
      bgColor: "bg-lime-50",
      borderColor: "border-lime-200",
    },
    {
      stage: "Prosperity",
      quote:
        "With my income, I built a better home and sent my daughter to school.",
      description: "Generational transformation",
      icon: <Home className="w-10 h-10" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  const visionPoints = [
    {
      number: "01",
      title: "Farming is a source of dignity",
      description:
        "Farmers earn steady incomes, take pride in their work, and build better lives. Women and youth run successful farm businesses, blending traditional wisdom with modern tools. Communities celebrate their role, reducing poverty and hunger.",
      icon: <Heart className="w-7 h-7" />,
      color: "from-green-500 to-emerald-600",
      accentColor: "bg-green-100",
    },
    {
      number: "02",
      title: "Food systems heal people and the planet",
      description:
        "Farmers grow enough nutritious food to feed their communities while restoring the land. Regenerative farming improves soil, saves water, boosts harvests, and reduces malnutrition. Local solutions help farmers adapt to climate shocks without depending on outside aid.",
      icon: <Leaf className="w-7 h-7" />,
      color: "from-green-500 to-emerald-600",
      accentColor: "bg-green-100",
    },
    {
      number: "03",
      title: "Every farmer has a fair chance",
      description:
        "Women and youth lead savings groups and co-ops. Training is simple, local, and peer-to-peer. Even the most remote farmers access the knowledge, tools, and finance they need free from bias or barriers.",
      icon: <Users className="w-7 h-7" />,
      color: "from-green-500 to-emerald-600",
      accentColor: "bg-green-100",
    },
    {
      number: "04",
      title: "Change starts small but grows strong",
      description:
        "Savings groups evolve into businesses. Farmers teach farmers. Local supply chains create jobs and reduce dependency. Profits are reinvested in the land, youth, and the future reducing poverty one community at a time.",
      icon: <TrendingUp className="w-7 h-7" />,
      color: "from-green-500 to-emerald-600",
      accentColor: "bg-green-100",
    },
  ];

  const values = [
    {
      title: "People First",
      description:
        "We treat our staff, partners, and farmers with respect and care. Everyone's voice matters and contributes to the mission.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Integrity Always",
      description:
        "We are honest, transparent, and accountable in everything we do. We do what's right, even when no one is watching.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Farmers at the Center",
      description:
        "Our programs start with the needs and strengths of women and youth farmers. Their leadership drives lasting change.",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Locally Led, Community Grown",
      description:
        "We trust local people to lead local solutions. Our work grows from the ground up.",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Bold but Practical",
      description:
        "We dream big, but act in ways that are realistic and rooted in local reality. We stay lean, focused, and mission-driven.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Listen and Learn",
      description:
        "We make decisions based on what farmers tell us and what the data shows. We adapt quickly and improve constantly.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative mask-b-from-85%  overflow-hidden bg-linear-to-br from-emerald-50 via-green-50 to-lime-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-pattern  opacity-20">
          <Image
            src={heroImage}
            alt="heroimage"
            className="w-full h-full object-cover mask-b-from-85% "
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="justify-center flex flex-col min-h-screen mx-auto relative z-10"
        >
          <div className="flex flex-col px-4 container mx-auto">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex md:w-56 items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                Our Vision & Values
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building a Better{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600">
                Future
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl">
              Across Tanzania, smallholder farmers form the backbone of our food
              systems. Yet poverty and malnutrition leave too many families
              struggling, and farmers remain underserved and overlooked.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <div className="  rounded-3xl p-10 md:p-16  text-center border border-gray-100">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We believe in a different future. One where farming is a pathway
              to{" "}
              <span className="font-semibold text-emerald-700">
                prosperity, not poverty
              </span>
              . Where the solutions are local, the leadership is homegrown, and
              the power lies in the hands of small scale farmers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Journey Timeline - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Journey to Prosperity
            </h3>
            <p className="text-xl text-gray-600">
              Transforming lives through sustainable agriculture
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Animated Progress Line */}
            <div className="absolute top-24 left-0 right-0 h-2 bg-gray-200 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="h-full bg-linear-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
              />
            </div>

            <div className="grid grid-cols-5 gap-4 relative z-10 pt-8">
              {journeyStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-32 h-32 rounded-2xl bg-linear-to-br ${stage.color} flex items-center justify-center text-white shadow-2xl mb-4 cursor-pointer relative`}
                  >
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-gray-700">
                        {index + 1}
                      </span>
                    </div>
                    {typeof stage.icon === "string" ? (
                      <span className="text-4xl">{stage.icon}</span>
                    ) : (
                      stage.icon
                    )}
                  </motion.div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {stage.stage}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3 text-center">
                    {stage.description}
                  </p>
                  <div
                    className={`${stage.bgColor} border ${stage.borderColor} rounded-xl p-4 mt-2`}
                  >
                    <p className="text-sm text-gray-700 italic text-center leading-relaxed">
                      "{stage.quote}"
                    </p>
                  </div>

                  {index < journeyStages.length - 1 && (
                    <ArrowRight className="absolute -right-8 top-20 text-gray-400 w-6 h-6" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {journeyStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`bg-linear-to-br ${stage.color} rounded-2xl p-6 shadow-xl`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      {typeof stage.icon === "string" ? (
                        <span className="text-3xl">{stage.icon}</span>
                      ) : (
                        <div className="text-gray-800">{stage.icon}</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white/60 font-bold text-sm">
                          STAGE {index + 1}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-white">
                        {stage.stage}
                      </h4>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-3">
                    {stage.description}
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white italic">"{stage.quote}"</p>
                  </div>
                </div>

                {index < journeyStages.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="text-gray-400 w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Points - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We envision a future where...
            </h3>
            <p className="text-xl text-gray-600">
              Four pillars of transformational change
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`bg-linear-to-br ${point.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {point.icon}
                    </div>
                    <span className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                      {point.number}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {point.title}
                  </h4>

                  <p className="text-gray-700 leading-relaxed">
                    {point.description}
                  </p>

                  <div className="mt-6 hidden items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-800">
                Core Principles
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core values that drive our staff and strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group bg-linear-to-br from-gray-50 to-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div
                  className={`bg-linear-to-br ${value.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  {value.icon}
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Values Matter - Enhanced CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#1a4d3a]  via-[#1a4d3a] to-green-800 mask-t-from-95%"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              Our Foundation
            </span>
          </motion.div>

          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Our Values Matter
          </h3>

          <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
            Our values are more than words they are the foundation of every
            decision we make. They keep us grounded, guide our actions, and
            ensure that our impact is both meaningful and lasting for the
            communities we serve.
          </p>

          <Link href="/career/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center  gap-3 bg-white text-emerald-700 px-8 md:py-3 py-2 rounded-full font-semibold text-lg shadow-2xl cursor-pointer"
            >
              <span>Join Our Mission</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default VisionValues;
