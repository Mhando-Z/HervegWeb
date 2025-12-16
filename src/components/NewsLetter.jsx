"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  
  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <section className="py-20 bg-linear-to-t from-[#1a4d3a] to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-xl mb-3 font-light">
              Stay connected. See the impact.
            </p>
            <p className="text-lg mb-10 opacity-90">
              Get real stories from the field and updates on how your support
              changes lives.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-full border border-gray-100 text-gray-100 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                />
                <button
                  type="submit"
                  className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
