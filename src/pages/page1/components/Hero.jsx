import React from "react";
import hero from "../images/desktop/image-hero.jpg";
import heroMobile from "../images/mobile/image-hero.jpg";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-start items-center px-2 mx-2  max-w-[1100px] w-[100%] h-[613px] mb-10">
        <img
          src={hero}
          className="hidden sm:hidden absolute md:flex top-0 left-0 -z-50 h-[700px] object-cover"
        />
        <img
          src={heroMobile}
          className="h-[700px] w-[100%] top-0 left-0 -z-50 absolute sm:absolute md:hidden"
        />
        <div className="flex w-[100%] sm:max-w-[650px] left-0 top-[0px]">
          <div className="w-[100%]">
            <h1 className="text-3xl leading-9 font-thin text-white uppercase border-2 p-10 sm:p-15 sm:text-7xl sm:leading-[70px]">
              Immersive experiences that deliver
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
