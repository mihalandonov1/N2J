import React from "react";

function TotalAmount({ total }) {
  // const total = (percent * billAmt).toFixed(2);
  return (
    <div className=" flex items-center justify-between w-[20.625rem] h-[4.375rem] ">
      <div className="flex flex-col justify-between">
        <div className="text-white">Tip Total</div>
        <div className="text-[#7F9D9F]">/ person</div>
      </div>
      <div className="text-5xl text-[#26C2AE]">${total}</div>
    </div>
  );
}

export default TotalAmount;
