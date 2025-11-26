import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogModal from "./BlogModal";

export default function Blog() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      image: "assets/loans.jpeg",
      title: "How to Choose the Right Loan",
      text: "A simple guide to selecting a loan that fits your financial goals.",
      fullText: `
Choosing the right loan starts with identifying your exact need, comparing interest
rates, checking eligibility, and understanding repayment options. Always choose
a loan that aligns with your income and long-term goals. Anand Bank NBFC ensures
you get transparent options with flexible EMIs.
      `,
    },
    {
      image: "assets/credit.jpg",
      title: "Understanding Your CIBIL Score",
      text: "Why credit score matters and how you can improve it.",
      fullText: `
Your CIBIL score reflects your creditworthiness. A high score improves your loan
eligibility and reduces interest rates. Pay EMIs on time, avoid multiple loan
applications, and maintain low credit utilization to improve your score.
      `,
    },
    {
      image: "assets/saving.jpg",
      title: "Smart Saving Strategies",
      text: "Easy financial habits that help you build wealth consistently.",
      fullText: `
Saving smart is about consistency. Automate savings, diversify investments, reduce
unnecessary expenses, and set clear monthly targets. Our financial advisors can
help you build a sustainable, long-term savings plan.
      `,
    },
  ];

  const openPost = (post) => {
    setSelectedPost(post);
    setOpenModal(true);
  };

  return (
    <section className="py-14 sm:py-19 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3 sm:mb-4">
            Financial Resources & Insights
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
            Stay informed with helpful guides, tips, and financial education.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2
            md:grid-cols-3
            gap-6 sm:gap-8
          "
        >
          {posts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="
                bg-white rounded-2xl shadow-lg overflow-hidden 
                border border-blue-100 
                hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  className="
                    w-full 
                    h-36 sm:h-40 md:h-48 
                    object-cover 
                    transition-transform duration-500 
                    hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-blue-900 mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {p.text}
                </p>

                <button
                  onClick={() => openPost(p)}
                  className="
                    text-blue-700 font-medium text-sm sm:text-base
                    flex items-center gap-1
                    transition-all duration-300 hover:gap-2
                  "
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <BlogModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          post={selectedPost}
        />

      </div>
    </section>
  );
}
