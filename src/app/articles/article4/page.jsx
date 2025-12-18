"use client";

import React from "react";
import { motion } from "framer-motion";

const ArticleComponent = () => {
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
    <div className="min-h-screen md:mt-20">
      <article className="container mx-auto px-6 py-12 md:py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Six Steps to Change Farming Forever: How USSD Puts Power in Farmers'
            Hands
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 italic"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            By Ibrahim Islam, Founder of HERVeg.05
          </motion.p>
        </motion.div>

        {/* Article Body */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Section 1 */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Farming Challenge in Tanzania and East Africa
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Farming is the main source of income for millions of smallholder
                farmers in Tanzania and across Sub-Saharan Africa. Yet, many
                still struggle to make a decent living. For instance, in Rwanda,
                agriculture makes up over 30% of the country's GDP, but most
                farmers work on less than one hectare of land. They face
                challenges such as limited access to quality seeds, credit,
                farming advice, and reliable markets. Many depend on costly
                middlemen to sell their crops. The problem worsens after
                harvest; many farmers spend most of their income immediately,
                leaving little for savings or future investments. In Tanzania,
                surveys show that up to 70% of smallholder farmers spend over
                80% of their harvest income within three months, pushing them
                back into debt before the next season.
              </p>
              <p>
                This challenge is amplified by a lack of digital access and the
                increasing threat of climate change, which undermines
                traditional farming methods. According to recent data, food
                insecurity remains a significant issue in the region, with
                millions lacking consistent access to nutritious food. In the
                face of unpredictable weather patterns and extreme events,
                resilient and sustainable agricultural practices are no longer a
                choice but a necessity for survival.
              </p>
              <p>
                Meanwhile, digital tools that could help farmers are often out
                of reach. In 2023, only 27% of mobile users in Sub-Saharan
                Africa accessed mobile internet, and smartphone penetration in
                Tanzania is about 35%. This means most farmers still use basic
                feature phones, not internet-enabled devices. To break this
                cycle, farmers need solutions that work with what they already
                have. That's where USSD comes in.
              </p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Is USSD and Why Does It Matter?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                USSD (Unstructured Supplementary Service Data) is a simple
                mobile technology that works on all phones, even basic feature
                phones. By dialing shortcodes like *123# farmers can access
                menus to save money, buy seeds and fertilizers, receive farming
                tips, or make payments — all without the internet or apps.
              </p>
              <p>
                USSD offers a low-cost, inclusive ag-tech solution that bridges
                the digital divide for rural farmers, enabling last-mile digital
                finance and climate-smart micro-investment without requiring
                internet access or smartphones. This makes it ideal for rural
                areas where internet access is low and smartphones are scarce.
                Across Africa, USSD is already used for mobile banking, bill
                payments, and crop insurance. At HERVeg.05, we use it to reach
                farmers directly and make essential services simple and
                accessible.
              </p>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why HERVeg.05 Uses USSD: The Case for Inclusion and Impact
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We chose USSD for five key reasons:
            </p>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="pl-6  border-green-500">
                <p className="font-semibold text-gray-900 mb-2">
                  1. Wide Accessibility:
                </p>
                <p>
                  Many farmers in Tanzania still use basic mobile phones instead
                  of smartphones. According to a study in Kagera, Tanzania,
                  smartphone ownership is low in rural areas, with many farmers
                  relying on feature phones for communication and information
                  access. USSD works on all mobile phones, ensuring that farmers
                  without internet access or smartphones can still benefit from
                  our services.
                </p>
              </div>
              <div className="pl-6  border-green-500">
                <p className="font-semibold text-gray-900 mb-2">
                  2. Easy Mobile Payments:
                </p>
                <p>
                  Tanzania has a high adoption rate of mobile money services
                  like M-Pesa, which allow users to send and receive money using
                  their mobile phones. USSD is integrated into these mobile
                  money platforms, enabling farmers to make small, frequent
                  payments for services without needing a bank account.
                </p>
              </div>
              <div className="pl-6  border-green-500">
                <p className="font-semibold text-gray-900 mb-2">
                  3. User-Friendly Interface:
                </p>
                <p>
                  USSD menus are simple and do not require internet access,
                  making them suitable for users with limited literacy or poor
                  network coverage. This simplicity ensures that farmers can
                  easily navigate and use the services without technical
                  difficulties.
                </p>
              </div>
              <div className="pl-6  border-green-500">
                <p className="font-semibold text-gray-900 mb-2">
                  4. Proven Success:
                </p>
                <p>
                  Our data shows that USSD is effective in engaging farmers. For
                  instance, Tigo Kilimo, a similar service in Tanzania, reached
                  over 400,000 subscribers by providing agricultural information
                  via USSD. This demonstrates that USSD can successfully deliver
                  valuable information to a large number of farmers.
                </p>
              </div>
              <div className="pl-6  border-green-500">
                <p className="font-semibold text-gray-900 mb-2">
                  5. Supporting Sustainable Agriculture:
                </p>
                <p>
                  USSD allows us to deliver micro-lessons on climate-smart
                  farming practices, these lessons cover topics like application
                  of organic fertilizer, soil fertility, crop rotation, and pest
                  management. Farmers can access the lessons at any time,
                  allowing them to learn at their own pace, or they can opt to
                  receive scheduled tips and reminders tailored to the growing
                  season. Additionally, by offering bundled input packages, we
                  support farmers in enhancing household nutrition and income.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              With these advantages, here's how HERVeg.05 brings USSD to
              farmers' lives.
            </p>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The HERVeg.05 USSD Experience: Simple Steps, Big Impact
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                After registering through our village agent, farmers are given a
                unique ID number that identifies them individually. With this
                ID, they can start paying for their package including 5 or 10
                one month fully vaccinated SASSO chickens, vegetable and
                biofortified maize seeds immediately from anywhere, with any
                amount they have, and it takes less than a minute to get
                started. If they sell some harvest or earn from a side job, they
                can easily put part of that money toward their layaway using
                USSD, which is free and has no extra cost. Farmers often feel
                empowered and relieved because the process is so simple and
                quick, giving them control over their farming plans. This
                one-minute USSD interaction empowers farmers to take control of
                their financial planning, enabling flexible micro-payments
                toward climate-resilient input bundles—laying the foundation for
                long-term food security and economic stability.
              </p>
              <p>
                This simple process is a key part of our theory of change: by
                providing flexible, accessible savings and payment options, we
                empower farmers to invest in quality inputs that directly lead
                to improved yields, better nutrition, and increased income,
                breaking the cycle of poverty and food insecurity.
              </p>
            </div>

            {/* Stats Box */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 my-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Our data shows strong engagement:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>
                    <strong>Average transaction per farmer per month:</strong> 4
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>
                    <strong>Average investment per farmer:</strong> 45,000 TZS
                    (~$17.22)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>
                    <strong>Menu completion rate:</strong> 96%
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>
                    <strong>Women and youth participation:</strong> 72% women;
                    54% youth
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>
                    <strong>Average time to complete a goal:</strong> 23 days
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>
                    <strong>On-time delivery rate:</strong> 94%
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>
                    <strong>Repeat purchases within 90 days:</strong> 91%
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-6 leading-relaxed">
                These numbers prove that farmers return often, can afford small
                top-ups, and trust the system.
              </p>
            </motion.div>

            <div className="bg-green-50  border-green-500 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold italic">
                How the platform works (farmer view)
              </p>
              <p className="text-gray-700 mt-2">
                Can you believe one of the simplest ways to fight climate
                change, malnutrition, and poverty can start with these six quick
                steps?
              </p>
            </div>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Competitive Edge: Why USSD Beats Apps and Other Channels
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unlike smartphone apps requiring expensive devices, data plans,
              and digital skills, USSD offers a superior solution for rural
              areas. The following tables highlight key advantages:
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              USSD's interoperability with native mobile money systems is a key
              advantage, creating a seamless, low-cost digital ecosystem for the
              financially excluded.
            </p>
          </motion.section>

          {/* Section 6 - Farmer Story */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From Farmer Voices: USSD in Action
            </h2>
            <motion.div
              className="bg-liear-to-r from-green-50 to-blue-50 rounded-lg p-8 shadow-md"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Lucy, a 37-year-old farmer in Njombe, once struggled to buy
                  quality seeds because she couldn't afford large lump-sum
                  payments. Using HERVeg.05's USSD layaway, she started topping
                  up with as little as 1,500 TZS at a time. Within three weeks,
                  she had fully paid for her Veg + Poultry bundle.
                </p>
                <p>
                  Her package—10 SASSO chicks and a set of vegetable seeds—was
                  delivered directly to her village. With the chicks growing and
                  vegetables thriving, Amina now feeds her family better and
                  sells the surplus at the local market. She's already saving
                  again for her second package.
                </p>
                <p>
                  Lucy's story is a powerful example of how our bundles improve
                  household nutrition. The poultry provides a consistent source
                  of protein and eggs, while the vegetables diversify the
                  family's diet. This not only directly tackles malnutrition but
                  also creates a new income stream from selling the surplus,
                  leading to a significant increase in her household's economic
                  resilience.
                </p>
                <p className="font-semibold text-gray-900 italic">
                  Her story reflects the wider trend: small, frequent steps made
                  possible by USSD are unlocking big opportunities for rural
                  farmers.
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Section 7 */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Challenges and Future Directions
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>While USSD brings inclusion, challenges remain:</p>
              <div className="pl-6 space-y-2">
                <p>
                  • Network reliability varies, sometimes interrupting sessions.
                </p>
                <p>
                  • Menu design must remain simple for low-literacy users to
                  avoid drop-offs.
                </p>
                <p>
                  • Scaling requires continuous investment and partnerships with
                  mobile operators.
                </p>
              </div>
              <p>
                We are actively refining menus, integrating SMS follow-ups, and
                piloting chatbot technologies to complement USSD, enhancing
                farmer interaction and autonomy.
              </p>
              <p>
                Our long-term vision is to scale this model to reach 50,000
                farmers across new regions in Tanzania within the next three
                years. This will be achieved by leveraging our proven village
                agent network and forging strategic partnerships with mobile
                operators and agricultural input suppliers. We will also
                introduce new, climate-smart bundles featuring drought-resistant
                seeds and more efficient irrigation tools to directly combat the
                effects of climate change.
              </p>
            </div>
          </motion.section>

          {/* Section 8 */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Looking Ahead: Scaling Digital Inclusion for Farmers
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Even though more people are getting smartphones, many farmers
                still cannot afford them or don't know how to use them. This
                means USSD will stay an important tool for farming for many
                years. HERVeg.05 shows that simple tools can still make a big
                difference in people's lives. In the future, the platform could
                give farmers useful information like crop prices, weather
                updates, insurance options, new seeds, and tips from other
                farmers.
              </p>
              <p className="font-semibold text-gray-900">
                For donors, policymakers, and private sector players, the call
                is clear: support USSD-powered platforms as an effective bridge
                to climate-smart farming, digital finance, and equitable access.
                Together, we can ensure no farmer is left behind in the digital
                revolution.
              </p>
            </div>
          </motion.section>

          {/* Author Section */}
          <motion.section
            variants={fadeInUp}
            className="border-t-2 border-gray-200 pt-8 mt-12"
          >
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">About the Author:</strong>{" "}
                Ibrahim Islam is the Founder & CEO of HERVeg.05, a social
                enterprise empowering rural women farmers in Tanzania through
                climate-smart agriculture, mobile layaway savings, and doorstep
                delivery of farm essentials.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <em>
                  Written with support from Donna Rosa, HERVeg.05 Business
                  Development Advisor. Her background mentoring entrepreneurs
                  through IAFN-FAO, VC4A, YALI, and Partners in Food Solutions
                  brings invaluable expertise in scaling strategies and
                  practical business design, ensuring the approach resonates
                  both locally and globally.
                </em>
              </p>
            </div>
          </motion.section>
        </motion.div>
      </article>
    </div>
  );
};

export default ArticleComponent;
