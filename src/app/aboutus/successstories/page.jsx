"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import amina from "../../../../public/profiles/Amina.jpg";
import juma from "../../../../public/profiles/juma-msemo.jpg";
import neema from "../../../../public/profiles/Neema.jpg";
import mgeta from "../../../../public/profiles/Mgeta.jpg";
import Link from "next/link";
import {
  Users,
  ChevronRight,
  MapPin,
  Sparkles,
  TrendingUp,
  Heart,
} from "lucide-react";

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
        location: "Kisilo Village, Njombe Town Zone",
        family: "Father of 7",
        content:
          "Juma Bakari, 45 years old, father of 7 children, Kisilio Village, Mwanza Zone.",
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
        location: "Kanani Village, Wanging'ombe Region",
        family: "Mother of 5",
        content:
          "Neema, 30 years old, mother of 5 children, Kanani Village, Wanging'ombe Region.",
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
        location: "Magoda Village, Njombe Town Zone",
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

// Color configurations for different story categories
const colorConfigs = {
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gradient: "from-emerald-600/20 via-emerald-500/10 to-transparent",
    hover: "group-hover:text-emerald-600",
    icon: "text-emerald-600",
    border: "border-emerald-100",
    impactBg: "bg-emerald-50",
    impactText: "text-emerald-700",
  },
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    gradient: "from-blue-600/20 via-blue-500/10 to-transparent",
    hover: "group-hover:text-blue-600",
    icon: "text-blue-600",
    border: "border-blue-100",
    impactBg: "bg-blue-50",
    impactText: "text-blue-700",
  },
  purple: {
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    gradient: "from-purple-600/20 via-purple-500/10 to-transparent",
    hover: "group-hover:text-purple-600",
    icon: "text-purple-600",
    border: "border-purple-100",
    impactBg: "bg-purple-50",
    impactText: "text-purple-700",
  },
  teal: {
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    gradient: "from-teal-600/20 via-teal-500/10 to-transparent",
    hover: "group-hover:text-teal-600",
    icon: "text-teal-600",
    border: "border-teal-100",
    impactBg: "bg-teal-50",
    impactText: "text-teal-700",
  },
};

function SuccessStoriesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-linear-to-br md:mt-20  from-slate-50 via-white to-slate-50 py-8 px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container  mx-auto mb-12"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              Real Stories, Real Impact
            </span>
          </motion.div>

          <h1 className="text-4xl gap-2 md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Success<span className="text-green-700 ml-2">Stories</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how HERVeg.05 is transforming lives across Tanzania through
            sustainable farming and community empowerment
          </p>
        </div>
      </motion.div>

      {/* Stories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {successStories.map((story, index) => {
              const profile = story.sections.find((s) => s.type === "profile");
              const paragraph = story.sections.find(
                (s) => s.type === "paragraph"
              );
              const colors = colorConfigs[story.color] || colorConfigs.emerald;

              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onHoverStart={() => setHoveredCard(story.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="cursor-pointer group"
                >
                  <Link
                    href={`/aboutus/successstories/${encodeURIComponent(
                      story?.id
                    )}`}
                    className="block h-full"
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`bg-white rounded-2xl h-full hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${colors.border} relative`}
                    >
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={story.image_url}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-60`}
                        />

                        {/* Category Badge */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${colors.badge} border backdrop-blur-sm shadow-lg`}
                        >
                          {story.category}
                        </motion.div>

                        {/* Impact Badge */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold ${colors.impactBg} ${colors.impactText} backdrop-blur-sm shadow-lg flex items-center gap-1.5`}
                        >
                          <TrendingUp className="w-3.5 h-3.5" />
                          {story.impact}
                        </motion.div>

                        {/* Animated Overlay on Hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: hoveredCard === story.id ? 0.1 : 0,
                          }}
                          className="absolute inset-0 bg-linear-to-br from-white via-transparent to-white"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-5 flex flex-col space-y-4">
                        {/* Title */}
                        <h3
                          className={`text-base md:text-lg font-bold text-gray-900 leading-snug transition-colors duration-300 ${colors.hover} line-clamp-2 min-h-[3.5rem]`}
                        >
                          {story.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                          {paragraph?.content}
                        </p>

                        {/* Profile Info */}
                        {profile && (
                          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-1.5">
                              <Users className={`w-4 h-4 ${colors.icon}`} />
                              <span className="text-xs font-semibold text-gray-700">
                                {profile.name}
                              </span>
                            </div>
                            <div className="hidden sm:flex items-center gap-1.5">
                              <MapPin className={`w-4 h-4 ${colors.icon}`} />
                              <span className="text-xs text-gray-600">
                                {profile.location?.split(",")[0]}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Read More CTA */}
                        <motion.div
                          className={`flex items-center gap-2 text-sm font-bold pt-2 ${colors.icon} group-hover:gap-3 transition-all duration-300`}
                        >
                          <Heart className="w-4 h-4" />
                          <span>Read full story</span>
                          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5">
                        <div
                          className={`w-full h-full rounded-tl-full bg-linear-to-br ${colors.gradient}`}
                        />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default SuccessStoriesPage;
