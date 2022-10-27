import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginFormContainer } from "./styled";

const LoginForm = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("user", "test");
    navigate("/");
  };
  return (
    <LoginFormContainer>
      <form onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input
          required
          placeholder="USERNAME"
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          placeholder="PASSWORD"
          type="password"
          name="password"
          id="password"
        />
        <input type="submit" value="LOGIN" />
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
