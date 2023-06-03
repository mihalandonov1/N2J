import React from "react";
import { useState } from "react";
import leftArrow from "../icons/icon-previous.svg";
import rightArrow from "../icons/icon-next.svg";
import hero11 from "../images/image-product-1.jpg";
import hero21 from "../images/image-product-2.jpg";
import hero31 from "../images/image-product-3.jpg";
import hero41 from "../images/image-product-4.jpg";
import pic1 from "../images/image-product-1-thumbnail.jpg";
import pic2 from "../images/image-product-2-thumbnail.jpg";
import pic3 from "../images/image-product-3-thumbnail.jpg";
import pic4 from "../images/image-product-4-thumbnail.jpg";

function Hero({ handleRight, handleLeft }) {
  const [img, setImg] = useState(hero11);
  const [border, setBorder] = useState([true, false, false, false]);
  const [picModal1, setPicModal1] = useState([hero11, hero21, hero31, hero41]);
  const [index, setIndex] = useState(1);

  function handleBorder1() {
    setBorder([true, false, false, false]);
    setImg(hero11);
  }

  function handleBorder2() {
    setBorder([false, true, false, false]);
    setImg(hero21);
  }

  function handleBorder3() {
    setBorder([false, false, true, false]);
    setImg(hero31);
  }
  function handleBorder4() {
    setBorder([false, false, false, true]);
    setImg(hero41);
  }

  function handleRight(e) {
    e.preventDefault();

    let newIndex = index + 1;
    if (newIndex === 5) {
      newIndex = 1;
    }
    setIndex(newIndex);
    console.log(newIndex);
    if (newIndex === 1) {
      setPicModal1(hero11);
    } else if (newIndex === 2) {
      setPicModal1(hero21);
    } else if (newIndex === 3) {
      setPicModal1(hero31);
    } else if (newIndex === 4) {
      setPicModal1(hero41);
    }
    console.log(picModal1);
  }

  function handleLeft(e) {
    e.preventDefault();
    let newIndex = index - 1;
    if (newIndex <= 0) {
      newIndex = 4;
    }
    setIndex(newIndex);
    console.log(newIndex);
    if (newIndex == 1) {
      setPicModal1(hero11);
    } else if (newIndex == 2) {
      setPicModal1(hero21);
    } else if (newIndex == 3) {
      setPicModal1(hero31);
    } else if (newIndex == 4) {
      setPicModal1(hero41);
    }
  }

  return (
    <div className="w-full min-h-[400px]   flex flex-col justify-center items-center ">
      <div className="w-full min-h-[400px] relative  flex flex-col justify-center items-center xl:w-[445px]">
        <img
          src={picModal1}
          className="w-full min-h-[400px] cursor-pointer flex justify-center items-center md:w-[80%] md:m-10 xl:w-[445px] xl:rounded-xl"
        />
        <div className="absolute mx-18 flex justify-between mb-20 w-[95%] sm:w-[85%] md:w-[85%] lg:w-[85%] xl:hidden">
          <div className="flex flex-row justify-between w-[100%] items-center">
            <div
              onClick={handleLeft}
              className="w-[40px] h-[40px] flex justify-center items-center bg-white cursor-pointer rounded-full"
            >
              <img
                src={leftArrow}
                className="w-[20px] h-[20px] flex items-center"
              />
            </div>
            <div
              onClick={handleRight}
              className="w-[40px] h-[40px] flex items-center justify-center bg-white cursor-pointer rounded-full"
            >
              <img src={rightArrow} className="w-[20px] h-[20px] flex" />
            </div>
          </div>
        </div>
        <div className="mb-10 hidden xl:w-[445px] xl:h-[88px] xl:flex xl:flex-row xl:mt-5 xl:justify-between">
          <div
            onClick={handleBorder1}
            className={` ${
              border[0] == true ? "border-4 border-orange-400 opacity-40" : null
            } w-[88px] rounded-xl flex justify-center cursor-pointer hover:opacity-40 items-center`}
          >
            <img
              src={pic1}
              className={` w-[80px]  object-cover  bottom-[16px] rounded-lg`}
            />
          </div>
          <div
            onClick={handleBorder2}
            className={` ${
              border[1] == true ? "border-4 border-orange-400 opacity-40" : null
            } w-[88px] rounded-xl flex justify-center cursor-pointer hover:opacity-40 items-center`}
          >
            <img
              src={pic2}
              className=" w-[80px]  object-cover  bottom-[16px] rounded-lg"
            />
          </div>
          <div
            onClick={handleBorder3}
            className={` ${
              border[2] == true ? "border-4 border-orange-400 opacity-40" : null
            } w-[88px] rounded-xl flex justify-center cursor-pointer  hover:opacity-40 items-center`}
          >
            <img
              src={pic3}
              className=" w-[80px]  object-cover  bottom-[16px] rounded-lg"
            />
          </div>
          <div
            onClick={handleBorder4}
            className={` ${
              border[3] == true ? "border-4 border-orange-400 opacity-40" : null
            } w-[88px] rounded-xl flex justify-center cursor-pointer hover:opacity-40 items-center`}
          >
            <img
              src={pic4}
              className=" w-[80px]  object-cover  bottom-[16px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
