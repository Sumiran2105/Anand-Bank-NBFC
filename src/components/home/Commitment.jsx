import React from "react";
import { FiShield, FiSmile, FiCheckCircle } from "react-icons/fi";

export default function Commitment() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            Our Commitment to You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            More than financial services — we deliver trust, transparency, and long-term
            support for every customer and every dream.
          </p>
        </div>

        {/* ⭐ STATISTICS BLOCK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white shadow-md rounded-xl px-6 py-6 text-center border border-blue-100">
            <h3 className="text-4xl font-extrabold text-blue-900 mb-1">10,000+</h3>
            <p className="text-gray-600 text-sm">Happy Customers</p>
          </div>

          <div className="bg-white shadow-md rounded-xl px-6 py-6 text-center border border-blue-100">
            <h3 className="text-4xl font-extrabold text-blue-900 mb-1">₹150 Cr+</h3>
            <p className="text-gray-600 text-sm">Loans Disbursed</p>
          </div>

          <div className="bg-white shadow-md rounded-xl px-6 py-6 text-center border border-blue-100">
            <h3 className="text-4xl font-extrabold text-blue-900 mb-1">96%</h3>
            <p className="text-gray-600 text-sm">Customer Satisfaction</p>
          </div>

          <div className="bg-white shadow-md rounded-xl px-6 py-6 text-center border border-blue-100">
            <h3 className="text-4xl font-extrabold text-blue-900 mb-1">18+ Years</h3>
            <p className="text-gray-600 text-sm">Of Trusted Service</p>
          </div>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
           {/* Intro Paragraph */}
    At <span className="font-semibold text-blue-900">Anand Bank NBFC</span>, 
    we are committed to providing financial solutions that are not only reliable 
    but also empowering. Our goal is to ensure customers feel confident, informed, 
    and supported through every step of their financial journey.
  </p>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: Text */}
     <div className="space-y-6">

 
  

  <div className="grid grid-cols-1 gap-5">

    {/* Card 1 */}
    <div className="
      p-6 rounded-xl bg-white/90 
      shadow-sm border border-blue-100 
      transition-all duration-300 
      hover:-translate-y-2 hover:shadow-xl
    ">
      <h4 className="font-semibold text-blue-900 text-xl flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-2xl">🔒</span>
        Transparent Processes
      </h4>
      <p className="text-gray-600 leading-relaxed">
        We ensure every step is clearly communicated — no hidden terms, no unexpected charges.
        Our customers stay fully aware of interest rates, repayment schedules, and eligibility
        without confusion.
      </p>
      <ul className="list-disc list-inside text-gray-500 mt-3 space-y-1">
        <li>Clear documentation & support</li>
        <li>Easy-to-understand loan structures</li>
        <li>Full transparency in policies</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="
      p-6 rounded-xl bg-white/90 
      shadow-sm border border-blue-100 
      transition-all duration-300 
      hover:-translate-y-2 hover:shadow-xl
    ">
      <h4 className="font-semibold text-blue-900 text-xl flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-2xl">😊</span>
        Customer-First Approach
      </h4>
      <p className="text-gray-600 leading-relaxed">
        Every loan, investment, or savings solution we provide is tailored around your comfort 
        and financial capability. We prioritize your goals while making sure repayments remain stress-free.
      </p>
      <ul className="list-disc list-inside text-gray-500 mt-3 space-y-1">
        <li>Personalized loan options for every need</li>
        <li>Flexible repayment schedules</li>
        <li>Friendly customer support available anytime</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="
      p-6 rounded-xl bg-white/90 
      shadow-sm border border-blue-100 
      transition-all duration-300 
      hover:-translate-y-2 hover:shadow-xl
    ">
      <h4 className="font-semibold text-blue-900 text-xl flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-2xl">✅</span>
        Reliable & Secure Support
      </h4>
      <p className="text-gray-600 leading-relaxed">
        Our financial experts and support teams are dedicated to ensuring you receive safe, 
        secure, and responsible guidance. Your financial well-being is at the heart of 
        everything we do.
      </p>
      <ul className="list-disc list-inside text-gray-500 mt-3 space-y-1">
        <li>Trusted NBFC experience</li>
        <li>Secure processing and data handling</li>
        <li>End-to-end support for all financial decisions</li>
      </ul>
    </div>

  </div>

</div>
          {/* Image */}
          {/* Right Side Image (Soft Blend, No Borders) */}
<div className="relative flex items-center justify-center w-full h-full">

  {/* Background fade so image melts into the section */}
  <div className="absolute inset-0 bg-gradient-to-l from-blue-50 via-transparent to-transparent pointer-events-none" />

  <img
    src="/assets/commitment-2.png"
    alt="Commitment"
    className="
      w-[85%] 
      h-auto
      object-contain
      opacity-95
      mix-blend-multiply 
      transition-all 
      duration-500 
      mx-auto
    "
  />

</div>


        </div>

      </div>
    </section>
  );
}
