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
    <section className="py-18 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            Financial Resources & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with helpful guides, tips, and financial education.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="
                bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 
                transition-all duration-300
                hover:-translate-y-4 hover:shadow-2xl hover:border-blue-300
                group
              "
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-blue-900 mb-2 group-hover:text-blue-700 transition">
                  {p.title}
                </h3>

                <p className="text-gray-600 mb-4">{p.text}</p>

                <button
                  onClick={() => openPost(p)}
                  className="
                    text-blue-700 font-medium flex items-center gap-1
                    transition-all duration-300 group-hover:gap-3
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
