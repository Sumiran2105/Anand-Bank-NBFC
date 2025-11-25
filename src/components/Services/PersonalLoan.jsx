export default function PersonalLoan() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Personal Loan 💼</h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Whether it's education, travel, medical needs, or personal expenses—our
        personal loan offers flexibility with hassle-free processing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Interest Rate</h2>
          <p>Starts from <strong>10.5%*</strong></p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Loan Limit</h2>
          <p>₹50,000 to ₹5,00,000</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Tenure</h2>
          <p>Up to 5 Years</p>
        </div>

      </div>

      <button className="bg-blue-700 text-white px-8 py-3 rounded-lg">
        Apply Now
      </button>
    </div>
  );
}
