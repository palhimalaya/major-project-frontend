import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Log in the user with the provided email and password
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Log in</button>

      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
    </form>
  );
};

export default Login;
