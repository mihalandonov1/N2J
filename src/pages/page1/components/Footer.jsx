import React from "react";
import logo from "../images/logo.svg";
import icon1 from "../images/icon-facebook.svg";
import icon2 from "../images/icon-twitter.svg";
import icon3 from "../images/icon-pinterest.svg";
import icon4 from "../images/icon-instagram.svg";

function Footer() {
  return (
    <div className="w-full h-18 flex justify-center items-center bg-black">
      <div className="items-center w-icons h-22 flex flex-col justify-around text-white ml-10 mr-10">
        <div className="w-icons flex justify-center">
          <div className="h-10 w-main flex flex-wrap justify-between">
            <img src={logo} className="flex ml-2" />
            <div className="flex justify-around items-center mr-2">
              <img src={icon1} className="mx-2 cursor-pointer" />
              <img src={icon2} className="mx-2 cursor-pointer" />
              <img src={icon3} className="mx-2 cursor-pointer" />
              <img src={icon4} className="mx-2 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-icons flex flex-row justify-center">
          <div className="w-main flex justify-between">
            <ul className="w-menu flex flex-row capitalize items-center ml-2 justify-between">
              <li className="flex flex-col relative justify-self-start">
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

            <div className="flex mr-2 opacity-50">
              © 2021 Loopstudios. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
