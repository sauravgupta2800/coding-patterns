import React, { useState } from "react";
import "../src/styles/app.scss";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./hooks/useDarkMode";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Collapsible from "./components/Collapsible";
function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="app">
          <div className="main-layout">
            <div className="main-layout__header">
              <Header theme={theme} themeToggler={themeToggler} />
            </div>

            <div className="main-layout__container d-flex justify-content-center">
              <div className="content-width">
                <Banner />

                <Collapsible />
              </div>
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
