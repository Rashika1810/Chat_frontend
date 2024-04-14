import React from "react";
import "./componentsStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

const MainContainer = () => {
  return (
    <div className="main-Container">
      <Sidebar />
      <ChatArea />
    </div>
  );
};

export default MainContainer;
