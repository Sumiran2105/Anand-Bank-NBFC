import { motion } from "framer-motion";
import React from "react";

export default function InvestmentPlans() {
  return (
    <div className="bg-white">

      {/* ---------------------------------------------------- */}
      {/* 🔵 HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="px-4 py-14 md:py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          Investment Plans for a Secure Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-lg max-w-2xl mx-auto mt-4 opacity-90"
        >
          Smart, secure, and future-ready investment options to help you grow your wealth confidently.
        </motion.p>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 TEXT + IMAGE SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* -------- TEXT CONTENT -------- */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-700"
        >
          <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-4 leading-snug">
            Invest Smart. Secure Your Future.
          </h2>

          <p className="text-gray-600 mb-6 text-sm md:text-[17px] leading-relaxed">
            Whether you're planning retirement, building long-term savings, or growing wealth,
            our investment plans offer stability, flexibility, and excellent returns.
            With expert insights, your financial future is in safe hands.
          </p>

          <ul className="space-y-3 text-[14px] md:text-[16px]">
            {[
              "Investment options starting from ₹1,000",
              "High returns with curated risk-managed strategies",
              "Flexible tenure options (short-term to long-term)",
              "Tax-saving investments under Section 80C",
              "Expert financial planning and portfolio guidance",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-700 text-xl">✔</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* -------- IMAGE -------- */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="assets/services/investment.jpeg"
            alt="Investment Plans"
            className="rounded-2xl shadow-xl w-full max-w-[500px] object-cover h-[260px] sm:h-[320px] md:h-[380px] hover:scale-[1.03] transition"
          />
        </motion.div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 FEATURE CARDS */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gray-50 py-16 px-4">

        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Why Choose Our Investment Plans?
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-lg max-w-3xl mx-auto">
            Built for growth, security, and long-term financial stability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { icon: "📈", title: "High Growth Potential", text: "Grow your wealth with diversified and high-performing strategies." },
            { icon: "🛡️", title: "Risk-Managed Options", text: "Plans tailored to risk profile: low, moderate, or high." },
            { icon: "💹", title: "Tax-Saving Plans", text: "Reduce tax liability with government-approved investment schemes." },
            { icon: "🤝", title: "Expert Guidance", text: "Get personalized advice from qualified financial advisors." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200"
            >
              <span className="text-5xl mb-4 block text-center">{item.icon}</span>

              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 FORM SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 py-16 px-4 overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute -left-12 top-12 w-44 h-44 bg-blue-400 opacity-25 blur-3xl rounded-full"></div>
        <div className="absolute right-8 bottom-12 w-52 h-52 bg-blue-300 opacity-25 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ---------------- FORM LEFT ---------------- */}
          {/* ---------------- FORM LEFT ---------------- */}
<form
  className="
    bg-white/10 backdrop-blur-2xl 
    border border-white/20 
    p-6 md:p-8 rounded-2xl shadow-xl 
    space-y-4 max-w-md mx-auto w-full
  "
>
  <input
    type="text"
    placeholder="Full Name *"
    className={inputBox}
  />

  <input
    type="number"
    placeholder="Phone Number *"
    className={inputBox}
  />

  <input
    type="email"
    placeholder="Email Address"
    className={inputBox}
  />

  <select className={inputBox + " text-white"}>
    <option className="text-black">Select Investment Type *</option>
    <option className="text-black">Long-Term Plan</option>
    <option className="text-black">Short-Term Plan</option>
    <option className="text-black">Retirement Plan</option>
    <option className="text-black">Tax-Saving Plan</option>
  </select>

  <textarea
    placeholder="Investment Goals (Optional)"
    className={inputBox + " h-24 resize-none"}
  ></textarea>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="
      w-full bg-yellow-400 hover:bg-yellow-500 
      text-blue-900 font-semibold py-3 
      rounded-lg shadow-lg text-sm md:text-base
    "
  >
    Get Investment Guidance →
  </motion.button>
</form>


          {/* ---------------- TEXT RIGHT ---------------- */}
          <div className="text-left text-white px-2">

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
              Plan Today. Grow Tomorrow. 📊
            </h2>

            <p className="text-gray-200 text-sm md:text-lg mb-4 leading-relaxed">
              Every smart investment starts with the right guidance.  
              Our experts help you choose the perfect plan aligned with your future goals.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              From long-term stability to high-growth opportunities,  
              our diversified plans are designed for your financial success.
            </p>

            <div className="
              bg-white/10 backdrop-blur-lg 
              px-4 py-2 rounded-xl 
              w-fit flex items-center gap-3 shadow-md
            ">
              <span className="text-yellow-400 text-xl">⭐</span>
              <p className="text-gray-200 text-sm md:text-base">
                Trusted by <strong className="text-white">10,000+ smart investors</strong>
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

/* ------------------------- */
/* GLOBAL STYLED INPUT CLASS */
/* ------------------------- */
const inputBox = `
  w-full p-3 bg-white/10 text-white 
  border border-white/30 rounded-lg 
  placeholder-gray-300 text-sm 
  focus:outline-none focus:border-yellow-300
`;
