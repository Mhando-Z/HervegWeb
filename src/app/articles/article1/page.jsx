"use client";

import React from "react";
import { motion } from "framer-motion";

const Article1 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
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

  return (
    <div className="min-h-screen md:mt-20 bg-linear-to-b from-slate-50 to-white">
      <article className="container mx-auto px-6 py-12 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h2
            className="text-2xl font-bold lg:text-5xl  text-emerald-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            How Women Farmers Are Saving Their Way to Food Security
          </motion.h2>

          <motion.h1
            className="text-xl lg:text-xl font-bold text-slate-900 mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No Loans. No Debt. Just Results
          </motion.h1>

          <motion.p
            className="text-lg text-slate-600 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            By Ibrahim Islam, Founder of HERVeg.05
          </motion.p>

          <motion.blockquote
            className="border-l-4 border-emerald-500 pl-6 py-4 my-8 bg-emerald-50 rounded-r-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-xl italic text-slate-700 leading-relaxed">
              "This is the first time I planted with what I owned. I feel like a
              real farmer now."
            </p>
            <p className="text-sm text-slate-600 mt-3 font-medium">
              — Ritha Juma, 43, mother of 3, Wanging'ombe District
            </p>
          </motion.blockquote>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          {/* Section 1 */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              The Root of the Problem: Financial Exclusion for Rural Farmers
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed">
              When people think about financial inclusion in rural Africa, the
              image that often comes to mind is one of sleek fintech apps,
              digital wallets, or readily available micro-loans. However, for
              millions of smallholder farmers, particularly women and youth, the
              real challenges are fundamental:
            </p>

            <div className="bg-slate-50 rounded-lg p-6 space-y-3 border-l-4 border-slate-300">
              <p className="text-slate-700">
                <span className="font-semibold text-slate-900">
                  No bank accounts:
                </span>{" "}
                Traditional financial institutions are often inaccessible or
                impractical.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-slate-900">
                  No collateral:
                </span>{" "}
                The lack of assets makes it impossible to secure loans.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-slate-900">
                  No steady income:
                </span>{" "}
                Farming income is seasonal and unpredictable, making financial
                planning difficult.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-slate-900">
                  No safe way to save:
                </span>{" "}
                Without secure options, any small earnings are vulnerable to
                loss or immediate expenditure.
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              This lack of a safe place to save income traps farmers in a
              vicious cycle. They are often forced to borrow seeds, skip entire
              planting seasons, or fall into informal, high-interest debts that
              keep them in perpetual survival mode. In Sub-Saharan Africa, over
              350 million adults remain financially excluded. The situation is
              particularly stark in rural Tanzania, where fewer than 2 in 10
              women have access to formal savings or credit services. This means
              that for the majority, practices like keeping cash under the
              mattress, relying on risky group loans, or engaging in informal
              borrowing remain the norm.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              At HERVeg.05, we focus on empowering the women and youth who
              cultivate food on small plots, often no larger than a backyard.
              These farmers contend with the triple threats of climate change,
              financial exclusion, and chronic malnutrition. Specifically in
              Tanzania:
            </p>

            <div className="bg-amber-50 rounded-lg p-6 space-y-3 border-l-4 border-amber-400">
              <p className="text-slate-700">
                <span className="font-semibold text-slate-900">30%</span> of
                children under five suffer from stunting due to inadequate
                nutrition.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-slate-900">20–40%</span> of
                potential crop yield is lost each year because of erratic
                rainfall and poor-quality inputs.
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              Even when farmers understand the need for better resources, like
              improved seeds, poultry, or hands-on training, they frequently
              cannot afford the upfront costs. Furthermore, when they do earn
              income, typically right after harvest, there is no secure method
              to retain those earnings.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Research indicates that up to{" "}
              <span className="font-semibold text-slate-900">
                80% of smallholder income is spent within just 60 days of
                harvest
              </span>
              . By the time the next planting season arrives, the money is gone,
              perpetuating the cycle of borrowing and dependence.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              The Trap: Why Women Farmers Stay Stuck
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed">
              Building on the pervasive issue of financial exclusion, it's
              crucial to understand why this problem disproportionately impacts
              and ensnares women farmers. The challenges discussed above
              highlight a critical truth: while financial inclusion initiatives
              often focus on digital tools, for millions of smallholder women
              farmers, the deeper trap lies in systemic barriers that prevent
              them from even beginning to build financial stability.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              The core reasons why women farmers remain stuck are multifaceted:
            </p>

            <div className="bg-rose-50 rounded-lg p-6 space-y-4 border-l-4 border-rose-400">
              <div>
                <p className="font-semibold text-slate-900 mb-2">
                  Limited Autonomy:
                </p>
                <p className="text-slate-700">
                  In many households men frequently control financial decisions,
                  even though women perform the majority of the agricultural
                  labor, from planting and watering to harvesting. This means
                  women often don't have direct control over the very income
                  they help generate.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900 mb-2">
                  Lack of Access to Formal Services:
                </p>
                <p className="text-slate-700">
                  As noted, in Tanzania fewer than 2 in 10 women have access to
                  formal financial services. This isn't just about not having a
                  bank account; it's about the absence of secure ways to save
                  what little they earn and the inability to access affordable
                  credit for farm inputs or household needs.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900 mb-2">
                  Reliance on Risky Alternatives:
                </p>
                <p className="text-slate-700">
                  Without formal options, women are forced into precarious
                  financial strategies. This includes relying on cash under the
                  mattress, which is vulnerable to theft or immediate
                  expenditure, or engaging in risky group loans and informal
                  borrowing that can lead to deeper debt cycles.
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              This power imbalance and the specific lack of financial control
              for women directly undermine food security and household
              resilience. When women cannot manage their own earnings or save
              for future needs, their families' well-being and the productivity
              of their farms suffer, reinforcing a continuous cycle of survival
              rather than growth.
            </p>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              The Shift: A Mobile Layaway Model That Works
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed">
              Instead of loans, we asked: What if farmers could save, safely,
              flexibly, and on their own terms? That led to a different
              approach, one rooted in behavior change, not credit:
            </p>

            <div className="bg-emerald-50 rounded-lg p-8 border-2 border-emerald-200">
              <div className="space-y-2 text-lg">
                <p className="text-emerald-900 font-semibold">✓ No loans.</p>
                <p className="text-emerald-900 font-semibold">✓ No interest.</p>
                <p className="text-emerald-900 font-semibold">
                  ✓ No apps or internet needed.
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              HerVeg.05 designed a secure way to gradually save for farm
              essentials using what rural women already trust: basic mobile
              phones and USSD codes. Instead of creating debt it builds dignity,
              control, and long-term resilience.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              We built this savings system for real farmers that works with
              their lives, not against them.
            </p>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              How It Works — Simple, Familiar, Farmer-First
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed">
              Our mobile layaway system lets women save small amounts weekly,
              starting from just TZS 2,000 ($1), toward a pre-selected farm
              package. No smartphones. No apps. Just the same simple mobile
              menus they already use for airtime and money transfers.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              It's fast, safe, and familiar. Farmers dial{" "}
              <span className="font-mono bg-slate-100 px-2 py-1 rounded text-emerald-700 font-semibold">
                *150*00#
              </span>{" "}
              follow 3–4 voice prompts, and their payment is instantly encrypted
              and confirmed by SMS, like topping up airtime, but instead,
              they're building assets.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
              <p className="text-slate-700 leading-relaxed mb-3">
                <span className="font-semibold text-slate-900">Example:</span>{" "}
                Asteria Mligo saves TZS 5,000 ($3) toward her chicken package in
                under 60 seconds and gets this message:
              </p>
              <div className="bg-white rounded p-4 font-mono text-sm text-slate-800 shadow-sm">
                "Confirmed! Your HERVeg savings: TZS 5,000. Total saved: TZS
                5,000/32,500."
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              Her money stays secure, protected from theft, misuse, or household
              pressure. And when she completes her goal, she's not a borrower.
              She's an owner, with proof of discipline and a harvest she
              controls. Asteria tracks her progress and builds confidence, one
              payment and one step closer to self-reliance.
            </p>

            <div className="bg-linear-to-r from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200">
              <p className="text-lg font-semibold text-slate-900 mb-4">
                Each package includes:
              </p>
              <div className="space-y-3">
                <p className="text-slate-700">
                  <span className="font-semibold">
                    Biofortified maize seeds
                  </span>{" "}
                  – rich in Vitamin A, for better nutrition and yields
                </p>
                <p className="text-slate-700">
                  <span className="font-semibold">Vegetable seeds</span> – like
                  kale and beetroot, fast-growing and nutrient-dense
                </p>
                <p className="text-slate-700">
                  <span className="font-semibold">
                    5 vaccinated month-old SASSO chickens
                  </span>{" "}
                  – hardy, dual-purpose birds for eggs and meat
                </p>
                <p className="text-slate-700">
                  <span className="font-semibold">Hands-on training</span> –
                  personalized coaching in organic farming and poultry care
                </p>
                <p className="text-slate-700">
                  <span className="font-semibold">Last-mile delivery</span> –
                  timed just before the rains hit
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Real Farmer Story: Ritha
            </h3>

            <div className="bg-amber-50 rounded-lg p-8 border-l-4 border-amber-500">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Ritha Kilasi, a 43-year-old mother of three from Ihalula village
                in Njombe, had never planted with her own resources. Every
                season, she borrowed seeds and repaid with her harvest, often
                leaving her with nothing.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                This time Ritha saved small amounts over two months using our
                mobile layaway system. Just before the rains we delivered her
                full farm package. Four months later, she had a thriving kitchen
                garden, eggs on the table, and zero debt.
              </p>

              <blockquote className="border-l-4 border-amber-600 pl-4 my-6">
                <p className="text-xl italic text-slate-800 leading-relaxed">
                  "I used to plant with fear, knowing I'd owe someone at
                  harvest. Now I grow with pride—this garden is fully mine,"
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  she says with a smile.
                </p>
              </blockquote>

              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Her children now eat fresh vegetables daily, and neighbors are
                asking how they can start too.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Stories like Ritha's show what's possible when women are given
                the right tools—and trusted to lead.
              </p>
            </div>
          </motion.section>

          {/* Section 6 */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Impact by the Numbers
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed">
              Across 1,200+ women farmers using the system, results speak for
              themselves:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg p-6 text-white shadow-lg">
                <p className="text-5xl font-bold mb-2">87%</p>
                <p className="text-emerald-100">
                  report improved food availability at home
                </p>
              </div>

              <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg p-6 text-white shadow-lg">
                <p className="text-5xl font-bold mb-2">64%</p>
                <p className="text-blue-100">
                  generate surplus they can sell locally
                </p>
              </div>

              <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg p-6 text-white shadow-lg">
                <p className="text-5xl font-bold mb-2">30%</p>
                <p className="text-amber-100">
                  average increase in household income (within one season)
                </p>
              </div>

              <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg p-6 text-white shadow-lg">
                <p className="text-5xl font-bold mb-2">0%</p>
                <p className="text-purple-100">
                  took on debt to purchase inputs
                </p>
              </div>
            </div>

            <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
              <p className="text-lg text-slate-700 leading-relaxed">
                For every{" "}
                <span className="font-bold text-emerald-700 text-xl">
                  $1 invested
                </span>{" "}
                women farmers earn an average of{" "}
                <span className="font-bold text-emerald-700 text-xl">
                  $3.50 in income uplift
                </span>
                , while gaining access to training, inputs, and a stable food
                supply, all without borrowing a cent.
              </p>
            </div>

            <p className="text-xl text-slate-900 leading-relaxed font-semibold text-center mt-6">
              This isn't microcredit. It's micro-ownership, and it works.
            </p>
          </motion.section>

          {/* Section 7 */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              What We're Learning on the Ground
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed">
              Rural innovation isn't about fancy tech, it's about fit. What's
              proving most effective is using tools farmers already know, like
              USSD codes and trusted mobile money platforms.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              But simplicity can mask complexity. For example:
            </p>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-slate-400">
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">
                    Transaction fees
                  </span>{" "}
                  from some mobile networks eat into savings, up to 10% on small
                  deposits. We switched providers to ensure fairness and
                  transparency.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-slate-400">
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">
                    Network coverage gaps
                  </span>{" "}
                  leave some regions excluded entirely. We now geo-map areas in
                  advance and only partner with agents who have local reach and
                  float.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-slate-400">
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">
                    Life interruptions
                  </span>{" "}
                  like income shocks or family emergencies mean about 18% of
                  farmers pause mid-season. Yet most resume within 1–2 months,
                  proving that flexible, humane systems outperform rigid ones.
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Ultimately, success isn't about the tools; it's about trust,
              timing, and making the system feel like it was built for them.
              Because it was.
            </p>
          </motion.section>

          {/* Section 8 */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why We're Different
            </h3>

            <p className="text-lg text-slate-700 leading-relaxed">
              Most rural finance programs follow a familiar playbook:
              microloans, group lending, or smartphone apps. But for women in
              rural Tanzania, that model rarely works. Why?
            </p>

            <div className="bg-red-50 rounded-lg p-6 space-y-3 border-l-4 border-red-400">
              <p className="text-slate-700">
                Only <span className="font-semibold text-slate-900">38%</span>{" "}
                of rural women in sub-Saharan Africa can access formal credit.
              </p>
              <p className="text-slate-700">
                Default rates on smallholder loans range from{" "}
                <span className="font-semibold text-slate-900">15–40%</span>.
              </p>
              <p className="text-slate-700">
                Digital apps assume smartphone ownership, digital literacy, and
                reliable data, all out of reach for most women and youth
                farmers.
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed font-semibold">
              At HERVeg.05, we flipped the script.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              We don't offer loans. We don't push apps. We don't rely on peer
              pressure to enforce repayments. Instead, we offer a debt-free
              savings model designed for the realities of rural life, using USSD
              menus, mobile money tools like M-Pesa and Tigo Pesa, and trusted
              local agents.
            </p>

            <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-300">
              <p className="text-lg text-slate-700 leading-relaxed mb-3">
                Women choose their inputs. They save at their pace. No interest.
                No penalties. No shame.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The result? A{" "}
                <span className="font-bold text-emerald-700">
                  95%+ re-enrollment rate
                </span>
                , rising incomes, improved diets and zero loan defaults.
              </p>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              This isn't fintech for headlines. It's financial inclusion that
              works.
            </p>
          </motion.section>

          {/* Section 9 - Call to Action */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="bg-linear-to-r from-emerald-500 to-green-600 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Call to Action: Let's Grow Without Debt
              </h3>

              <p className="text-lg leading-relaxed mb-4">
                We've proven that rural women farmers need options that work for
                them. With just{" "}
                <span className="font-bold text-xl">$70,000</span>, we can scale
                this dignity-first model to{" "}
                <span className="font-bold text-xl">5,000 more farmers</span>.
              </p>

              <p className="text-lg font-semibold mb-4">
                Here's what your support delivers:
              </p>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                <p className="text-lg font-semibold mb-3">Why now?</p>
                <div className="space-y-2">
                  <p className="text-white/90">
                    ✓ 92% of farmers stick with the system once they start.
                  </p>
                  <p className="text-white/90">
                    ✓ $35 per farmer unlocks a 30% income boost — with zero
                    debt.
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-white/50 pl-4 my-6">
                <p className="text-lg italic">
                  "Before HERVeg.05, I borrowed. Now I save — and my daughters
                  go to school."
                </p>
                <p className="text-sm text-white/80 mt-2">
                  — Fatima, Njombe Rural
                </p>
              </blockquote>
            </div>
          </motion.section>

          {/* Funding Table */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        Funding Area
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Direct Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        Farm Packages
                      </td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">
                        $35,000
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        Inputs, chickens & training for 10,000 farmers
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        Last-Mile Delivery
                      </td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">
                        $20,000
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        Reach remote women before the rains in 3 new districts
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        Climate Resilience Training
                      </td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">
                        $10,000
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        Teach drought/flood adaptation to 10,000 households
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        Zero-Fee Mobile Accounts
                      </td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">
                        $5,000
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        Eliminate transaction fees for 3 years via fair mobile
                        networks
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* CTA Buttons */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              👉 Here's how to help:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="#donate"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
              >
                Donate $35 to empower one farmer → [Donate Now]
              </a>

              <a
                href="mailto:info@herveg.org"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
              >
                Partner with us as a corporate sponsor → info@herveg.org
              </a>

              <a
                href="#share"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
              >
                Share our story → #GrowWithoutDebt
              </a>
            </div>

            <p className="text-xl text-center text-slate-800 font-semibold mt-8">
              Let's build a future where women grow without borrowing — and
              thrive without compromise.
            </p>
          </motion.section>

          {/* Author Section */}
          <motion.section
            variants={fadeInUp}
            className="space-y-6 pt-8 border-t-2 border-slate-200"
          >
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                <span className="font-semibold text-slate-900">
                  About the Author:
                </span>{" "}
                Ibrahim Islam is the Founder & CEO of HERVeg.05, a social
                enterprise empowering rural women farmers in Tanzania through
                climate-smart agriculture, mobile layaway savings, and doorstep
                delivery of farm essentials.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Written with support from{" "}
                <span className="font-semibold text-slate-900">Donna Rosa</span>
                , HERVeg.05 Business Development Advisor. Her background
                mentoring entrepreneurs through IAFN-FAO, VC4A, YALI, and
                Partners in Food Solutions brings invaluable expertise in
                scaling strategies and practical business design, ensuring the
                approach resonates both locally and globally.
              </p>
            </div>
          </motion.section>

          {/* References */}
          <motion.section variants={fadeInUp} className="space-y-4 pt-6">
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              References
            </h4>
            <div className="bg-slate-50 rounded-lg p-6 space-y-2">
              <p className="text-sm text-slate-600">
                World Bank Global Findex, 2021
              </p>
              <p className="text-sm text-slate-600">
                GSMA Mobile Gender Gap Report, 2023
              </p>
              <p className="text-sm text-slate-600">FAO CSA Profile, 2022</p>
              <p className="text-sm text-slate-600">
                UNICEF Tanzania Nutrition Profile, 2022.
              </p>
              <p className="text-sm text-slate-600">CGAP & IPA, 2019</p>
            </div>
          </motion.section>
        </motion.div>
      </article>
    </div>
  );
};

export default Article1;
