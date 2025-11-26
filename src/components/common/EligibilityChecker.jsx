import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function EligibilityChecker() {
  const list = [
    "Applicant must be 21 – 60 years old",
    "Must have valid ID & Address proof",
    "Minimum income requirement applies",
    "Stable income source (salary / business)",
    "Healthy credit behavior recommended",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14 mt-10 bg-gradient-to-br from-white via-blue-50 to-white">

      <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-xl">

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Check Your Eligibility
        </h3>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Make sure you meet the basic requirements below to qualify for our financial services.
        </p>

        {/* Eligibility List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {list.map((item, index) => (
            <li
              key={index}
              className="
                flex items-start gap-3 
                p-4 sm:p-5 rounded-2xl 
                bg-blue-50 border border-blue-200 
                shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300
              "
            >
              <FiCheckCircle className="text-green-600 text-2xl sm:text-3xl flex-shrink-0" />
              <span className="text-blue-900 text-base sm:text-lg font-medium leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Disclaimer Box */}
        <div className="mt-8 sm:mt-10 text-center bg-yellow-50 border border-yellow-300 p-4 sm:p-6 rounded-2xl shadow-inner">
          <p className="text-yellow-800 font-semibold text-sm sm:text-base">
            * Eligibility varies based on loan amount, income stability, and credit history.
          </p>
        </div>

      </div>
    </section>
  );
}
