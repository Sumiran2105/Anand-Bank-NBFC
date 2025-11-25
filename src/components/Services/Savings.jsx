export default function Savings() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Savings & Deposits 💰</h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-10">
        Save securely and earn rewarding interest with multiple flexible deposit
        schemes suitable for every customer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Savings Account</h2>
          <p>Interest Rate: <strong>4% - 6%</strong></p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Fixed Deposit</h2>
          <p>Interest Rate: Up to <strong>9.2%</strong></p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Recurring Deposit</h2>
          <p>Flexible monthly deposits.</p>
        </div>

      </div>

      <button className="bg-blue-700 text-white px-8 py-3 rounded-lg">Open Account</button>
    </div>
  );
}
