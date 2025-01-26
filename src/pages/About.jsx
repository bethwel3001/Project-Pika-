import React from "react";

const About = () => {
  return (
    <div className="py-16 px-6 text-center">
      <h1 className="text-3xl font-bold">About Color Pika!</h1>
      <p className="mt-4 text-lg">
        Color Pika! is your ultimate tool for creating stunning color palettes
        effortlessly. Built for designers, developers, and creatives, our tool
        ensures a smooth and efficient workflow.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Animated boxes */}
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">Easy to Use</h2>
          <p className="mt-2">
            Drag, pick, and generate your color palettes in seconds.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">Built for All</h2>
          <p className="mt-2">
            Whether you're a beginner or a pro, Color Pika! has got you covered.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">Accessible Anywhere</h2>
          <p className="mt-2">
            Use it on any device with seamless experience and stunning design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
