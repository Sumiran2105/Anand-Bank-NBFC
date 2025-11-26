import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative w-full 
        min-h-[90vh] sm:min-h-[95vh] lg:min-h-[75vh] 
        flex items-center justify-center 
        bg-[#030712] overflow-hidden
      "
    >

      {/* BG Gradient + Wave Texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 opacity-90"></div>
        <img
          src="assets/wave-bg.png"
          alt="wave background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 sm:opacity-50 mix-blend-screen"
        />
      </div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particles"></div>
      </div>

      {/* FLOATING RUPEE SYMBOLS */}
      <div className="rupee-container">
        <div className="rupee r1">₹</div>
        <div className="rupee r2">₹</div>
        <div className="rupee r3">₹</div>
        <div className="rupee r4">₹</div>
      </div>

      {/* CONTENT GRID */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-10 sm:pt-16">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center md:text-left relative"
        >
          <p className="text-blue-200 mb-2 text-sm sm:text-base">
            Trusted by 10,000+ customers
          </p>

          {/* FINANCIAL GRADIENT LINE BEHIND HEADING */}
          <div className="absolute -top-4 left-0 w-40 h-1 bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-40"></div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Empowering Your Financial Growth  
            <span className="block text-blue-400 mt-1">
              with Anand Bank NBFC
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Flexible loans, secure investments, and transparent financial 
            solutions designed to help individuals and businesses move 
            forward confidently.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <button className="px-5 sm:px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition shadow-lg text-sm sm:text-base">
              Apply Now
            </button>
            <button className="px-5 sm:px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg backdrop-blur-sm transition text-sm sm:text-base">
              Learn More
            </button>
          </div>

          {/* TRUST LOGOS */}
          <div className="mt-10">
            <p className="text-xs sm:text-sm text-gray-200 mb-3 opacity-80">
              Trusted by businesses & customers
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6">
              <img src="assets/chime.png" className="h-7 sm:h-9 md:h-10 w-auto" alt="chime" />
              <img src="assets/quapital.png" className="h-7 sm:h-9 md:h-10 w-auto" alt="qapital" />
              <img src="assets/flare.png" className="h-7 sm:h-9 md:h-10 w-auto" alt="flare" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT FLOATING CARDS */}
        <div
          className="
            relative flex justify-center 
             lg:h-[440px]
            overflow-visible
          "
        >

          {/* Card 1 – Blue */}
          <motion.img
            src="assets/card-blue.png"
            className="
              w-40 sm:w-48 md:w-60
              rounded-xl 
              absolute
              top-4 md:top-0
              left-1/2 -translate-x-1/2
              md:left-auto md:right-6
              md:rotate-[-5deg]
            "
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Card 2 – Orange */}
          <motion.img
            src="assets/card-orange-1.png"
            className="
              w-36 sm:w-44 md:w-56
              rounded-xl 
              absolute 
              top-24 sm:top-28 md:top-20
              left-1/2 -translate-x-1/2
              md:left-auto md:right-24
              md:rotate-[6deg]
            "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Card 3 – Purple */}
          <motion.img
            src="assets/purple-card.png"
            className="
              w-32 sm:w-40 md:w-52
              rounded-xl  
              absolute
              top-44 sm:top-48 md:top-36
              left-1/2 -translate-x-1/2
              md:left-auto md:right-40
              md:rotate-[-2deg]
            "
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

        </div>
      </div>

      {/* GLOW ORB BEHIND GRAPH */}
      <div
        className="
          absolute bottom-0 right-0
          w-[260px] h-[260px]
          bg-gradient-to-br from-purple-500/30 to-blue-500/20
          blur-[90px] opacity-40
          hidden sm:block
        "
      ></div>

      {/* GLOWING FLOATING GRAPH */}
      <motion.img
        src="assets/graph-lines.png"
        className="
          absolute bottom-8 right-10
          w-[260px] sm:w-[320px] opacity-80
          drop-shadow-[0_0_14px_rgba(59,130,246,0.55)]
          backdrop-blur-[1px]
          hidden sm:block
        "
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

    </section>
  );
}
