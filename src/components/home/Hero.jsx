import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[75vh] flex items-center justify-center bg-[#030712] overflow-hidden">

      {/* BG Gradient + Wave Texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 opacity-90"></div>

        {/* Abstract Banking Wave (similar to Dribbble) */}
        <img
          src="assets/wave-bg.png"
          alt="wave background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <p className="text-blue-200 mb-2">Trusted by 10,000+ customers</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Empowering Your Financial Growth  
            <span className="block text-blue-400">with Anand Bank NBFC</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            Flexible loans, secure investments, and transparent financial solutions  
            designed to help individuals and businesses move forward with confidence.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition shadow-lg">
              Apply Now
            </button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg backdrop-blur-sm transition">
              Learn More
            </button>
          </div>

          {/* Bottom Trusted Logos */}
          {/* Trusted Logos */}
<div className="mt-10">
  <p className="text-sm text-gray-200 mb-3 opacity-80">
    Trusted by businesses & customers
  </p>

      <div className="flex items-center gap-6 opacity-100">
    <img src="assets/chime.png" className="h-10 w-auto" alt="chime" />
    <img src="assets/quapital.png" className="h-10 w-auto" alt="qapital" />
    <img src="assets/flare.png" className="h-10 w-auto" alt="flare" />
      </div>
</div>

        </motion.div>

        {/* RIGHT • FLOATING CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center md:justify-end"
        >

          {/* CARD 1 */}
          <motion.img
            src="assets/card-blue.png"
            className="w-48 md:w-60 rounded-xl shadow-2xl absolute top-0 right-6 rotate-[-5deg]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />

          {/* CARD 2 */}
          <motion.img
            src="assets/card-orange-1.png"
            className="w-44 md:w-56 rounded-xl shadow-2xl absolute top-20 right-20 rotate-[6deg]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          />

          
        </motion.div>
      </div>
    </section>
  );
}
