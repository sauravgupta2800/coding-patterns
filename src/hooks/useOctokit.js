import { useState, useEffect } from "react";
import { octokit } from "../utils/octokit";

export const useOctokit = (title) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    async function onLoad() {
      console.log("octokit: ", process.env.REACT_APP_GH);
      await octokit
        .request("GET /repos/{owner}/{repo}/contents/{path}", {
          owner: "sauravgupta2800",
          repo: "coding-patterns",
          path: `solutions/js/${title}`,
        })
        .then((res) => {
          const encoded = res.data.content;
          const decoded = atob(encoded);
          setCode(decoded);
        })
        .catch((err) => {
          setCode("Not Found: Please Check Later");
          console.log("Error: ", err);
        });
    }
    onLoad();
  }, []);

  return [code];
};
