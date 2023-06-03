import React from "react";

function Creations() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex relative justify-center sm:justify-around  md:justify-between items-center mx-2 px-2 md:mx-4 md:px-4 max-w-[1100px] w-[100%] mb-10">
        <h1 className="uppercase flex text-3xl md:4xl  justify-center">
          our creations
        </h1>
        <button className="p-1 px-8  uppercase poiner border-2 border-black hover:bg-black hover:text-white justify-center hidden sm:flex md:flex">
          see all
        </button>
      </div>
    </div>
  );
}

export default Creations;
