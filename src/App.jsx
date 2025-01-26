import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouterConfig from "./router";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <Navbar />
        <RouterConfig />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
