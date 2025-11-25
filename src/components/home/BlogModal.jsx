import React from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function BlogModal({ open, onClose, post }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex justify-center items-center p-4">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-6 relative overflow-y-auto max-h-[85vh]"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <FiX size={26} />
        </button>

        {/* Image */}
        <img
          src={post.image}
          className="w-full h-60 object-cover rounded-xl mb-6"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          {post.title}
        </h2>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed">
          {post.fullText}
        </p>
      </motion.div>
    </div>
  );
}
