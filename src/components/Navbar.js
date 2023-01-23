import React, { useState } from "react";

function Navbar() {
  return (
    <nav></nav>
    // <nav className="fixed w-full left-0 top-0 z-[999]">
    //   <div className="flex items-center justify-between">
    //     <div className="bg-white text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full">
    //       <ul className="flex items-center gap-1 py-2 text-lg">
    //         {menuLinks?.map((menu, i) => (
    //           <li key={i} className="px-6 hover:text-cyan-600">
    //             <a href={menu?.link}>{menu?.name}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div
    //       className={`md:hidden text-gray-900 absolute w-2/3 h-screen
    //   px-7 py-2 font-medium bg-white top-0 duration-300 ${
    //     open ? "right-0" : "right-[-100%]"
    //   }`}
    //     >
    //       <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
    //         {menuLinks?.map((menu, i) => (
    //           <li
    //             onClick={() => setOpen(false)}
    //             key={i}
    //             className="px-6 hover:text-cyan-600"
    //           >
    //             <a href={menu?.link}>{menu?.name}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
