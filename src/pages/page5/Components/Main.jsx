import React from "react";
import back from "../assets/bg-pattern-2.svg";
import phone from "../assets/illustration-app.png";
import Premium from "./Premium";
import AndroidIcon from "../assets/AndroidIcon";
import AppleIcon from "../assets/AppleIcon";

const Main = () => {
  return (
    <div className="flex justify-center items-center w-[100%]">
      <div className="relative flex w-[100%] justify-center max-w-[1100px] h-[600px] sm:m-10">
        <img
          src={phone}
          className="absolute z-50 flex max-h-[34.375rem] min-w-[13rem] h-[56.25rem] left-14  sm:left-[10rem] md:left-[6rem] lg:left-[8rem] top-[-10rem] lg:top-[-10rem]"
        />
        <div className="absolute flex bg-[#191826] w-[100%] h-[600px] md:left-[0rem] lg:left-0 object-contain">
          <img
            src={back}
            className="absolute left-[2rem]  sm:left-[12rem] md:left-[14rem] lg:left-[16rem] top-[0rem] sm:top-[2rem] md:top-[0rem] lg:top-[-2rem] h-[80%] md:h-[70%]"
          />
        </div>

        <div className="absolute z-50  flex content-end right-0 sm:right-[2rem] md:right-[1rem] lg:right-[8rem] top-[28rem] sm:top-[14rem] md:top-[12rem] lg:top-[6rem]">
          <div className="flex flex-col bg-[#FA7453] rounded-xl p-10 max-w-[28rem] left-10">
            <h1 className=" text-white font-bold  text-4xl leading-[52px] py-4">
              Premium EQ
            </h1>
            <p className="text-xl text-white leading-9 font-light py-10">
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </p>

            <div className=" text-white  flex flex-row  items-center">
              <p className="flex my-4  text-[65px] font-bold leading-[52px]">
                $4
              </p>
              <p className="flex leading-8 text-xl pl-6">/ month</p>
            </div>

            <div className="w-[100%] my-5">
              <button className="w-[100%] text-white flex flex-row items-center justify-center bg-[#191826] rounded-xl p-5 hover:bg-[#66E2DC]">
                <div className="flex w-10 h-10 ">
                  <AppleIcon />
                </div>
                <p className="flex font-bold text-lg">iOS Download</p>
              </button>
              <button className="mt-4 cursor-pointer w-[100%] text-black flex flex-row items-center justify-center bg-white rounded-xl p-5 hover:bg-[#FFB964]">
                <div className="flex w-6 h-6">
                  <AndroidIcon />
                </div>
                <p className="font-bold text-lg flex">Android Download</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
