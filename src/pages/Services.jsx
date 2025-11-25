import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Personal Loan",
      path: "/personal-loan",
      icon: "💼",
    },
    {
      title: "Business Loan",
      path: "/business-loan",
      icon: "🏢",
    },
    {
      title: "Investment Plans",
      path: "/investment",
      icon: "📈",
    },
    {
      title: "Savings & Deposits",
      path: "/savings",
      icon: "💰",
    },
    {
      title: "Financial Advisors",
      path: "/financial-advice",
      icon: "🧑‍💼",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 🔷 HERO SECTION */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Financial Services Designed for You</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Whether you're planning to buy a home, start a business, or invest in your future,
          we provide trusted financial solutions tailored to your needs.
        </p>

        <Link 
          to="/contact"
          className="mt-6 inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started →
        </Link>
      </section>


      {/* 🔷 Services Grid */}
      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="bg-white p-10 rounded-2xl shadow hover:shadow-xl hover:scale-[1.03] transition border border-gray-100 cursor-pointer text-center"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-blue-600 font-semibold mt-3">Learn More →</p>
            </Link>
          ))}
        </div>
      </section>


      {/* 🔷 CTA Section */}
      <section className="bg-blue-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Need Help Choosing the Right Plan?
        </h2>

        <p className="text-gray-700 mb-6">
          Our experts are here to guide you every step of the way.
        </p>

        <Link
          to="/contact"
          className="bg-blue-700 text-white px-10 py-3 rounded-lg text-lg hover:bg-blue-800 transition"
        >
          Talk to a Financial Expert
        </Link>
      </section>

    </div>
  );
}
