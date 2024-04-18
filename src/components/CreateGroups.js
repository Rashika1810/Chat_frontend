import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
const CreateGroups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"create-groups-container" + (lightTheme ? "" : " dark")}>
      <input
        placeholder="Enter Group Name"
        className={"searchbar" + (lightTheme ? "" : " dark")}
      />
      <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
        <BorderColorOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroups;
