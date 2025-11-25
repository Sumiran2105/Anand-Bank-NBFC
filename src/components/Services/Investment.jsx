export default function Investment() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Investment Plans 📈</h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Secure your financial future with diversified investment portfolios
        tailored to your goals and risk level.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Mutual Funds</h2>
          <p>Return: 10–15% expected annually.</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Fixed Income</h2>
          <p>Secure options with guaranteed returns.</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Retirement Plans</h2>
          <p>Monthly stable pension options available.</p>
        </div>

      </div>

      <button className="bg-blue-700 text-white px-8 py-3 rounded-lg">Get Investment Advice</button>
    </div>
  );
}
