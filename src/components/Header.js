import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import logo from "./../images/logo.png";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import { isMobileView } from "../components/utils";

const Section = styled.div`
  background: ${({ theme }) => theme.secondaryBackground};
  font-size:0.8rem;
}`;

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
`;

const MobileTitle = styled.h3`
  color: ${({ theme }) => theme.fontColor};
`;
const Header = ({ theme, themeToggler }) => {
  return (
    <Section className="px-4 h-100 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          className="logo-img"
          src={logo}
          width={isMobileView ? "50" : "60"}
        />
        {isMobileView ? (
          <MobileTitle className="m-0 ms-3">Coding Patterns</MobileTitle>
        ) : (
          <Title className="m-0 ms-3">Coding Patterns</Title>
        )}
      </div>
      <DarkModeToggle
        size="60px"
        onChange={themeToggler}
        isDarkMode={theme === "light"}
      />
    </Section>
  );
};

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func,
};

export default Header;
