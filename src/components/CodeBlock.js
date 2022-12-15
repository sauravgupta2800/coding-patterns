import { useOctokit } from "../hooks/useOctokit";
import Highlight from "react-highlight";

const CodeBlock = ({ data, language }) => {
  const [code] = useOctokit(data.title);

  return (
    <div className="codeblock">
      <pre className="line-numbers">
        <Highlight language={language} className="p-4">
          {code}
        </Highlight>
      </pre>
    </div>
  );
};

export default CodeBlock;
