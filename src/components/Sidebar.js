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
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ThemeSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
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
      <div className={"sidebar-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton>
            <AccountCircleOutlinedIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAltOutlinedIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddOutlinedIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleOutlineIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <BedtimeOutlinedIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeOutlinedIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
          </IconButton>
        </div>
      </div>
      {/* sidebar search section */}
      <div className={"sidebar-search" + (lightTheme ? "" : " dark")}>
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <SearchOutlinedIcon />
        </IconButton>
        <input
          placeholder="Search..."
          className={"searchbar" + (lightTheme ? "" : " dark")}
        />
      </div>
      {/* sidebar conversation section */}
      <div className={"sidebar-conversation" + (lightTheme ? "" : " dark")}>
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
