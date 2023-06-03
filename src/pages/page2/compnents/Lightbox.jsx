import React from "react";
import { useState } from "react";
import leftArrow from "../icons/icon-previous.svg";
import rightArrow from "../icons/icon-next.svg";
import close from "../icons/icon-close.svg";
import pic1 from "../images/image-product-1-thumbnail.jpg";
import pic2 from "../images/image-product-2-thumbnail.jpg";
import pic3 from "../images/image-product-3-thumbnail.jpg";
import pic4 from "../images/image-product-4-thumbnail.jpg";
import pic11 from "../images/image-product-1.jpg";
import pic22 from "../images/image-product-2.jpg";
import pic33 from "../images/image-product-3.jpg";
import pic44 from "../images/image-product-4.jpg";

function Lightbox({ showModal, handleModal, handleLeft, handleRight }) {
  const [pic, setPic] = useState([pic1, pic2, pic3, pic4]);
  const [picModal, setPicModal] = useState([pic11, pic22, pic33, pic44]);
  const [index1, setIndex1] = useState(0);

  function handleRight1(e) {
    e.preventDefault();
    let newIndex1 = index1 + 1;
    if (newIndex1 > picModal.length - 1) {
      newIndex1 = 0;
    }
    setIndex1(newIndex1);
  }

  function handleLeft1(e) {
    e.preventDefault();
    let newIndex1 = index1 - 1;
    if (newIndex1 <= 0) {
      newIndex1 = 3;
    }
    setIndex1(newIndex1);
  }

  return (
    <div
      className={`${
        showModal == true ? "" : "hidden"
      } w-[100%] h-[100vh] absolute bg-stone-950/90 z-50 top-0 left-0 sm:top-0 sm:left-0`}
    >
      <div className="w-[250px] absolute flex flex-col h-[740px] top-5 left-[120px] justify-center items-center sm:w-[300px] sm:justify-start sm:items-start sm:left-0 sm:top-0">
        <div className="h-[740px]">
          <div className="w-[250px] sm:w-[250px] md:w[250px] h-[20px]  flex justify-end items-center filter-none mt-5 mb-2">
            <img
              onClick={handleModal}
              src={close}
              className="flex cursor-pointer hover:bg-orange-500 fill-white"
            />
          </div>
          <div className="w-[100%] sm:w-[300px] md:w-[300px] lg:w-[550px] h-[350px] sm:h-[350px] md:h-[350px] lg:h-[550px] relative bg-orange-500 flex justify-center items-center  filter-none">
            <img src={picModal[index1]} />
            <div className="w-[290px] sm:w-[290px] md:w-[290px] lg:w-[390px] h-[50px] absolute flex  justify-between items-center">
              <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer z-50">
                <img onClick={handleLeft1} src={leftArrow} />
              </div>
              <div className="bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer z-50">
                <img onClick={handleRight1} src={rightArrow} className="" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-5">
            <div className="mb-10 hidden xl:w-[445px] xl:h-[88px] xl:flex xl:flex-row xl:mt-5 xl:justify-between">
              <div
                className={`flex justify-center items-center w-[88px] ${
                  index1 == 0 ? "border-orange-400 rounded-xl border-4" : ""
                }`}
              >
                <img
                  src={pic[0]}
                  onClick={() => setIndex1(0)}
                  className={`w-[82px] rounded-lg opacity-60 object-cover cursor-pointer`}
                />
              </div>

              <div
                className={`flex justify-center items-center w-[88px] ${
                  index1 == 1 ? "border-orange-400 rounded-xl border-4" : ""
                }`}
              >
                <img
                  src={pic[1]}
                  onClick={() => setIndex1(1)}
                  className={`w-[82px] rounded-lg opacity-60 object-cover cursor-pointer`}
                />
              </div>

              <div
                className={`flex justify-center items-center w-[88px] ${
                  index1 == 2 ? "border-orange-400 rounded-xl border-4" : ""
                }`}
              >
                <img
                  src={pic[2]}
                  onClick={() => setIndex1(2)}
                  className={`w-[82px] rounded-lg opacity-60 object-cover cursor-pointer`}
                />
              </div>

              <div
                className={`flex justify-center items-center w-[88px] ${
                  index1 == 3 ? "border-orange-400 rounded-xl border-4" : ""
                }`}
              >
                <img
                  src={pic[3]}
                  onClick={() => setIndex1(3)}
                  className={`w-[82px] rounded-lg opacity-60 object-cover cursor-pointer`}
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
