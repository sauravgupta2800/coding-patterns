import React from "react";
import { func, string, array } from "prop-types";
import Table from "rc-table";
import Checkbox from "rc-checkbox";
import youtube from "./../images/youtube-logo.png";
import js from "./../images/js.png";
import python from "./../images/python.png";
import code from "./../images/code.png";

const CollapsibleTable = ({ list, solvedList, handleSolved, openDrawer }) => {
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
            <div
              style={{ cursor: "pointer" }}
              onClick={() => openDrawer({ data: row, key: "video" })}
            >
              <img src={youtube} height="32" />
            </div>
          ) : (
            <div style={{ whiteSpace: "nowrap", color: "gray" }}>
              Coming Soon
            </div>
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
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ whiteSpace: "nowrap", color: "gray" }}
        >
          {row.video ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => openDrawer({ data: row, key: "code" })}
            >
              <img src={code} height="20" className="cursor-pointer" />
            </div>
          ) : (
            "Coming Soon"
          )}

          {/* 
          <img src={python} height="30" className="cursor-pointer ms-4" /> */}
        </div>
      ),
    },
  ];
  return (
    <Table
      tableLayout="fixed"
      columns={columns}
      data={list.map((row, index) => {
        return {
          ...row,
          key: index,
        };
      })}
      scroll={{ x: true }}
      rowClassName={({ link }) => (solvedList.includes(link) ? "solved" : "")}
    />
  );
};

CollapsibleTable.propTypes = {
  list: array.isRequired,
  solvedList: array.isRequired,
  handleSolved: func.isRequired,
};
export default CollapsibleTable;
