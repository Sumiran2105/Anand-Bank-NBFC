import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { FiCreditCard, FiPercent, FiClock } from "react-icons/fi";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmiCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [months, setMonths] = useState(12);

  const monthlyRate = rate / 12 / 100;
  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayable = emi * months;
  const totalInterest = totalPayable - amount;

  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [amount, totalInterest],
        backgroundColor: ["#3b82f6", "#f59e0b"],
        hoverBackgroundColor: ["#2563eb", "#d97706"],
        borderWidth: 2,
        cutout: "72%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#1e3a8a",
          font: { size: 13 },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <section className="max-w-5xl mx-auto mt-20 p-1 rounded-3xl bg-gradient-to-r from-blue-200 to-blue-100 shadow-xl">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-blue-100">
        
        {/* Title */}
        <h3 className="text-4xl font-extrabold text-blue-900 text-center mb-10">
          EMI Calculator
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Inputs */}
          <div className="space-y-8">

            {/* Loan Amount */}
            <div>
              <label className="text-gray-700 font-semibold flex items-center gap-2">
                <FiCreditCard className="text-blue-600 text-xl" />
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="w-full mt-3 p-3 rounded-xl border border-blue-200 shadow-sm focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="range"
                min="10000"
                max="1000000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="w-full mt-3 accent-blue-500"
              />
            </div>

            {/* Rate */}
            <div>
              <label className="text-gray-700 font-semibold flex items-center gap-2">
                <FiPercent className="text-blue-600 text-xl" />
                Interest Rate (%)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-full mt-3 p-3 rounded-xl border border-blue-200 shadow-sm focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="range"
                min="5"
                max="30"
                value={rate}
                onChange={(e) => setRate(parseInt(e.target.value))}
                className="w-full mt-3 accent-blue-500"
              />
            </div>

            {/* Tenure */}
            <div>
              <label className="text-gray-700 font-semibold flex items-center gap-2">
                <FiClock className="text-blue-600 text-xl" />
                Tenure (Months)
              </label>
              <input
                type="number"
                value={months}
                onChange={(e) => setMonths(parseInt(e.target.value))}
                className="w-full mt-3 p-3 rounded-xl border border-blue-200 shadow-sm focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="range"
                min="3"
                max="120"
                value={months}
                onChange={(e) => setMonths(parseInt(e.target.value))}
                className="w-full mt-3 accent-blue-500"
              />
            </div>

          </div>

          {/* Right: Donut Chart */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 sm:w-80">
              <Doughnut data={data} options={options} />
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-xl font-semibold text-blue-900">
                Monthly EMI:
              </h4>
              <p className="text-4xl font-extrabold text-blue-700 mt-1">
                ₹{emi ? emi.toFixed(0) : 0}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-100 p-4 rounded-xl border border-blue-200 shadow-sm">
                  <p className="text-sm text-blue-700 font-medium">Principal</p>
                  <p className="text-xl font-bold text-blue-900">₹{amount}</p>
                </div>

                <div className="bg-yellow-100 p-4 rounded-xl border border-yellow-300 shadow-sm">
                  <p className="text-sm text-yellow-700 font-medium">Interest</p>
                  <p className="text-xl font-bold text-yellow-800">
                    ₹{totalInterest.toFixed(0)}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
