import { motion } from "framer-motion";

export default function FinancialAdvisor() {
  const inputBox =
    "w-full p-3 bg-white/10 text-white border border-white/40 rounded-lg placeholder-gray-300 text-sm focus:outline-none focus:border-yellow-300";

  return (
    <div className="bg-white">

      {/* ---------------------------------------------------- */}
      {/* 🔵 HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          Financial Advisor Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-lg max-w-2xl mx-auto mt-4 opacity-90"
        >
          Personalized wealth planning, investment guidance, and financial strategies for a secure future.
        </motion.p>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 IMAGE + CONTENT SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* -------- IMAGE -------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="assets/services/financialadvisor.jpg"
            alt="Financial Advisor"
            className="rounded-2xl shadow-xl w-full max-w-[480px] object-cover h-[260px] sm:h-[320px] md:h-[380px] hover:scale-[1.03] transition"
          />
        </motion.div>

        {/* -------- TEXT CONTENT -------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-700"
        >
          <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-4 leading-snug">
            Secure Your Financial Future with Expert Guidance
          </h2>

          <p className="text-gray-600 mb-6 text-sm md:text-[17px] leading-relaxed">
            Whether you're planning retirement, managing investments, or building long-term
            wealth — our advisory service ensures informed, confident, and secure financial decisions.
          </p>

          <ul className="space-y-3 text-[14px] md:text-[16px]">
            {[
              "Personalized wealth & investment planning",
              "Tax-saving strategies & portfolio management",
              "Expert retirement & insurance planning",
              "Risk analysis, budgeting, & financial forecasting",
              "Complete transparency & long-term guidance",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-700 text-xl leading-none">✔</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 FEATURE CARDS */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Why Choose Our Advisory Services?
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-lg">
            Smart, personalized, and transparent guidance at every financial milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: "📊",
              title: "Personalized Strategies",
              text: "Expert financial planning tailored to your lifestyle, goals, and income."
            },
            {
              icon: "💼",
              title: "Investment Expertise",
              text: "Optimized investment suggestions including SIPs, mutual funds, and portfolios."
            },
            {
              icon: "🛡️",
              title: "Risk Management",
              text: "Balance growth & security through strategic allocation and risk profiling."
            },
            {
              icon: "🤝",
              title: "Trusted Partnership",
              text: "Ongoing support, transparent guidance, and expert-backed financial monitoring."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200"
            >
              <span className="text-5xl block mb-4 text-center">{item.icon}</span>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 FORM SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative bg-gradient-to-r from-[#0E2A73] to-[#153A8F] py-16 px-4 overflow-hidden">

        {/* Glow Decorations */}
        <div className="absolute -left-12 top-12 w-44 h-44 bg-blue-400 opacity-25 blur-3xl rounded-full"></div>
        <div className="absolute right-6 bottom-14 w-52 h-52 bg-blue-300 opacity-25 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ---------------- FORM ---------------- */}
          <form
            className="bg-white/10 backdrop-blur-2xl border border-white/30 p-6 md:p-8 rounded-2xl shadow-xl space-y-4 max-w-md w-full mx-auto"
          >
            <input type="text" placeholder="Full Name *" className={inputBox} />
            <input type="number" placeholder="Phone Number *" className={inputBox} />
            <input type="email" placeholder="Email Address" className={inputBox} />

            <select className={inputBox + " text-white"}>
              <option className="text-black">Select Consultation Type *</option>
              <option className="text-black">Investment Planning</option>
              <option className="text-black">Retirement Planning</option>
              <option className="text-black">Tax Saving Strategy</option>
              <option className="text-black">Insurance Advisory</option>
            </select>

            <textarea
              placeholder="Tell us about your financial goals (Optional)"
              className={inputBox + " h-24 resize-none"}
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 rounded-lg shadow-lg text-sm md:text-base"
            >
              Request Consultation
            </motion.button>
          </form>

          {/* ---------------- TEXT ---------------- */}
          <div className="text-left text-white px-1 md:px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
              Start Your Financial Journey 💡
            </h2>

            <p className="text-gray-200 text-sm md:text-lg mb-4 leading-relaxed">
              Share your details — our certified financial advisors will reach out and guide you.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Take the first step toward a secure, strong, and confident financial future.
            </p>

            <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl w-fit flex items-center gap-3 shadow-md">
              <span className="text-yellow-400 text-xl">⭐</span>
              <p className="text-gray-200 text-sm md:text-base">
                Trusted by <strong className="text-white">15,000+ families & investors</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
