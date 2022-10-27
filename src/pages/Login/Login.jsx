import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <MainContainer>
      <LoginForm />
    </MainContainer>
  );
};

export default Login;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: url("../../assets/recipe.png");
`;
