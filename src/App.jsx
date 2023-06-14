import { useState } from "react";

import project1 from "./projectsImages/project1.jpg";
import project2 from "./projectsImages/project2.jpg";
import MainPage1 from "./pages/page1/MainPage1";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import MainPage2 from "./pages/page2/MainPage2";
import NewTest from "./NewTest";
import MainNav from "./MainNav";
import MainPage3 from "./pages/page3/MainPage3";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/page1" element={<MainPage1 />} />
        <Route path="/page2" element={<MainPage2 />} />
        <Route path="/page3" element={<MainPage3 />} />
      </Routes>

      <MainPage1 />
    </div>
  );
}

export default App;
