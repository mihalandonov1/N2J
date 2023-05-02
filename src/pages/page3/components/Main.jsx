import React from "react";
import place from "../assets/icon-location.svg";
import links from "../assets/icon-website.svg";
import tweeter from "../assets/icon-twitter.svg";
import city from "../assets/icon-company.svg";

import octocat from "../assets/octocat.png";

function Main() {
  return (
    <div className="w-[350px] flex flex-col items-center justify-center  mb-10 ">
      <div className="w-[327px] flex flex-col items-center justify-center border rounded-lg bg-[#FEFEFE]">
        <div className="w-[280px] h-[70px]  mt-5 bg-[#FEFEFE] flex flex-row">
          <div className="w-[70px] h-[70px]">
            <img src={octocat} className="rounded-full" />
          </div>
          <div className="w-[144px] h-[69px] flex flex-col ml-5">
            <h2>The Octocat</h2>
            <p>@octocat</p>
            <div>Joined 25 Jan 2011</div>
          </div>
        </div>
        <p className="w-[280px] flex mt-5 mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>

        <div className="flex flex-row w-[280px]  justify-between p-4 bg-[#F6F8FF]">
          <div className="flex flex-col justify-center items-center">
            <div>repos</div>
            <div>8</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>followers</div>
            <div>3938</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>following</div>
            <div>9</div>
          </div>
        </div>
        <div className="w-[280px] flex flex-col mt-5 mb-10">
          <div className="flex flex-row">
            <div className="w-[20px] mr-5">
              <img src={place} className="w-[14px] h-[20px]" />
            </div>
            <div>San Francisco</div>
          </div>
          <div className="flex flex-row">
            <div className="w-[20px] mr-5">
              <img src={links} className="w-[20px] h-[20px]" />
            </div>
            <div>https://github.blog</div>
          </div>
          <div className="flex flex-row">
            <div className="w-[20px] mr-5">
              <img src={tweeter} className="w-[20px] h-[16px]" />
            </div>
            <div>Not Available</div>
          </div>
          <div className="flex flex-row">
            <div className="w-[20px] mr-5">
              <img src={city} className="w-[20px] h-[20px]" />
            </div>
            <div>@github</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
