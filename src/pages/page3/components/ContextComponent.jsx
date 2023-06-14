import React, { useContext } from "react";
import { useTheme, useThemeUpdate } from "./ThemeProvider";
import Header from "./Header";
import SearchBar from "./SearchBar";

const ContextComponent = () => {
  const darkTheme = useTheme();

  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#1E2A47" : "#FFFFFF",
    color: darkTheme ? "#FFFFFF" : "#4B6A9B",
  };

  const lightTheme = {
    backgroundColor: darkTheme ? "#141D2F" : "#F6F8FF",
    color: darkTheme ? "#FFFFFF" : "#333333",
  };
  return (
    <div
      style={lightTheme}
      className="grid bg-[#141D2F] h-[1000px] justify-center pt-10 font-space"
    >
      <div style={lightTheme}>
        <Header
          themeStyles={themeStyles}
          themeStyles2={lightTheme}
          toggleTheme={toggleTheme}
          darkTheme={darkTheme}
        />
        <SearchBar themeStyles={themeStyles} themeStyles2={lightTheme} />
      </div>
    </div>
  );
};

export default ContextComponent;
