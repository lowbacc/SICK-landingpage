"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="py-14 bg-zinc-200"
    >
      <div className="relative h-[500px] flex items-center justify-center rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 mb-6">
            Ride the Revolution in Skateboarding
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-800 mb-8 max-w-2xl mx-auto">
            Immerse yourself in a world where every trick brings you closer to the pinnacle. Developed with passion, SICK offers you a one-of-a-kind skateboarding experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
