import React from "react";
 
export default function AboutBank() {
  return (
    <div className="pt-18 bg-white">
 
      {/* ============================
            ABOUT – ANAND BANK NBFC
      ============================== */}
      <section className="max-w-7xl mx-auto px-5 pt-32 pb-20">
 
        {/* Title */}
        <div className="flex justify-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
            About Anand Bank NBFC
          </h1>
        </div>
 
        <div className="grid md:grid-cols-2 gap-14">
 
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="assets/founder.jpg"
              alt="Anand Bank NBFC"
              className="rounded-3xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
 
       {/* Right Side Text */}
<div className="flex flex-col justify-center">
 
  <p className="text-[1.15rem] text-gray-700 leading-relaxed">
    Anand Bank NBFC is a trusted and modern financial institution offering accessible
    credit, secure investments, and transparent financial solutions. We bridge the gap
    between traditional banking and today’s evolving financial needs.
  </p>
 
  <p className="mt-5 text-[1.15rem] text-gray-700 leading-relaxed">
    Whether you’re managing personal finance, medical expenses, education needs,
    home renovation, or business growth — our services ensure stress-free financial
    support.
  </p>
 
  <p className="mt-5 text-[1.15rem] text-gray-700 leading-relaxed">
    We maintain clear processes, customer-first guidance, and continuous innovation to
    deliver smooth and reliable financial experiences.
  </p>
 
  {/* ⭐ ADDED NEW CONTENT ⭐ */}
  <p className="mt-5 text-[1.15rem] text-gray-700 leading-relaxed">
    As a forward-focused NBFC, we emphasize responsible lending practices and
    financial discipline. Our team works closely with customers to understand their
    goals, assess their requirements, and offer solutions tailored to their unique
    financial situations.
  </p>
 
  <p className="mt-5 text-[1.15rem] text-gray-700 leading-relaxed">
    With a strong commitment to transparency, every process — from loan approval
    to repayment — is designed to be simple, predictable, and hassle-free. Our
    digital-first approach ensures faster processing, minimal paperwork, and complete
    clarity at every step.
  </p>
 
  <p className="mt-5 text-[1.15rem] text-gray-700 leading-relaxed">
    Over the years, Anand Bank NBFC has earned the trust of individuals, families,
    and businesses by offering secure investment options, flexible EMIs, and
    professional financial guidance. We continue to expand our services with one goal
    in mind: empowering customers to build a stable and successful future.
  </p>
 
  <p className="mt-6 text-gray-900 font-semibold text-xl bg-blue-50 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
    “Empowering financial dreams. Strengthening futures. Delivering trust — every step
    of the way.”
  </p>
</div>
 
        </div>
      </section>
 
      {/* ============================
            WHY CHOOSE ANAND BANK
      ============================== */}
      <section className="py-20 px-6">
 
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
          Why Choose Anand Bank NBFC?
        </h2>
 
        <p className="text-center mt-4 text-gray-700 max-w-3xl mx-auto text-[1.15rem]">
          We provide transparent, technology-driven, and customer-focused financial
          solutions designed to build a stronger and more secure future.
        </p>
 
        {/* Cards */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">
 
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-blue-700 text-5xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-blue-800">Quick Approvals</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Fast loan approvals with minimal documentation.
            </p>
          </div>
 
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-yellow-500 text-5xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-yellow-600">Flexible EMIs</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Repayment options that fit your budget.
            </p>
          </div>
 
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-emerald-600 text-5xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold text-emerald-700">100% Transparency</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              No hidden fees. No extra charges.
            </p>
          </div>
 
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-orange-500 text-5xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-orange-600">Smart Investments</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Secure and profitable investment opportunities.
            </p>
          </div>
 
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-purple-600 text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-purple-700">Dedicated Support</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Friendly and reliable financial assistance.
            </p>
          </div>
 
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-pink-600 text-5xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-pink-600">24/7 Helpdesk</h3>
            <p className="mt-3 text-gray-600 text-[1.05rem]">
              Assistance anytime you need it.
            </p>
          </div>
 
        </div>
      </section>
 
      {/* ============================
               OUR MISSION
      ============================== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
 
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900">
          Our Mission
        </h2>
 
        <p className="mt-6 text-gray-700 text-[1.15rem] leading-relaxed text-center max-w-4xl mx-auto">
          Our mission is to deliver reliable, transparent, and accessible financial
          solutions that empower individuals and businesses to build a secure,
          stable future.
        </p>
 
        <p className="mt-4 text-gray-700 text-[1.15rem] leading-relaxed text-center max-w-4xl mx-auto">
          We aim to make financial support simple, safe, and impactful for
          personal and business needs.
        </p>
 
        {/* Mission Cards */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
 
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300">
            <div className="text-blue-600 text-4xl mb-3">🌟</div>
            <h4 className="text-xl font-semibold text-blue-700">Empower Individuals</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Financial tools for personal growth and stability.
            </p>
          </div>
 
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-yellow-300 hover:-translate-y-2 transition-all duration-300">
            <div className="text-yellow-500 text-4xl mb-3">🏢</div>
            <h4 className="text-xl font-semibold text-yellow-600">Support Businesses</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Loans designed for business expansion.
            </p>
          </div>
 
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-orange-300 hover:-translate-y-2 transition-all duration-300">
            <div className="text-orange-500 text-4xl mb-3">🔒</div>
            <h4 className="text-xl font-semibold text-orange-600">Financial Stability</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Secure and long-term financial solutions.
            </p>
          </div>
 
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-purple-300 hover:-translate-y-2 transition-all duration-300">
            <div className="text-purple-600 text-4xl mb-3">📘</div>
            <h4 className="text-xl font-semibold text-purple-600">Transparent Process</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Clear communication and honest guidance.
            </p>
          </div>
 
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-emerald-300 hover:-translate-y-2 transition-all duration-300">
            <div className="text-emerald-600 text-4xl mb-3">💹</div>
            <h4 className="text-xl font-semibold text-emerald-600">Wealth Growth</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Rewarding and safe investment options.
            </p>
          </div>
 
          <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-pink-300 hover:-translate-y-2 transition-all duration-300">
            <div className="text-pink-600 text-4xl mb-3">🤝</div>
            <h4 className="text-xl font-semibold text-pink-600">Customer Excellence</h4>
            <p className="mt-2 text-gray-600 text-[1.05rem]">
              Friendly assistance for every financial choice.
            </p>
          </div>
 
        </div>
      </section>
 
    </div>
  );
}
 
 