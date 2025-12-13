"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// social medial icons
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import logo from "../../public/whitelogo.png";
import tractor from "../../public/tractor23.png";
// icons
import { GoMail } from "react-icons/go";
import { BsHouseDoor } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      className="relative py-12 bg-[#1a4d3a] text-white overflow-hidden"
      initial={{ opacity: 1, y: 100 }}
      viewport={{ once: true }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background illustration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute bottom-0 right-20 w-lg h-96">
          <Image
            src={tractor}
            alt="farmer on a tractor"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-16">
          {/* Logo and Mission */}
          <div className="flex flex-col">
            <Image
              src={logo}
              alt="HERVeg.05 Logo"
              className="mb-6 h-auto w-[180px]"
            />
            <p className="text-sm leading-relaxed max-w-sm">
              Our mission is to combat malnutrition and promote sustainable
              agriculture in rural farming communities of Tanzania.
            </p>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/aboutus/whoweare/"
                  className="hover:text-green-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/career/"
                  className="hover:text-green-300 transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/donate/"
                  className="hover:text-green-300 transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus/successstories/"
                  className="hover:text-green-300 transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus/ourimpact/"
                  className="hover:text-green-300 transition-colors"
                >
                  HERVeg.05 Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-full shrink-0">
                  <BsHouseDoor className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">ADDRESS:</p>
                  <p className="text-sm">59101 Njombe Mjini, Tanzania</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-full shrink-0">
                  <GoMail className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">EMAIL:</p>
                  <p className="text-sm">info@herveg.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-12 border-t border-green-700">
          <div className="flex flex-col md:flex-row md:justify-between items-center justify-center text-center">
            <p className="text-sm text-gray-300">
              Copyright © {currentYear} _HERVeg.05. All Right Reserved
            </p>
            <div className="flex mt-4 text-xl sm:mt-0">
              <button className="mx-2 text-gray-200 hover:text-blue-600">
                <FaFacebook />
              </button>
              <button className="mx-2 text-gray-200 hover:text-orange-600">
                <RiInstagramFill />
              </button>
              <button className="mx-2 text-gray-200 hover:text-red-600">
                <FaYoutube />
              </button>
              <button className="mx-2 text-gray-200 hover:text-black">
                <FaSquareXTwitter />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
