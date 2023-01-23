import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

function About() {
  return (
    <section className="min-h-screen flex flex-col items-center py-10 text-center md:flex-row">
      <div className="flex-1">
        <div>
          <h1 className="text-2xl text-black font-bold leading-10 dark:text-white md:text-5xl md:leading-normal">
            <span className="text-5xl text-blue-600 dark:text-red-600 md:text-6xl">
              Hey There 👋
              <br />
            </span>
            My Name is
            <span className="text-blue-600 dark:text-red-600"> Neşathan</span>
          </h1>
          <h4 className="mt-4 text-black text-lg font-bold leading-5 dark:text-gray-300 md:text-2xl md:leading-normal">
            Junior Frontend Developer
          </h4>
          <p className="my-6 text-black text-lg font-bold leading-5 dark:text-gray-300">
            I love coding and i enjoy learning new things always. I'm always
            open to new ideas. I like to code in React.
          </p>
          <button className="flex items-center gap-2 py-3 px-6 mt-6 mx-auto bg-blue-600 text-white font-semibold rounded-2xl transition-colors hover:bg-blue-800 dark:bg-red-600 dark:hover:bg-red-800">
            <a href="mailto:nesathanozturk061@gmail.com">Contact Me</a>
          </button>
          <div className="flex justify-center items-center gap-3 mt-8 text-5xl cursor-pointer">
            <a href="https://www.linkedin.com/in/nesathanozturk">
              <AiFillLinkedin className="text-blue-700 hover:text-blue-800 dark:text-white dark:hover:text-gray-300" />
            </a>
            <a href="https://www.github.com/nesathanozturk">
              <AiFillGithub className="text-purple-800 hover:text-purple-900 dark:text-white dark:hover:text-gray-300" />
            </a>
            <a href="https://www.instagram.com/nesathanozturk">
              <AiFillInstagram className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
