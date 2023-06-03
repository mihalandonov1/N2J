import React from "react";
import firstPic from "../images/desktop/image-deep-earth.jpg";
import firstPicMobile from "../images/mobile/image-deep-earth.jpg";
import secondPic from "../images/desktop/image-night-arcade.jpg";
import secondPicMobile from "../images/mobile/image-night-arcade.jpg";
import thirdPic from "../images/desktop/image-soccer-team.jpg";
import thirdPicMobile from "../images/mobile/image-soccer-team.jpg";
import fourthPic from "../images/desktop/image-grid.jpg";
import fourthPicMobile from "../images/mobile/image-grid.jpg";
import fifthPic from "../images/desktop/image-from-above.jpg";
import fifthPicMobile from "../images/mobile/image-from-above.jpg";
import sixthPic from "../images/desktop/image-pocket-borealis.jpg";
import sixthPicMobile from "../images/mobile/image-pocket-borealis.jpg";
import seventhPic from "../images/desktop/image-curiosity.jpg";
import seventhPicMobile from "../images/mobile/image-curiosity.jpg";
import eightPic from "../images/desktop/image-fisheye.jpg";
import eightPicMobile from "../images/mobile/image-fisheye.jpg";

const Galery = () => {
  return (
    <div className="grid col-span-10 col-start-2 grid-cols-10">
      <div className="grid gap-5 mx-auto col-span-10 grid-cols-1 sm:grid-cols-2   sm:mb-10 md:grid-cols-4 justify-items-center">
        <div className="grid text-white hover:text-black relative cursor-pointer mx-4">
          <img
            src={firstPicMobile}
            className="grid sm:hidden hover:opacity-50"
          />
          <img src={firstPic} className="hidden sm:grid hover:opacity-50" />
          <p className="absolute uppercase bottom-6 left-4 font-light text-2xl leading-8 mx-auto">
            deep <br /> earth
          </p>
        </div>
        <div className="grid   text-white hover:text-black relative cursor-pointer mx-4">
          <img
            src={secondPicMobile}
            className="grid sm:hidden hover:opacity-50"
          />
          <img src={secondPic} className="hidden sm:grid hover:opacity-50" />
          <p className="absolute uppercase bottom-6 left-4 font-light text-2xl leading-8">
            night <br /> arcade
          </p>
        </div>
        <div className="grid  text-white hover:text-black relative cursor-pointer mx-4">
          <img
            src={thirdPicMobile}
            className="grid sm:hidden hover:opacity-50"
          />
          <img src={thirdPic} className="hidden sm:grid hover:opacity-50" />
          <p className="absolute uppercase bottom-6 left-4 font-light text-2xl leading-8">
            soccer <br /> team vr
          </p>
        </div>
        <div className="grid text-white hover:text-black relative cursor-pointer mx-4">
          <img
            src={fourthPicMobile}
            className="grid sm:hidden hover:opacity-50"
          />
          <img src={fourthPic} className="hidden sm:grid hover:opacity-50" />
          <p className="absolute uppercase bottom-6 left-4 font-light text-2xl leading-8">
            the <br /> grid
          </p>
        </div>
        <div className="grid  text-white hover:text-black relative cursor-pointer mx-4">
          <img
            src={fifthPicMobile}
            className="grid sm:hidden hover:opacity-50"
          />
          <img src={fifthPic} className="hidden sm:grid hover:opacity-50" />
          <p className="absolute uppercase bottom-6 left-4 font-light text-2xl leading-8">
            from up <br /> above vr
          </p>
        </div>
        <div className="grid  text-white hover:text-black relative cursor-pointer mx-4">
          <img
            src={sixthPicMobile}
            className="grid sm:hidden hover:opacity-50"
          />
          <img src={sixthPic} className="hidden sm:grid hover:opacity-50" />
          <p className="absolute uppercase bottom-6 left-4 font-light text-2xl leading-8">
            pocket <br /> borealis
          </p>
        </div>
        <div className="grid  text-white hover:text-black relative cursor-pointer mx-4">
          <img
            src={seventhPicMobile}
            className="grid sm:hidden hover:opacity-50"
          />
          <img src={seventhPic} className="hidden sm:grid hover:opacity-50" />
          <p className="absolute uppercase bottom-6 left-4 font-light text-2xl leading-8">
            the <br /> curiosity
          </p>
        </div>
        <div className="grid  text-white hover:text-black relative cursor-pointer mx-4">
          <img
            src={eightPicMobile}
            className="grid sm:hidden hover:opacity-50"
          />
          <img src={eightPic} className="hidden sm:grid hover:opacity-50" />
          <p className="absolute uppercase bottom-6 left-4 font-light text-2xl leading-8">
            make it <br /> fisheye
          </p>
        </div>
        <button className="p-1 px-8  uppercase poiner border-2 border-black hover:bg-black hover:text-white justify-center flex sm:hidden my-10">
          see all
        </button>
      </div>
    </div>
  );
};

export default Galery;
