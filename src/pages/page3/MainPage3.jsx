import React, { useState } from "react";

import ThemeProvider from "./components/ThemeProvider";

import ContextComponent from "./components/ContextComponent";

function MainPage3() {
  return (
    <ThemeProvider>
      <ContextComponent />
    </ThemeProvider>
  );
}

export default MainPage3;
