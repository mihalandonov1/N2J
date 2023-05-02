import React from "react";
import minus from "../icons/icon-minus.svg";
import plus from "../icons/icon-plus.svg";
import cart from "../icons/icon-cart.svg";

function ProductInfo() {
  return (
    <div className="w-full relative flex flex-col justify-center items-center ml-5 mr-5 mt-5 xl:mt-0 xl:w-[445px]">
      <div>
        <h3 className=" uppercase tracking-widest font-extrabold mt-5 text-[#FF7E1B]">
          sneaker company
        </h3>
        <h1 className="mt-5 capitalize font-extrabold text-4xl">
          fall limited edition sneakers
        </h1>
        <p className="w-[18rem] mt-5 leading-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="w-full flex items-center justify-between mt-5 xl:flex-col xl:w-[445px] xl:w-full xl:items-start mb-5">
          <div className="flex flex-row  justify-start items-center">
            <div className="font-extrabold flex justify-center items-center text-2xl xl:justify-start">
              $125.00
            </div>
            <div className="ml-5 flex bg-[#FFEEE2] justify-end items-end rounded">
              <p className="ml-3 mr-3 flex font-bold text-[#FF7E1B]">50%</p>
            </div>
          </div>
          <div className="w-full  flex justify-end">
            <div className="w-full justify-end flex line-through font-bold">
              <p className="flex">$250.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center xl:w-[445px] xl:flex-row">
        <div className="w-[19rem] h-[56px] flex justify-center items-center bg-[#F6F8FD] rounded-lg relative xl:w-[8rem]">
          <div>0</div>
          <div className="flex flex-row absolute w-[6rem] justify-between items-center">
            <div className="flex cursor-pointer">
              <img src={minus} className="h-[4px]" />
            </div>
            <div className="flex cursor-pointer">
              <img src={plus} />
            </div>
          </div>
        </div>
        <div className="w-[19rem] h-[56px] flex justify-center items-center cursor-pointer bg-[#FF7E1B] rounded-lg relative mt-5 mb-5 xl:w-[15rem]">
          <div className="flex flex-row h-[20px]">
            <div>
              <img src={cart} className="h-[17px]" />
            </div>
            <div className="text-white font-bold ml-2">Add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
