import React from "react";
import hero from "../images/desktop/image-hero.jpg";
import heroMobile from "../images/mobile/image-hero.jpg";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="w-[100%] justify-center items-center pb-10 ">
      <img src={hero} className="absolute left-0 top-0 -z-50 mb-10 h-[550px]" />
      <img
        src={heroMobile}
        className="top-0 fixed left-0 -z-50 sm:absolute md:hidden h-[550px] w-[100%]"
      />
      <div className="flex justify-between items-center px-6 mx-6  max-w-[1100px] w-[100%]">
        <div className="flex max-w-[650px] sm:max-w-[400px] md:max-w-[650px] mt-20 w-full pb-20">
          <h1 className="text-3xl leading-9 font-thin text-white uppercase border-2 p-10 mx-auto  sm:text-3xl md:leading-[70px] md:text-7xl">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
