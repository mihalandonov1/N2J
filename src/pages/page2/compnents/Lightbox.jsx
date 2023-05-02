import React from "react";
import leftArrow from "../icons/icon-previous.svg";
import rightArrow from "../icons/icon-next.svg";
import close from "../icons/icon-close.svg";
import pic1 from "../images/image-product-1-thumbnail.jpg";
import pic2 from "../images/image-product-2-thumbnail.jpg";
import pic3 from "../images/image-product-3-thumbnail.jpg";
import pic4 from "../images/image-product-4-thumbnail.jpg";
import pic11 from "../images/image-product-1.jpg";

function Lightbox() {
  return (
    <div className="hidden w-[100%] h-[200vh] absolute bg-stone-950/90 z-50 top-0 left-0">
      <div className="w-[1110px] absolute flex flex-col h-[740px] top-5 left-[120px] justify-center items-center">
        <div className="h-[740px]">
          <div className="w-[550px] h-[20px]  flex justify-end items-center filter-none mt-5 mb-2">
            <img src={close} className="flex cursor-pointer fill-white" />
          </div>
          <div className="w-[550px] h-[550px] relative bg-orange-500 flex justify-center items-center  filter-none">
            <img src={pic11} />
            <div className="w-[590px] h-[50px] absolute flex  justify-between items-center">
              <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer z-50">
                <img src={leftArrow} />
              </div>
              <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer z-50">
                <img src={rightArrow} className="" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-5">
            <div className="mb-10 hidden xl:w-[445px] xl:h-[88px] xl:flex xl:flex-row xl:mt-5 xl:justify-between">
              <div className="w-[88px] border-orange-400 border-2 rounded-md">
                <img
                  src={pic1}
                  className=" opacity-60 object-cover  cursor-pointer "
                />
              </div>
              <div className="w-[88px]  rounded-md">
                <img
                  src={pic2}
                  className=" hover:opacity-60 object-cover cursor-pointer rounded-md"
                />
              </div>
              <div className="w-[88px]  rounded-md">
                <img
                  src={pic3}
                  className=" hover:opacity-60 object-cover cursor-pointer rounded-md"
                />
              </div>
              <div className="w-[88px]  rounded-md">
                <img
                  src={pic4}
                  className=" hover:opacity-60 object-cover cursor-pointer rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
