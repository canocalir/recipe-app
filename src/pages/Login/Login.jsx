import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import back from '../../assets/back.jpg'

const Login = () => {
  return (
    <MainContainer back={back}>
      <LoginForm />
    </MainContainer>
  );
};

export default Login;
const MainContainer = styled.div`
background-image: url(${props => props.back});
background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;