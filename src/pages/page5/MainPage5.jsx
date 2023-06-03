import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

const MainPage5 = () => {
  return (
    <div className="max-w-3xl min-w-[375px] bg-slate-600 flex justify-center items-center">
      <div className="flex bg-red-700 items-center justify-center">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default MainPage5;
