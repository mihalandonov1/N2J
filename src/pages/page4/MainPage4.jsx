import React, { useEffect, useState } from "react";
import { BillComponents } from "./components/BillComponents";
import TipComponent from "./components/TipComponent";
import NumberPeople from "./components/NumberPeople";
import TipAmount from "./components/TipAmount";
import TotalAmount from "./components/TotalAmount";
import logo from "./images/logo.svg";

const MainPage4 = () => {
  const [billAmt, setBillAmt] = useState("");
  const [percent, setPercent] = useState("");
  const [persons, setPersons] = useState("");
  const [tip, setTip] = useState((0).toFixed(2));
  const [customPercent, setCustomPercent] = useState("");
  const [selectedElement, setSelectedElement] = useState(false);

  useEffect(
    (e) => {
      console.table(billAmt, percent, persons);

      tt();
    },
    [billAmt, percent, persons]
  );

  const total = (percent * billAmt).toFixed(2);

  function select(e) {
    setSelectedElement(!selectedElement);
  }

  function handleClick(e) {
    e.preventDefault();
    setPercent(e.target.value);
    setCustomPercent("");
    select(e);
    console.table(e.target.value);
  }

  function handleCustom(e) {
    e.preventDefault();
    setCustomPercent(e.target.value);
    setPercent(e.target.value / 100);
  }

  function tt() {
    if (total <= 0) {
      console.log("pod nula");
    } else {
      setTip((total / persons).toFixed(2));
    }
  }

  //   function handlePeoples(e) {
  //     e.preventDefault();

  //     setPersons(e.target.value);
  //     if (input == 0) {
  //       setPersonsErr(true);
  //     } else {
  //       setPersonsErr(false);
  //     }
  //   }

  function handleReset() {
    setPercent(0);
    setBillAmt("");
    setPersons("");
    setTip((0).toFixed(2));
    setCustomPercent("");
  }

  return (
    <div className="flex flex-col font-space items-center justify-center bg-[#C5E4E7] font-bold">
      <img src={logo} className="mt-10" />
      <div className=" flex flex-wrap items-center justify-center mt-10 mb-10  bg-[#FFFFFF] rounded-3xl">
        <div className=" flex flex-col text-center justify-center w-[23.75rem] h-[24.375rem]  rounded-lg m-6">
          <BillComponents setBillAmt={setBillAmt} billAmt={billAmt} />
          <TipComponent
            setPercent={setPercent}
            handleClick={handleClick}
            handleCustom={handleCustom}
            customPercent={customPercent}
            selectedElement={selectedElement}
            onSelect={select}
          />
          <NumberPeople setPersons={setPersons} persons={persons} />
        </div>
        <div className=" flex flex-col items-center justify-evenly w-[23.75rem] h-[24.375rem] bg-[#00474B] rounded-lg m-6">
          <div>
            <TipAmount
              total={total}
              percent={percent}
              persons={persons}
              tip={tip}
            />
            <TotalAmount total={total} />
          </div>
          <button
            onClick={handleReset}
            className="w-[20.625rem] h-[3.125rem] bg-[#26C2AE] rounded-lg hover:bg-[#9FE8DF] text-xl font-bold"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage4;
