import React from "react";
import pic1 from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../icons/icon-delete.svg";

function Basket() {
  return (
    <div className="h-[256px] w-[360px]  border-2 mt-10 justify-center items-center bg-white">
      <div className="flex justify-center items-center ">
        <div className="w-[360px] h-[56px] border-b-2 flex items-center justify-center">
          <p className="w-[312px] flex justify-start font-bold">Cart</p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center mt-7">
          <div className="w-[312px] h-[56px] flex items-center justify-center">
            <div className="w-[312px]  flex flex-row justify-between">
              <div className="w-[50px] h-[50px] mr-2">
                <img src={pic1} className="rounded-lg" />
              </div>
              <div>
                <div>Fall Limited Edition Sneakers</div>
                <div className="flex flex-row">
                  <p>$125.00 x 3</p>
                  <p className="font-bold ml-3">$375.00</p>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <img
                  src={deleteIcon}
                  className="w-[14px] h-[20px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-7 cursor-pointer">
          <div className="w-[312px] h-[56px] flex items-center justify-center bg-[#FF7E1B] rounded-lg">
            <p className="capitalize text-white font-bold">checkout</p>
          </div>
        </div>
      </div>
      <div className="h-[80%] hidden flex justify-center items-center">
        <div className="flex justify-center items-center">
          <p className="flex font-bold">Your cart is empty</p>
        </div>
      </div>
    </div>
  );
}

export default Basket;
