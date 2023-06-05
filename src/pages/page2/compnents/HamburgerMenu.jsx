import React from "react";
import close from "../icons/icon-close.svg";

function HamburgerMenu({ hamburger, setHamburger, handleHamburger }) {
  return (
    <div
      className={`w-[100%] h-[200vh] fixed bg-stone-950/90 z-50 top-0 left-0  ${
        hamburger === true ? "" : "hidden"
      }   `}
    >
      <div className="w-[250px] h-[200vh] bg-white ">
        <img
          onClick={handleHamburger}
          src={close}
          className="pt-5 ml-5 cursor-pointer"
        />
        <ul className="w-[95px] capitalize pt-5 pl-5 ">
          <li className="mt-2 text-xl font-extrabold">collection</li>
          <li className="mt-2 text-xl font-extrabold">men</li>
          <li className="mt-2 text-xl font-extrabold">women</li>
          <li className="mt-2 text-xl font-extrabold">about</li>
          <li className="mt-2 text-xl font-extrabold">contact</li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
