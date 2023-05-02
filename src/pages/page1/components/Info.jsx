import React from "react";
import interactive from "../images/desktop/image-interactive.jpg";

function Info() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-main flex  mt-20 mb-20 relative">
        <img src={interactive} className="h-interactive" />
        <div className="bg-white w-whitebox flex justify-center h-52 absolute right-0 bottom-0 pl-5 pr-5">
          <div className="ml-20 mt-20 flex flex-col justify-center">
            <h1 className="uppercase justify-center flex text-5xl">
              the leader of interactive ai
            </h1>
            <p className="m-1">
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
