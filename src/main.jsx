import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainPage3 from "./pages/page3/MainPage3";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainPage3 />
  </BrowserRouter>
);
