"use client";

import { motion } from "framer-motion";
import { FaUsers, FaTools, FaSlidersH, FaKeyboard, FaMagic } from "react-icons/fa";
import { GiSkateboard } from "react-icons/gi";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-zinc-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
    >
      <div className="text-4xl text-zinc-900 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-zinc-800">{description}</p>
    </motion.div>
  );
}

export default function FutureFeaturesSection() {
  return (
    <section id="future-features" className="py-14 bg-zinc-200">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-zinc-900"
        >
          Upcoming Features
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-zinc-800"
        >
          Discover the upcoming updates that will enhance the SICK experience.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="Multiplayer"
            description="Compete against your friends and other skaters in intense multiplayer matches."
            icon={<FaUsers />}
          />
          <FeatureCard
            title="Level Editor"
            description="Create and share your own skateparks with an intuitive level editor."
            icon={<FaTools />}
          />
          <FeatureCard
            title="Customization Menu"
            description="Customize your skater's look and environment for a unique experience."
            icon={<FaSlidersH />}
          />
          <FeatureCard
            title="Customizable Controls"
            description="Tailor the controls to your play style for perfect trick execution."
            icon={<FaKeyboard />}
          />
          <FeatureCard
            title="Additional Tricks"
            description="Discover new, spectacular tricks to diversify your performance."
            icon={<FaMagic />}
          />
          <FeatureCard
            title="Grind Mechanic"
            description="Master grinds with a realistic and immersive mechanic to boost the adrenaline."
            icon={<GiSkateboard />}
          />
        </div>
      </div>
    </section>
  );
}
