import React, { useState } from "react";
import people from "../images/icon-person.svg";

function NumberPeople({ persons, setPersons }) {
  return (
    <div className="w-[23.75rem] h-[5rem] flex flex-col justify-center items-center mt-14">
      <div className="flex justify-between w-[23.75rem]">
        <div className="text-start text-base font-semibold text-[#5E7A7D]">
          Number of Peope
        </div>

        <p
          className={`1font-light text-red-500 ${
            persons <= 0 && persons ? "" : "hidden"
          }`}
        >
          Can't be zero
        </p>
      </div>
      <form className="flex items-center text-2xl font-bold">
        <img src={people} className="absolute px-4 " />

        <input
          placeholder={0}
          type="number"
          min="0"
          onInput={(e) => setPersons(e.target.value)}
          value={persons}
          className="w-[23.75rem] h-[3.125rem] cursor-pointer text-[#00474B]  flex justify-between items-center text-end rounded-lg bg-[#F3F9FA] outline-[#26C2AE] px-4"
        ></input>
        <p className="hidden peer-invalid:visible">invalid</p>
      </form>
    </div>
  );
}

export default NumberPeople;
