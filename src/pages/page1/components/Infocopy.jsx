import React from "react";
import interactive from "../images/desktop/image-interactive.jpg";

function Info() {
  return (
    <div className="relative pt-20 mt-20">
      <div>
        <div>
          <img src={interactive} />
        </div>
        <div className="absolute w-[500px] h-[200px] right-0 bottom-0 flex flex-col items-end justify-end">
          <h1 className="w-[80%]">The leader in interactive VR</h1>
          <p className="w-[80%]">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
