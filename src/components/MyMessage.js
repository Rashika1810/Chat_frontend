import React from "react";

const MyMessage = () => {
  const props2 = { name: "You", message: "This is a sample message" };
  return (
    <div className="my-message-container">
      <div className="messageBox">
        <p>{props2.message} </p>
        <p className="self-timestamp">12:10am</p>
      </div>
    </div>
  );
};

export default MyMessage;
