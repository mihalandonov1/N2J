import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainPage3 from "./pages/page3/MainPage3";
import MainPage1 from "./pages/page1/MainPage1";
import MainPage2 from "./pages/page2/MainPage2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainPage2 />
  </BrowserRouter>
);
