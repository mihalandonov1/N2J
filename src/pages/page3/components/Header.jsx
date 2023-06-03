import React from "react";
import MoonIcon from "../svg/MoonIcon";
import SunIcon from "../svg/SunIcon";

function Header({ themeStyles, themeStyles2, toggleTheme, darkTheme }) {
  return (
    <div className="grid grid-cols-12 gap-2 max-w-[730px] mx-6 sm:mx-10 md:mx-20">
      <div className="text-start flex justify-start items-center col-span-6 w-full ml-2 text-black text-2xl font-extrabold m-1">
        <p style={themeStyles2}>devfinder</p>
      </div>
      <div
        onClick={toggleTheme}
        className=" col-span-6 w-full flex cursor-pointer justify-end items-center"
      >
        {darkTheme ? (
          <div className="hover:text-[#90A4D4] flex flex-row">
            <p className="grid uppercase  hover:text-[#90A4D4] items-end mr-2">
              light
            </p>
            <SunIcon />
          </div>
        ) : (
          <div className="text-[#4B6A9B] flex flex-row hover:text-black">
            <p className="grid uppercase  hover:text-black items-end mr-2">
              dark
            </p>
            <MoonIcon />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
