import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import Toggle from "./Toggler";
import logo from "./../images/logo.png";
import { DarkModeToggle } from "react-dark-mode-toggle-2";

// background: ${({ theme }) => theme.darkBackground};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
const Section = styled.div`
  background: ${({ theme }) => theme.secondaryBackground};
  font-size:0.8rem;
}`;

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
`;
const Header = ({ theme, themeToggler }) => {
  return (
    <Section className="px-4 h-100 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={logo} width="60" />
        <Title className="m-0 ms-3">Coding Patterns</Title>
      </div>
      {/* https://github.com/todd-elvers/react-dark-mode-toggle-2 */}
      <DarkModeToggle
        size="60px"
        onChange={themeToggler}
        isDarkMode={theme === "light"}
      />
      {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
    </Section>
  );
};

export default Header;
