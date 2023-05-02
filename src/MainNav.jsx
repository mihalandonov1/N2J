import React from "react";

import project1 from "./projectsImages/project1.jpg";
import project2 from "./projectsImages/project2.jpg";
import project3 from "./projectsImages/project3.jpg";
import project4 from "./projectsImages/project4.jpg";
import project5 from "./projectsImages/project5.jpg";

import MainPage1 from "./pages/page1/MainPage1";
import { Route } from "react-router-dom";

function MainNav() {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-5">
      <div className="flex flex-row gap-5">
        <a href="/page1">
          <div className="flex flex-col justify-center items-center border p-1">
            <p>PROJECT 1</p>
            <p>LOOPSTUDIOS</p>
          </div>
        </a>
        <a href="/page2">
          <div className="flex flex-col justify-center items-center border p-1">
            <p>PROJECT 2</p>
            <p>E-COMMERSE</p>
          </div>
        </a>
        <a href="/page3">
          <div className="flex flex-col justify-center items-center border p-1">
            <p>PROJECT 3</p>
            <p>GIT HUB</p>
          </div>
        </a>
        <a href="/page4">
          <div className="flex flex-col justify-center items-center border p-1">
            <p>PROJECT 4</p>
            <p>TIP CALCULATOR</p>
          </div>
        </a>
        <a href="/page5">
          <div className="flex flex-col justify-center items-center border p-1">
            <p>PROJECT 5</p>
            <p>EQUALIZER</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainNav;
