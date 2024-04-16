import React from "react";
import logo from "./Images/chat-icon.png";
const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <img src={logo} alt="logo" className="welcome-logo" />
      <p>
        Welcome to our messaging world, where every tap creates connections.
      </p>
    </div>
  );
};

export default WelcomePage;
