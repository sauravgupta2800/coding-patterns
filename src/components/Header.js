import React, { useEffect } from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import logo from "./../images/logo.png";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import { isMobileView } from "../components/utils";
import { octokit } from "../utils/octokit";
import youtube from "./../images/youtube-logo.png";
import linkedin from "./../images/linkedin.png";
import profilepic from "./../images/profile-pic.png";
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

const changeURLtoBase = () => {
  window.open(window.location.origin, "_self");
};

const TabsDiv = styled.div`
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  border: 1px solid;
  bottom: -1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 4px 8px;
  position: relative;
`;

const CustomButton = styled(TabsDiv)`
  background: ${({ theme }) => theme.mainSecondaryBackground};
  border-color: ${({ theme }) => theme.fontColor};
  border-radius: 3px;
  height: 30px;
`;

const ImageRender = ({ label, src, size = 20 }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      {src && (
        <div className="me-1">
          <img src={src} height={size} width={size} />
        </div>
      )}
      {label && <span className="fw-bold">{label}</span>}
    </div>
  );
};

const Header = ({ theme, themeToggler }) => {
  return (
    <Section className="px-4 h-100 d-flex justify-content-between align-items-center">
      <div
        className="d-flex align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => changeURLtoBase()}
      >
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
      <div className="d-flex align-items-center">
        {!isMobileView && (
          <>
            <CustomButton
              className="me-3"
              onClick={() =>
                window.open("https://www.sauravprofile.com", "_blank")
              }
            >
              <ImageRender label={"About Me"} src={profilepic} size={25} />
            </CustomButton>
            <CustomButton
              className="me-3"
              onClick={() =>
                window.open("https://linkedin.com/in/sauravgupta2800", "_blank")
              }
            >
              <ImageRender label={"Linkedin"} src={linkedin} size={15} />
            </CustomButton>
            <CustomButton
              className="me-3"
              onClick={() =>
                window.open("https://www.youtube.com/@CodingPatterns", "_blank")
              }
            >
              <ImageRender label={"Channel"} src={youtube} />
            </CustomButton>
          </>
        )}
        <DarkModeToggle
          size="60px"
          onChange={themeToggler}
          isDarkMode={theme === "light"}
        />
      </div>
    </Section>
  );
};

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func,
};

export default Header;
