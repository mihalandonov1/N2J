import React from "react";
import { useState } from "react";
import cartIcon from "../icons/icon-cart2.svg";
import profileImg from "../images/image-avatar.png";
import logo from "../images/logo.svg";

import Basket from "./Basket";
import HamburgerMenu from "./HamburgerMenu";

function Navbar({ price, quantity, toCart, handleDelete }) {
  const [showCart, setShowCart] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  function handleHamburger(e) {
    setHamburger(!hamburger);
  }

  function handleShowCart(e) {
    setShowCart(!showCart);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-main flex p-6 justify-between items-center border-b-2">
        <div className="h-[26px] flex flex-row items-center justify-center">
          <div
            onClick={handleHamburger}
            className={`w-hamburger cursor-pointer mr-3 md:hidden`}
          >
            <div className="pl-1 border-hamburgerborder border-gray-500"></div>
            <div className="pl-1 border-hamburgerborder border-gray-500 mt-1"></div>
            <div className="pl-1 border-hamburgerborder border-gray-500 mt-1 "></div>
          </div>
          <HamburgerMenu
            handleHamburger={handleHamburger}
            hamburger={hamburger}
          />

          <img
            className=" flex items-center justify-center cursor-pointer"
            src={logo}
          />
          <div className="hidden md:flex md:w-[24rem] md:h-[28px] xl:flex xl:w-[26rem] xl:h-[28px]">
            <ul className="w-[26rem] h-[28px] capitalize flex items-center justify-around ml-10 ">
              <li>
                <p className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400 cursor-pointer opacity-40 hover:opacity-100">
                  collection
                </p>
              </li>
              <li>
                <p className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400 cursor-pointer  opacity-40 hover:opacity-100">
                  men
                </p>
              </li>
              <li>
                <p className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400 cursor-pointer  opacity-40 hover:opacity-100">
                  women
                </p>
              </li>
              <li>
                <p className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400 cursor-pointer opacity-40 hover:opacity-100">
                  about
                </p>
              </li>
              <li>
                <p className="hover:border-b-4 h-[65px] mt-11 hover:border-b-orange-400 cursor-pointer  opacity-40 hover:opacity-100">
                  contact
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row xl:w-[8rem] justify-start items-center">
          <div className="h-[30px] w-[30px] flex justify-center items-center cursor-pointer relative xl:mr-2">
            <img
              onClick={handleShowCart}
              src={cartIcon}
              className="h-[20px] w-[20px]"
            />

            {toCart > 0 ? (
              <div className="h-[15px] w-[15px] absolute right-0 top-0 rounded-full bg-orange-500 flex items-center justify-center">
                <p className="text-[10px] text-white">{toCart}</p>
              </div>
            ) : null}

            <div
              className={`${
                showCart == true ? "" : "hidden"
              } absolute w-[360px] h-[260px] flex flex-col mt-[380px] mr-[254px] xl:mr-[0px] xl:mt-[330px] z-50 drop-shadow-2xl cursor-default  `}
            >
              <Basket
                price={price}
                quantity={quantity}
                toCart={toCart}
                handleDelete={handleDelete}
              />
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
