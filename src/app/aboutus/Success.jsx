// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Sprout,
//   TrendingUp,
//   Users,
//   Droplet,
//   ChevronLeft,
//   ChevronRight,
//   Award,
//   Heart,
//   DollarSign,
// } from "lucide-react";

// const successStories = [
//   {
//     id: 1,
//     name: "Amina",
//     age: 35,
//     title: "From Struggling Farmer to Nutrition Champion",
//     location: "Mundindi Village, Ludewa District",
//     family: "Mother of 3",
//     icon: Heart,
//     color: "emerald",
//     metrics: [
//       { label: "Income Increase", value: "75,000 TZS/month", icon: DollarSign },
//       { label: "Farm Output", value: "+45%", icon: TrendingUp },
//       { label: "Women Trained", value: "15", icon: Users },
//     ],
//     before: {
//       harvest: "150 kg maize annually",
//       issue: "35% child undernutrition in village",
//       quote:
//         "There were days when I didn't know if my children would have enough to eat. Watching them get sick from lack of good food broke my heart.",
//     },
//     intervention: "5 vegetable seeds + 5 SASO chicks + training",
//     after: {
//       production: "120 kg vegetables in 6 months + 90 eggs/month",
//       impact: "25% reduction in child undernutrition",
//       quote:
//         "I'm no longer just a farmer; I am a leader and a provider. Seeing my children healthy and my neighbors learning from me gives me joy beyond words.",
//     },
//   },
//   {
//     id: 2,
//     name: "Juma Bakari",
//     age: 45,
//     title: "From Debt and Despair to Stability and Pride",
//     location: "Nyamagana Village, Mwanza Zone",
//     family: "Father of 7",
//     icon: Award,
//     color: "blue",
//     metrics: [
//       { label: "Debt Status", value: "Debt Free", icon: TrendingUp },
//       { label: "Family Health", value: "Improved", icon: Heart },
//       { label: "Community Role", value: "Leader", icon: Users },
//     ],
//     before: {
//       harvest: "Failed single maize crop on degraded land",
//       issue: "Trapped in debt cycle, constant hunger",
//       quote:
//         "I felt trapped — every season was a gamble. I kept borrowing, but the harvest never came through. My children went hungry, and I had no answers.",
//     },
//     intervention:
//       "MsetoKilimo package: diverse seeds + SASO chickens + organic farming training",
//     after: {
//       production: "Flourishing vegetables + thriving poultry business",
//       impact: "Debt-free, children healthy and in school",
//       quote:
//         "I'm proud to say I'm no longer just surviving — I'm building a future. Now, other farmers come to me for advice, and that fills me with pride.",
//     },
//   },
//   {
//     id: 3,
//     name: "Neema",
//     age: null,
//     title: "Empowering Women and Changing Lives",
//     location: "Village Community",
//     family: "Mother of 5",
//     icon: Users,
//     color: "purple",
//     metrics: [
//       { label: "Income Growth", value: "+140%", icon: DollarSign },
//       { label: "Production", value: "150kg + 110 eggs/mo", icon: Sprout },
//       { label: "Women Organized", value: "30+", icon: Users },
//     ],
//     before: {
//       harvest: "Less than 100 kg annually from 0.3 acres",
//       issue: "50,000 TZS/month income, daughter frequently ill",
//       quote:
//         "Some days, we had only ugali [maize porridge] to eat. My youngest kept falling sick, and I felt helpless watching her grow weak.",
//     },
//     intervention:
//       "7 vegetable varieties + 7 SASO chickens + women's cooperative training",
//     after: {
//       production: "150 kg vegetables + 110 eggs monthly",
//       impact: "120,000 TZS/month income, 40% fewer illness clinic visits",
//       quote:
//         "I am no longer just farming for survival—I am farming to thrive. Together, we are changing lives, one garden at a time.",
//     },
//   },
//   {
//     id: 4,
//     name: "Juma",
//     age: null,
//     title: "Overcoming Climate Challenges with Innovation",
//     location: "Rural Community",
//     family: "Family of 7",
//     icon: Droplet,
//     color: "amber",
//     metrics: [
//       { label: "Food Stability", value: "+60%", icon: Sprout },
//       {
//         label: "Additional Income",
//         value: "150,000 TZS/season",
//         icon: DollarSign,
//       },
//       { label: "Farmers Mentored", value: "20", icon: Users },
//     ],
//     before: {
//       harvest: "500 kg maize (50% drop due to drought)",
//       issue: "200,000 TZS debt, family skipping meals",
//       quote:
//         "Erratic weather made traditional farming risky without knowledge of climate-smart practices.",
//     },
//     intervention:
//       "Drought-tolerant vegetables + water harvesting methods + climate-smart training",
//     after: {
//       production: "300 kg vegetables + maintained maize yields",
//       impact: "75% debt paid down, 350,000 TZS annual income",
//       quote:
//         "My farm is now a model of climate resilience. My family enjoys consistent meals and stable income.",
//     },
//   },
// ];

