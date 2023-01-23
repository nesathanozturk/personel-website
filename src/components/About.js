import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-10 text-center md:flex-row">
      <div>
        <h1 className="text-2xl text-black font-bold leading-10 dark:text-white md:text-5xl md:leading-normal">
          <span className="text-5xl text-blue-600 dark:text-red-600 md:text-6xl">
            Hey There 👋
            <br />
          </span>
          My Name is
          <span className="text-blue-600 dark:text-red-600"> Neşathan</span>
        </h1>
        <h4 className="mt-4 p-text dark:text-gray-300 md:text-2xl md:leading-normal">
          Junior Frontend Developer
        </h4>
        <p className="my-6 p-text dark:text-gray-300">
          I love coding and i enjoy learning new things always. I'm always open
          to new ideas. I like to code in React.
        </p>
        <button className="py-2.5 px-6 mt-2 mx-auto bg-blue-600 text-white font-semibold rounded-2xl transition-colors hover:bg-blue-800 dark:bg-red-600 dark:hover:bg-red-800 max-sm:py-2 max-sm:px-5">
          <a href="mailto:nesathanozturk061@gmail.com">Contact Me</a>
        </button>
        <div className="flex justify-center items-center gap-3 mt-7 text-5xl cursor-pointer">
          <a href="https://www.linkedin.com/in/nesathanozturk">
            <AiFillLinkedin className="text-blue-700 hover:text-blue-800 dark-text" />
          </a>
          <a href="https://www.github.com/nesathanozturk">
            <AiFillGithub className="text-purple-800 hover:text-purple-900 dark-text" />
          </a>
          <a href="https://www.instagram.com/nesathanozturk">
            <AiFillInstagram className="text-gray-700 hover:text-gray-800 dark-text" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
