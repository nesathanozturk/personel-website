import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BiSun } from "react-icons/bi";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="w-full relative">
      <span
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-10 right-10 text-3xl cursor-pointer max-sm:text-2xl"
      >
        {darkMode ? (
          <BiSun className="text-white" />
        ) : (
          <MdDarkMode className="text-black" />
        )}
      </span>
    </nav>
  );
}

export default Navbar;
