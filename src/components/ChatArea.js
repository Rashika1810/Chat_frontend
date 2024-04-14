import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import OthersMessage from "./OthersMessage";
import MyMessage from "./MyMessage";
const ChatArea = () => {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="convo-icon">T</p>
        <div className="header-text">
          <p className="convo-title">Text@1</p>
          <p className="convo-timeStamp">today</p>
        </div>
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </div>
      <div className="chatArea-message">
        <MyMessage />
        <OthersMessage />
        <MyMessage />
        <OthersMessage />
        <MyMessage />
        <OthersMessage />
      </div>
      <div className="chatArea-input">
        <input placeholder="Send a message..." className="searchbar" />
        <IconButton>
          <SendSharpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
