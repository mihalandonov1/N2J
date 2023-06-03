import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="min-w-[375px] flex flex-col justify-center items-center font-space">
      <div className="bg-gray flex flex-coll min-w-[327px] mt-10">
        <img src={logo} />
      </div>
      <div className="mx-6">
        <h1 className="text-4xl font-bold flex mt-10 leading-10">
          We make your music sound extraordinary.
        </h1>
        <p className="mt-4">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
    </div>
  );
};

export default Header;
