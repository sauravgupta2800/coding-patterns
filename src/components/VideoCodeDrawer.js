import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Drawer from "react-modern-drawer";
import CodeBlock from "./CodeBlock";
import "react-modern-drawer/dist/index.css";
import youtube from "./../images/youtube-logo.png";
import js from "./../images/js.png";
import { isMobileView } from "./utils";

const HeaderWrapper = styled.div`
  height: 100vh;
  color: ${({ theme }) => theme.fontColor};
  padding: 0;
  background: ${({ theme }) => theme.bgColor};
`;

const DrawerContent = styled.div`
  background: ${({ theme }) => theme.mainSecondaryBackground};
`;

const TabsOuterDiv = styled.div`
  display: flex;
  padding: 0 15px;
  justify-content: center;
  border-bottom: 1px solid;
`;

const TabsDiv = styled.div`
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  cursor: pointer;
  display: inline-block;
  list-style: none;
  padding: 6px 12px;
  position: relative;
`;

const SelectedTabsDiv = styled(TabsDiv)`
  background: ${({ theme }) => theme.mainSecondaryBackground};
  border-color: ${({ theme }) => theme.fontColor};
  border-top: 4px solid;
  border-radius: 5px 5px 0 0;
`;

const TextRender = ({ label, src }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div style={{ width: "30px" }}>
        <img src={src} height="25" className="me-2" />
      </div>
      {label}
    </div>
  );
};

const Tabs = ({ selectedTab = "video", changeTab }) => {
  const options = [
    { label: "Video Solution", key: "video", src: youtube },
    { label: "Code Solution", key: "code", src: js },
  ];

  return (
    <TabsOuterDiv>
      {options.map(({ key, label, src }) =>
        selectedTab === key ? (
          <SelectedTabsDiv key={key}>
            <TextRender label={label} src={src} />
          </SelectedTabsDiv>
        ) : (
          <TabsDiv key={key} onClick={() => changeTab(key)}>
            <TextRender label={label} src={src} />
          </TabsDiv>
        )
      )}
    </TabsOuterDiv>
  );
};

const Header = ({ data = {}, onClose }) => {
  return (
    <div className="p-4 d-flex justify-content-between align-items-center">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "#b5f8bd",
          width: isMobileView ? "35px" : "40px",
          minWidth: isMobileView ? "35px" : "40px",
          height: isMobileView ? "35px" : "40px",
          borderRadius: "5px",
          fontSize: isMobileView ? "14px" : "18px",
          fontWeight: "600",
          color: "green",
          cursor: "pointer",
          marginRight: "20px",
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
        {!isMobileView && <div className="fw-bold">PROBLEM:</div>}
        <a
          className="ms-2 question-link question-link"
          href={data.link}
          target="_blank"
          rel="noopener"
        >
          {data.title}
        </a>

        {!isMobileView && (
          <a
            className="ms-2 question-link question-link"
            href={`https://www.youtube.com/watch?v=${data.video}`}
            target="_blank"
            rel="noopener"
          >
            <img src={youtube} height="30" width="30" />
          </a>
        )}

        <div className="ms-4 d-flex align-items-center justify-content-center">
          <div
            style={{
              fontSize: isMobileView ? "14px" : "18px",
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
    <div className="w-100 h-90 d-flex align-items-center justify-content-center">
      <iframe
        width="100%"
        height={isMobileView ? "350" : "450"}
        src={`https://www.youtube.com/embed/${data.video}?controls=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

const VideoCodeDrawer = ({
  drawerTab,
  data = {},
  isOpen = false,
  onClose,
  handleTabChange,
}) => {
  return (
    <Drawer
      open={isOpen}
      onClose={() => onClose()}
      direction="right"
      className=""
      size={isMobileView ? "100%" : "850px"}
      overlayOpacity="0.5"
      overlayColor="gray"
    >
      <HeaderWrapper>
        <Header data={data} onClose={onClose} />
        <Tabs selectedTab={drawerTab} changeTab={handleTabChange} />
        {isOpen && (
          <DrawerContent
            className={`drawer-content ${isMobileView ? "p-2" : "p-4"}`}
          >
            {drawerTab === "video" && <Video data={data} />}
            {drawerTab === "code" && (
              <CodeBlock data={data} language="javascript" />
            )}
          </DrawerContent>
        )}
      </HeaderWrapper>
    </Drawer>
  );
};

export default VideoCodeDrawer;
