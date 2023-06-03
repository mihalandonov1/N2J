import React, { useState } from "react";

function TipComponent({
  handleClick,
  handleCustom,
  customPercent,
  selectedElement,
  onSelect,
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[5rem] w-[23.75rem] flex flex-col mt-10 mb-10 justify-center items-center">
        <div className="w-[23.75rem] flex mt-20 text-start text-base font-semibold text-[#5E7A7D]">
          Select Tip %
        </div>
        <form className="flex flex-wrap h-[6.875rem] w-[23.75rem] text-2xl font-bold mt-5 mb-5 gap-2 justify-center items-center">
          <button
            value={5 / 100}
            id="input1"
            onClick={handleClick}
            className={`w-[7.5rem] h-[3.125rem] ${
              selectedElement ? "bg-[#00474B]" : "bg-[#CCCCCC]"
            } hover:bg-[#9FE8DF] hover:text-[#00474B] rounded-lg flex items-center justify-center active-[#CCCCCC] text-white`}
          >
            5%
          </button>
          <button
            value={0.1}
            id="input2"
            onClick={handleClick}
            className={`w-[7.5rem] h-[3.125rem] ${
              selectedElement ? "bg-[#00474B]" : "bg-[#CCCCCC]"
            }  hover:bg-[#9FE8DF] hover:text-[#00474B] rounded-lg flex items-center justify-center text-white`}
          >
            10%
          </button>
          <button
            value={0.15}
            id="one"
            onClick={handleClick}
            className={`w-[7.5rem] h-[3.125rem] ${
              selectedElement ? "bg-[#00474B]" : "bg-[#CCCCCC]"
            } hover:bg-[#9FE8DF] hover:text-[#00474B] rounded-lg flex items-center justify-center text-white`}
          >
            15%
          </button>
          <button
            value={0.2}
            onClick={handleClick}
            className={`w-[7.5rem] h-[3.125rem] ${
              selectedElement ? "bg-[#00474B]" : "bg-[#CCCCCC]"
            } hover:bg-[#9FE8DF] hover:text-[#00474B] rounded-lg flex items-center justify-center text-white`}
          >
            20%
          </button>
          <button
            value={0.5}
            onSelect={onSelect}
            onClick={handleClick}
            className={`w-[7.5rem] h-[3.125rem] ${
              selectedElement ? "bg-[#00474B]" : "bg-[#CCCCCC]"
            } hover:bg-[#9FE8DF] hover:text-[#00474B] rounded-lg flex items-center justify-center text-white`}
          >
            50%
          </button>
          <input
            placeholder="Custom"
            type="number"
            min="0"
            max="100"
            name="customInput"
            onChange={handleCustom}
            value={customPercent}
            className={`w-[7.5rem] text-[#00474B]${
              selectedElement === true ? "bg-[#CCCCCC]" : "bg-[#00474B]"
            } placeholder-[#547878] outline-[#26C2AE] font-black h-[3.125rem] bg-[#F3F9FA] rounded-lg flex items-center justify-center text-center`}
          />
        </form>
      </div>
    </div>
  );
}

export default TipComponent;
