import React, { useState } from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";
import ProgressBar from "@ramonak/react-progress-bar";
import CollapsibleTable from "./CollapsibleTable";
import { useJsonData } from "../hooks/useJsonData";

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

const CollapseHeader = ({ title = "", selected = 0, total = 0 }) => {
  const stats = `${selected}/${total}`;
  return (
    <CollapseHeaderDiv className="d-flex">
      <div className="w-50 fw-bold">{title}</div>
      <div className="w-50 d-flex align-items-center">
        <div className="fs-6 fw-bold">{stats}</div>
        <div className="flex-fill ms-2">
          <ProgressBar
            completed={selected}
            maxCompleted={total}
            height="15px"
            labelSize="10px"
            isLabelVisible={false}
            bgColor="#03b674"
          />
        </div>
      </div>
    </CollapseHeaderDiv>
  );
};

const PatternsCollapsible = ({ theme }) => {
  const [solvedList, setSolvedList] = useState([]);
  const [questions, converted] = useJsonData();

  const handleSolved = ({ remove, id }) => {
    let newSolvedList = [...solvedList];
    if (remove)
      newSolvedList = newSolvedList.filter((solvedId) => solvedId !== id);
    else newSolvedList.push(id);
    setSolvedList(newSolvedList);
  };
  const total = (questions || []).reduce(
    (prev, curr) => prev + curr.list.length,
    0
  );
  const stats = `${solvedList.length}/${total}`;

  return (
    <div>
      {converted && (
        <>
          <OuterProgress>
            <div className="d-flex align-items-center">
              <div className="fs-6 fw-bold">{stats}</div>
              <div className="flex-fill ms-2">
                <ProgressBar
                  completed={solvedList.length}
                  maxCompleted={total}
                  bgColor="#03b674"
                  baseBgColor="#fbfbfb"
                  isLabelVisible={false}
                />
              </div>
              <div className="ms-2 fs-6 fw-bold">
                {Math.floor((solvedList.length * 100) / total)}%
              </div>
            </div>
          </OuterProgress>

          <div className="py-4">
            {questions.map(({ patternTitle, list }, index) => (
              <Collapsible
                key={patternTitle + index}
                className="mb-1"
                trigger={
                  <CollapseHeader
                    title={patternTitle}
                    selected={
                      list
                        .map(({ link }) => link)
                        .filter((id) => solvedList.includes(id)).length
                    }
                    total={list.length}
                  />
                }
              >
                <CollapsibleTable
                  solvedList={solvedList}
                  list={list}
                  handleSolved={handleSolved}
                />
              </Collapsible>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PatternsCollapsible;
