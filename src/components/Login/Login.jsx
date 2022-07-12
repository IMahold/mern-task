import React, { useState } from "react";
import "./login.css";

export default function Login() {
  // Storing the username and password in an array
  const data = [{ username: "Igor" }, { password: "123456wW" }];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("username is", username);
  console.log("password is", password);

  const handleSubmit = (e) => {
    e.preventDefault();

    // I was trying to store the data in localstorage, but apparently i am missing something

    if (
      username.current.value === "Igor" &&
      password.current.value === "123456wW"
    ) {
      localStorage.setItem("UsernameData", "Igor");
      localStorage.setItem("PasswordData", "123456wW");
    }
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
              pattern="^[A-Za-z]\\w{5, 29}$"
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
