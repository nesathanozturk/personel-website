import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BiSun } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="w-full relative">
      <span
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 text-3xl cursor-pointer max-sm:text-2xl"
      >
        {darkMode ? <BiSun /> : <MdDarkMode className="text-black" />}
      </span>
    </nav>
  );
}

export default Navbar;
