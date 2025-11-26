import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Verma",
      text: "Anand Bank NBFC made my loan process incredibly smooth. Transparent, quick, and extremely supportive!",
      role: "Personal Loan Customer",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Priya Sharma",
      text: "Their financial advisory team helped me create a long-term investment plan tailored to my goals.",
      role: "Investment Customer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Arjun Patel",
      text: "Business loan approval was fast and hassle-free. Perfect for entrepreneurs needing quick capital.",
      role: "Business Loan Customer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Real stories from people who trusted us with their financial needs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-6 sm:gap-8
        ">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="
                bg-white 
                p-5 sm:p-6 
                rounded-2xl 
                shadow-lg 
                border border-blue-100 
                transition duration-300 
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Avatar */}
              <div className="flex justify-center mb-3 sm:mb-4">
                <img
                  src={t.image}
                  className="
                    w-16 h-16 sm:w-20 sm:h-20 
                    rounded-full object-cover shadow-md
                  "
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 italic text-sm sm:text-base mb-3 sm:mb-4">
                "{t.text}"
              </p>

              {/* Name */}
              <h4 className="font-bold text-blue-900 text-sm sm:text-base">
                {t.name}
              </h4>

              {/* Role */}
              <p className="text-gray-500 text-xs sm:text-sm">
                {t.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
