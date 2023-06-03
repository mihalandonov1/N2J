import React from "react";
import { useState } from "react";
import Navbar from "./compnents/Navbar";
import Hero from "./compnents/Hero";
import ProductInfo from "./compnents/ProductInfo";
import Basket from "./compnents/Basket";
import Lightbox from "./compnents/Lightbox";

function MainPage2() {
  const [basket, setBasket] = useState(0);
  const [toCart, setToCart] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const price = 125;

  // function handleRight(e) {
  //   e.preventDefault();
  //   let newIndex = index + 1;
  //   if (newIndex > picModal.length - 1) {
  //     newIndex = 0;
  //     let a = "hero" + newIndex;
  //   }
  //   setPhoto(a);
  //   console.log(a);
  // }

  // function handleLeft(e) {
  //   e.preventDefault();
  //   let newIndex = index - 1;
  //   if (newIndex <= 0) {
  //     newIndex = 3;
  //   }
  //   setPhoto(photo);
  // }

  function handleModal(e) {
    setShowModal(!showModal);
    console.log("clicked");
  }

  function handleToCart(e) {
    setToCart(basket);
    setBasket(0);
    console.log("added to cart");
    console.log(toCart);
    console.log(basket);
  }

  function handleDelete(e) {
    setToCart(0);
    console.log("deleted");
  }

  function handleIncrement(e) {
    setBasket((prev) => prev + 1);
    console.log("clicked");
  }

  function handleDecrement(e) {
    setBasket((prev) => prev - 1);
    if (basket <= 0) {
      setBasket(0);
    }
    console.log("clicked");
  }

  return (
    <div className="flex flex-col xl:items-center">
      <Navbar
        price={price}
        quantity={basket}
        toCart={toCart}
        handleDelete={handleDelete}
      />

      <Lightbox showModal={showModal} handleModal={handleModal} />
      <div className="w-full flex flex-col items-center justify-center xl:flex xl:flex-row xl:w-[1015px] xl:justify-between xl:items-center xl:mt-10">
        <Hero
          handleModal={handleModal}
          // handleLeft={handleLeft}
          // handleRight={handleRight}
        />
        <ProductInfo
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          quantity={basket}
          handleToCart={handleToCart}
        />
      </div>
    </div>
  );
}

export default MainPage2;
