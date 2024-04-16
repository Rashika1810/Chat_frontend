import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { IconButton } from "@mui/material";
const CreateGroups = () => {
  return (
    <div className="create-groups-container">
      <input placeholder="Enter Group Name" className="searchbar" />
      <IconButton>
        <BorderColorOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroups;
