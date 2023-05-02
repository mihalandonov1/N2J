import React from "react";
import dark from "../assets/icon-moon.svg";

function Header() {
  return (
    <div className="w-[350px] flex flex-col justify-center items-center border">
      <div className="m-5 w-[327px] h-[38px] flex flex-row justify-between items-center border">
        <div>devfinder</div>
        <div className="flex flex-row w-[78px] h-[20px] justify-between items-center">
          <p className="flex uppercase text-[#4B6A9B] items-center">dark</p>
          <img src={dark} className="w-[20px] h-[20px] flex" />
        </div>
      </div>
    </div>
  );
}

export default Header;
