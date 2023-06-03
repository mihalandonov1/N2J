import React from "react";
import back from "../assets/bg-pattern-1.svg";
import phone from "../assets/illustration-app.png";

const Main = () => {
  return (
    <div className="min-w-[375px] bg-yellow mt-10">
      <div>1</div>
      <div className="flex">
        <img src={back} className="relative mt-10" />
        <img src={phone} className="absolute w-[50%]" />
      </div>
    </div>
  );
};

export default Main;
