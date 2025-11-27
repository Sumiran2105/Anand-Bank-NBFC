import { motion } from "framer-motion";

export default function PersonalLoan() {
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
          Personal Loans Designed for Your Needs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-lg max-w-2xl mx-auto mt-4 opacity-90"
        >
          Simple, fast, and flexible financing options tailored to support your life goals.
        </motion.p>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 IMAGE + TEXT SECTION */}
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
            A Personal Loan Designed to Support Your Life Moments
          </h2>

          <p className="text-gray-600 mb-6 text-sm md:text-[17px] leading-relaxed">
            Whether you're planning a vacation, covering medical expenses, funding education,
            or upgrading your home our personal loan gives you complete financial freedom
            with fast approval and transparent terms.
          </p>

          <ul className="space-y-3 text-[14px] md:text-[16px]">
            {[
              "Loan amount from ₹50,000 to ₹5,00,000",
              "Flexible repayment tenure up to 5 years",
              "Fast approval with minimal documentation",
              "Budget-friendly EMIs tailored to your needs",
              "Quick disbursal within 24–48 hours*",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
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
            src="assets/services/personalLone.jpg"
            alt="Personal Loan"
            className="rounded-2xl shadow-xl w-full max-w-[500px] object-cover h-[260px] sm:h-[320px] md:h-[380px]"
          />
        </motion.div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 FEATURE CARDS */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gray-50 py-16 px-4">

        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Why Choose Our Personal Loan?
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-lg max-w-3xl mx-auto">
            Experience a smooth, supportive, and transparent borrowing journey built around your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { icon: "💰", title: "Flexible Loan Amount", text: "Choose an amount from ₹50,000 to ₹5,00,000 based on your needs." },
            { icon: "🗓️", title: "Easy EMI Options", text: "Select a repayment plan that fits your budget comfortably." },
            { icon: "⚡", title: "Fast Approval", text: "Minimal paperwork and quick verification for faster loan disbursal." },
            { icon: "🛡️", title: "Trusted & Transparent", text: "No hidden charges — complete clarity and trustworthy service." }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 text-center"
            >
              <span className="text-5xl mb-3 block">{item.icon}</span>

              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 text-left">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed text-left">
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

  {/* Premium Glow Effects */}
  <div className="absolute -left-16 top-14 w-52 h-52 bg-blue-400 opacity-25 blur-3xl rounded-full"></div>
  <div className="absolute right-10 bottom-16 w-60 h-60 bg-blue-300 opacity-25 blur-3xl rounded-full"></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* ---------------- FORM (LEFT) ---------------- */}
    <form
      className="
        bg-white/10 backdrop-blur-2xl border border-white/30 
        p-6 md:p-8 rounded-2xl shadow-xl 
        space-y-4 max-w-md mx-auto w-full
      "
    >
      {[
        "Full Name *",
        "Phone Number *",
        "Email Address",
        "City / Location",
      ].map((label, index) => (
        <input
          key={index}
          placeholder={label}
          type={label.includes("Phone") ? "number" : "text"}
          className="
            w-full p-3 md:p-3.5 
            bg-white/10 text-white 
            border border-white/40 rounded-lg 
            placeholder-gray-300 text-sm 
            focus:outline-none focus:border-yellow-300
          "
        />
      ))}

      <select
        className="
          w-full p-3 md:p-3.5 
          bg-white/10 text-white 
          border border-white/40 rounded-lg 
          text-sm focus:outline-none
        "
      >
        <option className="text-black">Select Loan Purpose *</option>
        <option className="text-black">Medical</option>
        <option className="text-black">Education</option>
        <option className="text-black">Travel</option>
        <option className="text-black">Home Renovation</option>
        <option className="text-black">Debt Consolidation</option>
        <option className="text-black">Other</option>
      </select>

      <textarea
        placeholder="Additional Notes (Optional)"
        className="
          w-full p-3 md:p-3.5 
          bg-white/10 text-white 
          border border-white/40 rounded-lg 
          placeholder-gray-300 
          h-24 resize-none text-sm focus:outline-none
        "
      ></textarea>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="
          w-full bg-yellow-400 hover:bg-yellow-500 
          text-blue-900 font-semibold 
          py-3 rounded-xl shadow-lg text-sm md:text-base 
          transition-all
        "
      >
        Submit Request
      </motion.button>
    </form>

    {/* ---------------- TEXT SIDE (RIGHT) ---------------- */}
    <div className="text-left text-white px-1 md:px-4">

      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
        Get the Support You Need 💙
      </h2>

      <p className="text-gray-200 text-sm md:text-lg mb-4 leading-relaxed">
        Your goals matter whether it’s education, health, travel, or a personal milestone.
        We’re here to support you with transparent and flexible financing.
      </p>

      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
        From guidance to approval, enjoy a smooth, stress-free experience tailored to your needs.
        You're just one step away from the help you deserve.
      </p>

      <div
        className="
          bg-white/10 backdrop-blur-lg 
          px-4 py-2 rounded-xl 
          w-fit flex items-center gap-3 shadow-md
        "
      >
        <span className="text-yellow-400 text-xl">⭐</span>
        <p className="text-gray-200 text-sm md:text-base">
          Trusted by <strong className="text-white">5,000+ happy customers</strong>
        </p>
      </div>

    </div>

  </div>
</section>
    </div>
  );
}

/* ------------------------------------------ */
/* 🔵 Global Input Style */
/* ------------------------------------------ */
const inputBox = `
  w-full p-3 bg-white/10 text-white border border-white/30 rounded 
  placeholder-gray-300 text-sm focus:outline-none
`;
