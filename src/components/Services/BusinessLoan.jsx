import { motion } from "framer-motion";

export default function BusinessLoan() {
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
          Business Loans Designed to Grow Your Success
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm md:text-lg max-w-2xl mx-auto mt-4 opacity-90"
        >
          Access quick, secure, and transparent funding to fuel your business expansion.
        </motion.p>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 IMAGE + TEXT SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="assets/services/business.jpg"
            alt="Business Loan"
            className="rounded-2xl shadow-xl w-full max-w-[500px] object-cover h-[260px] sm:h-[320px] md:h-[380px]"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-700"
        >
          <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-4">
            Smart, Seamless & Growth-Focused Business Funding
          </h2>

          <p className="text-gray-600 mb-6 text-sm md:text-[17px] leading-relaxed">
            Whether you're scaling operations or strengthening your cash flow, our business loan
            solutions are built to empower your entrepreneurial journey with flexibility and trust.
          </p>

          <ul className="space-y-3 text-[14px] md:text-[16px]">
            {[
              "Loans starting from ₹1,00,000 up to ₹50,00,000",
              "Flexible EMI options from 1 to 7 years",
              "Quick documentation and fast approvals",
              "Zero hidden charges — complete transparency",
              "Funds disbursed within 48–72 hours*",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-blue-700 text-xl">✔</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

        </motion.div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔵 FEATURES SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Why Choose Our Business Loan?
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm md:text-lg">
            Tailored financing solutions designed for entrepreneurs, startups, and established businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { icon: "📈", title: "High Eligibility", text: "Get higher loan limits based on business performance." },
            { icon: "💼", title: "Easy Repayment", text: "Flexible EMI plans aligned with your cash flow." },
            { icon: "⚡", title: "Fast Approval", text: "Minimal documentation, quick processing, instant decisions." },
            { icon: "🔒", title: "Transparent Terms", text: "No surprises. 100% clarity on fees and conditions." },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center border border-gray-200"
            >
              <div className="text-5xl mb-3">{item.icon}</div>

              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
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
        
        {/* Soft Glows */}
        <div className="absolute -left-10 top-10 w-40 h-40 bg-blue-400 opacity-20 blur-2xl rounded-full"></div>
        <div className="absolute right-6 bottom-10 w-48 h-48 bg-blue-400 opacity-20 blur-2xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* FORM */}
          <form className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-7 rounded-2xl shadow-xl space-y-3 max-w-md mx-auto w-full">
            {["Business Owner Name *", "Phone Number *", "Business Email", "Business Name *"].map((label, index) => (
              <input
                key={index}
                placeholder={label}
                type={label.includes("Phone") ? "number" : "text"}
                className="w-full p-3 bg-white/10 text-white border border-white/30 rounded placeholder-gray-300 text-sm focus:outline-none"
              />
            ))}

            <select className="w-full p-3 bg-white/10 text-white border border-white/30 rounded text-sm">
              <option className="text-black">Select Loan Purpose *</option>
              <option className="text-black">Working Capital</option>
              <option className="text-black">Business Expansion</option>
              <option className="text-black">Inventory Purchase</option>
              <option className="text-black">Machinery / Equipment</option>
              <option className="text-black">Other</option>
            </select>

            <textarea
              placeholder="Tell us about your business (Optional)"
              className="w-full p-3 bg-white/10 text-white border border-white/30 rounded h-20 placeholder-gray-300 text-sm"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-yellow-400 text-blue-900 font-bold py-2 rounded-lg shadow-md text-sm"
            >
              Submit Application
            </motion.button>
          </form>

          {/* TEXT SIDE */}
          <div className="text-white px-2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Grow Your Business?
            </h2>

            <p className="text-gray-200 text-sm md:text-lg mb-4">
              Share your details — our financial experts will guide you with the best loan options.
            </p>

            <p className="text-gray-300 text-sm md:text-base mb-5">
              From consultation to approval, we ensure a smooth and trustworthy experience.
            </p>

            <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl w-fit flex items-center gap-3 shadow">
              <span className="text-yellow-400 text-xl">⭐</span>
              <p className="text-gray-200 text-sm md:text-base">
                Trusted by <strong className="text-white">10,000+ businesses</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
