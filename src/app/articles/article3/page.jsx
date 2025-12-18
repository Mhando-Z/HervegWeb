"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Article3 = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const Section = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen md:mt-20 ">
      <article className="container mx-auto px-6 py-12 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.header
          ref={titleRef}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16 border-b border-slate-200 pb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-5xl  font-bold text-slate-900 leading-tight mb-6"
          >
            Feathers of Resilience: How SASSO Poultry Is Feeding Hope in
            Tanzania's Highlands
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 font-medium"
          >
            By Ibrahim Islam, Founder, HERVeg.05
          </motion.p>
        </motion.header>

        {/* Opening Paragraph */}
        <Section>
          <p className="text-lg leading-relaxed text-slate-700 mb-8 first-letter:text-6xl first-letter: first-letter:font-bold first-letter:text-slate-900 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
            The morning air in Njombe carries a strange mix these days, the damp
            scent of soil before rain, and the soft chorus of chickens. Not the
            scrawny local kind scratching for scraps, but sturdy SASSO birds —
            brown, full-bodied, confident. For women like Anna Mkalawa, a
            42-year-old farmer in Ihalula village, those birds are more than
            livestock. They're insurance against hunger, and a small rebellion
            against poverty.
          </p>
        </Section>

        <Section delay={0.1}>
          <blockquote className=" border-slate-900 pl-6 py-2 mb-8 italic text-slate-700 text-lg">
            "These chickens changed my house," she says, tilting her head toward
            a row of newly patched iron sheets glinting in the sun. "Before, we
            waited for the maize harvest to get any cash. Now, eggs give us
            money every week."
          </blockquote>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            In a region where nearly half of children are malnourished, and the
            rains have grown unreliable, the humble chicken has become a
            lifeline, linking nutrition, climate resilience, and women's
            empowerment in ways big development programs often miss.
          </p>
        </Section>

        {/* Section: When the Sky Became Unpredictable */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            When the Sky Became Unpredictable
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Ten years ago, Njombe's farmers could set their calendars by the
            sky. Rain fell in October, harvest came in June. Not anymore.
            Droughts stretch longer. Droughts appear without warning. The
            Tanzania Meteorological Agency reports that annual rainfall has
            dropped by 7 percent in the last decade, and temperature spikes are
            more frequent.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            For smallholder farmers, that volatility isn't abstract. It's lost
            maize, spoiled beans, and empty granaries. Crop-dependent families
            wait for rain that comes too late, or too hard. Their incomes shrink
            just as food prices climb.
          </p>
        </Section>

        <Section delay={0.3}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            That's how HERVeg.05's poultry initiative began, not as a business
            plan, but as a response to panic. Farmers were asking for something
            that didn't depend entirely on the weather, something they could
            control.
          </p>
        </Section>

        <Section delay={0.4}>
          <blockquote className=" border-slate-900 pl-6 py-2 mb-12 italic text-slate-700 text-lg">
            "We realized the best way to protect crops might be to look beyond
            crops," says one of our youth agents, Amani Mwaisoka, 25, who
            delivers chicks by motorbike to scattered villages. "The answer
            wasn't in the fields. It was in the coops."
          </blockquote>
        </Section>

        {/* Section: Why SASSO Poultry, and Why Now */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            Why SASSO Poultry, and Why Now
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            The SASSO breed, developed for tropical conditions, thrives where
            other livestock struggle. It grows quickly, eats local feed, and
            survives the heat waves that are now common across southern
            Tanzania. Each bird can lay up to 240 eggs a year and reach full
            maturity in just three months, fast enough to give farmers a
            reliable cash cycle between planting seasons.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            At HERVeg.05, we've distributed over 4,000 SASSO birds to 678
            farmers, 71 percent of them women. Our model is simple: deliver
            early, deliver directly, and teach through visuals. Farmers pay
            small installments through mobile money, no banks, no delays. Every
            delivery includes picture-based Swahili guides on feeding, housing,
            and vaccination.
          </p>
        </Section>

        <Section delay={0.3}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            But the true innovation isn't technology, it's timing. We reach
            farmers before the rains, when they still have time to build coops,
            prepare feed, and plan. Early delivery, it turns out, is the
            difference between surviving the season and losing it.
          </p>
        </Section>

        {/* Section: From Protein to Power */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            From Protein to Power
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            For Rehema Mbilinyi, a mother of four in Wanging'ombe, the poultry
            program brought something her children had never known, a daily meal
            with eggs.
          </p>
        </Section>

        <Section delay={0.2}>
          <blockquote className=" border-slate-900 pl-6 py-2 mb-6 italic text-slate-700 text-lg">
            "My youngest used to cry from hunger," she recalls. "Now I boil an
            egg for him each morning before school. He smiles before he leaves."
          </blockquote>
        </Section>

        <Section delay={0.3}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            That single egg holds the quiet power of nutrition. In Njombe, where
            one in three children under five is stunted, eggs are the fastest,
            most sustainable source of protein. Families who once relied
            entirely on maize porridge now eat more balanced diets, eggs,
            vegetables, and sometimes chicken meat.
          </p>
        </Section>

        <Section delay={0.4}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            The impact ripples out. Poultry manure feeds their crops, restoring
            soil fertility. Healthier soil means stronger maize and bean yields,
            a cycle of renewal powered by feathers and patience.
          </p>
        </Section>

        {/* Section: A Women's Revolution in Slow Motion */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            A Women's Revolution in Slow Motion
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            When people speak of "women's empowerment," it often sounds
            abstract. But in the villages where we work, it looks like this: a
            woman counting coins from egg sales, deciding whether to buy salt or
            save for a water tank — and realizing she no longer has to ask
            anyone's permission.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            In rural Tanzania, men often control cash from major crops like
            maize or coffee. Poultry, though, sits under women's domain. With
            SASSO birds, that authority expands, from household nutrition to
            household finance.
          </p>
        </Section>

        <Section delay={0.3}>
          <blockquote className=" border-slate-900 pl-6 py-2 mb-6 italic text-slate-700 text-lg">
            "I sell eggs every Friday at the market," says Anna Mkalawa.
            "Sometimes I make 50,000 shillings in a week. It's small, but it's
            mine. My husband jokes that I'm the one who feeds him now."
          </blockquote>
        </Section>

        <Section delay={0.4}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            That humor hides a shift. When women control income, families invest
            more in education, health, and food diversity. What begins as a
            small economic step becomes a quiet cultural evolution.
          </p>
        </Section>

        {/* Section: Youth on the Move */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            Youth on the Move
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Change also rides on the backs of motorbikes. HERVeg.05 trains local
            youth, many of them unemployed graduates, as delivery and support
            agents. They transport chicks, collect payments, track data through
            mobile apps, and help farmers troubleshoot.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            For Hilda Festo, the youth agent, each delivery is more than a job.
          </p>
        </Section>

        <Section delay={0.3}>
          <blockquote className=" border-slate-900 pl-6 py-2 mb-6 italic text-slate-700 text-lg">
            "When I arrive, people greet me like I'm bringing good news," she
            says. "And I am. A chicken is hope with feathers."
          </blockquote>
        </Section>

        <Section delay={0.4}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            Each agent earns about $125 per season, but the impact goes further.
            They're learning business skills, digital literacy, and logistics,
            cornerstones of the rural economy we're trying to build.
          </p>
        </Section>

        {/* Section: From Local Birds to Global Lessons */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            From Local Birds to Global Lessons
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            SASSO poultry may be local, but its implications are global. As the
            world wrestles with rising food prices, shrinking farmland, and
            climate shocks, small-scale livestock like this offer an adaptable
            model for resilience.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Unlike large agribusiness projects that depend on capital and
            infrastructure, poultry operates on immediacy. It requires little
            land, scales through trust, and multiplies fast. In the fight
            against poverty and hunger, that agility matters.
          </p>
        </Section>

        <Section delay={0.3}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            The Food and Agriculture Organization (FAO) estimates that
            smallholder poultry contributes to the livelihoods of over 70
            percent of rural households in Africa. Yet most programs treat it as
            secondary. What we're learning in Njombe is that it's central, a
            unifying tool across sectors:
          </p>
        </Section>

        <Section delay={0.4}>
          <div className="pl-8 mb-6 space-y-3 text-slate-700 text-lg">
            <p className="leading-relaxed">
              Climate adaptation through low-resource, heat-tolerant breeds.
            </p>
            <p className="leading-relaxed">
              Food security through steady household nutrition.
            </p>
            <p className="leading-relaxed">
              Gender equity through women's income control.
            </p>
            <p className="leading-relaxed">
              Youth employment through last-mile distribution.
            </p>
          </div>
        </Section>

        <Section delay={0.5}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            That's four SDGs in one coop.
          </p>
        </Section>

        {/* Section: A Living System, Not a Handout */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            A Living System, Not a Handout
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Our model runs on partnership, not charity. We work with local
            agro-dealers, mobile network operators like Mix by Yas, and
            innovation funders including DPrize and Climate KIC. Local extension
            officers help with training and vaccination.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Farmers contribute their own savings and labor, building coops,
            sourcing local feed, and organizing village training sessions. This
            ownership creates what foreign aid often struggles to sustain:
            continuity after the project ends.
          </p>
        </Section>

        <Section delay={0.3}>
          <blockquote className=" border-slate-900 pl-6 py-2 mb-6 italic text-slate-700 text-lg">
            "No one gave me these birds for free," Rehema insists. "I paid
            slowly until they were mine. That's why I take care of them like my
            children."
          </blockquote>
        </Section>

        <Section delay={0.4}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            That pride is the real currency of development.
          </p>
        </Section>

        {/* Section: The Climate Dividend */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            The Climate Dividend
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            As global leaders gather each year to discuss carbon markets and
            adaptation funds, Njombe's women are already practicing
            climate-smart living, without policy jargon.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Poultry farming emits far less carbon than cattle and uses minimal
            water. The manure they produce replaces chemical fertilizers,
            enriching soil organic matter and restoring land that's been
            stripped by years of overuse.
          </p>
        </Section>

        <Section delay={0.3}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            The Tanzania Fertilizer and Soil Health Strategy (2024–2030) calls
            for boosting soil fertility by 15 percent by 2030. Every bag of
            composted poultry manure moves that goal forward, one farm at a
            time.
          </p>
        </Section>

        {/* Section: Challenges Feathered but Real */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            Challenges Feathered but Real
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Of course, the path isn't easy. Transporting live birds on rough
            rural roads is tricky. Feed costs fluctuate. Some farmers struggle
            with disease management.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            We respond with local hatchery partnerships, training programs, and
            accessible veterinary support. Every challenge adds a layer of
            learning, proof that resilience is not built by avoiding problems,
            but by solving them close to where they start.
          </p>
        </Section>

        {/* Section: Why It Matters Beyond Tanzania */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            Why It Matters Beyond Tanzania
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            As the 2025 national elections approach, Tanzania is talking about
            food security, job creation, and climate action. The answers are
            already visible in Njombe's backyards.
          </p>
        </Section>

        <Section delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Globally, the message is the same: smallholder resilience is the
            fastest route to stability. When farmers have tools that match their
            reality, affordable, local, climate-smart, they build peace from the
            ground up.
          </p>
        </Section>

        <Section delay={0.3}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            SASSO poultry is not a charity. It's an adaptation with feathers.
            And its logic holds beyond Tanzania, from Malawi's dry plains to
            Kenya's drought zones.
          </p>
        </Section>

        <Section delay={0.4}>
          <p className="text-lg leading-relaxed text-slate-700 mb-12">
            In a world searching for big climate solutions, it's time to invest
            in the small ones that work.
          </p>
        </Section>

        {/* Section: Before the Rain Returns */}
        <Section>
          <h2 className="text-3xl  font-bold text-slate-900 mb-6 mt-16">
            Before the Rain Returns
          </h2>
        </Section>

        <Section delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            The rains will come soon, uneven, uncertain. But this time, Njombe's
            farmers are ready. Their coops are full, their fields enriched with
            manure, their children eating eggs before school.
          </p>
        </Section>

        <Section delay={0.2}>
          <blockquote className=" border-slate-900 pl-6 py-2 mb-6 italic text-slate-700 text-lg">
            "Last year, we waited for government fertilizer," Amina says,
            shaking her head. "This year, we waited for no one."
          </blockquote>
        </Section>

        <Section delay={0.3}>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            That's the quiet revolution already underway in Tanzania's
            highlands, a movement of women, youth, and feathered resilience.
          </p>
        </Section>

        <Section delay={0.4}>
          <p className="text-lg leading-relaxed text-slate-700 mb-16">
            Each SASSO bird carries more than a meal. It carries the possibility
            that food security doesn't have to wait for global funds or
            political promises, only for someone to deliver, early and close,
            before the rain falls.
          </p>
        </Section>

        {/* Author Bio */}
        <Section>
          <motion.div
            className="mt-16 pt-8 border-t border-slate-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              About the Author
            </h3>
            <p className="text-base leading-relaxed text-slate-600">
              Ibrahim Islam is the Founder of HERVeg.05, a social enterprise in
              Tanzania that brings agricultural tools, seeds, and poultry
              directly to rural farmers through youth-led, climate-smart
              last-mile systems.
            </p>
          </motion.div>
        </Section>
      </article>
    </div>
  );
};

export default Article3;
