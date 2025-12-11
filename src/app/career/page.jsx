"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Heart,
  Users,
  Target,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  FileText,
  MapPin,
  Video,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";
import Image from "next/image";
import agents from "../../../public/images/05.jpg";

const CareersPage = () => {
  const [activeSection, setActiveSection] = useState("landing");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const values = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "We Start With Farmers",
      description:
        "Everything begins with the people we serve—women, youth, and smallholder farmers. We listen to their needs and build alongside them.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nutrition Is Power",
      description:
        "We see food as more than a meal—it's a tool for growth, health, and resilience. This isn't charity; it's access to better futures.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women and Youth Lead",
      description:
        "We center women and young people because they are already leading in their households, farms, and communities.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact Over Ego",
      description:
        "Titles don't matter—outcomes do. We celebrate wins and learn from failures. No task is too small when it contributes to something big.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Think Big, Stay Grounded",
      description:
        "Our goal is national transformation—but our work happens one farmer, one community, one season at a time.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Integrity in Every Action",
      description:
        "We build trust with honesty and follow-through. The people we serve deserve nothing less.",
    },
  ];

  const teamStories = [
    {
      name: "Oscar Mugulusi",
      role: "Sales Lead",
      quote:
        "I came from a retail background, but working at HERVeg.05 opened my eyes. I’m not just selling inputs—I’m helping a mother feed her family and a youth start their first agribusiness. Every sale is personal.",
      description:
        "Zawadi leads our sales team across multiple districts. She trains field agents, manages inventory, and ensures our products reach even the most remote customers—on time and affordably",
    },
    {
      name: "Patricia Pangani",
      role: "Finance Manager",
      quote:
        "Numbers tell stories. I track every shilling because I know our budgets feed real people, fund local jobs, and support future growth. That responsibility matters to me.",
      description:
        "Bakari keeps our books clean and our spending focused. From managing VSLA transactions to budgeting field logistics, he ensures every coin is used for impact.",
    },
    {
      name: "Mhando Zuberi",
      role: "IT Support",
      quote:
        "I grew up in a rural area, so building simple digital tools for farmers is more than a job—it’s personal. I make sure our systems work, even when networks don’t.",
      description:
        "Mhando helps design and troubleshoot tech solutions that power our mobile layaway system and farmer records. He also supports our team with on-the-ground tech training",
    },
    {
      name: "Hilda Sanga",
      role: "Call Center Officer",
      quote:
        "My job is to ask: Is it working? I visit farms, gather feedback, and track the results that matter—more harvests, better nutrition, and lasting change.",
      description:
        "Hilda monitors everything from yield improvements to household diet diversity. Her data helps us learn fast, improve faster, and scale smarter.",
    },
    {
      name: "Yohana Msemo",
      role: "Impact Officer",
      quote:
        "I’m the first voice many farmers hear. When they call, I listen. Sometimes they just need help. Other times, they just need someone to believe in their potential.",
      description:
        "Yohana answers farmer questions, follows up on deliveries, and makes sure no concern goes unheard. Her work helps build the trust that powers our entire model.",
    },
  ];

  const hiringSteps = [
    {
      number: "01",
      icon: <FileText className="w-6 h-6" />,
      title: "Online Application and Plum Test",
      description:
        "This is where it starts. We ask a few thoughtful questions about who you are, what drives you, and why HERVeg.05 matters to you. We look for people who are not just qualified, but genuinely connected to our mission.",
    },
    {
      number: "02",
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Intro Interview",
      description:
        "If your application catches our eye, we’ll schedule a short call. This is a chance to hear your story, understand your motivation, and answer your early questions. It’s friendly and relaxed—we’re just getting to know each other.",
    },
    {
      number: "03",
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Role Task",
      description:
        "We’ll send you a task or case based on the job you applied for. It’s not a test—it’s a window into how you think, solve problems, and communicate. We want to see how you approach real challenges, with clarity and creativity.",
    },
    {
      number: "04",
      icon: <MapPin className="w-6 h-6" />,
      title: "Field Visit",
      description:
        "Here’s where it gets real. We’ll invite you to spend a day in the field—either shadowing our team or engaging with the people we serve.Why? Because you can’t fully understand HERVeg.05 from behind a desk. This is your chance to see the impact up close and feel what it’s like to work in our setting",
    },
    {
      number: "05",
      icon: <Video className="w-6 h-6" />,
      title: "Final Interview",
      description:
        "This is the last step—a longer conversation with our leadership or program team. We’ll dive deeper into your experience, talk through your field visit, and explore what success in this role would look like. By this point, you’ll have a real feel for HERVeg.05. And we’ll have a clear sense of how you’d grow with us.",
    },
  ];

  const qualities = [
    "You care about rural communities: You don’t see them as statistics. You see them as people—with stories, challenges, and dreams. You want to listen, learn, and help them grow stronger.",
    "You believe in women and youth: We work where young people and women often get left behind. You’re someone who wants to change that—by supporting, training, and leading with them.",
    "You’re driven by purpose, not position: We’re not here for titles. We’re here for impact. If you’re someone who rolls up your sleeves, takes initiative, and stays humble, you’ll thrive here.",
    "You adapt and keep going: Plans change. Roads flood. Meetings move under trees. You don’t freeze—you adjust. You stay calm, find solutions, and keep the work moving",
    "You work well with others: We’re a team. That means sharing credit, asking for help, and giving support. We grow faster when we grow together.",
    "You think and act: You ask smart questions and you don’t wait for permission to solve a problem. You balance doing the work with thinking deeply about how to do it better.",
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative min-h-screen mask-b-from-80%">
        <Image
          src={agents}
          alt="Career Hero"
          className="absolute inset-0 w-full h-full object-cover mask-b-from-70% "
        />
        <motion.section
          className="absolute top-0 left-0 right-0 bottom-0 mask-b-from-95% bg-linear-to-br min-h-screen from-green-700/20 to-green-800 text-white py-24 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto  min-h-screen flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Grow Your Impact With
                <br />A Team Rooted in Purpose
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-12">
                Join HERVeg.05 where your work creates lasting change for
                farmers, communities, and families across Tanzania
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  View Open Positions <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
                >
                  Learn About Our Culture
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Quick Links Navigation */}
      <motion.section
        className="bg-white shadow-md hidden sticky top-0 z-40 border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
            {[
              "Culture & Values",
              "Team Stories",
              "How We Hire",
              "What We Look For",
              "Internships",
            ].map((item) => (
              <button
                key={item}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-green-50"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Culture & Values Section */}
      <section className="py-20 px-6 mask-t-from-95%">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Culture is not something we write on a wall—it's something we live
              every day. Our values are rooted in the communities we serve.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="text-green-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
              "At HERVeg.05, we believe bold ideas belong in rural places. We
              believe food systems can be just, climate-smart, and
              community-owned."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stories Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Team Member Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is united by purpose. Meet some of our team members and
              hear what keeps them motivated.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl shrink-0">
                    {story.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-green-600 font-medium">{story.role}</p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-green-500 pl-4 mb-4 italic text-gray-700">
                  "{story.quote}"
                </blockquote>
                <p className="text-gray-600 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Hire Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Hire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A hiring process that reflects our values: fairness, transparency,
              and real-world connection.
            </p>
          </motion.div>

          <div className="relative">
            {hiringSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.icon}
                  </div>
                  {index < hiringSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-green-200 my-2" />
                  )}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1 hover:shadow-lg transition-shadow">
                  <div className="text-green-600 font-bold text-sm mb-1">
                    STEP {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-20 px-6 bg-linear-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Look For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't look for perfect resumes. We look for people who care
              deeply and are ready to learn, grow, and build something
              meaningful.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 hover:shadow-lg transition-all"
              >
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <p className="text-gray-700">{quality}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-xl text-center"
          >
            <p className="text-lg text-gray-700 mb-6">
              We know every background brings something different. There's space
              for you at HERVeg.05 if your values match ours.
            </p>
            <p className="text-2xl font-bold text-green-700">
              We're looking for people who want their work to matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internship Program Section */}
      <section className="py-20 px-6 bg-gray-900  text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Internship Program
            </h2>
            <p className="text-xl text-gray-300">
              A 3-month opportunity to learn by doing and be part of something
              bigger
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              What You'll Do
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>
                  Support farmer training sessions and community engagement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>Help manage data, reports, and impact tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>Work with IT, impact, or communications teams</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>Contribute to field research or content creation</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              What We Offer
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>Real projects that make a difference</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>Mentorship and support from our team</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>A certificate of completion</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>Flexible working hours</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>A chance to grow with us if opportunities open</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 p-8 rounded-xl mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Who Should Apply
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>Final-year students or recent graduates</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>
                  Interested in agriculture, entrepreneurship, or social change
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>Responsible, proactive, and eager to learn</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>
                  Able to commit at least 3 months (full- or part-time)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                <span>
                  Based in Tanzania (for onsite) or with strong internet (for
                  remote)
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6">
              Send your application to{" "}
              <span className="text-green-400 font-semibold">
                hr@herveg.org
              </span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hidden hover:bg-green-500 text-white px-10 py-4 rounded-lg font-semibold  items-center gap-2 shadow-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Apply for Internship
            </motion.button>
            <p className="text-sm text-gray-400 mt-4">
              Response time: 2-3 weeks • Rolling applications accepted
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6  bg-gray-900  text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to start your journey with us
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Apply for an internship today and be part of a mission that puts
              women, youth, and communities at the center of change. We review
              applications on a rolling basis, and early applications are
              encouraged. Please note, it may take us 2-3 weeks to get back to
              you regarding the status of your application. In the meantime, we
              encourage you to explore our open positions and apply for other
              opportunities.
            </p>
            <p>
              To apply, please send your application to hr@herveg.org. In your
              application, clearly state:
            </p>
            <div className="flex mt-2 flex-col items-center justify-center">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span>What you want to do with us</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span>The duration of your time with us</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span>Why you want to work with us</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span>What you aim to achieve while working with us</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
