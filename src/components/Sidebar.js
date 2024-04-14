import React, { useState } from "react";
import "./componentsStyles.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import ConversationsItems from "./ConversationsItems";

const Sidebar = () => {
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
    <div className="sidebar-container">
      {/* sidebar header section */}
      <div className="sidebar-header">
        <div>
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAltOutlinedIcon />
          </IconButton>
          <IconButton>
            <GroupAddOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton>
            <BedtimeOutlinedIcon />
          </IconButton>
        </div>
      </div>
      {/* sidebar search section */}
      <div className="sidebar-search">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <input placeholder="Search..." className="searchbar" />
      </div>
      {/* sidebar conversation section */}
      <div className="sidebar-conversation">
        {conversation.map((conversation) => {
          return (
            <ConversationsItems key={conversation.name} props={conversation} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
