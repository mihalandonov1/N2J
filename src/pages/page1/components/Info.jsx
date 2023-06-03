import React from "react";
import interactive from "../images/desktop/image-interactive.jpg";

function Info() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="flex flex-col sm:flex-col md:flex-row relative justify-start items-center mx-4  max-w-[1100px] w-[100%] mb-10">
        <div className="flex-col mb-10 sm:mb-10">
          <img src={interactive} className="md:max-w-[650px] sm:w-[100%]" />
        </div>
        <div className="flex  md:absolute max-w-[540px]  bg-white right-0 bottom-0">
          <div className="flex justify-center items-center flex-col  md:pl-24 md:pt-24">
            <h1 className="flex text-center leading-8 text-3xl uppercase font-thin mb-4">
              The leader in interactive VR
            </h1>
            <p className="flex text-center font-normal mx-6">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
