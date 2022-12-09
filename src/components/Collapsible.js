import React, { useState } from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import Collapsible from "react-collapsible";
import ProgressBar from "@ramonak/react-progress-bar";
import CollapsibleTable from "./CollapsibleTable";

const OuterProgress = styled.div`
  color: ${({ theme }) => theme.fontColor};
  padding: 15px;
  border-radius: 10px;
  background: ${({ theme }) => theme.secondaryBackground};
`;

const CollapseHeaderDiv = styled.div`
  color: ${({ theme }) => theme.fontColor};
  padding: 15px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  background: ${({ theme }) => theme.mainSecondaryBackground};
`;

const CollapseHeader = () => {
  return (
    <CollapseHeaderDiv className="d-flex">
      <div className="w-50 fw-bold">2 Pointers</div>
      <div className="w-50 d-flex align-items-center">
        <div className="fs-6 fw-bold">(2/130)</div>
        <div className="flex-fill ms-2">
          <ProgressBar
            completed={60}
            height="15px"
            labelSize="10px"
            bgColor="#03b674"
          />
        </div>
      </div>
    </CollapseHeaderDiv>
  );
};

const PatternsCollapsible = ({ theme }) => {
  const [solvedList, setSolvedList] = useState([]);
  const handleSolved = ({ remove, id }) => {
    let newSolvedList = [...solvedList];
    if (remove)
      newSolvedList = newSolvedList.filter((solvedId) => solvedId !== id);
    else newSolvedList.push(id);
    setSolvedList(newSolvedList);
  };
  return (
    <div className="">
      <OuterProgress>
        <div className="d-flex align-items-center">
          <div className="fs-6 fw-bold">(2/130)</div>
          <div className="flex-fill ms-2">
            <ProgressBar
              completed={solvedList.length * 19}
              bgColor="#03b674"
              baseBgColor="#fbfbfb"
            />
          </div>
        </div>
      </OuterProgress>
      <div className="py-4">
        {[...new Array(20)].map(() => (
          <Collapsible className="mb-1" trigger={<CollapseHeader />}>
            <CollapsibleTable
              solvedList={solvedList}
              handleSolved={handleSolved}
            />
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default PatternsCollapsible;
