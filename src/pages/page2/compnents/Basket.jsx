import React from "react";
import pic1 from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../icons/icon-delete.svg";

function Basket({ price, toCart, handleDelete }) {
  return (
    <div className="w-[100%] h-[100%] flex flex-col bg-white z-50  rounded-lg">
      <div className="flex justify-start items-center ">
        <div className="w-[100%] h-[56px] border-b flex items-center justify-start">
          <p className=" flex p-4 font-bold">Cart</p>
        </div>
      </div>

      {toCart !== 0 ? (
        <div className="">
          <div className="flex items-center justify-center mt-7">
            <div className="w-[312px] h-[56px] flex items-center justify-center">
              <div className="w-[312px]  flex flex-row justify-between font-light">
                <div className="w-[50px] h-[50px] mr-2">
                  <img src={pic1} className="rounded-lg" />
                </div>
                <div>
                  <div className="opacity-50">
                    Fall Limited Edition Sneakers
                  </div>
                  <div className="flex flex-row">
                    <p className="opacity-50">
                      ${price.toFixed(2)} x {toCart}
                    </p>
                    <p className="font-bold ml-3">
                      ${(price * toCart).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleDelete}
                  className="flex justify-end items-center"
                >
                  <img
                    src={deleteIcon}
                    className="w-[14px] h-[20px] cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-7 cursor-pointer">
            <div className="w-[312px] h-[56px] flex items-center justify-center bg-[#FF7E1B] rounded-lg">
              <p className="capitalize text-white font-bold">checkout</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[80%]  flex justify-center items-center">
          <div className="flex justify-center items-center">
            <p className="flex font-bold opacity-40">Your cart is empty</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
