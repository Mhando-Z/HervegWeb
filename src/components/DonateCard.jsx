"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DonationCard() {
  const [selectedAmount, setSelectedAmount] = useState("$100");
  const [selectedFrequency, setSelectedFrequency] = useState("monthly");
  const [isAmountOpen, setIsAmountOpen] = useState(false);
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);

  const amounts = ["$50", "$100", "$500", "$1,000"];
  const frequencies = ["Monthly", "Yearly"];

  return (
    <div className="text-xs ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className=""
      >
        <div className="flex items-center gap-4 bg-emerald-600 rounded-full p-1">
          {/* Donate Label */}
          <div className="text-white font-semibold px-4 text-sm">Donate</div>

          {/* Amount Dropdown */}
          <div className="relative flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsAmountOpen(!isAmountOpen);
                setIsFrequencyOpen(false);
              }}
              className="w-full bg-white text-gray-800 font-medium py-2 px-4 rounded-lg flex items-center justify-between"
            >
              <span>{selectedAmount}</span>
              <motion.svg
                animate={{ rotate: isAmountOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {isAmountOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-full bg-white rounded-lg  z-10 overflow-hidden"
                >
                  {amounts.map((amount, index) => (
                    <motion.button
                      key={amount}
                      whileHover={{ backgroundColor: "#f0fdf4" }}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setIsAmountOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-gray-800 font-medium hover:bg-emerald-50 transition-colors border-b last:border-b-0 border-gray-100"
                    >
                      {amount}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Frequency Dropdown */}
          <div className="relative flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsFrequencyOpen(!isFrequencyOpen);
                setIsAmountOpen(false);
              }}
              className="w-full bg-white text-gray-800 font-medium py-2 px-4 rounded-lg flex items-center justify-between"
            >
              <span>{selectedFrequency}</span>
              <motion.svg
                animate={{ rotate: isFrequencyOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {isFrequencyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl z-10 overflow-hidden"
                >
                  {frequencies.map((frequency) => (
                    <motion.button
                      key={frequency}
                      whileHover={{ backgroundColor: "#f0fdf4" }}
                      onClick={() => {
                        setSelectedFrequency(frequency);
                        setIsFrequencyOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-gray-800 font-medium hover:bg-emerald-50 transition-colors border-b last:border-b-0 border-gray-100"
                    >
                      {frequency}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <Link href={"/donate"}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-700 text-white p-3 rounded-full shadow-lg"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
