import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validUsername = "Mohsinali";
  const validPassword = "mohsin2323"

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword ) {
      localStorage.setItem("isLoggedIn", true); 
      setIsLoggedIn(true);
      navigate("/"); 
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="ui main">
      <h2>Login</h2>
      <form className="ui form" onSubmit={handleLogin} autoComplete="off">
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="ui button blue">Login</button>
      </form>

    </div>
  );
};

export default Login;



