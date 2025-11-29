"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Home, Info, Image as ImageIcon, BookOpen } from "lucide-react";
import Image from "next/image";
import logo from "../../public/HerVeg.png";
import Switcher from "@/Darktheme/Switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { point: "/", path: "/", label: "Home", icon: Home },
    { point: "/aboutus", path: "/aboutus/", label: "About Us", icon: Info },
    { point: "/gallery", path: "/gallery/", label: "Gallery", icon: ImageIcon },
  ];

  return (
    <>
      {/* Backdrop */}
      {/* <div
        className={`fixed top-0 left-0 w-full ${
          open ? "h-64" : "h-16 md:h-0"
        }  bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-800`}
      /> */}

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-3"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/">
                <Image
                  src={logo}
                  alt="Historical association of Tanzania Logo"
                  className="lg:w-40 w-[120px]"
                />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              className="hidden md:flex items-center gap-2 px-4 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full shadow border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive =
                  link.point === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.point);

                return (
                  <Link key={link.label} href={link.path}>
                    <motion.button
                      className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active background */}
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

                      {/* Hover effect */}
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
                className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg"
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
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border p-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.point;

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
                            : "text-gray-800 dark:text-gray-200"
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default NavBar;
