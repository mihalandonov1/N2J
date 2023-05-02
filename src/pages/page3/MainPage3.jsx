import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";

function MainPage3() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[350px] flex justify-center items-center flex-col mt-10 mb-10 bg-[#F6F8FF]">
        <div className="flex flex-col w-[350px]">
          <Header />
          <SearchBar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default MainPage3;
