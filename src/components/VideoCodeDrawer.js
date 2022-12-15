import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const HeaderWrapper = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.fontColor};
  padding: 15px;
  background: ${({ theme }) => theme.bgColor};
`;

const Header = ({ data = {}, onClose }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "#b5f8bd",
          width: "40px",
          height: "40px",
          borderRadius: "5px",
          fontSize: "18px",
          fontWeight: "600",
          color: "green",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        <div> &#9587;</div>
      </div>
      <div
        className="d-flex px-3 py-1"
        style={{
          fontSize: "20px",
          border: "1px solid",
          borderRadius: "5px",
        }}
      >
        <div className="fw-bold">PROBLEM:</div>
        <a
          className="ms-2 question-link question-link"
          href={data.link}
          target="_blank"
          rel="noopener"
        >
          {data.title}
        </a>
        <div className="ms-4 d-flex align-items-center justify-content-center">
          <div
            style={{
              fontSize: "18px",
            }}
            className={`p-1 difficulty difficulty--${data.difficulty}`}
          >
            {data.difficulty}
          </div>
        </div>
      </div>
    </div>
  );
};

const Video = ({ data = {} }) => {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${data.video}?controls=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

const VideoCodeDrawer = ({ data = {}, isOpen = false, onClose }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={() => onClose()}
      direction="right"
      className=""
      size="850px"
      overlayOpacity="0.5"
      overlayColor="gray"
    >
      <HeaderWrapper>
        <Header data={data} onClose={onClose} />
        <Video data={data} />
      </HeaderWrapper>
    </Drawer>
  );
};

export default VideoCodeDrawer;
