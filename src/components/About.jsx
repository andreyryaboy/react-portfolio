import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a frontend developer with a strong focus on delivering results.
          My primary objective is to develop software with a user-centric
          approach, crafting applications that provide a seamless and intuitive
          user interface experience.
        </p>
        <br />
        <p className="text-xl">
          I place great importance on producing code that is highly readable and
          easily maintainable, recognizing its significance in the development
          process. In this ever-evolving industry, I maintain a proactive
          stance, continuously seeking to expand my knowledge and refine my
          skills by embracing new technologies. I excel in problem-solving and
          possess strong interpersonal skills, enabling effective collaboration
          with colleagues, clients, and stakeholders.
        </p>
      </div>
    </div>
  );
};

export default About;
