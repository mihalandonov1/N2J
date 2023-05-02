import React from "react";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <div className="h-vh justify-self-stretch justify-center flex ">
      <div className="container mx-xl flex items-center justify-center mt-10 pt-10">
        <div className="w-main flex items-center justify-between">
          <img src={logo} className="h-8" />
          <ul className="w-menu justify-evenly flex font-alata text-white capitalize">
            <li className="flex flex-col relative">
              <a href="/">about</a>
              <div className="absolute flex items-center justify-center w-icons h-icons opacity-0 hover:opacity-100 cursor-pointer">
                <div className="border-b-2 w-half h-icons cursor-pointer"></div>
              </div>
            </li>
            <li className="flex flex-col relative">
              <a href="/">careers</a>
              <div className="absolute flex items-center justify-center w-icons h-icons opacity-0 hover:opacity-100 cursor-pointer">
                <div className="border-b-2 w-half h-icons cursor-pointer"></div>
              </div>
            </li>
            <li className="flex flex-col relative">
              <a href="/">event</a>
              <div className="absolute flex items-center justify-center w-icons h-icons opacity-0 hover:opacity-100 cursor-pointer">
                <div className="border-b-2 w-half h-icons cursor-pointer"></div>
              </div>
            </li>
            <li className="flex flex-col relative">
              <a href="/">products</a>
              <div className="absolute flex items-center justify-center w-icons h-icons opacity-0 hover:opacity-100 cursor-pointer">
                <div className="border-b-2 w-half h-icons cursor-pointer"></div>
              </div>
            </li>
            <li className="flex flex-col relative">
              <a href="/">support</a>
              <div className="absolute flex items-center justify-center w-icons h-icons opacity-0 hover:opacity-100 cursor-pointer">
                <div className="border-b-2 w-half h-icons cursor-pointer"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
