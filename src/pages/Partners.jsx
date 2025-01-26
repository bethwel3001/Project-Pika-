import React from "react";

const Partners = () => {
  return (
    <div className="py-16 px-6 text-center">
      <h1 className="text-3xl font-bold">Our Partners</h1>
      <p className="mt-4 text-lg">Proudly working with leading brands.</p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Partner icons */}
        <div className="hover:scale-105 transition-transform">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg"
            alt="Adobe"
            className="w-20 mx-auto"
          />
          <p className="mt-2">Adobe</p>
        </div>
        <div className="hover:scale-105 transition-transform">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            className="w-20 mx-auto"
          />
          <p className="mt-2">CSS</p>
        </div>
        <div className="hover:scale-105 transition-transform">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-20 mx-auto"
          />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="hover:scale-105 transition-transform">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-20 mx-auto"
          />
          <p className="mt-2">React</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
