import React, { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "../src/styles/app.scss";
import { Helmet } from "react-helmet";
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
  const themeMode = () => (theme === "light" ? lightTheme : darkTheme);

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode()}>
      <>
        <GlobalStyles />
        <Helmet>
          <title>
            Coding Patterns: 21 Coding Patterns to Master Tech Interviews
          </title>
          <meta
            name="description"
            content="Dont just write code, lets learn patters"
          />
        </Helmet>
        <div className="app">
          <div className="main-layout">
            <div className="main-layout__header">
              <Header theme={theme} themeToggler={() => themeToggler()} />
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
        <SpeedInsights />
      </>
    </ThemeProvider>
  );
}

export default App;
