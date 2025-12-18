"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Article2 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-Linear-to-br from-slate-50 via-white to-slate-50">
      {/* Main Container */}
      <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-Linear-to-r from-emerald-600 to-teal-500 mb-8"
          />

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Before the Rain: How Tanzania's Farmers Could Win or Lose the Season
            After the Elections
          </h1>

          <div className="flex items-center gap-4 text-slate-600 text-sm">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
              Agriculture
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">
              Food Security
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
              Tanzania
            </span>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="prose prose-lg max-w-none"
        >
          {/* Opening Paragraph */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xl leading-relaxed text-slate-700 font-light">
              In a few weeks, Tanzanians will cast their votes. By the time the
              ballots are counted and the speeches fade, the skies will begin to
              shift, the smell of rain hanging in the air. For millions of
              smallholder farmers, this is not just another season. It's the
              moment that decides whether the next year will bring food to the
              table or another stretch of hunger.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-lg leading-relaxed text-slate-700">
              In villages across Njombe, Ruvuma, and Mtwara, farmers are already
              watching the clouds. They know what's coming. The elections on
              October 29 will set the political tone, but the planting season
              that follows in late November will set the nation's harvest. If
              farmers don't have seeds, fertilizer, and tools ready before those
              rains fall, the opportunity is gone for another year.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              The Daily Struggle of Growing Food
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Every farmer in Tanzania has a version of the same story. Long
              walks to find an agro-dealer. Waiting months for fertilizer
              deliveries. Prices that climb higher the further you live from
              town. Many pay nearly twice as much for the same bag of fertilizer
              simply because of poor roads and middlemen.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-amber-50  border-amber-500 p-6 my-8 rounded-r-lg shadow-sm"
            >
              <p className="text-lg text-slate-800 font-medium">
                A single figure captures the unfairness: while fertilizer costs
                about TZS 60,000 at the port in Dar es Salaam, that same bag can
                reach TZS 90,000 or more by the time it gets to Kigoma.
                Transport alone can add 40–60% to the cost.
              </p>
            </motion.div>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              It's not because Tanzanian farmers are inefficient, it's because
              the system is. Each shipment passes through layers of transport,
              storage, and repackaging before it reaches the village. Government
              payment delays deepen the problem: as of mid-2025, fertilizer
              suppliers are still owed over TZS 204 billion under the national
              subsidy program. That money is supposed to make fertilizer
              affordable. Instead, it's trapped in bureaucracy, forcing
              suppliers to borrow, pay interest, and raise prices.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              Tanzania produces less than 15% of the fertilizer it needs. The
              rest is imported, often late, often expensive. When the trucks
              finally arrive, the rains have already started.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              A Nation That Feeds Africa, But Can't Feed Itself Enough
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Agriculture employs 65% of Tanzanians and contributes 27% of GDP.
              Yet a quarter of the population still lives below the poverty
              line. One in three children under five is stunted due to
              malnutrition. That is not a statistic, it's a reflection of how
              deeply timing and access shape food security.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-100 p-8 rounded-lg my-8 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-emerald-600 mb-2">
                    9 kg
                  </p>
                  <p className="text-sm text-slate-600">
                    Fertilizer per hectare in Sub-Saharan Africa
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-teal-600 mb-2">3.5%</p>
                  <p className="text-sm text-slate-600">Irrigated farmland</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600 mb-2">
                    10+ km
                  </p>
                  <p className="text-sm text-slate-600">
                    Distance to nearest agro-dealer
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Across Sub-Saharan Africa, farmers use just 9 kg of fertilizer per
              hectare, compared to 100 kg in South Asia and 73 kg in Latin
              America. Only 3.5% of farmland is irrigated. Most farmers still
              live 10 kilometers or more from the nearest agro-dealer.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              The 2024 National Bureau of Statistics survey found that only 38%
              of smallholder farmers received improved seeds and fertilizer on
              time. That means six out of ten Tanzanian farmers go into planting
              season either waiting, or giving up.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              The national goal is 50 kg of fertilizer per hectare, but farmers
              manage about 24 kg. On one hectare of maize, that shortfall means
              half the yield, half the food, half the income.
            </p>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              When the Rains Betray
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Even when the system works, the weather often doesn't. Climate
              change has made Tanzania's growing season unpredictable. The
              Tanzania Agriculture Climate Resilience Report (2024) showed that
              45% of smallholder farmers lost crops in the last three years due
              to shifting rains and drought.
            </p>

            <motion.blockquote
              whileHover={{ x: 10 }}
              className=" border-emerald-600 pl-6 py-4 my-8 bg-white shadow-sm rounded-r-lg"
            >
              <p className="text-xl italic text-slate-800 mb-3">
                "We waited for rain, but it never came when we expected. When it
                did, we had no seeds ready."
              </p>
              <footer className="text-slate-600 font-medium">
                — Anna Msigwa, mother of three, Ludewa
              </footer>
            </motion.blockquote>

            <p className="text-lg leading-relaxed text-slate-700">
              Her words echo through thousands of villages each November.
            </p>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              The Question That Sparked a Solution
            </h2>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-Linear-to-r from-emerald-50 to-teal-50 p-8 rounded-lg my-8 shadow-sm"
            >
              <p className="text-2xl font-bold text-emerald-800 text-center">
                What if inputs arrived before the rain?
              </p>
            </motion.div>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              That simple question gave birth to HERVeg.05, a homegrown
              Tanzanian initiative built to rewrite how farming inputs reach
              rural households. The idea is disarmingly practical: instead of
              forcing farmers to walk long distances or take costly loans,
              HERVeg.05 brings farming tools, seeds, chickens, and knowledge to
              the farmers, directly to their villages.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Through youth delivery agents and mobile money layaway plans,
              farmers can pay in small amounts throughout the year and receive
              everything a month before the rains. Each package comes with
              visual Swahili guides, so every farmer, whether literate or not,
              knows exactly how to use the inputs.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              Women and youth are at the center of the model, because they're
              the backbone of agriculture yet often last in line for resources.
              By simplifying access, HERVeg.05 helps restore soil health,
              improve nutrition, and boost incomes, all before the rain even
              falls.
            </p>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              Why HERVeg.05's Last-Mile System Matters Now
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Across Tanzania, some farmers join village savings groups or
              borrow from banks at interest rates as high as 35%, just to afford
              seeds or fertilizer. They scrape together the money, but their
              inputs arrive late. Many plant in November, only to receive
              fertilizer in January or sometimes February, when the rains have
              already washed away their hopes.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              HERVeg.05 was born to break that cycle.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Instead of waiting for farmers to make long, costly trips into
              town, we flip the system: we take everything to their doorsteps
              before the rains begin. Our deliveries start two months early,
              when timing still makes the difference between a strong harvest
              and a lost season.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              Because when seeds go into the soil on time, yields rise, hunger
              drops, and whole villages gain a sense of control over their
              future.
            </p>
          </motion.section>

          {/* Section 6 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              How We Do It
            </h2>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-6 rounded-lg shadow-sm  border-emerald-500"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  1. Direct Village Delivery
                </h3>
                <p className="text-lg leading-relaxed text-slate-700">
                  Youth agents deliver seeds, seedlings, and poultry kits
                  straight to farmers, no buses, no middlemen, no delay. We use
                  smart routing and local storage hubs so that inputs reach each
                  household right before the first rain clouds break. What used
                  to be uncertain is now predictable, fast, and fair.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-6 rounded-lg shadow-sm  border-teal-500"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Flexible Mobile Layaway
                </h3>
                <p className="text-lg leading-relaxed text-slate-700">
                  Farmers pay bit by bit using mobile money. That means no need
                  for big lump sums or bank loans. With 71% of rural adults
                  already using mobile money, this system keeps farming within
                  reach, especially for women and youth who often have limited
                  control over household cash.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-6 rounded-lg shadow-sm  border-blue-500"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  3. Clear Swahili Guides
                </h3>
                <p className="text-lg leading-relaxed text-slate-700">
                  Every package comes with picture-based guides. Even farmers
                  who can't read easily can follow every step, from planting to
                  pest control. Its knowledge is made visible, in the language
                  of the field.
                </p>
              </motion.div>
            </div>

            <p className="text-lg leading-relaxed text-slate-700 mt-8">
              This approach may look simple, but it's quietly revolutionary.
              Traditional systems wait for the farmer to move; we move for the
              farmer. With digital payments and youth agents as the link,
              last-mile delivery becomes a first-mile opportunity.
            </p>
          </motion.section>

          {/* Section 7 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              Proof on the Ground
            </h2>

            <motion.blockquote
              whileHover={{ x: 10 }}
              className=" border-emerald-600 pl-6 py-4 my-8 bg-white shadow-sm rounded-r-lg"
            >
              <p className="text-xl italic text-slate-800 mb-3">
                "For years, we waited for seeds and fertilizers that never came
                on time. We'd plant late, and lose half the harvest. But this
                year, HERVeg.05 brought everything a month early. Our maize
                yield went up by more than 55%. This service changed everything
                for my family."
              </p>
              <footer className="text-slate-600 font-medium">
                — Julies Mligo, 39-year-old father of three, Ihalula village,
                Njombe Region
              </footer>
            </motion.blockquote>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              That same shift is unfolding across hundreds of villages. Our
              trained youth agents, equipped with tablets and digital payment
              apps, handle orders, deliveries, and feedback. Farmers get
              laminated, weatherproof guides that show each step. Field tests
              found 92% of farmers could follow the instructions without extra
              help.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-100 p-8 rounded-lg my-8 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-emerald-600 mb-2">
                    1,200
                  </p>
                  <p className="text-slate-700">Farmers reached (70% women)</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-teal-600 mb-2">75%</p>
                  <p className="text-slate-700">Adoption rate</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-600 mb-2">
                    50-70%
                  </p>
                  <p className="text-slate-700">Yield increase reported</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-purple-600 mb-2">
                    $125
                  </p>
                  <p className="text-slate-700">
                    Extra income per youth agent per season
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="text-lg leading-relaxed text-slate-700">
              So far, we've reached 1,200 farmers, 70% of them women. Adoption
              rates are over 75%, and most report yield increases of 50–70% for
              maize and vegetables. Each youth agent earns about $125 extra per
              season, gaining digital and business skills that ripple through
              the rural economy.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 mt-6 font-medium">
              The model doesn't just deliver seeds; it grows livelihoods.
            </p>
          </motion.section>

          {/* Section 8 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              Climate, Timing, and the Future of the Rain
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              According to the Tanzania Meteorological Agency (2023), the
              country has seen a 7% drop in rainfall over the last decade.
              Farmers can no longer rely on regular seasons. They need
              drought-tolerant seeds, organic fertilizer, and training on
              composting, delivered before the weather turns.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Our last-mile system carries more than inputs; it carries
              resilience. We distribute climate-smart crops and organic
              fertilizers that improve soil carbon by up to 42%, helping the
              ground retain water during dry spells.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              We promote composting and limit chemical fertilizer use, aligning
              with the Environmental Management Act (2022). The goal isn't just
              to grow more food, but to keep Tanzania's soil alive for
              generations.
            </p>
          </motion.section>

          {/* Section 9 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              Leaving No One Behind
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Our work began with women and youth, but inclusion goes further.
              Around 15% of rural Tanzanians live with disabilities, and they
              often face barriers to participation in farming. We've adapted our
              training materials and delivery systems for accessibility. Pilot
              programs show that including farmers with disabilities raises
              household productivity by nearly 20%, according to the Tanzania
              Disability and Agriculture Report (2024).
            </p>

            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              Real inclusion is not charity, it's smart economics.
            </p>
          </motion.section>

          {/* Section 10 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              Working Together
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              HERVeg.05 thrives through collaboration. We partner with local
              agro-input companies, mobile network providers such as Mix by Yas,
              and international initiatives like DPrize and Climate KIC. Local
              governments and extension officers support our work in villages,
              helping validate and scale the model.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              These partnerships prove that transformation doesn't need to wait
              for another policy cycle. It can start where the farmer stands.
            </p>
          </motion.section>

          {/* Section 11 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              Measuring What Matters
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              We track more than deliveries. We measure how many farmers gain
              access, how incomes shift, how soils recover, and how satisfied
              farmers are with the service.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-emerald-50  border-emerald-500 p-6 my-8 rounded-r-lg shadow-sm"
            >
              <p className="text-lg text-slate-800">
                So far,{" "}
                <span className="font-bold text-emerald-700">
                  78% of farmers say they're satisfied
                </span>
                , and{" "}
                <span className="font-bold text-emerald-700">
                  70% plan to continue
                </span>{" "}
                even without subsidies. That's sustainability in motion.
              </p>
            </motion.div>
          </motion.section>

          {/* Section 12 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6  border-emerald-600 ">
              The Road Ahead
            </h2>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              The next step is scale. By 2026, we plan to reach new regions and
              integrate with Tanzania's e-voucher systems to align with national
              programs like ASDP II and Vision 2025. We're also testing
              blockchain tools for transparent supply chains and introducing
              more regenerative agriculture inputs to protect the environment.
            </p>

            <p className="text-lg leading-relaxed text-slate-700">
              Challenges remain, muddy roads, defaulted payments, occasional
              skepticism from agro-dealers, but we're meeting them head-on by
              including those same dealers in our delivery network.
            </p>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            variants={fadeInUp}
            className="mb-16 bg-Linear-to-r from-emerald-600 to-teal-600 text-white p-12 rounded-2xl shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-6">Join Us</h2>

            <p className="text-xl leading-relaxed mb-6">
              We have shown that simple changes, bringing inputs to the village,
              offering flexible payments, and giving easy-to-follow guides, can
              change lives. But we are just getting started. Thousands of
              farmers still need access to tools, seeds, and hope.
            </p>

            <p className="text-2xl font-bold">
              Let's make sure no farmer is left behind.
            </p>
          </motion.section>

          {/* References */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8   border-slate-400 ">
              References
            </h2>

            <div className="bg-slate-50 p-8 rounded-lg">
              <ul className="space-y-3 text-slate-700">
                <li className="leading-relaxed">AFRIQOM</li>
                <li className="leading-relaxed">
                  OECD/FAO Agricultural Outlook 2016–2025
                </li>
                <li className="leading-relaxed">
                  Farrelly Mitchell, "Agri Input Challenges in Sub-Saharan
                  Africa"
                </li>
                <li className="leading-relaxed">
                  AGRA Tanzania Strategy 2023–2027
                </li>
                <li className="leading-relaxed">
                  UNU-WIDER Working Paper on Input Subsidies in Tanzania
                </li>
                <li className="leading-relaxed">
                  Kilimo Kwanza, "Agriculture at a Crossroads: Eastern Africa's
                  Journey"
                </li>
                <li className="leading-relaxed">
                  Tanzania National Bureau of Statistics 2024 Farming Survey
                </li>
                <li className="leading-relaxed">
                  Tanzania Meteorological Agency Reports 2023-2024
                </li>
                <li className="leading-relaxed">
                  Tanzania Gender and Agriculture Survey 2023
                </li>
                <li className="leading-relaxed">
                  Tanzania Disability and Agriculture Report 2024
                </li>
                <li className="leading-relaxed">
                  FAO Reports on Organic Fertilizers in East Africa 2024
                </li>
                <li className="leading-relaxed">
                  Tanzania Environmental Management Act (2022)
                </li>
              </ul>
            </div>
          </motion.section>
        </motion.article>
      </div>
    </div>
  );
};

export default Article2;
