import React from "react";

const OthersMessage = () => {
  const props1 = { name: "Example", message: "This is also a sample message" };
  return (
    <div className="others-message-container">
      <div className="conversation-container">
        <p className="convo-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="convo-title">{props1.name} </p>
          <p className="convo-lastMessage">{props1.message}</p>
          <p className="self-timestamp"> 12:04 am</p>
        </div>
      </div>
    </div>
  );
};

export default OthersMessage;
