import React, { useState } from "react";
import "./componentsStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import WelcomePage from "./WelcomePage";
import CreateGroups from "./CreateGroups";

const MainContainer = () => {
  const [conversation, setConversation] = useState([
    {
      name: "Test@1",
      lastMessage: "Last Message @1",
      timeStamp: "today",
    },
    {
      name: "Test@2",
      lastMessage: "Last Message @2",
      timeStamp: "today",
    },
    {
      name: "Test@3",
      lastMessage: "Last Message @3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="main-Container">
      <Sidebar />
      {/* <CreateGroups /> */}
      {/* <WelcomePage /> */}
      <ChatArea props={conversation[0]} />
    </div>
  );
};

export default MainContainer;
