"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-14 bg-zinc-200 text-center">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold tracking-tight text-zinc-900"
        >
          Stay Informed!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-zinc-800"
        >
          Subscribe to our newsletter to receive the latest news and updates about SICK.
        </motion.p>
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault();
            // Add form submission logic here (e.g., API call)
          }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-800"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
