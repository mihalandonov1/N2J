import React from "react";
import { useState } from "react";
import Navbar from "./compnents/Navbar";
import Hero from "./compnents/Hero";
import ProductInfo from "./compnents/ProductInfo";
import Basket from "./compnents/Basket";
import Lightbox from "./compnents/Lightbox";
import pic11 from "./images/image-product-1.jpg";
import pic22 from "./images/image-product-2.jpg";
import pic33 from "./images/image-product-3.jpg";
import pic44 from "./images/image-product-4.jpg";

function MainPage2() {
  const [basket, setBasket] = useState(0);
  const [toCart, setToCart] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [picModal, setPicModal] = useState([pic11, pic22, pic33, pic44]);
  const [Index, setIndex] = useState(0);

  const price = 125;

  // function handleRight(e) {
  //   e.preventDefault();
  //   let newIndex = index + 1;
  //   if (newIndex > picModal.length - 1) {
  //     newIndex = 0;
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

  function handleRight(e) {
    e.preventDefault();
    let newIndex1 = Index + 1;
    if (newIndex1 > picModal.length - 1) {
      newIndex1 = 0;
    }
    setIndex(newIndex1);
  }

  function handleLeft(e) {
    e.preventDefault();
    let newIndex1 = Index - 1;
    if (newIndex1 < 0) {
      newIndex1 = 3;
    }
    setIndex(newIndex1);
  }

  function handleModal(e) {
    setShowModal(!showModal);
  }

  function handleToCart(e) {
    setToCart(basket);
    setBasket(0);
  }

  function handleDelete(e) {
    setToCart(0);
  }

  function handleIncrement(e) {
    setBasket((prev) => prev + 1);
  }

  function handleDecrement(e) {
    setBasket((prev) => prev - 1);
    if (basket <= 0) {
      setBasket(0);
    }
  }

  return (
    <div className="flex flex-col xl:items-center">
      <Navbar
        price={price}
        quantity={basket}
        toCart={toCart}
        handleDelete={handleDelete}
      />

      <Lightbox
        showModal={showModal}
        handleModal={handleModal}
        setIndex={setIndex}
        setPicModal={setPicModal}
        picModal={picModal}
        Index={Index}
        handleRight={handleRight}
        handleLeft={handleLeft}
      />
      <div className="w-full flex flex-col items-center justify-center xl:flex xl:flex-row xl:w-[1015px] xl:justify-between xl:items-center xl:mt-10">
        <Hero
          handleModal={handleModal}
          setIndex={setIndex}
          setPicModal={setPicModal}
          picModal={picModal}
          Index={Index}
          handleRight={handleRight}
          handleLeft={handleLeft}
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
