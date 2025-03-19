"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { id: 1, label: "About Me", href: "#about-me" },
  { id: 2, label: "Features", href: "#future-features" },
  { id: 3, label: "Newsletter", href: "#newsletter" },
  { id: 4, label: "Contact", href: "/contact" },
];

const navItemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-100 shadow-sm z-50">
      {/* Header Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-4 flex items-center justify-between"
      >
        <Link href="/">
          <span className="text-xl font-bold text-neutral-900 cursor-pointer">
            SICK
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link key={item.id} href={item.href}>
              <motion.span
                variants={navItemVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="text-neutral-900 hover:text-neutral-900 transition-colors cursor-pointer relative"
              >
                {item.label}
                {/* Underline animation */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-neutral-900 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-neutral-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </motion.div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-neutral-800 shadow-lg z-40"
          >
            <div className="px-6 py-4 flex items-center justify-between">
              <Link href="/">
                <span
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-neutral-900 cursor-pointer"
                >
                  SICK
                </span>
              </Link>
              <button
                className="text-neutral-900 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="mt-4 space-y-4 px-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <span
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg text-neutral-100 hover:text-neutral-900 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
