import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import algo from "./../images/algo.jpg";

const Section = styled.div`
  background: ${({ theme }) => theme.secondaryBackground};
  font-size:0.8rem;
}`;

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-weight: 700;
`;

const Banner = ({ theme, themeToggler }) => {
  return (
    <div className="d-flex py-5">
      <Title className="my-5 me-5 d-flex align-items-center flex-column justify-content-center">
        <div className="align-middle">
          20 Coding Patterns to Master Tech Interviews 🔥
        </div>
        <div className="mt-5">
          Coding patterns improve our:
          <div
            className="fst-italic text-center mt-2"
            style={{ fontSize: "28px" }}
          >
            "ability to connect a new problem to an existing one"
          </div>
        </div>
      </Title>
      <img src={algo} width="400" />
    </div>
  );
};

export default Banner;
