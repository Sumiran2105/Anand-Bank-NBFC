import React from "react";
import { Link } from "react-router-dom";
import {  CreditCard, Briefcase, BarChart3, Users } from "lucide-react";
import EmiCalculator from "../components/common/EmiCalculator";
import ComparisonTable from "../components/common/ComparisonTable";
import EligibilityChecker from "../components/common/EligibilityChecker";

export default function Services() {

  const services = [
    { title: "Personal Loan", path: "/personal-loan", icon: <CreditCard /> },
    { title: "Business Loan", path: "/business-loan", icon: <Briefcase /> },
    { title: "Investment Plans", path: "/investment", icon: <BarChart3 /> },
    { title: "Financial Advisors", path: "/financial-advice", icon: <Users /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔷 HERO SECTION */}
      <section className="
        bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 
        text-white py-16 md:py-24 px-6 text-center shadow-lg
      ">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Financial Services Designed for You
        </h1>

        <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed px-2">
          Whether you're planning to buy a home, start a business, or invest in your future,
          we provide trusted financial solutions tailored to your needs.
        </p>

        <Link 
          to="/contact"
          className="
            mt-8 inline-block bg-white text-blue-800 
            font-semibold px-8 md:px-10 py-3 md:py-4 
            rounded-xl shadow-md hover:bg-gray-100 
            transition hover:scale-[1.03]
          "
        >
          Get Started →
        </Link>
      </section>

      {/* Decorative Divider */}
      <div className="h-10 md:h-14 bg-gradient-to-b from-blue-900 to-transparent opacity-20"></div>

      {/* 🔷 SERVICES GRID */}
      <section className="px-4 sm:px-8 md:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10 md:mb-12 text-center">
          Explore Our Services
        </h2>

        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-5 md:gap-6
          "
        >
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="
                bg-white 
                rounded-xl
                border border-blue-100 
                shadow-sm
                hover:shadow-lg 
                transition-all duration-300 
                cursor-pointer text-center
                hover:border-blue-300 hover:bg-blue-50
                group

                p-5 md:p-6
                w-full
                max-w-[220px]     
                mx-auto
                min-h-[200px]    
                flex flex-col items-center justify-center
              "
            >
              {/* Icon */}
              <div className="mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {React.cloneElement(service.icon, {
                  size: 32,
                  className: "text-blue-700"
                })}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition">
                {service.title}
              </h3>

              {/* CTA */}
              <p className="text-blue-700 font-medium mt-2 text-xs group-hover:ml-1 transition-all">
                Learn More →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-10 md:h-14 bg-gradient-to-t from-blue-200 to-transparent opacity-30"></div>

      {/* 🔷 COMPARISON TABLE */}
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        <ComparisonTable />
      </div>

      {/* 🔷 ELIGIBILITY CHECKER */}
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        <EligibilityChecker />
      </div>

      {/* 🔷 EMI CALCULATOR */}
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        <EmiCalculator />
      </div>

      {/* Bottom Spacing */}
      <div className="h-16 md:h-20"></div>

    </div>
  );
}