// const colorClasses = {
//   emerald: {
//     bg: "bg-emerald-50",
//     border: "border-emerald-200",
//     text: "text-emerald-600",
//     accent: "bg-emerald-500",
//     hover: "hover:bg-emerald-100",
//   },
//   blue: {
//     bg: "bg-blue-50",
//     border: "border-blue-200",
//     text: "text-blue-600",
//     accent: "bg-blue-500",
//     hover: "hover:bg-blue-100",
//   },
//   purple: {
//     bg: "bg-purple-50",
//     border: "border-purple-200",
//     text: "text-purple-600",
//     accent: "bg-purple-500",
//     hover: "hover:bg-purple-100",
//   },
//   amber: {
//     bg: "bg-amber-50",
//     border: "border-amber-200",
//     text: "text-amber-600",
//     accent: "bg-amber-500",
//     hover: "hover:bg-amber-100",
//   },
// };

// export default function SuccessStories() {
//   const [currentStory, setCurrentStory] = useState(0);
//   const story = successStories[currentStory];
//   const colors = colorClasses[story.color];

//   const nextStory = () => {
//     setCurrentStory((prev) => (prev + 1) % successStories.length);
//   };

//   const prevStory = () => {
//     setCurrentStory(
//       (prev) => (prev - 1 + successStories.length) % successStories.length
//     );
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             HERVeg.05 Success Stories
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Transforming lives through sustainable agriculture and nutrition
//             education
//           </p>
//         </motion.div>

//         {/* Story Navigation */}
//         <div className="flex justify-center gap-3 mb-8">
//           {successStories.map((s, idx) => (
//             <button
//               key={s.id}
//               onClick={() => setCurrentStory(idx)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 idx === currentStory ? "bg-green-600 w-8" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Main Story Card */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentStory}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-3xl shadow-2xl overflow-hidden"
//           >
//             {/* Header Section */}
//             <div className={`${colors.bg} border-b-4 ${colors.border} p-8`}>
//               <div className="flex items-start gap-6">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2, type: "spring" }}
//                   className={`${colors.accent} p-4 rounded-2xl`}
//                 >
//                   <story.icon className="w-12 h-12 text-white" />
//                 </motion.div>
//                 <div className="flex-1">
//                   <h2 className="text-4xl font-bold text-gray-900 mb-2">
//                     {story.name}
//                     {story.age && `, ${story.age}`}
//                   </h2>
//                   <p className={`text-xl font-semibold ${colors.text} mb-2`}>
//                     {story.title}
//                   </p>
//                   <div className="flex flex-wrap gap-4 text-gray-600">
//                     <span className="flex items-center gap-2">
//                       <Users className="w-4 h-4" />
//                       {story.family}
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <Sprout className="w-4 h-4" />
//                       {story.location}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Metrics */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//                 {story.metrics.map((metric, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     className="bg-white rounded-xl p-4 shadow-md"
//                   >
//                     <div className="flex items-center gap-3">
//                       <metric.icon className={`w-6 h-6 ${colors.text}`} />
//                       <div>
//                         <p className="text-sm text-gray-600">{metric.label}</p>
//                         <p className="text-xl font-bold text-gray-900">
//                           {metric.value}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Story Content */}
//             <div className="p-8">
//               <div className="grid md:grid-cols-2 gap-8">
//                 {/* Before Section */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="space-y-4"
//                 >
//                   <h3 className="text-2xl font-bold text-red-600 flex items-center gap-2">
//                     <div className="w-2 h-8 bg-red-600 rounded"></div>
//                     Before
//                   </h3>
//                   <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
//                     <p className="text-gray-700 mb-2">
//                       <strong>Situation:</strong> {story.before.harvest}
//                     </p>
//                     <p className="text-gray-700">
//                       <strong>Challenge:</strong> {story.before.issue}
//                     </p>
//                   </div>
//                   <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4 py-2">
//                     "{story.before.quote}"
//                   </blockquote>
//                 </motion.div>

