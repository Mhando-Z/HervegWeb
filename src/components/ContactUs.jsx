"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex container items-center justify-center p-4">
      <div className=" w-full  rounded-3xl  overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Section - Form */}
          <motion.div
            className="p-8 md:p-12 bg-white rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Farmer Illustration */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="relative ">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  className="drop-shadow-lg"
                >
                  {/* Farmer illustration */}
                  <ellipse
                    cx="100"
                    cy="185"
                    rx="40"
                    ry="8"
                    fill="#2c3e50"
                    opacity="0.2"
                  />
                  {/* Boots */}
                  <rect
                    x="75"
                    y="160"
                    width="20"
                    height="25"
                    rx="3"
                    fill="#2c3e50"
                  />
                  <rect
                    x="105"
                    y="160"
                    width="20"
                    height="25"
                    rx="3"
                    fill="#2c3e50"
                  />
                  {/* Pants */}
                  <rect x="75" y="100" width="20" height="65" fill="#f1c40f" />
                  <rect x="105" y="100" width="20" height="65" fill="#f1c40f" />
                  <rect x="75" y="95" width="50" height="10" fill="#f1c40f" />
                  {/* Overalls */}
                  <rect
                    x="80"
                    y="70"
                    width="40"
                    height="40"
                    rx="5"
                    fill="#f39c12"
                  />
                  <rect x="85" y="70" width="8" height="35" fill="#e67e22" />
                  <rect x="107" y="70" width="8" height="35" fill="#e67e22" />
                  {/* Arms */}
                  <rect
                    x="55"
                    y="75"
                    width="15"
                    height="45"
                    rx="7"
                    fill="#f39c12"
                  />
                  <rect
                    x="130"
                    y="75"
                    width="15"
                    height="45"
                    rx="7"
                    fill="#f39c12"
                  />
                  {/* Hands */}
                  <circle cx="62" cy="125" r="8" fill="#ffcc99" />
                  <circle cx="138" cy="125" r="8" fill="#ffcc99" />
                  {/* Tool handle */}
                  <rect
                    x="130"
                    y="60"
                    width="6"
                    height="80"
                    rx="3"
                    fill="#8b4513"
                    transform="rotate(-25 133 100)"
                  />
                  {/* Tool head */}
                  <path
                    d="M 160 45 L 180 55 L 175 65 L 155 55 Z"
                    fill="#95a5a6"
                  />
                  {/* Neck */}
                  <rect
                    x="92"
                    y="60"
                    width="16"
                    height="12"
                    rx="3"
                    fill="#ffcc99"
                  />
                  {/* Head */}
                  <circle cx="100" cy="50" r="20" fill="#ffcc99" />
                  {/* Hair */}
                  <path
                    d="M 85 45 Q 80 35 85 30 Q 90 25 100 25 Q 110 25 115 30 Q 120 35 115 45"
                    fill="#5d4037"
                  />
                  {/* Hat */}
                  <ellipse cx="100" cy="32" rx="28" ry="8" fill="#d4a574" />
                  <rect
                    x="88"
                    y="28"
                    width="24"
                    height="10"
                    rx="3"
                    fill="#d4a574"
                  />
                  <ellipse cx="100" cy="28" rx="12" ry="6" fill="#c49563" />
                  {/* Face */}
                  <circle cx="92" cy="48" r="3" fill="#2c3e50" />
                  <circle cx="108" cy="48" r="3" fill="#2c3e50" />
                  <path
                    d="M 95 58 Q 100 60 105 58"
                    stroke="#2c3e50"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-green-600 font-handwriting text-xl mb-2 text-center">
                Have Questions?
              </p>
              <h2 className="text-4xl font-bold font-roboto text-gray-900 mb-8 text-center">
                Send us a message
              </h2>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                whileFocus={{ scale: 1.02 }}
                required
              />

              <div className="grid md:grid-cols-2 gap-4">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.textarea
                name="message"
                placeholder="Tell Us About Project *"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                whileFocus={{ scale: 1.02 }}
                required
              />

              <motion.button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Get In Touch
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Section - Contact Info */}
          <motion.div
            className="p-8 md:p-12 bg-gray-50 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Contact
                <br />
                Information
              </h2>

              <p className="text-gray-600 mb-12 leading-relaxed">
                If you have any questions or are interested in getting involved,
                please don't hesitate to reach out to us using the contact
                information provided.
              </p>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-700">59101 Njombe Mjini, Tanzania</p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Official Email
                  </h3>
                  <a
                    href="mailto:info@herveg.org"
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    info@herveg.org
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
