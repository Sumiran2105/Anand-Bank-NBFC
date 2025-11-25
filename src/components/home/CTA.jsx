import React from "react";

export default function CTA() {
  return (
    <section className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Financial Future?
        </h2>

        <p className="text-lg opacity-90">Let’s move forward — together.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300">
            Apply for Loan
          </button>

          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
