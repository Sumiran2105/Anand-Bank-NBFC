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
     <section className="max-w-9xl mx-auto p-10 mt-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl">
        
        
        <h3 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
          Check Your Eligibility
        </h3>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Make sure you meet the basic requirements below to qualify for our financial services.
        </p>

      
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {list.map((item, index) => (
            <li
              key={index}
              className="
                flex items-start gap-3 
                p-5 rounded-2xl 
                bg-blue-50 border border-blue-200 
                shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300
              "
            >
              <FiCheckCircle className="text-green-600 text-3xl flex-shrink-0" />
              <span className="text-blue-900 text-lg font-medium leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        
        <div className="mt-10 text-center bg-yellow-50 border border-yellow-300 p-6 rounded-2xl shadow-inner">
          <p className="text-yellow-800 font-semibold">
            * Eligibility varies based on loan amount, income stability, and credit history.
          </p>
        </div>

      </div>
    </section>
  );
}
