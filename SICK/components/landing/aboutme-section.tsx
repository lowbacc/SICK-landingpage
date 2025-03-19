"use client";

import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

export default function AboutMeSection() {
  return (
    <section id="about-me" className="py-14 bg-zinc-200">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2"
        >
          <FaUser className="text-3xl text-zinc-900" />
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
            About Me
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg text-zinc-800"
        >
          Passionate about skateboarding and development, I have poured all my energy into this project. This skate game is the result of my passion and my desire to create an immersive experience.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg text-zinc-800"
        >
          Whether you are a skateboarding enthusiast or a passionate developer, come discover my world and share the adrenaline of every trick performed in a virtual skatepark.
        </motion.p>
      </div>
    </section>
  );
}
