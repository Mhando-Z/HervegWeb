"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  TrendingUp,
  Users,
  Droplet,
  ChevronLeft,
  ChevronRight,
  Award,
  Heart,
  DollarSign,
  BookOpen,
  X,
} from "lucide-react";
import Image from "next/image";
import image1 from "../../../../public/aboutus/01.jpg";
import { image } from "framer-motion/client";

const successStories = [
  {
    id: 1,
    name: "Amina",
    age: 35,
    title: "From Struggling Farmer to Nutrition Champion",
    location: "Mundindi Village, Ludewa District",
    family: "Mother of 3",
    icon: Heart,
    color: "emerald",
    image_url: image1,
    metrics: [
      { label: "Income Increase", value: "75,000 TZS/month", icon: DollarSign },
      { label: "Farm Output", value: "+45%", icon: TrendingUp },
      { label: "Women Trained", value: "15", icon: Users },
    ],
    before: {
      harvest: "150 kg maize annually",
      issue: "35% child undernutrition in village",
      quote:
        "There were days when I didn't know if my children would have enough to eat. Watching them get sick from lack of good food broke my heart.",
      details:
        "Amina's 0.25-acre plot barely produced 150 kg of maize annually, just enough to feed her family of six. Her garden was limited to a few staple crops with little variety, leaving her children vulnerable to frequent malnutrition. Without access to quality seeds or knowledge of sustainable farming, Amina's yields were low and unreliable. The drought last season reduced her harvest by almost 40%, pushing her family closer to food insecurity.",
    },
    intervention: "5 vegetable seeds + 5 SASO chicks + training",
    after: {
      production: "120 kg vegetables in 6 months + 90 eggs/month",
      impact: "25% reduction in child undernutrition",
      quote:
        "I'm no longer just a farmer; I am a leader and a provider. Seeing my children healthy and my neighbors learning from me gives me joy beyond words.",
      details:
        "After enrolling in HERVeg.05's program, Amina received a bundle of five nutrient-dense vegetable seeds—kale, beetroot, Chinese cabbage, amaranth, and spinach—perfect for her small garden. Through hands-on training, Amina learned improved crop management and natural pest control techniques. Within six months, her vegetable garden yielded 120 kg of fresh produce, increasing her family's vitamin intake by 60%. Today, Amina's farm output has increased by 45%, providing her family with enough nutritious food daily and surplus to sell at the local market. She earns an additional 75,000 Tanzanian shillings (~$32) monthly. Amina now leads a group of 15 women in her village, teaching them what she learned and spreading sustainable farming techniques throughout her community.",
    },
  },
  {
    id: 2,
    name: "Juma Bakari",
    age: 45,
    title: "From Debt and Despair to Stability and Pride",
    location: "Nyamagana Village, Mwanza Zone",
    family: "Father of 7",
    icon: Award,
    color: "blue",
    image_url: image1,
    metrics: [
      { label: "Debt Status", value: "Debt Free", icon: TrendingUp },
      { label: "Family Health", value: "Improved", icon: Heart },
      { label: "Community Role", value: "Leader", icon: Users },
    ],
    before: {
      harvest: "Failed single maize crop on degraded land",
      issue: "Trapped in debt cycle, constant hunger",
      quote:
        "I felt trapped — every season was a gamble. I kept borrowing, but the harvest never came through. My children went hungry, and I had no answers.",
      details:
        "Juma's farming life was a cycle of struggle. His single maize crop on degraded land often failed due to poor soil and erratic weather. Year after year, he borrowed money to buy seeds and fertilizer, but the returns were barely enough to feed his family of nine. Hunger was a constant companion, and the weight of unpaid debts crushed his spirit. Lacking alternative income sources or knowledge about sustainable agriculture, Juma's options were limited.",
    },
    intervention:
      "MsetoKilimo package: diverse seeds + SASO chickens + organic farming training",
    after: {
      production: "Flourishing vegetables + thriving poultry business",
      impact: "Debt-free, children healthy and in school",
      quote:
        "I'm proud to say I'm no longer just surviving — I'm building a future. Now, other farmers come to me for advice, and that fills me with pride.",
      details:
        "When Juma joined HERVeg.05, he received the 'MsetoKilimo' package: diverse vegetable seeds and vaccinated SASO chickens. He learned organic farming practices, pest management, and how to care for poultry effectively. Within months, Juma's farm began to change. Vegetables flourished where maize had struggled, and his new poultry business started to generate steady income. Today, Juma enjoys a flourishing garden and a thriving poultry business. His children are healthier, attend school regularly, and the family is free from debt for the first time in years. Juma's success has made him a pillar of his community — a symbol of hope for other farmers.",
    },
  },
  {
    id: 3,
    name: "Neema",
    age: null,
    title: "Empowering Women and Changing Lives",
    location: "Village Community",
    family: "Mother of 5",
    icon: Users,
    color: "purple",
    image_url: image1,
    metrics: [
      { label: "Income Growth", value: "+140%", icon: DollarSign },
      { label: "Production", value: "150kg + 110 eggs/mo", icon: Sprout },
      { label: "Women Organized", value: "30+", icon: Users },
    ],
    before: {
      harvest: "Less than 100 kg annually from 0.3 acres",
      issue: "50,000 TZS/month income, daughter frequently ill",
      quote:
        "Some days, we had only ugali [maize porridge] to eat. My youngest kept falling sick, and I felt helpless watching her grow weak.",
      details:
        "Neema's household income was barely enough to cover basic needs—about 50,000 Tanzanian shillings (~$21) per month from sporadic farming. Her small 0.3-acre garden produced less than 100 kg of mixed crops annually, insufficient to feed her family of five. Her youngest daughter suffered repeated illnesses, often due to a lack of dietary diversity. Without land ownership rights or access to quality agricultural inputs, improving productivity seemed impossible. Seasonal droughts reduced her yields by over 30%, and cultural norms often limited her ability to access farming support or credit.",
    },
    intervention:
      "7 vegetable varieties + 7 SASO chickens + women's cooperative training",
    after: {
      production: "150 kg vegetables + 110 eggs monthly",
      impact: "120,000 TZS/month income, 40% fewer illness clinic visits",
      quote:
        "I am no longer just farming for survival—I am farming to thrive. Together, we are changing lives, one garden at a time.",
      details:
        "Everything shifted when Neema joined HERVeg.05's MsetoKilimo program. She received 7 varieties of vegetable seeds and 7 vaccinated SASO chickens, alongside intensive training on organic farming methods and nutrition. Joining a women's cooperative gave her both knowledge and support. Within eight months, Neema's garden flourished, producing 150 kg of vegetables and 110 eggs every month. Her income from selling surplus produce rose to 120,000 Tanzanian shillings (~$50) monthly. Most importantly, her daughter's health improved, with clinic visits for nutrition-related illnesses dropping by 40%. Today, Neema's income has more than doubled, and her family enjoys a balanced, nutritious diet daily. Empowered by her success, she has helped organize over 30 women in her village into farming groups.",
    },
  },
  {
    id: 4,
    name: "Juma",
    age: null,
    title: "Overcoming Climate Challenges with Innovation",
    location: "Rural Community",
    family: "Family of 7",
    icon: Droplet,
    color: "amber",
    image_url: image1,
    metrics: [
      { label: "Food Stability", value: "+60%", icon: Sprout },
      {
        label: "Additional Income",
        value: "150,000 TZS/season",
        icon: DollarSign,
      },
      { label: "Farmers Mentored", value: "20", icon: Users },
    ],
    before: {
      harvest: "500 kg maize (50% drop due to drought)",
      issue: "200,000 TZS debt, family skipping meals",
      quote:
        "Erratic weather made traditional farming risky without knowledge of climate-smart practices.",
      details:
        "Juma's 1-acre maize farm yielded only 500 kg last season, a 50% drop from previous years due to drought. His family of seven struggled with food insecurity, often skipping meals during the dry season. Debt from failed crops reached 200,000 Tanzanian shillings (~$85). Erratic weather patterns made traditional farming risky, and Juma lacked knowledge of climate-smart practices to adapt and improve resilience.",
    },
    intervention:
      "Drought-tolerant vegetables + water harvesting methods + climate-smart training",
    after: {
      production: "300 kg vegetables + maintained maize yields",
      impact: "75% debt paid down, 350,000 TZS annual income",
      quote:
        "My farm is now a model of climate resilience. My family enjoys consistent meals and stable income.",
      details:
        "After joining HERVeg.05's training, Juma diversified his farm with drought-tolerant vegetables from the 'Her Vegetable' bundle, including amaranth and cowpeas, plus integrated water harvesting methods. Within one year, Juma's vegetable production reached 300 kg, supplementing his reduced maize yields. The diversified farm provided 60% more stable food supply year-round. Juma also sold surplus produce and earned an extra 150,000 Tanzanian shillings (~$64) per season, allowing him to pay down 75% of his debts. Today, Juma's farm is now a model of climate resilience. His family enjoys more consistent meals, and his income stabilized at 350,000 Tanzanian shillings (~$150) annually from diversified crops. Juma is sharing his experience with 20 local farmers to encourage climate-smart practices.",
    },
  },
];

