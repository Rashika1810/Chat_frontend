import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import OthersMessage from "./OthersMessage";
import MyMessage from "./MyMessage";
import { useSelector } from "react-redux";
const ChatArea = () => {
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
  var props = conversation[0];
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"chatArea-container" + (lightTheme ? "" : " dark")}>
      <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
        <p className={"convo-icon" + (lightTheme ? "" : " dark")}>
          {props.name[0]}{" "}
        </p>
        <div className={"header-text" + (lightTheme ? "" : " dark")}>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            {props.name}
          </p>
          <p className={"convo-timeStamp" + (lightTheme ? "" : " dark")}>
            {props.timeStamp}
          </p>
        </div>
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </div>
      <div className={"chatArea-message" + (lightTheme ? "" : " dark")}>
        <OthersMessage />
        <MyMessage />
        <OthersMessage />
        <MyMessage />
        <OthersMessage />
        <MyMessage />
      </div>
      <div className={"chatArea-input" + (lightTheme ? "" : " dark")}>
        <input
          placeholder="Send a message..."
          className={"searchbar" + (lightTheme ? "" : " dark")}
        />
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <SendSharpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
