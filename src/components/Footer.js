import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Section = styled.div`
  background: ${({ theme }) => theme.secondaryBackground};
  font-size:0.8rem;
}`;

const Footer = ({ theme }) => {
  return (
    <div className="d-flex align-items-center justify-content-center text-center py-4">
      Copyright © 2022 CodingPatterns.com | All rights reserved
    </div>
  );
};

export default Footer;
