import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiCheckCircle, FiUserCheck, FiCreditCard } from "react-icons/fi";

export default function Process() {
  const steps = [
    {
      icon: <FiFileText size={22} />,
      title: "Apply Online",
      text: "Fill a simple digital form with basic details to start your process.",
    },
    {
      icon: <FiUserCheck size={22} />,
      title: "Verification",
      text: "Our team verifies your documents quickly and securely.",
    },
    {
      icon: <FiCheckCircle size={22} />,
      title: "Approval",
      text: "Receive fast approval based on eligibility and requirements.",
    },
    {
      icon: <FiCreditCard size={22} />,
      title: "Disbursement",
      text: "Funds are transferred directly to your account in no time.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent, and fast process — designed for your convenience.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="
          relative
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6 sm:gap-8 lg:gap-10
        ">

          {/* DESKTOP CONNECTING LINES */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0">
            <div className="w-full border-t-2 border-dashed border-blue-200"></div>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="
                relative
                bg-blue-50/70 backdrop-blur-md
                border border-blue-100
                rounded-2xl shadow-lg
                p-5 sm:p-6
                text-center
                transition-all duration-300 
                hover:shadow-2xl 
                hover:bg-blue-100/70
              "
            >
              {/* Floating Step Number Behind Card */}
              <div className="
                absolute -top-3 -left-3 
                text-blue-200 font-extrabold text-5xl 
                opacity-30 select-none pointer-events-none
              ">
                {i + 1}
              </div>

              {/* Icon Circle */}
              <div className="
                w-12 h-12 sm:w-14 sm:h-14 
                flex items-center justify-center
                bg-white shadow-md rounded-full 
                text-blue-700 mx-auto mb-4
                transition-transform duration-300
                hover:scale-110
              ">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg sm:text-xl text-blue-900 mb-2">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.text}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
