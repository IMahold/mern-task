import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("username is", username);
  console.log("password is", password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(us)
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <form action="">
          <p className="main-text">Login to your Account</p>
          <div className="login-input">
            <label htmlFor="text">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
              pattern="[a-zA-Z0-9._]"
              required
            />
          </div>
          <div className="password-input">
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$"
              required
            />
          </div>
          <button onSubmit={handleSubmit} className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
