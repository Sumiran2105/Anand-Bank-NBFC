import { 
  FaHandshake, 
  FaLaptopCode, 
  FaSyncAlt, 
  FaGlobeAsia, 
  FaLock, 
  FaSeedling 
} from 'react-icons/fa';

const features = [
  {
    icon: <FaHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />,
    title: "Wide Range of Loan Options",
    text: "Personal, business, vehicle, and microfinance loans tailored for diverse needs.",
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
    title: "Innovative Digital Solutions",
    text: "Seamless applications and instant online verification for faster approvals.",
  },
  {
    icon: <FaSyncAlt className="w-8 h-8 sm:w-10 sm:h-10 text-lime-500" />,
    title: "Flexible Repayment Plans",
    text: "Repayment schedules match your actual cash flow.",
  },
  {
    icon: <FaGlobeAsia className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500" />,
    title: "Financial Inclusion",
    text: "Serving rural, urban, and unbanked segments to expand credit access.",
  },
  {
    icon: <FaLock className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-700" />,
    title: "Secure & Transparent",
    text: "Encrypted transactions, e-KYC, and instant fraud alerts ensure safety.",
  },
  {
    icon: <FaSeedling className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
    title: "Growth Support",
    text: "Empowering small businesses and startups to grow.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-900 mb-10 sm:mb-12 drop-shadow">
          Why Choose Anand Bank NBFC?
        </h2>

        {/* Grid */}
        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6 sm:gap-10
        ">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group 
                bg-white 
                rounded-3xl 
                shadow-[0_8px_32px_rgba(32,30,100,0.14)] 
                border border-yellow-100 
                p-6 sm:p-8 
                flex flex-col items-center 
                text-center

                transition 
                hover:-translate-y-3 
                hover:shadow-[0_18px_38px_rgba(180,150,80,0.24)] 
                hover:border-yellow-300 
                hover:bg-gradient-to-br 
                hover:from-yellow-50 
                hover:to-white
              "
            >
              <div className="mb-4 drop-shadow-lg">{item.icon}</div>

              <h3 className="
                font-semibold 
                text-xl sm:text-2xl 
                text-indigo-700 
                mb-2 sm:mb-3 
                group-hover:text-yellow-500 
                transition-colors
              ">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-indigo-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
