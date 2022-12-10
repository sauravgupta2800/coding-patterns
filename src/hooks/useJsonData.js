import { useEffect, useState } from "react";
import csvfile from "../coding-patterns-questions.csv";

export const useJsonData = () => {
  const [converted, setConverted] = useState(false);
  const [questions, setQuestions] = useState(false);

  useEffect(() => {
    console.log("useEffecst");
    function csvJSON(csv) {
      const lines = csv.split("\r\n");
      const result = [];
      const headers = lines[0].split(",");

      for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) continue;
        const obj = {};
        const currentline = lines[i].split(",");

        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }
      return result;
    }

    fetch(csvfile)
      .then((r) => r.text())
      .then((text) => {
        console.log("text: ", text);
        const patternQuestionsMap = {};
        csvJSON(text).forEach((question) => {
          const { pattern } = question;
          if (!patternQuestionsMap[pattern]) patternQuestionsMap[pattern] = [];
          patternQuestionsMap[pattern].push(question);
        });

        const finalList = Object.keys(patternQuestionsMap).map((pattern) => {
          return {
            patternTitle: pattern,
            list: patternQuestionsMap[pattern],
          };
        });

        console.log("finalList: ", finalList);
        setConverted(true);
        setQuestions(finalList);
      });
  }, []);

  return [questions, converted];
};
