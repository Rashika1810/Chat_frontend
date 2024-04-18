import React from "react";
import logo from "./Images/chat-icon.png";
import { useSelector } from "react-redux";
const WelcomePage = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <img src={logo} alt="logo" className="welcome-logo" />
      <p>
        Welcome to our messaging world, where every tap creates connections.
      </p>
    </div>
  );
};

export default WelcomePage;
