import React, { useState } from "react";

interface Buckets {
  essentials: number;
  discretionary: number;
  donations: number;
  investments: number;
}

const App: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [buckets, setBuckets] = useState<Buckets>({
    essentials: 0,
    discretionary: 0,
    donations: 0,
    investments: 0,
  });

  const handleSplit = () => {
    setBuckets({
      essentials: amount * 0.3,
      discretionary: amount * 0.2,
      donations: amount * 0.25,
      investments: amount * 0.25,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Budget Splitter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSplit();
          }}
        >
          <input
            type="number"
            value={amount === 0 ? "" : amount}
            onChange={(e) =>
              setAmount(
                e.target.value === "" ? 0 : parseFloat(e.target.value) || 0
              )
            }
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter amount"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Split
          </button>
        </form>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Essentials (30%)</span>
            <span>
              {amount === 0 && !String(amount)
                ? "-"
                : `$${buckets.essentials.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Discretionary (20%)</span>
            <span>
              {amount === 0 && !String(amount)
                ? "-"
                : `$${buckets.discretionary.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Donations (25%)</span>
            <span>
              {amount === 0 && !String(amount)
                ? "-"
                : `$${buckets.donations.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Investments (25%)</span>
            <span>
              {amount === 0 && !String(amount)
                ? "-"
                : `$${buckets.investments.toFixed(2)}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
