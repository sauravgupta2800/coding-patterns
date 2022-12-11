import React from "react";
import styled from "styled-components";
import algo from "./../images/algo.jpg";
import { isMobileView } from "../components/utils";

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-weight: 700;
`;

const Banner = () => {
  return (
    <div
      className={`d-flex ${
        isMobileView
          ? "flex-column align-items-center py-3 text-center"
          : "py-5"
      }`}
    >
      <Title
        className={`${
          isMobileView ? "mb-2 fs-4" : "my-5 me-5"
        } d-flex align-items-center flex-column justify-content-center`}
      >
        <div className="align-middle">
          21 Coding Patterns to Master Tech Interviews 🔥
        </div>
        <div className={`${isMobileView ? "my-2" : "mt-5"}`}>
          Coding patterns improve our:
          <div
            className="fst-italic text-center mt-2"
            style={{ fontSize: isMobileView ? "16px" : "28px" }}
          >
            "ability to connect a new problem to an existing one"
          </div>
        </div>
      </Title>
      <img src={algo} width={isMobileView ? "70%" : "400"} />
    </div>
  );
};
export default Banner;
