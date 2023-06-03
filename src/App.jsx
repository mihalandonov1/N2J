import MainPage1 from "./pages/page1/MainPage1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage2 from "./pages/page2/MainPage2";

import MainPage3 from "./pages/page3/MainPage3";
import MainPage4 from "./pages/page4/MainPage4";
import MainPage5 from "./pages/page5/MainPage5";
import MainNav from "./MainNav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainNav />} />
      <Route path="page1" element={<MainPage1 />} />
      <Route path="page2" element={<MainPage2 />} />
      <Route path="page3" element={<MainPage3 />} />
      <Route path="page4" element={<MainPage4 />} />
      <Route path="page5" element={<MainPage5 />} />
    </Routes>
  );
}

export default App;
