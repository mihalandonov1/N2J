import React from "react";
import Navbar from "./compnents/Navbar";
import Hero from "./compnents/Hero";
import ProductInfo from "./compnents/ProductInfo";
import Basket from "./compnents/Basket";
import Lightbox from "./compnents/Lightbox";

function MainPage2() {
  return (
    <div className="flex flex-col xl:items-center">
      <Navbar />
      <Lightbox />
      <div className="w-full flex flex-col items-center justify-center xl:flex xl:flex-row xl:w-[1015px] xl:justify-between xl:items-center xl:mt-10">
        <Hero />
        <ProductInfo />
      </div>
    </div>
  );
}

export default MainPage2;
