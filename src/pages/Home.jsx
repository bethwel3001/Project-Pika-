import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold animate-fadeIn">
        Welcome to Color Pika!
      </h1>
      <p className="mt-4 text-lg">
        The ultimate color palette picker for frontend developers.
      </p>
      <div className="mt-8 flex gap-6">
        <Link
          to="/generate"
          className="px-6 py-3 bg-blue-500 rounded-lg hover:scale-105 transition-transform"
        >
          Try for Free
        </Link>
        <Link
          to="/plans"
          className="px-6 py-3 bg-purple-500 rounded-lg hover:scale-105 transition-transform"
        >
          Create Palette
        </Link>
      </div>
    </div>
  );
};

export default Home;
