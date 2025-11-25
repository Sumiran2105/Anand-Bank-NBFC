import { motion } from "framer-motion";

export default function BusinessLoan() {
  return (
    <div className="bg-white space-y-20 md:space-y-12">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-10"
      >
        <h1 className="text-4xl font-extrabold text-center mb-4 text-blue-900">
          Business Loan
        </h1>
        <p className="text-gray-600 mt-1 text-lg max-w-2xl mx-auto">
          Fast, flexible, and growth-focused financing to strengthen and scale your business.
        </p>
      </motion.div>

      {/* ---------------- CONTENT WITH IMAGE ---------------- */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 1 }}
  className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-6 md:px-12 mb-24 items-center"
>

  {/* --- IMAGE LEFT --- */}
  <motion.div
    initial={{ x: -40, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="flex justify-center"
  >
    <img
      src="assets/services/business.jpg"
      alt="Business Loan"
      className="rounded-2xl shadow-xl w-[100%] md:w-[95%] h-[300px] md:h-[350px] object-cover hover:scale-[1.03] transition-all duration-300"
    />
  </motion.div>

  {/* --- TEXT CONTENT RIGHT --- */}
  <motion.div
    initial={{ x: 40, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-gray-700 leading-relaxed"
  >
    <h3 className="text-[22px] font-semibold text-[#0E2A73] mb-4">
      Fuel Your Business Growth With Smart Capital
    </h3>

    <p className="mb-6 text-[17px] text-gray-600">
      Expand operations, upgrade equipment, increase inventory, or scale confidently — 
      our business loan provides reliable financing designed to grow your revenue 
      and strengthen your financial stability with ease and transparency.
    </p>

    <ul className="space-y-4">
      {[
        "Loan range from ₹1,00,000 to ₹50,00,000",
        "Flexible repayment terms up to 7 years",
        "Minimal documentation with fast approval",
        "Competitive interest rates tailored to business profile",
        "Funds disbursed within 72 hours*"
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-blue-600 text-xl leading-none">✔️</span>
          <span className="text-gray-700 font-medium text-[15px]">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>

</motion.div>


      {/* ---------------- FEATURE CARDS ---------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-4xl font-extrabold text-center text-[#0E2A73] mb-5">
          Why Choose Our Business Loan?
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Designed to support entrepreneurs and enterprises with fast, secure, and flexible financing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: "📈", title: "High Loan Eligibility", text: "Get higher financing limits based on business turnover and performance." },
            { icon: "💼", title: "Flexible Repayment", text: "Choose repayment tenure from 1 to 7 years based on business flow." },
            { icon: "⚡", title: "Quick Approval", text: "Fast assessment and funding with minimal paperwork and verification." },
            { icon: "🔒", title: "Transparent Terms", text: "No hidden charges — complete clarity from application to closure." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white/50 backdrop-blur-xl border border-gray-200 shadow-lg 
              p-8 rounded-2xl hover:shadow-2xl hover:bg-white transition-all duration-300"
            >
              <div className="text-center">
                <span className="text-6xl mb-4 block">{item.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-[#0E2A73] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ---------------- FORM SECTION ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative bg-gradient-to-r from-[#0E2A73] to-[#153A8F] py-10 overflow-hidden"
      >
        
        {/* Background Shapes */}
        <div className=" absolute -left-10 top-8 w-40 h-40 bg-blue-400 opacity-20 blur-2xl rounded-full"></div>
        <div className="absolute right-6 bottom-6 w-48 h-48 opacity-20 blur-2xl rounded-full"></div>

        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Form */}
          <form
            className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl p-5 rounded-xl space-y-3 max-w-sm w-full"
          >
            <input type="text" placeholder="Business Owner Name *" className="w-full p-2 border border-white/40 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none" />
            <input type="number" placeholder="Phone Number *" className="w-full p-2 border border-white/40 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none" />
            <input type="email" placeholder="Business Email" className="w-full p-2 border border-white/40 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none" />
            <input type="text" placeholder="Business Name *" className="w-full p-2 border border-white/40 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none" />

            <select className="w-full p-2 border border-white/40 rounded bg-white/10 text-white focus:outline-none">
              <option className="text-black">Select Loan Purpose *</option>
              <option className="text-black">Working Capital</option>
              <option className="text-black">Expansion</option>
              <option className="text-black">Inventory Purchase</option>
              <option className="text-black">Equipment / Machinery</option>
              <option className="text-black">Other</option>
            </select>

            <textarea
              placeholder="Tell us about your business (Optional)"
              className="w-full p-2 border border-white/40 rounded bg-white/10 text-white placeholder-gray-300 h-16 focus:outline-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 rounded-lg transition text-sm shadow-lg"
            >
              Submit Application
            </motion.button>
          </form>

          {/* Text Side */}
          <div className="text-left">
            <h2 className="text-white text-4xl font-extrabold mb-4 flex items-center gap-2">
              Ready to Grow Your Business? 🚀
            </h2>

            <p className="text-gray-200 text-lg mb-4">
              Share your business details — we’ll guide you with the right financial support.
            </p>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Our experts are here to help you scale with confidence — from documentation to approval.
            </p>

            <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg w-fit flex items-center gap-3 mb-4">
              <span className="text-yellow-400 text-xl">⭐</span>
              <p className="text-gray-200 text-sm">
                Trusted by <strong className="text-white">10,000+ growing businesses</strong>
              </p>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
