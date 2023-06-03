import React from "react";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Galery from "./components/Galery";
import Creations from "./components/Creations";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Herocopy from "./components/Herocopy";
import Infocopy from "./components/Infocopy";

const MainPage1 = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Creations />
      <Galery />
      <Footer />
    </div>
  );
};

export default MainPage1;
