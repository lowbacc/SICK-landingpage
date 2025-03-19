"use client";

import { motion } from "framer-motion";
import { GiSkateboard } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section id="hero" className="py-14 bg-zinc-200">
      <div className="h-[500px] flex items-center justify-center rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-4 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-4 flex justify-center"
          >
            <GiSkateboard className="text-5xl text-zinc-900" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 mb-6"
          >
            Ride the Revolution in Skateboarding
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-zinc-800 max-w-2xl mx-auto"
          >
            Immerse yourself in a world where every trick brings you closer to the pinnacle. Developed with passion, SICK offers you a one-of-a-kind skateboarding experience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
