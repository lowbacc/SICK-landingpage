"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic here, for example an API call.
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="pt-32 pb-14 bg-zinc-200">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-zinc-900 text-center mb-8"
        >
          Contact Us
        </motion.h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-zinc-900 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-200 text-zinc-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-zinc-900 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-200 text-zinc-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-zinc-900 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message"
              className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-200 text-zinc-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-zinc-700 text-zinc-100 font-semibold rounded-md hover:bg-zinc-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
