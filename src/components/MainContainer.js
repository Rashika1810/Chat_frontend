import React, { useState } from "react";
import "./componentsStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import WelcomePage from "./WelcomePage";
import CreateGroups from "./CreateGroups";
import Users from "./Users";
import Groups from "./Groups";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"main-Container" + (lightTheme ? "" : " dark")}>
      <Sidebar />
      <Outlet />
      {/* <CreateGroups /> */}
      {/* <WelcomePage /> */}
      {/* <ChatArea props={conversation[0]} /> */}
      {/* <Users /> */}
      {/* <Groups /> */}
    </div>
  );
};

export default MainContainer;
