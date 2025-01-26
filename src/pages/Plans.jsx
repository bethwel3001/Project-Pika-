import React from "react";

const Plans = () => {
  return (
    <div className="py-16 px-6 text-center">
      <h1 className="text-3xl font-bold">Choose Your Plan</h1>
      <p className="mt-4 text-lg">Flexible options for everyone!</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 border-4 border-blue-500 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold">Basic</h2>
          <p className="mt-4">$10/month</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>✔ Unlimited color palettes</li>
            <li>✔ Dark mode support</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
            Choose Basic
          </button>
        </div>
        {/* Premium Plan */}
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 border-4 border-purple-500 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold">Premium</h2>
          <p className="mt-4">$20/month</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>✔ All features of Basic</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg">
            Choose Premium
          </button>
        </div>
        {/* Nove Plan */}
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 border-4 border-yellow-500 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold">Nove</h2>
          <p className="mt-4">$30/month</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>✔ All features of Premium</li>
            <li>✔ Exclusive workshops</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-lg">
            Choose Nove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
