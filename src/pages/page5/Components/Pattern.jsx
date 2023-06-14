import React from "react";
import Pattern1 from "../assets/Pattern1";
import desktopPattern from "../assets/bg-main-desktop.png";
import tabletPattern from "../assets/bg-main-tablet.png";
import mobilePattern from "../assets/bg-main-mobile.png";

const Pattern = () => {
  return (
    <div className=" flex justify-end top-0 left-0">
      <div className=" -z-40 w-[280px] lg:w-[320px] h-[300px] hidden md:flex md:absolute md:top-[-2rem] md:mr-[0rem] lg:right-[rem] lg:mr-[2rem]">
        <Pattern1 />
        <div className="md:pl-[-2rem] lg:hidden"></div>
      </div>

      <img
        src={mobilePattern}
        className="absolute md:hidden object-cover ml-[4rem]"
      />
      <img
        src={tabletPattern}
        className="absolute hidden md:block lg:hidden ml-[8rem]"
      />
      <img
        src={desktopPattern}
        className="absolute hidden lg:block object-contain pl-[4rem]"
      />
    </div>
  );
};

export default Pattern;
