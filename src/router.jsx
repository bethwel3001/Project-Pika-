import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import GenerateColor from "./pages/GenerateColor";

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/partners" element={<Partners />} />
    <Route path="/plans" element={<Plans />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/generate" element={<GenerateColor />} />
  </Routes>
);

export default RouterConfig;
