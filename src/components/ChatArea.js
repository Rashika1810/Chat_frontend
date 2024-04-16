import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import OthersMessage from "./OthersMessage";
import MyMessage from "./MyMessage";
const ChatArea = ({ props }) => {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="convo-icon">{props.name[0]} </p>
        <div className="header-text">
          <p className="convo-title">{props.name}</p>
          <p className="convo-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </div>
      <div className="chatArea-message">
        <OthersMessage />
        <MyMessage />
        <OthersMessage />
        <MyMessage />
        <OthersMessage />
        <MyMessage />
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
