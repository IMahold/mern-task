import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Storing the username and password in an array
  const database = [
    { username: "Igor1", password: "12345qQ" },
    { username: "Igor2", password: "12345wW" },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  console.log("username is", username);
  console.log("password is", password);

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { uname, pass } = document.forms[0];

    //Find user login info
    const userData = database.find((user) => user.username === uname.value);

    //Compare user info

    if (userData) {
      if (userData.password !== pass.value) {
        //Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      //Username not found

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <p className="main-text">Login to your Account</p>
        {isSubmitted ? (
          <div className="success">User is successfully logged in</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="login-input">
              <label htmlFor="text">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="uname"
                type="text"
                placeholder="username"
                pattern="^[\w\s-]{5,9}$"
                required
              />
              {renderErrorMessage("uname")}
            </div>
            <div className="password-input">
              <label htmlFor="">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="pass"
                type="text"
                placeholder="password"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$"
                required
              />
              {renderErrorMessage("pass")}
            </div>
            <button className="login-button">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}
