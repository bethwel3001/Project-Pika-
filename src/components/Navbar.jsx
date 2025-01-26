import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gray-800">
      <h1 className="text-xl font-bold text-white">Color Pika!</h1>
      <ul className={`md:flex gap-6 hidden text-white`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="block md:hidden text-2xl text-white"
      >
        &#9776;
      </button>
      <button
        onClick={toggleTheme}
        className="ml-4 bg-gray-200 p-2 rounded-full dark:bg-gray-700"
      >
        🌙
      </button>
    </nav>
  );
};

export default Navbar;
