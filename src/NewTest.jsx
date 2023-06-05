import React from "react";
import { Link } from "react-router-dom";

function NewTest() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-row justify-around">
          <Link className="w-[100px]" to="./pages/page1/MainPage1.jsx">
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
