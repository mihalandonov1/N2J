import React, { useState, useEffect } from "react";
import finder from "../assets/icon-search.svg";
import Main from "./Main";

function SearchBar({ themeStyles, themeStyles2 }) {
  const [state, setState] = useState();
  const [user, setUser] = useState("octocat");
  const [notFound, setNotFound] = useState(false);

  console.log(state);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`https://api.github.com/users/${user}`)
      ).json();

      setState(data);
    };

    dataFetch();

    return () => {
      console.log("clean up");
    };
  }, []);

  function onChangeHandle(e) {
    e.preventDefault();
    setUser(e.target.value);
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();

    console.log("submit");
    console.log(user);

    const profil = await fetch(`https://api.github.com/users/${user}`);
    const profJson = await profil.json();
    setState(profJson);
    if (profJson.message === "Not Found") {
      setNotFound(true);
    }
  };

  return (
    <div className="drop-shadow-xl">
      <form
        onSubmit={handlerSubmit}
        style={themeStyles}
        className="grid grid-cols-12 max-w-[730px] mx-6 justify-between items-center bg-white rounded-xl drop-shadow-2xl sm:mx-10 md:mx-20"
      >
        <div
          style={themeStyles}
          className="bg-white  justify-center items-center grid col-span-1"
        >
          <img src={finder} className="w-[20px] h-[20px] mx-2" />
        </div>
        <div
          style={themeStyles}
          className=" col-span-11 flex justify-between rounded-lg"
        >
          <input
            style={themeStyles}
            type="text"
            onChange={onChangeHandle}
            required
            placeholder="Search GitHub username…"
            className="bg-white caret-blue-700 w-[100%] py-2 mx-1  text-sm outline-none  md:text-lg lg:text-[18px]"
          ></input>

          <p className="text-red-500 justify-center w-[100px] items-center flex text-[10px] mr-4">
            {notFound === true ? "No results" : ""}
          </p>

          <div
            style={themeStyles}
            className="flex items-end  bg-white rounded-xl"
          >
            <button
              type="submit"
              className="bg-[#0079FF] w-[84px] md:w-[106px] hover:bg-[#60ABFF] rounded-lg p-2 my-2 mr-2 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="flex flex-col mt-5">
        <Main {...state} styled={themeStyles} themeStyles2={themeStyles2} />
      </div>
    </div>
  );
}

export default SearchBar;
