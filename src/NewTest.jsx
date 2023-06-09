import React from "react";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

function NewTest() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-row justify-around">
          <Link className="w-[100px]" to="/src/pages/page1">
            <p className="uppercase">project 1</p>
          </Link>
          <Link className="w-[100px]" to="/src/pages/page2">
            <p className="uppercase">project 2</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewTest;
