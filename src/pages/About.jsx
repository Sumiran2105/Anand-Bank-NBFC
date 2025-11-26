import React from "react";
import {
  FaUserShield,
  FaBuilding,
  FaShieldAlt,
  FaClipboardCheck,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutBank() {
  return (
    <div className="pt-18 bg-white">

      {/* ========================= HERO SECTION ========================= */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">

        {/* Background Circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center text-white"
          >

            {/* Sanskrit Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 sm:mb-8 md:mb-10"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl mx-2">

                <div className="text-xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-3 md:mb-5">
                  धर्मो रक्षति रक्षितः
                </div>

                <div className="text-sm sm:text-lg md:text-2xl text-blue-100 italic mb-2 md:mb-4">
                  "Dharmo Rakshati Rakshitah"
                </div>

                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-3 md:mb-5"></div>

                <div className="text-xs sm:text-sm md:text-xl text-blue-100 max-w-3xl mx-auto px-2 leading-relaxed">
                  Where righteousness protects the protector, and ethical practices build lasting legacies.
                </div>
              </div>
            </motion.div>

            {/* Story Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-blue-100"
            >
              Our <span className="text-orange-300">Story</span>
            </motion.h1>

            {/* Story Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="text-xs sm:text-base md:text-lg text-blue-100 leading-relaxed px-2 sm:px-4 max-w-4xl mx-auto">
                "We believe that ethical finance is the foundation of lasting progress. When we uphold the right principles, they guide us forward and safeguard the people who depend on us."
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ========================= ABOUT NBFC ========================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-5 pt-20 sm:pt-28 pb-16 sm:pb-20">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10 sm:mb-14">
          About Anand Bank NBFC
        </h1>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-14">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="assets/founder.jpg"
              alt="Anand Bank NBFC"
              className="rounded-3xl shadow-xl w-full max-w-sm sm:max-w-md object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">

            <div className="bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-xl p-4 sm:p-6 border-l-4 border-orange-500 shadow-lg">
              <p className="text-gray-700 text-xs sm:text-sm md:text-lg leading-relaxed text-center">
                Anand Bank NBFC is a trusted and modern financial institution offering accessible credit, secure investments, and transparent financial solutions.
              </p>
              <p className="mt-4 text-gray-700 text-xs sm:text-sm md:text-lg leading-relaxed">
                Whether you’re managing personal finance, medical expenses, education needs, home renovation, or business growth — we provide stress-free financial support.
              </p>
              <p className="mt-4 text-gray-700 text-xs sm:text-sm md:text-lg leading-relaxed">
                We maintain clear processes, customer-first guidance, and continuous innovation.
              </p>
            </div>

            <div className="mt-5 bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-xl p-4 sm:p-6 border-l-4 border-orange-500 shadow-lg">
              <p className="text-gray-700 text-xs sm:text-sm md:text-lg leading-relaxed text-center">
                As a forward-focused NBFC, we prioritize responsible lending, digital processing, and transparent customer experience.
              </p>
              <p className="mt-3 text-gray-700 text-xs sm:text-sm md:text-lg leading-relaxed text-center">
                Anand Bank NBFC is trusted for flexible EMIs, secure investments, and professional financial guidance.
              </p>
            </div>

            <p className="mt-6 text-gray-900 font-semibold text-sm sm:text-lg md:text-xl bg-blue-50 p-4 sm:p-5 rounded-xl shadow-md border-l-4 border-blue-600 text-center">
              “Empowering financial dreams. Strengthening futures. Delivering trust — every step of the way.”
            </p>
          </div>
        </div>
      </section>

      {/* ========================= WHY CHOOSE ========================= */}
      <section className="py-16 px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-900">
          Why Choose Anand Bank NBFC?
        </h2>

        <p className="text-center mt-3 sm:mt-4 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base md:text-[1.15rem]">
          Transparent, technology-driven, and customer-focused solutions for a secure financial future.
        </p>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 sm:mt-14">

          {[
            { icon: "💼", title: "Quick Approvals", color: "text-blue-700" },
            { icon: "📊", title: "Flexible EMIs", color: "text-yellow-600" },
            { icon: "🔐", title: "100% Transparency", color: "text-emerald-700" },
            { icon: "📈", title: "Smart Investments", color: "text-orange-600" },
            { icon: "🤝", title: "Dedicated Support", color: "text-purple-700" },
            { icon: "📞", title: "24/7 Helpdesk", color: "text-pink-600" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-sky-200 p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`${item.color} text-4xl sm:text-5xl mb-3`}>{item.icon}</div>
              <h3 className={`text-lg sm:text-xl font-semibold ${item.color}`}>
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                {item.title === "Quick Approvals" && "Fast loan approvals with minimal documentation."}
                {item.title === "Flexible EMIs" && "Repayment options that fit your budget."}
                {item.title === "100% Transparency" && "No hidden fees. No extra charges."}
                {item.title === "Smart Investments" && "Secure and profitable investment opportunities."}
                {item.title === "Dedicated Support" && "Friendly and reliable financial assistance."}
                {item.title === "24/7 Helpdesk" && "Assistance anytime you need it."}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ========================= OUR MISSION ========================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-20">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-900">
          Our Mission
        </h2>

        <p className="mt-5 text-gray-700 text-sm sm:text-base md:text-[1.15rem] text-center max-w-4xl mx-auto leading-relaxed">
          Our mission is to deliver reliable, transparent, and accessible financial solutions.
        </p>

        <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-[1.15rem] text-center max-w-4xl mx-auto leading-relaxed">
          We aim to make financial support simple, safe, and impactful.
        </p>

        {/* Mission Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            { icon: <FaUserShield className="text-blue-600 text-4xl mb-3" />, title: "Empower Individuals", text: "Financial tools for personal growth." },
            { icon: <FaBuilding className="text-yellow-500 text-4xl mb-3" />, title: "Support Businesses", text: "Loans designed for business expansion." },
            { icon: <FaShieldAlt className="text-orange-500 text-4xl mb-3" />, title: "Financial Stability", text: "Secure long-term financial solutions." },
            { icon: <FaClipboardCheck className="text-purple-600 text-4xl mb-3" />, title: "Transparent Process", text: "Clear communication and honest guidance." },
            { icon: <FaChartLine className="text-emerald-600 text-4xl mb-3" />, title: "Wealth Growth", text: "Rewarding investment options." },
            { icon: <FaHandshake className="text-pink-600 text-4xl mb-3" />, title: "Customer Excellence", text: "Friendly assistance always." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-sky-200 p-6 sm:p-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {item.icon}
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
