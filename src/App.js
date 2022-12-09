import React, { useState } from "react";
import "../src/styles/app.scss";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./hooks/useDarkMode";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Collapsible from "./components/Collapsible";
import Footer from "./components/Footer";
import { isMobileView } from "./components/utils";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="app">
          <div className="main-layout">
            <div className="main-layout__header">
              <Header theme={theme} themeToggler={themeToggler} />
            </div>

            <div
              className={`main-layout__container d-flex justify-content-center`}
            >
              <div
                className={`content-width${isMobileView ? "--mobile" : ""} `}
              >
                <Banner />
                <Collapsible />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