//                 {/* After Section */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.5 }}
//                   className="space-y-4"
//                 >
//                   <h3 className="text-2xl font-bold text-green-600 flex items-center gap-2">
//                     <div className="w-2 h-8 bg-green-600 rounded"></div>
//                     After
//                   </h3>
//                   <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
//                     <p className="text-gray-700 mb-2">
//                       <strong>Production:</strong> {story.after.production}
//                     </p>
//                     <p className="text-gray-700">
//                       <strong>Impact:</strong> {story.after.impact}
//                     </p>
//                   </div>
//                   <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4 py-2">
//                     "{story.after.quote}"
//                   </blockquote>
//                 </motion.div>
//               </div>

//               {/* Intervention */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className={`mt-8 ${colors.bg} border-2 ${colors.border} rounded-xl p-6`}
//               >
//                 <h4
//                   className={`text-lg font-bold ${colors.text} mb-2 flex items-center gap-2`}
//                 >
//                   <Sprout className="w-5 h-5" />
//                   The Intervention
//                 </h4>
//                 <p className="text-gray-700 text-lg">{story.intervention}</p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={prevStory}
//             className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-colors"
//           >
//             <ChevronLeft className="w-5 h-5" />
//             Previous
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={nextStory}
//             className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-colors"
//           >
//             Next
//             <ChevronRight className="w-5 h-5" />
//           </motion.button>
//         </div>

