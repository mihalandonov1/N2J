import React from "react";
import finder from "../assets/icon-search.svg";

function SearchBar() {
  return (
    <div className="w-[350px] flex flex-row justify-center items-center border mt-3 mb-3">
      <div className="w-[327px] h-[60px] m-2 flex flex-row justify-center items-center border rounded-xl bg-[#FEFEFE]">
        <div>
          <img src={finder} className="w-[20px] h-[20px]" />
        </div>
        <input
          type="text"
          name="searchBar"
          placeholder="Search GitHub username…"
          className="w-[184px] h-[25px] ml-3 mr-3"
        ></input>

        <button className="w-[84px] h-[46px] flex items-center justify-center bg-[#0079FF] text-white rounded-xl">
          <p className="w-[52px]">Search</p>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
