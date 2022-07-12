import React, { useState } from "react";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  console.log("username is", username);
  console.log("password is", password);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setFlag(true);
    } else {
      localStorage.setItem("Email", JSON.stringify(username));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved in local storage");
    }
  };
  return (
    <div className="register-container">
      <div className="register-form">
        <form action="">
          <p className="main-text">Register to your Account</p>
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
          <button onSubmit={handleRegister} className="login-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
