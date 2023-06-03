import React from "react";
import logo from "../images/logo.svg";
import icon1 from "../images/icon-facebook.svg";
import icon2 from "../images/icon-twitter.svg";
import icon3 from "../images/icon-pinterest.svg";
import icon4 from "../images/icon-instagram.svg";

function Footer() {
  return (
    <div className="w-full flex justify-center items-center bg-black">
      <div className="flex flex-col sm:flex-row  justify-between items-center px-4 mx-6  max-w-[1100px] w-[100%]">
        <div className="flex flex-col py-6 justify-between text-sm sm:w-[50%]">
          <span className="flex justify-center sm:justify-start cursor-pointer">
            <img src={logo} className="w-[144px]" />
          </span>
          <ul className="flex flex-col pt-5 gap-2 sm:flex-row text-white text-center capitalize">
            <li className="cursor-pointer flex justify-center items-center relative">
              <div className="flex">about</div>
              <div className="absolute flex hover:border-b-2 w-[5%] sm:w-[50%] sm:hover:border-b h-[100%]"></div>
            </li>
            <li className="cursor-pointer flex justify-center items-center relative">
              <div className="flex">careers</div>
              <div className="absolute flex hover:border-b-2 w-[5%] sm:w-[50%] sm:hover:border-b h-[100%]"></div>
            </li>
            <li className="cursor-pointer flex justify-center items-center relative">
              <div className="flex">events</div>
              <div className="absolute flex hover:border-b-2 w-[5%] sm:w-[50%] sm:hover:border-b h-[100%]"></div>
            </li>
            <li className="cursor-pointer flex justify-center items-center relative">
              <div className="flex">products</div>
              <div className="absolute flex hover:border-b-2 w-[5%] sm:w-[50%] sm:hover:border-b h-[100%] "></div>
            </li>
            <li className="cursor-pointer flex justify-center items-center relative">
              <div className="flex">support</div>
              <div className="absolute flex hover:border-b-2 w-[5%] sm:w-[50%] sm:hover:border-b h-[100%]"></div>
            </li>
          </ul>
        </div>
        <div className="w-20 flex flex-col py-6 justify-between sm:w-[50%]">
          <ul className="w-20 flex flex-row text-sm justify-center sm:justify-end sm:items-center">
            <li className="w-[30px] h-[30px] cursor-pointer flex flex-col justify-center items-center ml-2">
              <img src={icon1} className="w-[24px] flex  pb-2 relative" />
              <div className="absolute w-[22px] h-[30px] hover:border-b-2 flex justify-center items-center bg-transperant"></div>
            </li>
            <li className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center ml-2">
              <img src={icon2} className="w-[24px] flex  pb-2 relative" />
              <div className="absolute w-[22px] h-[30px] hover:border-b-2 flex justify-center items-center bg-transperant"></div>
            </li>
            <li className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center ml-2">
              <img src={icon3} className="w-[24px] flex  pb-2 relative" />
              <div className="absolute w-[22px] h-[30px] hover:border-b-2 flex justify-center items-center bg-transperant"></div>
            </li>
            <li className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center ml-2">
              <img src={icon4} className="w-[24px] flex  pb-2 relative" />
              <div className="absolute w-[22px] h-[30px] hover:border-b-2 flex justify-center items-center bg-transperant"></div>
            </li>
          </ul>
          <div className="text-white pt-3 text-sm flex justify-center opacity-40 text-center sm:justify-end">
            ©2021 Loopstudios.All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
