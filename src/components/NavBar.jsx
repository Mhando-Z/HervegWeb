"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import {
  Home,
  Info,
  Image as ImageIcon,
  Briefcase,
  Heart,
  Award,
  Target,
  TrendingUp,
  Star,
} from "lucide-react";
import Image from "next/image";
import logo from "../../public/HerVeg.png";
import logo1 from "../../public/whitelogo.png";
import Switcher from "@/Darktheme/Switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileAboutDropdown, setMobileAboutDropdown] = useState(false);
  const pathname = usePathname();
  const [visible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const aboutSubLinks = [
    { path: "/aboutus/whoweare", label: "About Us", icon: Info },
    {
      path: "/aboutus/visionmission",
      label: "Vision & Mission",
      icon: Target,
    },
    { path: "/aboutus/successstories", label: "Success Stories", icon: Star },
    { path: "/aboutus/ourimpact", label: "Our Impact", icon: TrendingUp },
    { path: "/aboutus/awards", label: "Awards", icon: Award },
  ];

  const navLinks = [
    { point: "/", path: "/", label: "Home", icon: Home },
    {
      point: "/aboutus",
      path: "/aboutus/",
      label: "About Us",
      icon: Info,
      hasDropdown: true,
    },
    { point: "/career", path: "/career/", label: "Career", icon: Briefcase },
    { point: "/donate", path: "/donate/", label: "Donate", icon: Heart },
    { point: "/gallery", path: "/gallery/", label: "Gallery", icon: ImageIcon },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/">
                <Image
                  src={logo}
                  alt="Historical association of Tanzania Logo"
                  className={`lg:w-40 w-[120px] ${
                    visible ? "block" : "hidden"
                  }`}
                />
                <Image
                  src={
                    ["/", "/career", "/donate", "/aboutus/whoweare"].includes(
                      pathname
                    )
                      ? logo1
                      : logo
                  }
                  alt="Historical association of Tanzania Logo"
                  className={`lg:w-40 w-[120px] ${
                    visible ? "hidden" : "block"
                  }`}
                />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              className="hidden md:flex items-center gap-2 px-4 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive =
                  link.point === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.point);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      ref={dropdownRef}
                    >
                      <motion.button
                        onClick={() => setAboutDropdown(!aboutDropdown)}
                        className="relative px-5 py-2 rounded-full cursor-pointer text-sm font-medium transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute inset-0 bg-linear-to-r from-green-500 to-green-600 rounded-full shadow-lg"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}

                        {!isActive && (
                          <motion.div
                            className="absolute inset-0 bg-linear-to-r from-green-400/20 to-green-600/20 rounded-full opacity-0"
                            whileHover={{ opacity: 1 }}
                          />
                        )}

                        <span
                          className={`relative z-10 flex items-center gap-2 ${
                            isActive
                              ? "text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {link.label}
                          <FiChevronDown
                            className={`w-3 h-3 transition-transform duration-200 ${
                              aboutDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </motion.button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {aboutDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-2 left-0 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-xl"
                          >
                            {aboutSubLinks.map((subLink, idx) => {
                              const SubIcon = subLink.icon;
                              const isSubActive = pathname === subLink.path;

                              return (
                                <Link
                                  key={subLink.label}
                                  href={subLink.path}
                                  onClick={() => setAboutDropdown(false)}
                                >
                                  <motion.div
                                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                                      isSubActive
                                        ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                    }`}
                                    whileHover={{ x: 4 }}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <SubIcon className="w-4 h-4" />
                                    <span className="text-sm font-medium">
                                      {subLink.label}
                                    </span>
                                  </motion.div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link key={link.label} href={link.path}>
                    <motion.button
                      className="relative px-5 py-2 rounded-full cursor-pointer text-sm font-medium transition-colors duration-200"
                      initial={{ opacity: 1, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-linear-to-r from-green-500 to-green-600 rounded-full shadow-lg"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-green-400/20 to-green-600/20 rounded-full opacity-0"
                          whileHover={{ opacity: 1 }}
                        />
                      )}

                      <span
                        className={`relative z-10 flex items-center gap-2 ${
                          isActive
                            ? "text-white"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </span>

                      {!isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 h-0.5 bg-linear-to-r from-green-500 to-green-600"
                          initial={{ width: 0, x: "-50%" }}
                          whileHover={{ width: "80%" }}
                        />
                      )}
                    </motion.button>
                  </Link>
                );
              })}
            </motion.div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <motion.div
                className="hidden md:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Switcher />
              </motion.div>

              {/* Mobile toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                    >
                      <FiX className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -90 }}
                    >
                      <FiMenu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <motion.div
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive =
                    (pathname.startsWith(link.point) && link.point !== "/") ||
                    pathname === link.point;

                  if (link.hasDropdown) {
                    return (
                      <div key={link.label}>
                        <motion.div
                          onClick={() =>
                            setMobileAboutDropdown(!mobileAboutDropdown)
                          }
                          className={`flex items-center justify-between gap-3 p-3 rounded-xl mb-2 cursor-pointer ${
                            isActive
                              ? "bg-green-600 text-white"
                              : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                          whileTap={{ scale: 0.97 }}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5" />
                            {link.label}
                          </div>
                          <FiChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileAboutDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </motion.div>

                        <AnimatePresence>
                          {mobileAboutDropdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mb-2 overflow-hidden"
                            >
                              {aboutSubLinks.map((subLink) => {
                                const SubIcon = subLink.icon;
                                const isSubActive = pathname === subLink.path;

                                return (
                                  <Link
                                    key={subLink.label}
                                    href={subLink.path}
                                    onClick={() => {
                                      setOpen(false);
                                      setMobileAboutDropdown(false);
                                    }}
                                  >
                                    <motion.div
                                      className={`flex items-center gap-3 p-3 rounded-xl mb-1 ${
                                        isSubActive
                                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                      }`}
                                      whileTap={{ scale: 0.97 }}
                                    >
                                      <SubIcon className="w-4 h-4" />
                                      <span className="text-sm">
                                        {subLink.label}
                                      </span>
                                    </motion.div>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.path}
                      onClick={() => setOpen(false)}
                    >
                      <motion.div
                        className={`flex items-center gap-3 p-3 rounded-xl mb-2 ${
                          isActive
                            ? "bg-green-600 text-white"
                            : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Icon className="w-5 h-5" />
                        {link.label}
                      </motion.div>
                    </Link>
                  );
                })}

                {/* Mobile Theme Switcher */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between px-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Theme
                    </span>
                    <Switcher />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default NavBar;
