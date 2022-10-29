import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginFormContainer, LoginInput, Form, SubmitButton, LoginLogo, LoginHeading } from "./styled";
import logo from '../../assets/recipe.jpg'

const LoginForm = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("user", "test");
    navigate("/");
  };
  return (
    <LoginFormContainer>
      <Form onSubmit={login}>
        <LoginLogo src={logo}/>
        <LoginHeading>Great Recipe App</LoginHeading>
        <label htmlFor="username">Username</label>
        <LoginInput
          required
          placeholder="Enter your username"
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <LoginInput
          required
          placeholder="Enter your password"
          type="password"
          name="password"
          id="password"
        />
        <SubmitButton type="submit" value="LOGIN" />
      </Form>
    </LoginFormContainer>
  );
};

export default LoginForm;
