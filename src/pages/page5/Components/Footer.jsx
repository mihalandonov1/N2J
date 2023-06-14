import React from "react";
import logo from "../assets/logo.svg";
import FacebookIcon from "../assets/FacebookIcon";
import TwitterIcon from "../assets/TwitterIcon";
import InstagramIcon from "../assets/InstagramIcon";

const Footer = () => {
  return (
    <div className="w-[100%] pt-[10rem] flex justify-center -z-50">
      <div className="w-[100%] mr-[4rem] pl-[4rem] p-4 max-w-[68.75rem] bg-white flex flex-col items-start justify-center gap-10 mb-10 md:flex-row mt-[34rem] sm:mt-[14rem]">
        <div className="flex md:flex-row">
          <img src={logo} className="flex w-[100%] cursor-pointer" />
        </div>
        <div className="w-[100%] flex flex-col gap-10 sm:flex-row sm:justify-between ">
          <div className="flex flex-col max-w-[25rem] text-base leading-6 pr-6">
            <p>All rights reserved © Equalizer 2021</p>
            <p>
              Have any problems? Contact us via social media or email us at
              <span
                style={{
                  fontWeight: "bold",
                  marginLeft: "0.2rem",
                  cursor: "pointer",
                }}
              >{` equalizer@example.com`}</span>
            </p>
          </div>
          <div className="flex flex-row justify-start sm:justify-center gap-6 sm:items-center">
            <div className="cursor-pointer hover:text-[#FA7453]">
              <FacebookIcon />
            </div>
            <div className="cursor-pointer hover:text-[#FA7453]">
              <InstagramIcon />
            </div>
            <div className="cursor-pointer hover:text-[#FA7453]">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
