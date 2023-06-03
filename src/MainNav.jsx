import React from "react";
import loopstudio from ".././src/projectsImages/project1.jpg";
import estore from ".././src/projectsImages/project2.jpg";
import git from ".././src/projectsImages/project3.jpg";
import calc from ".././src/projectsImages/project5.jpg";
import equalizer from ".././src/projectsImages/project4.jpg";

function MainNav() {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-20 pt-20">
      <div className="flex flex-row gap-5">
        <a href="/page1">
          <div className="flex flex-col justify-center items-center border p-1">
            <img src={loopstudio} alt="page1" className="w-20 h-20" />
            <p>PROJECT 1</p>
            <p>LOOPSTUDIOS</p>
          </div>
        </a>
        <a href="/page2">
          <div className="flex flex-col justify-center items-center border p-1">
            <img src={estore} alt="page1" className="w-20 h-20" />
            <p>PROJECT 2</p>
            <p>E-COMMERSE</p>
          </div>
        </a>
        <a href="/page3">
          <div className="flex flex-col justify-center items-center border p-1">
            <img src={git} alt="page1" className="w-20 h-20" />
            <p>PROJECT 3</p>
            <p>GIT HUB</p>
          </div>
        </a>
        <a href="/page4">
          <div className="flex flex-col justify-center items-center border p-1">
            <img src={calc} alt="page1" className="w-20 h-20" />
            <p>PROJECT 4</p>
            <p>TIP CALCULATOR</p>
          </div>
        </a>
        <a href="/page5">
          <div className="flex flex-col justify-center items-center border p-1">
            <img src={equalizer} alt="page1" className="w-20 h-20" />
            <p>PROJECT 5</p>
            <p>EQUALIZER</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainNav;
