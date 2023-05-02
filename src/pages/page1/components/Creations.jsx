import React from "react";
import firstPic from "../images/desktop/image-deep-earth.jpg";
import secondPic from "../images/desktop/image-night-arcade.jpg";
import thirdPic from "../images/desktop/image-soccer-team.jpg";
import fourthPic from "../images/desktop/image-grid.jpg";
import fifthPic from "../images/desktop/image-from-above.jpg";
import sixthPic from "../images/desktop/image-pocket-borealis.jpg";
import seventhPic from "../images/desktop/image-curiosity.jpg";
import eightPic from "../images/desktop/image-fisheye.jpg";

function Creations() {
  return (
    <div className="w-full w-auto flex flex-col items-center justify-center mb-20">
      <div className="w-main flex justify-center items-center">
        <div className="container mx-xl flex justify-between items-center mb-20">
          <h1 className="uppercase flex text-4xl">our creations</h1>
          <button className="p-2 px-12 flex uppercase poiner border-2 border-black mr-10 hover:bg-black hover:text-white">
            see all
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center ml-10 mr-10">
        <div className="container mx-xl flex flex-wrap gap-5 items-center justify-center">
          <div className="w-64 flex items-end text-white hover:text-black">
            <p className="absolute text-2xl leading-6  mb-10 ml-10 uppercase">
              deep <br /> earth
            </p>
            <img src={firstPic} className="hover:opacity-30 cursor-pointer" />
          </div>
          <div className="w-64 flex items-end text-white hover:text-black">
            <p className="absolute  text-2xl leading-6  mb-10 ml-10 uppercase">
              night <br /> arcade
            </p>
            <img src={secondPic} className="hover:opacity-30 cursor-pointer" />
          </div>
          <div className="w-64 flex items-end text-white hover:text-black">
            <p className="absolute  text-2xl leading-6  mb-10 ml-10 uppercase">
              soccer <br /> team vr
            </p>
            <img src={thirdPic} className="hover:opacity-30 cursor-pointer" />
          </div>
          <div className="w-64 flex items-end text-white hover:text-black">
            <p className="absolute  text-2xl leading-6  mb-10 ml-10 uppercase">
              the <br /> grid
            </p>
            <img src={fourthPic} className="hover:opacity-30 cursor-pointer" />
          </div>
          <div className="w-64 flex items-end text-white hover:text-black">
            <p className="absolute  text-2xl leading-6  mb-10 ml-10 uppercase">
              from up <br /> above vr
            </p>
            <img src={fifthPic} className="hover:opacity-30 cursor-pointer" />
          </div>
          <div className="w-64 flex items-end text-white hover:text-black">
            <p className="absolute  text-2xl leading-6  mb-10 ml-10 uppercase">
              pocket <br /> borealis
            </p>
            <img src={sixthPic} className="hover:opacity-30 cursor-pointer" />
          </div>
          <div className="w-64 flex items-end text-white hover:text-black">
            <p className="absolute  text-2xl leading-6  mb-10 ml-10 uppercase">
              the <br /> curiosity
            </p>
            <img src={seventhPic} className="hover:opacity-30 cursor-pointer" />
          </div>
          <div className=" md:w-64 flex items-end text-white hover:text-black">
            <p className="absolute  text-2xl leading-6  mb-10 ml-10 uppercase">
              make it <br /> fisheye
            </p>
            <img src={eightPic} className="hover:opacity-30 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creations;
