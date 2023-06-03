import React, { useState } from "react";

function TipAmount({ total, persons, percent, tip }) {
  return (
    <div className=" flex items-center justify-between w-[20.625rem] h-[4.375rem] ">
      <div className="flex flex-col justify-between">
        <div className="text-white">Tip Amount</div>
        <div className="text-[#7F9D9F]">/ person</div>
      </div>
      <div className="text-5xl text-[#26C2AE]">${tip}</div>
    </div>
  );
}

export default TipAmount;
