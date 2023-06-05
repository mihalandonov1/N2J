import React from "react";
import IconPrev from "../icons/IconPrev";
import IconNext from "../icons/IconNext";
import IconClose from "../icons/IconClose";
import pic1 from "../images/image-product-1-thumbnail.jpg";
import pic2 from "../images/image-product-2-thumbnail.jpg";
import pic3 from "../images/image-product-3-thumbnail.jpg";
import pic4 from "../images/image-product-4-thumbnail.jpg";

function Lightbox({
  showModal,
  handleModal,
  setIndex,
  Index,
  picModal,
  handleLeft,
  handleRight,
}) {
  return (
    <div
      className={`${
        showModal == true ? "" : "hidden"
      }  xl:w-[100%] xl:h-[100vh] xl:absolute bg-stone-950/95 z-50 top-0 left-0 sm:top-0 sm:left-0`}
    >
      <div className="hidden w-[250px] xl:absolute xl:flex xl:cursor-pointer flex-col h-[740px] top-5 left-[120px] justify-center items-center sm:w-[300px] sm:justify-start sm:items-start sm:left-[30%] sm:top-0">
        <div className="h-[740px]">
          <div className="w-[250px] sm:w-[250px] md:w-[550px] h-[20px]  flex justify-end items-center filter-none mt-5 mb-2">
            <div
              onClick={handleModal}
              className="hover:fill-orange-400 fill-white w-[40px] h-[40px] flex justify-end items-center"
            >
              <IconClose />
            </div>
          </div>
          <div className="w-[100%] sm:w-[300px] md:w-[300px] lg:w-[550px] h-[350px] sm:h-[350px] md:h-[350px] lg:h-[550px] relative bg-orange-500 flex justify-center items-center  filter-none">
            <img src={picModal[Index]} />
            <div className="w-[290px] sm:w-[290px] md:w-[290px] lg:w-[107%] h-[50px] absolute flex  justify-between items-center">
              <div
                onClick={handleLeft}
                className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer z-50"
              >
                <div className="hover:text-orange-400 w-[40px] h-[40px] flex justify-center items-center">
                  <IconPrev />
                </div>
              </div>
              <div
                onClick={handleRight}
                className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer z-50"
              >
                <div className="hover:text-orange-400 w-[40px] h-[40px] flex justify-center items-center">
                  <IconNext />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-5">
            <div className="mb-10 hidden xl:w-[445px] xl:h-[88px] xl:flex xl:flex-row xl:mt-5 xl:justify-between">
              <div
                className={`${
                  Index == 0
                    ? "border-4 border-orange-400 rounded-2xl z-50 flex justify-center items-center w-[88px] h-[88px]"
                    : ""
                }`}
              >
                <div
                  className={`flex justify-center rounded-2xl items-center w-[88px] h-[88px]${
                    Index == 0 ? " opacity-60 " : ""
                  }`}
                >
                  <img
                    src={pic1}
                    onClick={() => setIndex(0)}
                    className={`w-[80px] h-[80px] flex rounded-xl justify-center items-center hover:opacity-60  cursor-pointer`}
                  />
                </div>
              </div>

              <div
                className={`${
                  Index == 1
                    ? "border-4 border-orange-400 rounded-2xl z-50 flex justify-center items-center w-[88px] h-[88px]"
                    : ""
                }`}
              >
                <div
                  className={`flex justify-center rounded-2xl items-center w-[88px] h-[88px]${
                    Index == 1 ? " opacity-60 " : ""
                  }`}
                >
                  <img
                    src={pic2}
                    onClick={() => setIndex(1)}
                    className={`w-[80px] h-[80px] flex rounded-xl justify-center items-center hover:opacity-60  cursor-pointer`}
                  />
                </div>
              </div>

              <div
                className={`${
                  Index == 2
                    ? "border-4 border-orange-400 rounded-2xl z-50 flex justify-center items-center w-[88px] h-[88px]"
                    : ""
                }`}
              >
                <div
                  className={`flex justify-center rounded-2xl items-center w-[88px] h-[88px]${
                    Index == 2 ? " opacity-60 " : ""
                  }`}
                >
                  <img
                    src={pic3}
                    onClick={() => setIndex(2)}
                    className={`w-[80px] h-[80px] flex rounded-xl justify-center items-center hover:opacity-60  cursor-pointer`}
                  />
                </div>
              </div>

              <div
                className={`${
                  Index == 3
                    ? "border-4 border-orange-400 rounded-2xl z-50 flex justify-center items-center w-[88px] h-[88px]"
                    : ""
                }`}
              >
                <div
                  className={`flex justify-center rounded-2xl items-center w-[88px] h-[88px]${
                    Index == 3 ? " opacity-60 " : ""
                  }`}
                >
                  <img
                    src={pic4}
                    onClick={() => setIndex(3)}
                    className={`w-[80px] h-[80px] flex rounded-xl justify-center items-center hover:opacity-60  cursor-pointer`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
