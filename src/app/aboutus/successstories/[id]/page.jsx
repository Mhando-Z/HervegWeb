"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ChevronRight, Quote, MapPin, Calendar, X } from "lucide-react";

import Image from "next/image";
import amina from "../../../../../public/profiles/Amina.jpg";
import juma from "../../../../../public/profiles/juma-msemo.jpg";
import neema from "../../../../../public/profiles/Neema.jpg";
import mgeta from "../../../../../public/profiles/Mgeta.jpg";
import { useParams } from "next/navigation";

const successStories = [
  /* =======================
     STORY 1: AMINA
  ======================== */
  {
    id: 1,
    title: "From Struggling Farmer to Nutrition Champion   Amina’s Journey",
    image_url: amina,
    sections: [
      {
        type: "profile",
        heading: "Profile:",
        name: "Amina",
        age: 35,
        location: "Mundindi Village, Ludewa District",
        family: "Mother of 3",
        content:
          "Amina, 35 years old, mother of 3, lives in Mundindi Village, Ludewa District.",
      },
      {
        type: "paragraph",
        content:
          "Amina’s 0.25-acre plot barely produced 150 kg of maize annually, just enough to feed her family of six. Her garden was limited to a few staple crops with little variety, leaving her children vulnerable to frequent malnutrition. The local clinic reported that nearly 35% of children in her village suffered undernutrition.",
      },
      {
        type: "quote",
        content:
          "There were days when I didn’t know if my children would have enough to eat. Watching them get sick from lack of good food broke my heart. I felt powerless.",
        author: "Amina",
      },
      {
        type: "paragraph",
        content:
          "Without access to quality seeds or knowledge of sustainable farming, Amina’s yields were low and unreliable. The drought last season reduced her harvest by almost 40%, pushing her family closer to food insecurity.",
      },
      {
        type: "quote",
        content:
          "The drought wiped out much of what little we had. I worried constantly how would I feed my children tomorrow?",
        author: "Amina",
      },
      {
        type: "paragraph",
        content:
          "After enrolling in HERVeg.05’s program, Amina received a bundle of five nutrient-dense vegetable seeds kale, beetroot, Chinese cabbage, amaranth, and spinach perfect for her small garden. She was also given five vaccinated SASO chicks to start poultry farming.",
      },
      {
        type: "paragraph",
        content:
          "Through hands-on training, Amina learned improved crop management and natural pest control techniques. Within six months, her vegetable garden yielded 120 kg of fresh produce, increasing her family’s vitamin intake by 60%. The chickens laid about 90 eggs monthly, adding a steady source of protein and income.",
      },
      {
        type: "quote",
        content:
          "The training opened my eyes. I learned how to care for my plants and chickens better. For the first time, I saw hope growing from my own hands.",
        author: "Amina",
      },
      {
        type: "paragraph",
        content:
          "Today, Amina’s farm output has increased by 45%, providing her family with enough nutritious food daily and surplus to sell at the local market. She earns an additional 75,000 Tanzanian shillings (~$32) monthly, which helps pay for school fees and healthcare.",
      },
    ],
  },

  /* =======================
     STORY 2: JUMA BAKARI
  ======================== */
  {
    id: 2,
    title: "Juma’s Breakthrough   From Debt and Despair to Stability and Pride",
    image_url: juma,
    sections: [
      {
        type: "profile",
        heading: "Profile:",
        name: "Juma Bakari",
        age: 45,
        location: "Nyamagana Village, Mwanza Zone",
        family: "Father of 7",
        content:
          "Juma Bakari, 45 years old, father of 7 children, Nyamagana Village, Mwanza Zone.",
      },
      {
        type: "paragraph",
        content:
          "Juma’s farming life was a cycle of struggle. His single maize crop on degraded land often failed due to poor soil and erratic weather. Year after year, he borrowed money to buy seeds and fertilizer, but the returns were barely enough to feed his family of nine. Hunger was a constant companion, and the weight of unpaid debts crushed his spirit.",
      },
      {
        type: "quote",
        content:
          "I felt trapped   every season was a gamble. I kept borrowing, but the harvest never came through. My children went hungry, and I had no answers.",
        author: "Juma",
      },
      {
        type: "paragraph",
        content:
          "Lacking alternative income sources or knowledge about sustainable agriculture, Juma’s options were limited. Without diversification, his farm was vulnerable to climate shocks, and traditional methods no longer worked.",
      },
      {
        type: "quote",
        content:
          "I didn’t know there was another way. Farming was all I knew, but it was failing me.",
        author: "Juma",
      },
      {
        type: "paragraph",
        content:
          "When Juma joined HERVeg.05, he received the “MsetoKilimo” package: diverse vegetable seeds and vaccinated SASO chickens. He learned organic farming practices, pest management, and how to care for poultry effectively.",
      },
      {
        type: "paragraph",
        content:
          "Within months, Juma’s farm began to change. Vegetables flourished where maize had struggled, and his new poultry business started to generate steady income. This diversification strengthened his food security and financial stability.",
      },
      {
        type: "quote",
        content:
          "Learning how to grow vegetables and raise chickens changed my life. I could feed my family better and pay off my debts slowly but surely.",
        author: "Juma",
      },
      {
        type: "paragraph",
        content:
          "Today, Juma enjoys a flourishing garden and a thriving poultry business. His children are healthier, attend school regularly, and the family is free from debt for the first time in years. Juma’s success has made him a pillar of his community   a symbol of hope for other farmers caught in similar struggles.",
      },
      {
        type: "quote",
        content:
          "I’m proud to say I’m no longer just surviving   I’m building a future. Now, other farmers come to me for advice, and that fills me with pride.",
        author: "Juma",
      },
    ],
  },

  /* =======================
     STORY 3: NEEMA
  ======================== */
  {
    id: 3,
    title: "Empowering Women and Changing Lives   Neema’s Transformation",
    image_url: neema,
    sections: [
      {
        type: "profile",
        heading: "Profile:",
        name: "Neema",
        age: 30,
        location: "Kisaki Village, Iringa Region",
        family: "Mother of 5",
        content:
          "Neema, 30 years old, mother of 5 children, Kisaki Village, Iringa Region.",
      },
      {
        type: "paragraph",
        content:
          "Neema’s household income was barely enough to cover basic needs about 50,000 Tanzanian shillings (~$21) per month from sporadic farming. Her small 0.3-acre garden produced less than 100 kg of mixed crops annually, insufficient to feed her family of five. Her youngest daughter suffered repeated illnesses, often due to a lack of dietary diversity.",
      },
      {
        type: "quote",
        content:
          "Some days, we had only ugali [maize porridge] to eat. My youngest kept falling sick, and I felt helpless watching her grow weak.",
        author: "Neema",
      },
      {
        type: "paragraph",
        content:
          "Neema faced many hurdles. Without land ownership rights or access to quality agricultural inputs, improving productivity seemed impossible. Seasonal droughts reduced her yields by over 30%, and cultural norms often limited her ability to access farming support or credit.",
      },
      {
        type: "quote",
        content:
          "I knew I wanted to do better for my children, but I had no resources, and sometimes the community didn’t believe women should lead in farming.",
        author: "Neema",
      },
      {
        type: "paragraph",
        content:
          "Everything shifted when Neema joined HERVeg.05’s MsetoKilimo program. She received 7 varieties of vegetable seeds and 7 vaccinated SASO chickens, alongside intensive training on organic farming methods and nutrition. Joining a women’s cooperative gave her both knowledge and support.",
      },
      {
        type: "quote",
        content:
          "The training opened my eyes to new ways of farming. The chickens and seeds gave me a fresh start. For the first time, I felt hopeful.",
        author: "Neema",
      },
      {
        type: "paragraph",
        content:
          "Within eight months, Neema’s garden flourished, producing 150 kg of vegetables and 110 eggs every month. Her income from selling surplus produce rose to 120,000 Tanzanian shillings (~$50) monthly. Most importantly, her daughter’s health improved, with clinic visits for nutrition-related illnesses dropping by 40%.",
      },
      {
        type: "quote",
        content:
          "My daughter is stronger now. I can see the difference food makes. The eggs and vegetables fill our plates and our lives with new energy.",
        author: "Neema",
      },
      {
        type: "paragraph",
        content:
          "Today, Neema’s income has more than doubled, and her family enjoys a balanced, nutritious diet daily. Empowered by her success, she has helped organize over 30 women in her village into farming groups, increasing food security and women’s empowerment in her community.",
      },
      {
        type: "quote",
        content:
          "I am no longer just farming for survival I am farming to thrive. Together, we are changing lives, one garden at a time.",
        author: "Neema",
      },
    ],
  },
  /* =======================
     STORY 4: JUMA RESILIENT FARM
  ======================== */
  {
    id: 4,
    title:
      "Overcoming Climate Challenges with Innovation   Juma Msemo's Resilient Farm",
    image_url: mgeta,
    sections: [
      {
        type: "profile",
        heading: "Profile:",
        name: "Juma Bakari",
        age: 45,
        location: "Nyamagana Village, Mwanza Zone",
        family: "Father of 7",
      },
      {
        type: "paragraph",
        content:
          "Juma’s 1-acre maize farm yielded only 500 kg last season, a 50% drop from previous years due to drought. His family of seven struggled with food insecurity, often skipping meals during the dry season. Debt from failed crops reached 200,000 Tanzanian shillings (~$85).",
      },
      {
        type: "paragraph",
        content:
          "Erratic weather patterns made traditional farming risky. Juma lacked knowledge of climate-smart practices to adapt and improve resilience.",
      },
      {
        type: "paragraph",
        content:
          "After joining HERVeg.05’s training, Juma diversified his farm with drought-tolerant vegetables from the ‘Her Vegetable’ bundle, including amaranth and cowpeas, plus integrated water harvesting methods.",
      },
      {
        type: "paragraph",
        content:
          "Within one year, Juma’s vegetable production reached 300 kg, supplementing his reduced maize yields. The diversified farm provided 60% more stable food supply year-round. Juma also sold surplus produce and earned an extra 150,000 Tanzanian shillings (~$64) per season, allowing him to pay down 75% of his debts.",
      },
      {
        type: "paragraph",
        content:
          "Juma’s farm is now a model of climate resilience. His family enjoys more consistent meals, and his income stabilized at 350,000 Tanzanian shillings (~$150) annually from diversified crops. Juma is sharing his experience with 20 local farmers to encourage climate-smart practices.",
      },
    ],
  },
];

