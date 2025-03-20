"use client";

import { motion } from "framer-motion";
import { MdSkateboarding } from "react-icons/md";

export default function CTAPresentationSection() {
  return (
    <section id="game-presentation" className="py-14 bg-zinc-200">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <MdSkateboarding className="text-4xl text-zinc-900" />
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
            Discover SICK, the Immersive Skate Game
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-zinc-800 mb-8 max-w-2xl mx-auto"
        >
          Step into the shoes of a skater in a vibrant, dynamic skatepark. In SICK, perform spectacular tricks and rack up points by chaining daring maneuvers. Every jump, slide, and rotation pushes your skills to the limit as you aim for the ultimate record.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <img
            src="/skate-game-screenshot.png"
            alt="Screenshot of SICK"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6"
        >
          <p className="text-lg text-zinc-800">
            Built with Unity and C#, SICK delivers smooth, intuitive gameplay that merges the adrenaline of skateboarding with the strategy of platformers. Get ready to embark on an immersive adventure where mastering tricks leads to ever-higher scores.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
