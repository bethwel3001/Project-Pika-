import React, { useState } from "react";

const GenerateColor = () => {
  const [colors, setColors] = useState(["#FF5733", "#33FF57", "#3357FF"]);
  const [copiedColor, setCopiedColor] = useState("");

  const generateRandomColors = () => {
    const newColors = Array.from({ length: 5 }, () =>
      `#${Math.floor(Math.random() * 16777215).toString(16)}`
    );
    setColors(newColors);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(""), 2000); // Clear message after 2 seconds
  };

  return (
    <div className="py-16 px-6 text-center">
      <h1 className="text-3xl font-bold">Generate Your Color Palette</h1>
      <p className="mt-4 text-lg">
        Click the button to create a stunning color palette instantly!
      </p>

      {/* Generate Button */}
      <button
        onClick={generateRandomColors}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Generate Palette
      </button>

      {/* Color Palette Display */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            style={{ backgroundColor: color }}
            onClick={() => copyToClipboard(color)}
          >
            <p className="text-white font-semibold">{color}</p>
          </div>
        ))}
      </div>

      {/* Copied Message */}
      {copiedColor && (
        <div className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg">
          {copiedColor} copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default GenerateColor;
