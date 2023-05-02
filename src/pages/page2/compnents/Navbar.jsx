import React from "react";
import cartIcon from "../icons/icon-cart2.svg";
import profileImg from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import hero from "../images/image-product-1.jpg";
import Basket from "./Basket";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-main flex p-6 justify-between items-center border-b-2">
        <div className="h-[26px] flex flex-row items-center justify-center">
          <div class="w-hamburger mr-3 md:hidden lg:hidden xl:hidden">
            <div class="pl-1 border-hamburgerborder border-gray-500"></div>
            <div class="pl-1 border-hamburgerborder border-gray-500 mt-1"></div>
            <div class="pl-1 border-hamburgerborder border-gray-500 mt-1 "></div>
          </div>
          <img
            className=" flex items-center justify-center cursor-pointer"
            src={logo}
          />
          <div className="hidden md:flex md:w-[20rem] md:h-[28px] xl:flex xl:w-[20rem] xl:h-[28px]">
            <ul className="w-[20rem] h-[28px] capitalize flex items-center justify-around ml-10">
              <li className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400">
                <p className="cursor-pointer">collection</p>
              </li>
              <li className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400">
                <p className="cursor-pointer">men</p>
              </li>
              <li className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400">
                <p className="cursor-pointer">women</p>
              </li>
              <li className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400">
                <p className="cursor-pointer">about</p>
              </li>
              <li className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400">
                <p className="cursor-pointer">contact</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row xl:w-[8rem] justify-between items-center">
          <div className="h-[30px] w-[30px] flex justify-center items-center cursor-pointer relative xl:mr-2">
            <img src={cartIcon} className="h-[20px] w-[20px]" />
            <div className="h-[15px] w-[15px] absolute right-0 top-0 rounded-full bg-orange-500 flex items-center justify-center">
              <p className="text-[10px] text-white">12</p>
            </div>
            <div className="hidden absolute mt-[300px] z-50 drop-shadow-2xl cursor-default">
              <Basket />
            </div>
          </div>
          <div className="w-[22px] h-[22px] flex justify-center items-center xl:w-[50px] xl:h-[50px]">
            <img
              className="w-[20px] h-[20px] cursor-pointer rounded-full hover:border-2 border-orange-500 hover:w-[24px] hover:h-[24px] xl:w-[46px] xl:h-[46px] xl:hover:w-[50px] xl:hover:h-[50px]"
              src={profileImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
