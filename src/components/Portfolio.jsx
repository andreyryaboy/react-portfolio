import React from "react";
import zoracles from "../assets/zoracles.png";
import kuma from "../assets/kuma.png";
import architecture from "../assets/architecture.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: zoracles,
      demoLink: "https://zoracles.vercel.app/",
      codeLink: "https://github.com/andreyryaboy/zoracles",
    },
    {
      id: 2,
      src: kuma,
      demoLink: "https://kuma-coin.vercel.app/",
      codeLink: "https://github.com/andreyryaboy/kuma-coin",
    },
    {
      id: 3,
      src: architecture,
      demoLink: "https://andreyryaboy.github.io/architecture.io/assets/",
      codeLink: "https://github.com/andreyryaboy/architecture.io",
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.location.href = demoLink;
  };

  const handleCodeClick = (codeLink) => {
    window.location.href = codeLink;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-full sm:w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleDemoClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className="w-full sm:w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
