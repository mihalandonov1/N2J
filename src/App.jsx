import MainPage1 from "./pages/page1/MainPage1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage2 from "./pages/page2/MainPage2";

import MainPage3 from "./pages/page3/MainPage3";

import MainNav from "./MainNav";

function App() {
  return (
    <Routes>
      <Route path="page1" element={<MainPage1 />} />
      <Route path="page2" element={<MainPage2 />} />
      <Route path="page3" element={<MainPage3 />} />
    </Routes>
  );
}

export default App;
