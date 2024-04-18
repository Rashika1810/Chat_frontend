import React from "react";
import { useSelector } from "react-redux";

const OthersMessage = () => {
  const props1 = { name: "Example", message: "This is also a sample message" };
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"others-message-container" + (lightTheme ? "" : " dark")}>
      <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
        <p className={"convo-icon" + (lightTheme ? "" : " dark")}>
          {props1.name[0]}
        </p>
        <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            {props1.name}{" "}
          </p>
          <p className={"convo-lastMessage" + (lightTheme ? "" : " dark")}>
            {props1.message}
          </p>
          <p className={"self-timestamp" + (lightTheme ? "" : " dark")}>
            {" "}
            12:04 am
          </p>
        </div>
      </div>
    </div>
  );
};

export default OthersMessage;
