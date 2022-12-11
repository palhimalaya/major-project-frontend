import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    navigate("/");
    // Sign up the user with the provided username, password, and email
  };

  return (
    <div>
      <form onSubmit={handleSignup} className="register-form">
        <label>
          Username:
          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
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
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button type="submit">Sign up</button>
        <p>
          Already have an account? <Link to="/">Log in here</Link>.
        </p>
      </form>
    </div>
  );
};

export default Register;
