import React from "react";
import {
  FaUserShield,
  FaBuilding,
  FaShieldAlt,
  FaClipboardCheck,
  FaChartLine,
  FaHandshake,
  FaMoneyCheckAlt,
  FaBriefcase,
  FaPiggyBank,
  FaUserTie,
} from "react-icons/fa";

import {
  FiClock,
  FiBarChart2,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiPhoneCall,
} from "react-icons/fi";

import { motion } from "framer-motion";

export default function AboutBank() {
  // ========================= PRODUCT PORTFOLIO =========================
  const products = [
    {
      icon: <FaMoneyCheckAlt className="text-blue-600 text-4xl" />,
      title: "Personal Loan",
      desc: "Quick and flexible loans for medical, education, travel, or personal needs.",
      bg: "bg-blue-50 border-blue-200",
    },
    {
      icon: <FaBriefcase className="text-orange-600 text-4xl" />,
      title: "Business Loan",
      desc: "Fast approval loans designed to support business growth, cash flow, and expansion.",
      bg: "bg-orange-50 border-orange-200",
    },
    {
      icon: <FaPiggyBank className="text-green-600 text-4xl" />,
      title: "Investment Plans",
      desc: "Secure and high-return saving and investment options for long-term financial stability.",
      bg: "bg-green-50 border-green-200",
    },
    {
      icon: <FaUserTie className="text-purple-600 text-4xl" />,
      title: "Financial Advisory",
      desc: "Expert guidance for wealth planning, portfolio management, and strategic investments.",
      bg: "bg-purple-50 border-purple-200",
    },
  ];

  // ========================= WHY CHOOSE =========================
  const whyChoose = [
    {
      icon: <FiClock />,
      title: "Quick Approvals",
      color: "text-blue-700 bg-blue-100",
      points: [
        "Fast loan approvals with digital KYC.",
        "Minimal documentation required.",
        "Priority processing for eligible customers.",
      ],
    },
    {
      icon: <FiBarChart2 />,
      title: "Flexible EMIs",
      color: "text-yellow-600 bg-yellow-100",
      points: [
        "Multiple repayment tenure options.",
        "Budget-friendly EMI planning.",
        "Auto-debit facility for convenience.",
      ],
    },
    {
      icon: <FiShield />,
      title: "100% Transparency",
      color: "text-emerald-700 bg-emerald-100",
      points: [
        "No hidden charges or surprise fees.",
        "Clear documentation at every step.",
        "Full compliance with RBI guidelines.",
      ],
    },
    {
      icon: <FiTrendingUp />,
      title: "Smart Investments",
      color: "text-orange-600 bg-orange-100",
      points: [
        "Secure and high-return investment tools.",
        "Long-term financial planning support.",
        "Digitally managed portfolio insights.",
      ],
    },
    {
      icon: <FiUsers />,
      title: "Dedicated Support",
      color: "text-purple-700 bg-purple-100",
      points: [
        "Friendly customer-first service.",
        "Guidance throughout your journey.",
        "Dedicated relationship managers.",
      ],
    },
    {
      icon: <FiPhoneCall />,
      title: "24/7 Helpdesk",
      color: "text-pink-600 bg-pink-100",
      points: [
        "Round-the-clock assistance.",
        "Instant query resolution.",
        "Support across all channels.",
      ],
    },
  ];

  return (
    <div className="pt-18 bg-white">

      {/* ========================= HERO SECTION ========================= */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 -top-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300">
                धर्मो रक्षति रक्षितः
              </h1>
              <p className="text-blue-100 italic mt-3 md:text-xl">"Dharmo Rakshati Rakshitah"</p>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto my-3"></div>
              <p className="text-sm sm:text-base md:text-lg text-blue-100">
                Where righteousness protects the protector, and ethical practices build lasting legacies.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10">
              Our <span className="text-orange-300">Story</span>
            </h2>

            <p className="text-blue-100 mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              "We believe that ethical finance is the foundation of lasting progress. When we uphold the right principles, they guide us forward and safeguard the people who depend on us."
            </p>
          </motion.div>
        </div>
      </section>

     
      {/* ========================= ABOUT NBFC ========================= */}
<section className="max-w-7xl mx-auto px-4 pt-20 pb-16">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12">
    About Anand Bank NBFC
  </h1>

  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* Founder Image */}
    <img
      src="assets/founder.jpg"
      alt="Founder"
      className="rounded-3xl shadow-xl w-full max-w-md mx-auto object-cover"
    />

    {/* Expanded Text Panel */}
    <div className="flex flex-col gap-6">

      {/* About Paragraph 1 */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Anand Bank NBFC is a progressive and customer-centric financial institution dedicated to 
          providing transparent, accessible, and digitally enabled financial solutions. 
          Our focus is to simplify lending and investment processes by combining ethical practices 
          with modern technology.
        </p>
      </div>

      {/* About Paragraph 2 */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Over the years, we have supported thousands of individuals, small businesses, and families 
          in meeting their financial goals. Whether it is personal finance, business expansion, 
          education planning, or emergency needs, we ensure stress free, transparent, and 
          responsible financial assistance.
        </p>
      </div>

      {/* NEW – Founder Message */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Anand Bank NBFC, our mission has always been rooted in trust and integrity.  
          We believe that finance should empower people to make informed decisions andnot complicate their lives.
          Every product we design and every service we deliver is driven by this philosophy.
        </p>
        <p className="text-gray-900 font-semibold mt-4 text-center">
          Founder, Anand Bank NBFC
        </p>
      </div>

      {/* Vision/Tagline */}
      <p className="bg-blue-50 p-5 rounded-xl text-center border-l-4 border-blue-600 font-semibold text-gray-900">
        Empowering financial dreams. Strengthening futures. Delivering trust every step of the way.
      </p>

    </div>
  </div>
</section>


       {/* ========================= PRODUCT PORTFOLIO ========================= */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 text-center">
          Our Product Portfolio
        </h2>

        <p className="text-gray-700 mt-4 text-center text-lg">
          Tailored financial products for every customer need.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {products.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} p-6 border rounded-2xl shadow hover:shadow-xl transition-all text-center`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= OUR MISSION ========================= */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-900">
          Our Mission
        </h2>

        <p className="mt-5 text-gray-700 text-lg text-center max-w-4xl mx-auto leading-relaxed">
          Our mission is to deliver reliable, transparent, and accessible financial solutions.
        </p>

        {/* Mission Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <FaUserShield className="text-blue-600 text-4xl" />, title: "Empower Individuals", text: "Financial tools for personal growth." },
            { icon: <FaBuilding className="text-yellow-500 text-4xl" />, title: "Support Businesses", text: "Loans designed for business expansion." },
            { icon: <FaShieldAlt className="text-orange-500 text-4xl" />, title: "Financial Stability", text: "Secure long-term financial solutions." },
            { icon: <FaClipboardCheck className="text-purple-600 text-4xl" />, title: "Transparent Process", text: "Clear communication and honest guidance." },
            { icon: <FaChartLine className="text-emerald-600 text-4xl" />, title: "Wealth Growth", text: "Rewarding investment options." },
            { icon: <FaHandshake className="text-pink-600 text-4xl" />, title: "Customer Excellence", text: "Friendly assistance always." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-sky-200 p-6 rounded-2xl shadow hover:shadow-2xl transition-all text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= WHY CHOOSE ========================= */}
      <section className="py-16 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900">
            Why Choose Anand Bank NBFC?
          </h2>
          <p className="text-gray-700 mt-3 text-lg">
            Transparent, technology-driven, and customer-focused solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {whyChoose.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 p-6 rounded-2xl shadow hover:shadow-xl transition-all"
            >
              <div
                className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full ${item.color} text-3xl shadow-inner mb-4`}
              >
                {item.icon}
              </div>

              <h3 className={`text-xl font-semibold text-center ${item.color.split(" ")[0]}`}>
                {item.title}
              </h3>

              <ul className="mt-3 text-gray-600 text-sm leading-relaxed text-center">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

     

    </div>
  );
}
