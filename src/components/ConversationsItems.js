import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConversationsItems = ({ props }) => {
  const lightTheme = useSelector((state) => state.themeKey);
  const navigate = useNavigate();
  return (
    <div
      className="conversation-container"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className={"convo-icon" + (lightTheme ? "" : " dark")}>
        {props.name[0]}
      </p>
      <p className={"convo-title" + (lightTheme ? "" : " dark")}>
        {props.name}
      </p>
      <p className={"convo-lastMessage" + (lightTheme ? "" : " dark")}>
        {props.lastMessage}
      </p>
      <p className={"convo-timeStamp" + (lightTheme ? "" : " dark")}>
        {props.timeStamp}
      </p>
    </div>
  );
};

export default ConversationsItems;
