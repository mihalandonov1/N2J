import React from "react";
import leftArrow from "../icons/icon-previous.svg";
import rightArrow from "../icons/icon-next.svg";
import hero from "../images/image-product-1.jpg";
import pic1 from "../images/image-product-1-thumbnail.jpg";
import pic2 from "../images/image-product-2-thumbnail.jpg";
import pic3 from "../images/image-product-3-thumbnail.jpg";
import pic4 from "../images/image-product-4-thumbnail.jpg";

function Hero() {
  return (
    <div className="w-full min-h-[400px]   flex flex-col justify-center items-center ">
      <div className="w-full min-h-[400px] relative  flex flex-col justify-center items-center xl:w-[445px]">
        <img
          src={hero}
          className="w-full min-h-[400px]   flex justify-center items-center md:w-[80%] md:m-10 xl:w-[445px] xl:rounded-xl"
        />
        <div className="flex w-[90%] max-w-[900px] absolute justify-between md:w-[70%] xl:hidden">
          <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer z-40">
            <img src={leftArrow} />
          </div>
          <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer z-40">
            <img src={rightArrow} />
          </div>
        </div>
        <div className="mb-10 hidden xl:w-[445px] xl:h-[88px] xl:flex xl:flex-row xl:mt-5 xl:justify-between">
          <div className="w-[88px] border-orange-400 border-2 rounded-md">
            <img
              src={pic1}
              className=" opacity-40 object-cover  cursor-pointer "
            />
          </div>
          <div className="w-[88px]  rounded-md">
            <img
              src={pic2}
              className=" hover:opacity-40 object-cover cursor-pointer rounded-md"
            />
          </div>
          <div className="w-[88px]  rounded-md">
            <img
              src={pic3}
              className=" hover:opacity-40 object-cover cursor-pointer rounded-md"
            />
          </div>
          <div className="w-[88px]  rounded-md">
            <img
              src={pic4}
              className=" hover:opacity-40 object-cover cursor-pointer rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