//         {/* Footer Stats */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 text-center"
//         >
//           <p className="text-gray-600 text-lg">
//             {currentStory + 1} of {successStories.length} Success Stories
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            HERVeg.05 Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming lives through sustainable agriculture and nutrition
            education
          </p>
        </motion.div>

        {/* Story Navigation */}
        <div className="flex justify-center gap-3 mb-8">
          {successStories.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentStory(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentStory ? "bg-green-600 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Main Story Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header Section */}
            <div className={`${colors.bg} border-b-4 ${colors.border} p-8`}>
              <div className="flex items-start gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`${colors.accent} p-4 rounded-2xl`}
                >
                  <story.icon className="w-12 h-12 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {story.name}
                    {story.age && `, ${story.age}`}
                  </h2>
                  <p className={`text-xl font-semibold ${colors.text} mb-2`}>
                    {story.title}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {story.family}
                    </span>
                    <span className="flex items-center gap-2">
                      <Sprout className="w-4 h-4" />
                      {story.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {story.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <metric.icon className={`w-6 h-6 ${colors.text}`} />
                      <div>
                        <p className="text-sm text-gray-600">{metric.label}</p>
                        <p className="text-xl font-bold text-gray-900">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Story Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-red-600 flex items-center gap-2">
                    <div className="w-2 h-8 bg-red-600 rounded"></div>
                    Before
                  </h3>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Situation:</strong> {story.before.harvest}
                    </p>
                    <p className="text-gray-700">
                      <strong>Challenge:</strong> {story.before.issue}
                    </p>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4 py-2">
                    "{story.before.quote}"
                  </blockquote>
                </motion.div>

                {/* After Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-green-600 flex items-center gap-2">
                    <div className="w-2 h-8 bg-green-600 rounded"></div>
                    After
                  </h3>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Production:</strong> {story.after.production}
                    </p>
                    <p className="text-gray-700">
                      <strong>Impact:</strong> {story.after.impact}
                    </p>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4 py-2">
                    "{story.after.quote}"
                  </blockquote>
                </motion.div>
              </div>

              {/* Intervention */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`mt-8 ${colors.bg} border-2 ${colors.border} rounded-xl p-6`}
              >
                <h4
                  className={`text-lg font-bold ${colors.text} mb-2 flex items-center gap-2`}
                >
                  <Sprout className="w-5 h-5" />
                  The Intervention
                </h4>
                <p className="text-gray-700 text-lg">{story.intervention}</p>
              </motion.div>

              {/* Read Full Story Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-center"
              >
                <button
                  onClick={() => setShowFullStory(true)}
                  className={`${colors.accent} hover:opacity-90 text-white font-semibold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 mx-auto transition-all transform hover:scale-105`}
                >
                  <BookOpen className="w-5 h-5" />
                  Read Full Success Story
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Full Story Modal */}
        <AnimatePresence>
          {showFullStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowFullStory(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div
                  className={`${colors.bg} border-b-4 ${colors.border} p-6 sticky top-0 z-10`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`${colors.accent} p-3 rounded-xl`}>
                        <story.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {story.name}'s Complete Journey
                        </h2>
                        <p className={`${colors.text} font-semibold`}>
                          {story.title}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowFullStory(false)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 space-y-8">
                  {/* Profile Section */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Profile
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                      <p>
                        <strong>Name:</strong> {story.name}
                        {story.age && `, ${story.age} years old`}
                      </p>
                      <p>
                        <strong>Family:</strong> {story.family}
                      </p>
                      <p className="md:col-span-2">
                        <strong>Location:</strong> {story.location}
                      </p>
                    </div>
                  </div>

                  {/* The Challenge */}
                  <div>
                    <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                      <div className="w-2 h-8 bg-red-600 rounded"></div>
                      The Challenge
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        {story.before.details}
                      </p>
                      <blockquote className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg italic text-gray-700">
                        "{story.before.quote}"
                        <span className="block text-right mt-2 not-italic font-semibold">
                          — {story.name}
                        </span>
                      </blockquote>
                    </div>
                  </div>

                  {/* The Intervention */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                      <div className="w-2 h-8 bg-blue-600 rounded"></div>
                      The Intervention
                    </h3>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {story.intervention}
                      </p>
                    </div>
                  </div>

                  {/* The Transformation */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                      <div className="w-2 h-8 bg-green-600 rounded"></div>
                      The Transformation
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        {story.after.details}
                      </p>
                      <blockquote className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg italic text-gray-700">
                        "{story.after.quote}"
                        <span className="block text-right mt-2 not-italic font-semibold">
                          — {story.name}
                        </span>
                      </blockquote>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Key Achievements
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {story.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className={`${colors.bg} border-2 ${colors.border} rounded-xl p-4`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <metric.icon className={`w-6 h-6 ${colors.text}`} />
                            <p className="font-semibold text-gray-700">
                              {metric.label}
                            </p>
                          </div>
                          <p className="text-2xl font-bold text-gray-900">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevStory}
            className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextStory}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg">
            {currentStory + 1} of {successStories.length} Success Stories
          </p>
        </motion.div>
      </div>
    </div>
  );
}
