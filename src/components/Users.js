import React from "react";
import { useSelector } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "./Images/chat-icon.png";
import { IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
const Users = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.4",
        }}
        className="list-container"
      >
        <motion.div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            alt="logo"
            style={{ marginLeft: "10px", height: "2rem", width: "2rem" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Available users
          </p>
        </motion.div>
        {/* sidebar search section */}
        <motion.div className={"sidebar-search" + (lightTheme ? "" : " dark")}>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <SearchOutlinedIcon />
          </IconButton>
          <input
            placeholder="Search..."
            className={"searchbar" + (lightTheme ? "" : " dark")}
          />
        </motion.div>

        <motion.div className="ug-list">
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark darklist")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark")}>T</p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Test users
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Users;
