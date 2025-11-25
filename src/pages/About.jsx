
import React from "react";
import {
  FaUserShield,       
  FaBuilding,         
  FaShieldAlt,        
  FaClipboardCheck,   
  FaChartLine,        
  FaHandshake         
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function AboutBank() {
  return (
    <div className="pt-18 bg-white">
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-24 -top-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -right-24 -bottom-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            {/* Main Sanskrit Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 md:mb-10"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/20 shadow-2xl mx-2">
                {/* Sanskrit Text */}
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-4 md:mb-5 font-sans leading-tight">
                  धर्मो रक्षति रक्षितः
                </div>

                {/* Transliteration */}
                <div className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5">
                  "Dharmo Rakshati Rakshitah"
                </div>

                {/* Separator */}
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4 md:mb-5"></div>

                {/* Meaning */}
                <div className="text-sm sm:text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                  Where righteousness protects the protector, and ethical practices build lasting legacies.
                </div>
              </div>
            </motion.div>

            {/* Main Title - Smaller Size */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-100"
            >
              Our <span className="text-orange-300">Story</span>
            </motion.h1>

            {/* Philosophy Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed px-2 sm:px-4">
                For over two decades, we've built not just properties, but trust. Our journey is guided by
                the timeless wisdom that when you protect Dharma (righteousness), Dharma protects you in return.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================
            ABOUT – ANAND BANK NBFC
      ============================== */}
      <section className="max-w-7xl mx-auto px-5 pt-32 pb-20">

        {/* Title */}
        <div className="flex justify-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            About Anand Bank NBFC
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-14">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="assets/founder.jpg"
              alt="Anand Bank NBFC"
              className="rounded-3xl shadow-xl w-full max-w-md object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col justify-center">

            <div className="bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-xl p-4 md:p-6 border-l-4 border-orange-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-600 mx-2 sm:mx-0">
              <p className="text-gray-700  text-sm sm:text-base md:text-lg leading-relaxed text-center">
                Anand Bank NBFC is a trusted and modern financial institution offering accessible
                credit, secure investments, and transparent financial solutions. We bridge the gap
                between traditional banking and today’s evolving financial needs.
              </p>
              <p className="mt-5 text-[1.15rem] text-gray-700 leading-relaxed">
                Whether you’re managing personal finance, medical expenses, education needs,
                home renovation, or business growth — our services ensure stress-free financial
                support.
              </p>
              <p className="mt-5 text-[1.15rem] text-gray-700 leading-relaxed">
                We maintain clear processes, customer-first guidance, and continuous innovation to
                deliver smooth and reliable financial experiences.
              </p>
            </div>
            <div className=" mt-6 bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-xl p-4 md:p-6 border-l-4 border-orange-500 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-600 mx-2 sm:mx-0">
              <p className="text-gray-700  text-sm sm:text-base md:text-lg leading-relaxed text-center">
                As a forward-focused NBFC, we prioritize responsible lending and financial discipline. Our team works closely with customers to understand their goals and offer solutions that fit their financial needs. With a digital-first approach, we ensure faster processing, minimal paperwork, and complete transparency from approval to repayment.
              </p>

              <p className="text-gray-700  text-sm sm:text-base md:text-lg leading-relaxed text-center">
                Over the years, Anand Bank NBFC has earned the trust of individuals, families, and businesses through secure investment options, flexible EMIs, and professional financial guidance. We continue to expand our services with one commitment—to empower every customer to build a stable, confident, and successful financial future.
              </p>
            </div>


            <p className="mt-6 text-gray-900 font-semibold text-xl bg-blue-50 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
              “Empowering financial dreams. Strengthening futures. Delivering trust — every step
              of the way.”
            </p>
          </div>

        </div>
      </section>

      {/* ============================
            WHY CHOOSE ANAND BANK
      ============================== */}
      <section className="py-20 px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
          Why Choose Anand Bank NBFC?
        </h2>

        <p className="text-center mt-4 text-gray-700 max-w-3xl mx-auto text-[1.15rem]">
          We provide transparent, technology-driven, and customer-focused financial
          solutions designed to build a stronger and more secure future.
        </p>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">

          <div className="bg-white  border border-sky-200 shadow-md p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-blue-700 text-5xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-blue-800">Quick Approvals</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Fast loan approvals with minimal documentation.
            </p>
          </div>

          <div className="bg-white border border-sky-200 shadow-md p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-yellow-500 text-5xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-yellow-600">Flexible EMIs</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Repayment options that fit your budget.
            </p>
          </div>

          <div className="bg-white border border-sky-200 shadow-md p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-emerald-600 text-5xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold text-emerald-700">100% Transparency</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              No hidden fees. No extra charges.
            </p>
          </div>

          <div className="bg-white border border-sky-200 shadow-md p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-orange-500 text-5xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-orange-600">Smart Investments</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Secure and profitable investment opportunities.
            </p>
          </div>

          <div className="bg-white border border-sky-200 shadow-md p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-purple-600 text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-purple-700">Dedicated Support</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Friendly and reliable financial assistance.
            </p>
          </div>

          <div className="bg-white border border-sky-200 shadow-md p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-pink-600 text-5xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-pink-600">24/7 Helpdesk</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Assistance anytime you need it.
            </p>
          </div>

        </div>
      </section>

      {/* ============================
               OUR MISSION
      ============================== */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
          Our Mission
        </h2>

        <p className="mt-6 text-gray-700 text-[1.15rem] leading-relaxed text-center max-w-4xl mx-auto">
          Our mission is to deliver reliable, transparent, and accessible financial
          solutions that empower individuals and businesses to build a secure,
          stable future.
        </p>

        <p className="mt-4 text-gray-700 text-[1.15rem] leading-relaxed text-center max-w-4xl mx-auto">
          We aim to make financial support simple, safe, and impactful for
          personal and business needs.
        </p>

        {/* Mission Cards */}


        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10 ">

          {/* Empower Individuals */}
          <div className="bg-white border border-sky-200 shadow-md p-7 rounded-2xl hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300">
            <FaUserShield className="text-blue-600 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-blue-700">Empower Individuals</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Financial tools for personal growth and stability.
            </p>
          </div>

          {/* Support Businesses */}
          <div className="bg-white border border-sky-200 shadow-md p-7 rounded-2xl hover:shadow-yellow-300 hover:-translate-y-2 transition-all duration-300">
            <FaBuilding className="text-yellow-500 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-yellow-600">Support Businesses</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Loans designed for business expansion.
            </p>
          </div>

          {/* Financial Stability */}
          <div className="bg-white border border-sky-200 shadow-md p-7 rounded-2xl hover:shadow-orange-300 hover:-translate-y-2 transition-all duration-300">
            <FaShieldAlt className="text-orange-500 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-orange-600">Financial Stability</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Secure and long-term financial solutions.
            </p>
          </div>

          {/* Transparent Process */}
          <div className="bg-white border border-sky-200 shadow-md p-7 rounded-2xl hover:shadow-purple-300 hover:-translate-y-2 transition-all duration-300">
            <FaClipboardCheck className="text-purple-600 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-purple-600">Transparent Process</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Clear communication and honest guidance.
            </p>
          </div>

          {/* Wealth Growth */}
          <div className="bg-white border border-sky-200 shadow-md p-7 rounded-2xl hover:shadow-emerald-300 hover:-translate-y-2 transition-all duration-300">
            <FaChartLine className="text-emerald-600 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-emerald-600">Wealth Growth</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Rewarding and safe investment options.
            </p>
          </div>

          {/* Customer Excellence */}
          <div className="bg-white border border-sky-200 shadow-md p-7 rounded-2xl hover:shadow-pink-300 hover:-translate-y-2 transition-all duration-300">
            <FaHandshake className="text-pink-600 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-pink-600">Customer Excellence</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Friendly assistance for every financial choice.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
