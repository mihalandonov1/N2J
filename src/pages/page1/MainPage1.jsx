import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";

import Creations from "./components/Creations";
import Footer from "./components/Footer";

const MainPage1 = () => {
  return (
    <div>
      <Header />
      <Info />
      <Creations />
      <Footer />
    </div>
  );
};

export default MainPage1;
