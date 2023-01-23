import React from "react";
import { MdDarkMode } from "react-icons/md";
import { TbSun } from "react-icons/tb";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="w-[90%] py-4">
      <div className="w-full relative">
        <span
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-10 right-0 text-3xl cursor-pointer max-sm:text-2xl"
        >
          {darkMode ? <TbSun className="text-white" /> : <MdDarkMode />}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
