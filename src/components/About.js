import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

function About() {
  return (
    <section className="min-h-screen flex flex-col items-center py-10 md:flex-row">
      <div className="h-full flex items-center justify-center flex-1">
        <img src="" alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl text-white font-bold leading-10 md:text-5xl md:leading-normal">
            <span className="text-5xl text-blue-600 md:text-6xl">
              Hello 👋
              <br />
            </span>
            My Name is <span>Neşathan</span>
          </h1>
          <h4 className="mt-4 text-black text-lg font-bold leading-5 md:text-2xl md:leading-normal">
            Junior Frontend Developer
          </h4>
          <button className="flex items-center gap-2 py-3 px-6 mt-8 mx-auto bg-blue-600 text-white font-semibold rounded-md transition-colors hover:bg-blue-800 md:mx-0">
            <a href="mailto:nesathanozturk061@gmail.com">Contact Me</a>
          </button>
          <div className="flex justify-center items-center gap-3 mt-8 text-5xl cursor-pointer md:justify-start">
            <AiFillLinkedin className="text-blue-700" />
            <AiFillGithub className="text-purple-800" />
            <AiFillInstagram className="text-red-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
