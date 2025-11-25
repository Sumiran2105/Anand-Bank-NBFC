import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function ComparisonTable() {
  return (
    <section className="max-w-7xl mx-auto p-6 sm:p-10 mt-20 bg-gradient-to-br from-white via-blue-50 to-white rounded-xl">
      
      <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-900 mb-8 sm:mb-10 text-center drop-shadow">
        Compare Our Financial Solutions
      </h3>

      {/* Responsive Wrapper */}
      <div className="overflow-x-auto rounded-xl shadow-lg border border-blue-100">
        <table className="w-full border-collapse min-w-[600px] sm:min-w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm sm:text-lg">
              <th className="p-3 sm:p-5 text-left">Feature</th>
              <th className="p-3 sm:p-5 text-left">Personal Loan</th>
              <th className="p-3 sm:p-5 text-left">Business Loan</th>
              <th className="p-3 sm:p-5 text-left">Investment Plans</th>
            </tr>
          </thead>

          <tbody className="text-gray-800 text-sm sm:text-base">

            {/* Row 1 */}
            <tr className="border-b hover:bg-blue-100/40 transition-all duration-300">
              <td className="p-3 sm:p-5 font-semibold flex items-center gap-2 min-w-[180px]">
                <FiCheckCircle className="text-blue-700 flex-shrink-0" />
                Interest Rates
              </td>
              <td className="p-3 sm:p-5 bg-blue-50 text-blue-900 font-medium">
                12% – 18%
              </td>
              <td className="p-3 sm:p-5 bg-blue-50 text-blue-900 font-medium">
                10% – 16%
              </td>
              <td className="p-3 sm:p-5 bg-green-50 text-green-800 font-medium">
                7% – 12% returns
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b hover:bg-blue-100/40 transition-all duration-300">
              <td className="p-3 sm:p-5 font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-blue-700 flex-shrink-0" />
                Approval Speed
              </td>
              <td className="p-3 sm:p-5">24 Hours</td>
              <td className="p-3 sm:p-5">2 – 3 Days</td>
              <td className="p-3 sm:p-5">Instant</td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b hover:bg-blue-100/40 transition-all duration-300">
              <td className="p-3 sm:p-5 font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-blue-700 flex-shrink-0" />
                Eligibility
              </td>
              <td className="p-3 sm:p-5">Salaried / Self-employed</td>
              <td className="p-3 sm:p-5">Businesses & Startups</td>
              <td className="p-3 sm:p-5">All Individuals</td>
            </tr>

            {/* Row 4 */}
            <tr className="hover:bg-blue-100/40 transition-all duration-300">
              <td className="p-3 sm:p-5 font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-blue-700 flex-shrink-0" />
                Best For
              </td>
              <td className="p-3 sm:p-5">Personal Expenses</td>
              <td className="p-3 sm:p-5">Business Growth</td>
              <td className="p-3 sm:p-5">Long-term Wealth</td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  );
}
