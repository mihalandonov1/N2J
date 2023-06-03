import React from "react";

import dolarSign from "../images/icon-dollar.svg";

export const BillComponents = ({ setBillAmt, billAmt }) => {
  return (
    <div className=" flex text-center justify-center w-[23.75rem] h-[5rem] ">
      <div className="flex justify-center items-center">
        <form className="flex flex-col justify-center items-center">
          <label className="w-[23.75rem] text-start text-base font-semibold text-[#5E7A7D]">
            Bill
          </label>

          <div className="flex items-center text-2xl font-bold">
            <img src={dolarSign} className="absolute px-4 flex" />
            <input
              placeholder="0"
              type="text"
              onChange={(e) => setBillAmt(+e.target.value)}
              value={billAmt}
              className="w-[23.75rem] h-[3.125rem] text-[#00474B] cursor-pointer flex justify-between items-center text-end rounded-lg bg-[#F3F9FA] border-slate-200 outline-[#26C2AE]  px-4"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};
