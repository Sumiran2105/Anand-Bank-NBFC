export default function FinancialAdvice() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Financial Advisors 🧑‍💼</h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Get expert guidance from certified financial advisors to plan wealth,
        investments, retirement and tax optimization.
      </p>

      <div className="bg-white shadow p-8 rounded-xl mb-10">
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Investment & Wealth Planning</li>
          <li>✔ Retirement Strategy</li>
          <li>✔ Savings Optimization</li>
          <li>✔ Income & Tax Planning</li>
          <li>✔ Portfolio Management</li>
        </ul>
      </div>

      <button className="bg-blue-700 text-white px-8 py-3 rounded-lg">
        Book Appointment
      </button>
    </div>
  );
}
