import React from "react";
import IconNext from "../icons/IconNext";
import IconPrev from "../icons/IconPrev";
import pic11 from "../images/image-product-1-thumbnail.jpg";
import pic22 from "../images/image-product-2-thumbnail.jpg";
import pic33 from "../images/image-product-3-thumbnail.jpg";
import pic44 from "../images/image-product-4-thumbnail.jpg";

function Hero({
  handleModal,
  setIndex,
  picModal,
  Index,
  handleLeft,
  handleRight,
}) {
  return (
    <div className="w-[100%] h-[300px] sm:h-[100%] lg:w-main flex flex-col justify-center items-center ">
      <div className="w-[100%] h-[300px]  sm:h-[100%] relative lg:w-main flex flex-col justify-center items-center xl:w-[445px]">
        <img
          src={picModal[Index]}
          onClick={handleModal}
          className="w-[100%] h-[300px] sm:h-[100%] xl:cursor-pointer object-cover object-top sm:object-center flex justify-center items-center  xl:w-[445px] xl:rounded-xl"
        />
        <div className="absolute mx-18 flex justify-between items-center w-[95%] xl:hidden">
          <div className="flex flex-row justify-between w-[100%] items-center">
            <div
              onClick={handleLeft}
              className="w-[40px] h-[40px] flex justify-center items-center bg-white cursor-pointer rounded-full"
            >
              <div className="hover:text-orange-400 w-[40px] h-[40px] flex justify-center items-center">
                <IconPrev />
              </div>
            </div>
            <div
              onClick={handleRight}
              className="w-[40px] h-[40px] flex items-center justify-center bg-white cursor-pointer rounded-full"
            >
              <div className="hover:text-orange-400 w-[40px] h-[40px] flex justify-center items-center">
                <IconNext />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center  items-center mt-5">
          <div
            className={` mb-10 hidden xl:w-[445px] xl:h-[92px] xl:flex xl:flex-row xl:mt-5 xl:justify-between  `}
          >
            <div
              className={`${
                Index == 0
                  ? "border-4 border-orange-400 rounded-2xl flex justify-center items-center w-[88px] h-[88px]"
                  : ""
              }`}
            >
              <div
                className={`flex justify-center rounded-2xl items-center w-[88px] h-[88px]${
                  Index == 0 ? " opacity-60 " : ""
                }`}
              >
                <img
                  src={pic11}
                  onClick={() => setIndex(0)}
                  className={`w-[80px] h-[80px] flex rounded-xl justify-center items-center hover:opacity-60  cursor-pointer`}
                />
              </div>
            </div>

            <div
              className={`${
                Index == 1
                  ? "border-4 border-orange-400 rounded-2xl  flex justify-center items-center w-[88px] h-[88px]"
                  : ""
              }`}
            >
              <div
                className={`flex justify-center rounded-2xl items-center w-[88px] h-[88px]${
                  Index == 1 ? " opacity-60 " : ""
                }`}
              >
                <img
                  src={pic22}
                  onClick={() => setIndex(1)}
                  className={`w-[80px] h-[80px] flex rounded-xl justify-center items-center hover:opacity-60  cursor-pointer`}
                />
              </div>
            </div>

            <div
              className={`${
                Index == 2
                  ? "border-4 border-orange-400 rounded-2xl flex justify-center items-center w-[88px] h-[88px]"
                  : ""
              }`}
            >
              <div
                className={`flex justify-center rounded-2xl items-center w-[88px] h-[88px]${
                  Index == 2 ? " opacity-60 " : ""
                }`}
              >
                <img
                  src={pic33}
                  onClick={() => setIndex(2)}
                  className={`w-[80px] h-[80px] flex rounded-xl justify-center items-center hover:opacity-60  cursor-pointer`}
                />
              </div>
            </div>

            <div
              className={`${
                Index == 3
                  ? "border-4 border-orange-400 rounded-2xl flex justify-center items-center w-[88px] h-[88px]"
                  : ""
              }`}
            >
              <div
                className={`flex justify-center rounded-2xl items-center w-[88px] h-[88px]${
                  Index == 3 ? " opacity-60 " : ""
                }`}
              >
                <img
                  src={pic44}
                  onClick={() => setIndex(3)}
                  className={`w-[80px] h-[80px] flex rounded-xl justify-center items-center hover:opacity-60  cursor-pointer`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
