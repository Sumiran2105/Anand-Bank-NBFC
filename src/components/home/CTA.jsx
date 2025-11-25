import React from "react";

export default function CTA() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
          Shape Your Financial Tomorrow Today
        </h2>

        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Our team is here to help you choose the right financial path with confidence.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 shadow-md transition">
            Apply for Loan
          </button>

          <button className="bg-gray-100 text-blue-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-200 shadow-md transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
