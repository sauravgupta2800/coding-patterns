import { useOctokit } from "../hooks/useOctokit";
import styled from "styled-components";
import Highlight from "react-highlight";
import { useState } from "react";
const Button = styled.h1`
  position: absolute;
  right: 34px;
  top: 34px;
  border: 1px solid;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  background: #2f3136;
  color: white;
  &: hover {
    background: white;
    color: black;
  }
`;

const CodeBlock = ({ data, language }) => {
  const [code] = useOctokit(data.title);
  const [copyClicked, setCopyClicked] = useState(false);

  const handleClick = () => {
    setCopyClicked(true);
    setTimeout(() => setCopyClicked(false), 1000);
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="codeblock">
      <pre className="line-numbers">
        <Highlight language={language} className="p-4">
          {code}
        </Highlight>
      </pre>
      <Button onClick={handleClick}>
        {copyClicked ? "Copied" : "Copy Code"}
      </Button>
    </div>
  );
};

export default CodeBlock;
