import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function ComparisonTable() {
  return (
    <section className="max-w-9xl mx-auto p-10 mt-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <h3 className="text-4xl font-extrabold text-blue-900 mb-10 text-center drop-shadow">
        Compare Our Financial Solutions
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg">
              <th className="p-5 text-left">Feature</th>
              <th className="p-5 text-left">Personal Loan</th>
              <th className="p-5 text-left">Business Loan</th>
              <th className="p-5 text-left">Investment Plans</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {/* Row 1 */}
            <tr className="border-b hover:bg-blue-100/40 transition-all duration-300 backdrop-blur-sm">
              <td className="p-5 font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-blue-700" />
                Interest Rates
              </td>
              <td className="p-5 bg-blue-50 text-blue-900 font-medium">
                12% – 18%
              </td>
              <td className="p-5 bg-blue-50 text-blue-900 font-medium">
                10% – 16%
              </td>
              <td className="p-5 bg-green-50 text-green-800 font-medium">
                7% – 12% returns
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b hover:bg-blue-100/40 transition-all duration-300 backdrop-blur-sm">
              <td className="p-5 font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-blue-700" />
                Approval Speed
              </td>
              <td className="p-5">24 Hours</td>
              <td className="p-5">2 – 3 Days</td>
              <td className="p-5">Instant</td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b hover:bg-blue-100/40 transition-all duration-300 backdrop-blur-sm">
              <td className="p-5 font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-blue-700" />
                Eligibility
              </td>
              <td className="p-5">Salaried / Self-employed</td>
              <td className="p-5">Businesses & Startups</td>
              <td className="p-5">All Individuals</td>
            </tr>

            {/* Row 4 */}
            <tr className="hover:bg-blue-100/40 transition-all duration-300 backdrop-blur-sm">
              <td className="p-5 font-semibold flex items-center gap-2">
                <FiCheckCircle className="text-blue-700" />
                Best For
              </td>
              <td className="p-5">Personal Expenses</td>
              <td className="p-5">Business Growth</td>
              <td className="p-5">Long-term Wealth</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