const colorClasses = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
    accent: "bg-emerald-500",
    hover: "hover:bg-emerald-100",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    accent: "bg-blue-500",
    hover: "hover:bg-blue-100",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    accent: "bg-purple-500",
    hover: "hover:bg-purple-100",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    accent: "bg-amber-500",
    hover: "hover:bg-amber-100",
  },
};

export default function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0);
  const [showFullStory, setShowFullStory] = useState(false);
  const story = successStories[currentStory];
  const colors = colorClasses[story.color];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory(
      (prev) => (prev - 1 + successStories.length) % successStories.length
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50 py-16 px-4">
      <div className="flex  flex-col container mx-auto">
        {successStories?.map((story, index) => (
          <AnimatePresence key={story.id}>
            {index === currentStory && (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`p-8 rounded-2xl mb-8`}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-3xl font-bold ${colors.text}`}>
                    {story.title}
                  </h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={prevStory}
                      className={`p-2 rounded-full ${colors.hover} transition`}
                    >
                      <ChevronLeft className={colors.text} />
                    </button>
                    <button
                      onClick={nextStory}
                      className={`p-2 rounded-full ${colors.hover} transition`}
                    >
                      <ChevronRight className={colors.text} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="">
                    <Image
                      src={story.image_url}
                      alt={story.name}
                      className="w-full h-full rounded-lg "
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="mb-4">
                      <strong>Name:</strong> {story.name}, {story.age} years old
                    </p>
                    <p className="mb-4">
                      <strong>Location:</strong> {story.location}
                    </p>
                    <p className="mb-4">
                      <strong>Family:</strong> {story.family}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">
                      Before Intervention
                    </h3>
                    <p className="mb-2 italic">"{story.before.quote}"</p>
                    <p className="mb-4">{story.before.details}</p>
                    <h3 className="text-xl font-semibold mb-2">
                      After Intervention
                    </h3>
                    <p className="mb-2 italic">"{story.after.quote}"</p>
                    <p className="mb-4">{story.after.details}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}
