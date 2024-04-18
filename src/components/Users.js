import React from "react";
import { useSelector } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "./Images/chat-icon.png";
import { IconButton } from "@mui/material";

const Users = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className="list-container">
      <div className={"ug-header" + (lightTheme ? "" : " dark")}>
        <img
          src={logo}
          alt="logo"
          style={{ marginLeft: "10px", height: "2rem", width: "2rem" }}
        />
        <p className={"ug-title" + (lightTheme ? "" : " dark")}>Online Users</p>
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

      <div className="ug-list">
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Test User
          </p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Test User
          </p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Test User
          </p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Test User
          </p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Test User
          </p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Test User
          </p>
        </div>
        <div className={"list-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Test User
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
