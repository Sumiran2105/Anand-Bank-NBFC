import React from "react";
import { motion } from "framer-motion";

export default function Commitment() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            Our Commitment to You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            More than financial services — we deliver trust, transparency, and long-term
            support for every customer and every dream.
          </p>
        </motion.div>

        {/* ⭐ STATISTICS BLOCK WITH ANIMATION + STAGGER */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            { num: "10,000+", label: "Happy Customers" },
            { num: "₹150 Cr+", label: "Loans Disbursed" },
            { num: "96%", label: "Customer Satisfaction" },
            { num: "18+ Years", label: "Of Trusted Service" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="
                bg-white shadow-md rounded-xl px-6 py-6 text-center border border-blue-100
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
              "
            >
              <h3 className="text-4xl font-extrabold text-blue-900 mb-1">{item.num}</h3>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed mb-10"
        >
          At <span className="font-semibold text-blue-900">Anand Bank NBFC</span>,
          we are committed to providing financial solutions that are not only reliable
          but also empowering. Our goal is to ensure customers feel confident,
          informed, and supported through every step of their financial journey.
        </motion.p>

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE ANIMATED CARDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="space-y-6"
          >

            {/* CARD 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="
                p-6 rounded-xl bg-white/90 shadow-sm border border-blue-100
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
              "
            >
              <h4 className="font-semibold text-blue-900 text-xl flex items-center gap-2 mb-2">
                <span className="text-blue-600 text-2xl">🔒</span>
                Transparent & Customer-First Approach
              </h4>

              <p className="text-gray-600 leading-relaxed">
                We ensure every step is clearly communicated — no hidden terms or surprises.
                Every service is designed around your comfort, clarity, and long-term
                financial capability.
              </p>

              <ul className="list-disc list-inside text-gray-500 mt-3 space-y-1">
                <li>Clear documentation & support</li>
                <li>Easy-to-understand loan structures</li>
                <li>Personalized financial solutions</li>
                <li>Friendly assistance available anytime</li>
              </ul>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="
                p-6 rounded-xl bg-white/90 shadow-sm border border-blue-100
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
              "
            >
              <h4 className="font-semibold text-blue-900 text-xl flex items-center gap-2 mb-2">
                <span className="text-blue-600 text-2xl">✅</span>
                Reliable & Secure Financial Support
              </h4>

              <p className="text-gray-600 leading-relaxed">
                Your financial well-being is our priority. Our experienced teams ensure safe,
                secure, and responsible guidance across all lending and investment processes.
              </p>

              <ul className="list-disc list-inside text-gray-500 mt-3 space-y-1">
                <li>Trusted NBFC expertise</li>
                <li>Secure processing & data protection</li>
                <li>End-to-end guidance for all decisions</li>
              </ul>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE IMAGE WITH FADE + SLIDE-IN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center w-full h-full"
          >

            {/* Fade background */}
            <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent pointer-events-none" />

            {/* Blended Image */}
            <img
              src="/assets/commitment-2.png"
              alt="Commitment"
              className="
                w-[85%] 
                h-auto
                object-contain
                opacity-95
                mix-blend-multiply
                mx-auto
              "
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
