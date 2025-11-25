import React from "react";

export default function Services() {
  const services = [
    {
      image: "assets/services/personal.jpg",
      title: "Personal Loans",
      highlight: "A loan designed around your personal needs.",
      text: "Whether it's education, medical emergencies, home upgrades, or lifestyle expenses, our personal loans are crafted to support your immediate requirements with flexible repayment options.",
      points: [
        "Quick approval process",
        "Minimal documentation",
        "Flexible tenure options",
      ],
    },
    {
      image: "assets/services/business.jpg",
      title: "Business Loans",
      highlight: "Fueling growth for SMEs and entrepreneurs.",
      text: "Scale your business with tailored financial solutions built to support expansion, operations, and long-term stability. Perfect for startups, small businesses, and established firms.",
      points: [
        "Customized loan structures",
        "Working capital financing",
        "Competitive interest rates",
      ],
    },
    {
      image: "assets/services/investment.jpeg",
      title: "Investment Plans",
      highlight: "Grow your wealth safely and strategically.",
      text: "Our investment plans are designed to provide consistent returns with secure, long-term strategies that help you build wealth confidently.",
      points: [
        "Low-risk financial products",
        "Long-term compounding benefits",
        "Expert-managed portfolios",
      ],
    },
    {
      image: "assets/services/saving.jpeg",
      title: "Savings Products",
      highlight: "Smart savings for a stronger financial future.",
      text: "Save confidently with products designed for reliability and steady returns. Build your savings effortlessly, securely, and with complete transparency.",
      points: [
        "High-interest rate options",
        "Zero hidden charges",
        "Instant withdrawal flexibility",
      ],
    },
    {
      image: "assets/services/emi.png",
      title: "Flexible EMI Options",
      highlight: "Repay at your convenience.",
      text: "Our EMI structures adapt to your income flow, ensuring stress-free repayment without burdening your monthly finances.",
      points: [
        "Flexible EMI scheduling",
        "Low processing fees",
        "Customer-first repayment support",
      ],
    },
    {
      image: "assets/services/advisory.jpeg",
      title: "Financial Advisory",
      highlight: "Expert guidance for smart financial decisions.",
      text: "Plan better with personalized financial insights from our trusted advisors. From wealth planning to risk management — we've got you covered.",
      points: [
        "Personalized financial strategies",
        "Investment portfolio guidance",
        "Long-term wealth planning",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-900">
          Our Financial Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group bg-white/70 
                backdrop-blur-md 
                rounded-2xl 
                shadow-lg 
                hover:shadow-2xl
                transition 
                hover:-translate-y-2 
                p-6
                border border-white/50
              "
            >
              {/* Image */}
              <div className="w-full h-40 mb-6 rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="font-bold text-2xl text-blue-900 mb-1">
                {service.title}
              </h3>

              <p className="text-blue-600 font-medium mb-4">
                {service.highlight}
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.text}
              </p>

              {/* Bullet Points */}
              <ul className="text-gray-700 space-y-1 mb-5">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-[2px]">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Accent Bar */}
              <div className="w-12 h-1 bg-blue-500 group-hover:w-20 transition-all duration-300"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
