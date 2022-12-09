import React from "react";
import Table from "rc-table";
import Checkbox from "rc-checkbox";
import youtube from "./../images/youtube-logo.png";
import js from "./../images/js.png";
import python from "./../images/python.png";

const data = [
  {
    title: "Contains Duplicate",
    difficulty: "easy",
    link: "https://leetcode.com/problems/contains-duplicate/",
    video: "www.youtube.com",
    code: "www.github.com",
  },
  {
    title: "Group Anagrams",
    difficulty: "medium",
    link: "https://leetcode.com/problems/group-anagrams/",
    video: "",
    code: "www.github.com",
  },
  {
    title: "Binary Tree Maximum Path Sum",
    difficulty: "hard",
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    video: "www.youtube.com",
    code: "www.github.com",
  },
];

const CollapsibleTable = ({ solvedList, handleSolved }) => {
  const columns = [
    {
      title: "Solved",
      dataIndex: "",
      key: "solved",
      width: "10%",
      align: "center",
      render: (value, row) => (
        <div className="d-flex align-items-center justify-content-center">
          <Checkbox
            checked={solvedList.includes(row.link)}
            onChange={() =>
              handleSolved({
                remove: solvedList.includes(row.link),
                id: row.link,
              })
            }
            disabled={false}
          />
        </div>
      ),
    },
    {
      title: "Problem",
      dataIndex: "title",
      key: "title",
      width: "50%",
      render: (value, row) => (
        <a
          className="question-link question-link"
          href={row.link}
          target="_blank"
          rel="noopener"
        >
          {row.title}
        </a>
      ),
    },
    {
      title: "Difficulty",
      dataIndex: "difficulty",
      key: "difficulty",
      align: "center",
      width: "15%",
      render: (value, row) => (
        <div className="d-flex align-items-center justify-content-center">
          <div className={`px-3 py-1 difficulty difficulty--${row.difficulty}`}>
            {row.difficulty}
          </div>
        </div>
      ),
    },
    {
      title: "Video Solution",
      dataIndex: "video",
      key: "video",
      align: "center",
      width: "20%",
      render: (value, row) => (
        <div className="d-flex align-items-center justify-content-center">
          {row.video ? (
            <a
              href={row.video}
              target="_blank"
              rel="noopener"
              style={{ cursor: "pointer" }}
            >
              <img src={youtube} height="32" />
            </a>
          ) : (
            "Coming Soon"
          )}
        </div>
      ),
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      align: "center",
      width: "20%",
      render: (value, row) => (
        <div className="d-flex align-items-center justify-content-center px-4">
          <img src={js} height="30" className="cursor-pointer" />
          <img src={python} height="30" className="cursor-pointer ms-4" />
        </div>
      ),
    },
  ];
  return (
    <Table
      tableLayout="fixed"
      columns={columns}
      data={data}
      rowClassName={({ link }) => (solvedList.includes(link) ? "solved" : "")}
    />
  );
};

export default CollapsibleTable;
