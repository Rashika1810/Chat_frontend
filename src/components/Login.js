import React from "react";
import logo from "./Images/chat-icon.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p>Login to your account</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="standard"
        />
        <TextField
          id="outlined-password-input"
          label="Enter Password"
          type="password"
          variant="standard"
        />
        <Button
          variant="outlined"
          className="button"
          style={{ borderWidth: "2px", color: "#61c1f99e", fontWeight: "bold" }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
