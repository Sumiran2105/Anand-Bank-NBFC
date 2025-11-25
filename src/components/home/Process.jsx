import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiCheckCircle, FiUserCheck, FiCreditCard } from "react-icons/fi";

export default function Process() {
  const steps = [
    {
      icon: <FiFileText size={32} />,
      title: "1. Apply Online",
      text: "Fill a simple digital form with basic details to start your process.",
    },
    {
      icon: <FiUserCheck size={32} />,
      title: "2. Verification",
      text: "Our team verifies your documents quickly and securely.",
    },
    {
      icon: <FiCheckCircle size={32} />,
      title: "3. Approval",
      text: "Receive fast approval based on eligibility and requirements.",
    },
    {
      icon: <FiCreditCard size={32} />,
      title: "4. Disbursement",
      text: "Funds are transferred directly to your account in no time.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent, and fast process — designed for your convenience.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="
                p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow 
                transition-all duration-300 
                hover:-translate-y-3 hover:shadow-2xl hover:bg-blue-100
                group
              "
            >
              <div className="text-blue-700 mb-4 transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              <h3 className="font-bold text-xl text-blue-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
