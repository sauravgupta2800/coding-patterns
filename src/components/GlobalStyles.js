import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.fontColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }`;
