import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="w-full h-vh flex flex-col justify-center items-center top-0 bg-hero-pattern pb-20">
      <Navbar />
      <div className="flex container mx-xl justify-center">
        <div className="flex w-main">
          <div className=" mt-32 flex w-herobox border-white border-solid border-2 pl-5 pr-5">
            <p className="text-7xl leading-none font-light font-sans m-8 text-white uppercase">
              immersive experiences that deliver
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
