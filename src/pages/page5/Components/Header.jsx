import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="w-[100%] mb-[8rem] mt-[2rem] justify-center items-center flex flex-col">
      <div className="mb-[1rem] max-w-[54.75rem] flex flex-col xl:p-0">
        <div className="pl-2 mr-2 mb-[4rem]">
          <img src={logo} className="w-[10rem] cursor-pointer ml-[2rem]" />
        </div>
        <div className="flex flex-col justify-center pr-[2rem] ml-[2rem]">
          <h1 className="text-[40px] sm:text-[40px] md:text-[86px] font-bold leading-[40px] md:leading-[86px]">
            We make your music sound extraordinary.
          </h1>
          <p className="mt-10 text-xl leading-[34px] font-normal mb-[6rem]">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