export default function SuccessStories() {
  const { id } = useParams();
  const currentd = Number(id);
  const [currentId, setCurrentId] = useState(currentd);

  const story = successStories.find((s) => s.id === currentId);

  const profileSection = story?.sections.find((s) => s.type === "profile");

  const remainingStories = successStories
    .filter((s) => s.id !== currentId)
    .map((story, index) => ({ story, index }));

  const handleCurrentStory = (index) => {
    setCurrentId(index);
    scrollToTop();
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-linear-to-br md:mt-20   from-emerald-50 via-white to-teal-50 py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col  gap-5">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white rounded-3xl shadow-sm overflow-hidden"
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image Section - Left Side */}
              <div className="lg:col-span-2 relative">
                <div className="sticky top-0 h-full min-h-[400px] lg:min-h-[700px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={story.id + "-image"}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={story.image_url}
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                      {/* linear Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Profile Card Overlay */}
                      {profileSection && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 to-transparent"
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-emerald-100">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                                <Users className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="font-bold text-gray-800 text-lg">
                                {profileSection.name}
                              </h4>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="w-4 h-4 text-emerald-600" />
                                <span>
                                  {profileSection.age} years old •{" "}
                                  {profileSection.family}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4 text-emerald-600" />
                                <span>{profileSection.location}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Content Section - Right Side */}
              <div className="lg:col-span-3 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 md:p-12 space-y-6 max-h-[700px] overflow-y-auto custom-scrollbar"
                  >
                    {/* Story Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                    >
                      {story.title}
                    </motion.h3>

                    {/* Story Content */}
                    <div className="space-y-6">
                      {story.sections.map((section, index) => {
                        if (section.type === "paragraph") {
                          return (
                            <motion.p
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="text-gray-700 leading-relaxed text-justify text-base md:text-lg"
                            >
                              {section.content}
                            </motion.p>
                          );
                        } else if (section.type === "quote") {
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="relative my-8"
                            >
                              <div className="absolute -left-2 -top-2 z-10">
                                <Quote className="w-10 h-10 text-emerald-200" />
                              </div>
                              <blockquote className="relative bg-linear-to-br from-emerald-50 to-teal-50  border-emerald-500 pl-8 pr-6 py-6 rounded-r-2xl shadow-sm">
                                <p className="text-gray-800 italic text-lg leading-relaxed mb-3">
                                  "{section.content}"
                                </p>
                                <footer className="text-emerald-700 font-semibold text-sm">
                                  {section.author}
                                </footer>
                              </blockquote>
                              <div className="absolute -right-2 -bottom-2 z-10">
                                <Quote className="w-10 h-10 text-emerald-200" />
                              </div>
                            </motion.div>
                          );
                        } else if (section.type === "profile") {
                          // Profile is shown in image overlay, skip here
                          return null;
                        }
                        return null;
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          {/* other stories header section  */}
          <div className="mt-5 bg-green-600 w-48 text-white">
            <h1 className="font-bold px-3 py-2 text-xl">Other Stories</h1>
          </div>

          {/* Next Stories Preview Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-[700px] overflow-y-scroll"
          >
            <AnimatePresence>
              {remainingStories.map(({ story, index }) => {
                const profile = story.sections.find(
                  (s) => s.type === "profile"
                );
                const paragraph = story.sections.find(
                  (s) => s.type === "paragraph"
                );

                return (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    // onClick={() => setCurrentStory(index)}
                    onClick={() => handleCurrentStory(story?.id)}
                    className="cursor-pointer group"
                  >
                    <div className="bg-white rounded-2xl w-full  hover:shadow-xl transition-all duration-300 overflow-hidden mx-auto border border-gray-100">
                      <div className=" gap-0">
                        {/* Image */}
                        <div className="relative h-48 md:h-full overflow-hidden">
                          <Image
                            src={story.image_url}
                            alt={story.title}
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-r  from-transparent to-black/10 group-hover:from-black/30 group-hover:to-black/30 transition-all duration-300"></div>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-700">
                            Next Story
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2 p-2 flex flex-col justify-center">
                          <h4 className="text-sm md:text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                            {story.title}
                          </h4>

                          <p className="text-gray-600 text-xs md:text-base line-clamp-2 mb-4">
                            {paragraph?.content.substring(0, 150)}...
                          </p>

                          {profile && (
                            <div className="flex flex-col xl:flex-row xl:items-center gap-4 text-sm text-gray-500">
                              <div className="flex text-xs items-center gap-1">
                                <Users className="w-4 h-4 text-emerald-600" />
                                <span>{profile.name}</span>
                              </div>
                              <div className="xl:flex  hidden  items-center gap-1">
                                <MapPin className="w-4 h-4 text-emerald-600" />
                                <span>{profile.location.split(",")[0]}</span>
                              </div>
                            </div>
                          )}

                          <div className="mt-4 flex items-center text-xs gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all duration-300">
                            <span>Read story</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
