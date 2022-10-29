import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/canabout.jpg";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <LeftContainer>
          <AboutLogo src={logo} />
        </LeftContainer>
        <RightContainer>
          <h2 style={{color: "#0f7173"}}>Follow on Social Media</h2>
          <SocialMediaContainer>
          <a href="https://linkedin.com/in/canberkocalir"><FaLinkedin size={'3rem'}/></a>
          <a href="https://github.com/canocalir"><FaGithub size={'3rem'}/></a>
          <a href="https://medium.com/@canocalir"><FaMedium size={'3rem'}/></a>
          </SocialMediaContainer>
        </RightContainer>
      </MainContainer>
    </div>
  );
};

const AboutLogo = styled.img`
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  background-color: #e1dee3;
  @media (max-width: 768px) {
    height: 50vh;
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  background-color: #f5f5f5;
  @media (max-width: 768px) {
    height: 50vh;
    width: 100%;
  }
`;
export default About;
