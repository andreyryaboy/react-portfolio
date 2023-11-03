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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia error
          eligendi fuga! Architecto fugit vel officia aliquam consectetur vitae,
          at, quam officiis odit ut suscipit minus commodi in tenetur
          doloremque! Eos minus dolor, excepturi modi placeat nemo dolores
          beatae odio totam, quia repellat sit inventore? Explicabo obcaecati ad
          corporis laboriosam!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          facilis harum cumque placeat quasi, labore doloribus culpa, doloremque
          quo voluptate fuga illum excepturi eum minus qui aspernatur nobis
          nisi. Necessitatibus aperiam beatae nihil facilis corrupti rerum qui,
          consequatur voluptatum iste totam laudantium officia tenetur saepe
          dignissimos aspernatur libero explicabo? Nemo.
        </p>
      </div>
    </div>
  );
};

export default About;
