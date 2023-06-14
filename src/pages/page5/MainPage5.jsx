import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Pattern from "./Components/Pattern";
import Premium from "./Components/Premium";

const MainPage5 = () => {
  return (
    <div className="font-ibm ">
      <Pattern />
      <div className="flex flex-col">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage5;
