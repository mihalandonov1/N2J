import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handlleNav() {
    setNav(!nav);
  }

  return (
    <div className="w-full flex justify-center items-center h-[96px] sm:h-[96px] md:h-[96px]">
      <div className="flex justify-between items-center px-4 mx-6  max-w-[1100px] w-[100%]">
        <img src={logo} className="w-full cursor-pointer" />
        <ul className="hidden sm:hidden md:flex capitalize text-white justify-end">
          <li className="p-3 relative justify-center flex cursor-pointer">
            <div className="absolute hover:border-b-2 w-[30px] h-[50%]"></div>
            <div>about</div>
          </li>
          <li className="p-3 relative justify-center flex cursor-pointer">
            <div className="absolute hover:border-b-2 w-[30px] h-[50%]"></div>
            <div>careers</div>
          </li>
          <li className="p-3 relative justify-center flex cursor-pointer">
            <div className="absolute hover:border-b-2 w-[30px] h-[50%]"></div>
            <div>events</div>
          </li>
          <li className="p-3 relative justify-center flex cursor-pointer">
            <div className="absolute hover:border-b-2 w-[30px] h-[50%]"></div>
            <div>products</div>
          </li>
          <li className="p-3 relative justify-center flex cursor-pointer">
            <div className="absolute hover:border-b-2 w-[30px] h-[50%]"></div>
            <div>support</div>
          </li>
        </ul>
        <img
          onClick={handlleNav}
          src={hamburger}
          className="flex flex-col cursor-pointer p-4 sm:flex md:hidden"
        />
        {nav === true ? (
          <div className="fixed left-0 top-0 w-[100%] h-[100%] z-50 bg-black sm:fixed md:hidden">
            <div className="flex  mx-auto text-white justify-between items-center pt-10 p-4">
              <img src={logo} className="flex cursor-pointer" />
              <div
                onClick={handlleNav}
                className="flex text-2xl mt-2 cursor-pointer"
              >
                X
              </div>
            </div>
            <ul className="pt-24 uppercase text-white flex flex-col gap-y-4 text-2xl font-thin">
              <li className="p-4 cursor-pointer hover:opacity-70">about</li>
              <li className="p-4 cursor-pointer hover:opacity-70">careers</li>
              <li className="p-4 cursor-pointer hover:opacity-70">events</li>
              <li className="p-4 cursor-pointer hover:opacity-70">products</li>
              <li className="p-4 cursor-pointer hover:opacity-70">support</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Navbar;
