import React from "react";
import AppleIcon from "../assets/AppleIcon";
import AndroidIcon from "../assets/AndroidIcon";

const Premium = () => {
  return (
    <div className="flex z-50 mb-[72%]  mt-[450px]  max-w-[27.875rem]  max-h-[39.125rem] sm:mr-[60px] md:pt-[10px] md:mb-[560px] md:ml-[100px] md:mr-[10%]">
      <div className="flex flex-col bg-[#FA7453] rounded-xl mt-[750px] p-10 pb-[500px]">
        <h1 className=" text-white font-bold  text-3xl leading-10">
          Premium EQ
        </h1>
        <p className="text-[18px] text-white leading-7 font-light py-6">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>

        <div className=" text-white  flex flex-row  items-center">
          <p className="flex my-6  text-[65px] font-bold leading-[52px]">$4</p>
          <p className="flex leading-8 text-xl">/ month</p>
        </div>

        <div className="w-[100%] my-2 pb-10">
          <button className="w-[100%] text-white flex flex-row items-center justify-center bg-[#191826] rounded-xl p-5 hover:bg-[#66E2DC]">
            <div className="flex w-10 h-10">
              <AppleIcon />
            </div>
            <p className="text-lg flex">iOS Download</p>
          </button>
          <button className="mt-4 cursor-pointer w-[100%] text-black flex flex-row items-center justify-center bg-white rounded-xl p-5 hover:bg-[]">
            <div className="flex w-6 h-6">
              <AndroidIcon />
            </div>
            <p className="text-lg flex">Android Download</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
