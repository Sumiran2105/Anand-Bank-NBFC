import { Link } from "react-router-dom";

// Lucide Icons (modern, colourful-friendly)
import { 
  CreditCard, 
  Briefcase, 
  BarChart3, 
  Users 
} from "lucide-react";

import EmiCalculator from "../components/common/EmiCalculator";
import ComparisonTable from "../components/common/ComparisonTable";
import EligibilityChecker from "../components/common/EligibilityChecker";

export default function Services() {

  const services = [
    { 
      title: "Personal Loan", 
      path: "/personal-loan", 
      icon: <CreditCard size={48} className="text-blue-700" /> 
    },
    { 
      title: "Business Loan", 
      path: "/business-loan", 
      icon: <Briefcase size={48} className="text-blue-700" /> 
    },
    { 
      title: "Investment Plans", 
      path: "/investment", 
      icon: <BarChart3 size={48} className="text-blue-700" /> 
    },
    { 
      title: "Financial Advisors", 
      path: "/financial-advice", 
      icon: <Users size={48} className="text-blue-700" /> 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 🔷 HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-24 px-6 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-5 drop-shadow">
          Financial Services Designed for You
        </h1>

        <p className="text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
          Whether you're planning to buy a home, start a business, or invest in your future,
          we provide trusted financial solutions tailored to your needs.
        </p>

        <Link 
          to="/contact"
          className="mt-8 inline-block bg-white text-blue-800 font-semibold px-10 py-4 rounded-xl shadow-md hover:bg-gray-100 transition hover:scale-[1.03]"
        >
          Get Started →
        </Link>
      </section>

      {/* Decorative Divider */}
      <div className="h-16 bg-gradient-to-b from-blue-900 to-transparent opacity-20"></div>

      {/* 🔷 SERVICES GRID */}
      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="
                bg-white p-10 rounded-3xl border border-blue-100 shadow-md
                hover:shadow-2xl hover:scale-[1.04]
                transition-all duration-300 cursor-pointer text-center
                hover:border-blue-300 hover:bg-blue-50
                group
              "
            >
              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-700 transition">
                {service.title}
              </h3>

              {/* CTA */}
              <p className="text-blue-700 font-semibold mt-4 group-hover:ml-1 transition-all">
                Learn More →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-16 bg-gradient-to-t from-blue-200 to-transparent opacity-30"></div>

      

      {/* 🔷 COMPARISON TABLE */}
      <ComparisonTable />

        {/* 🔷 ELIGIBILITY CHECKER */}
      <EligibilityChecker />

      {/* 🔷 EMI CALCULATOR */}
      <EmiCalculator />

    

      {/* Bottom Spacing */}
      <div className="h-20"></div>

    </div>
  );
}
