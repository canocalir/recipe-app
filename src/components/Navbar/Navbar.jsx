import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const logOut = () => {
    localStorage.setItem("user", "");
  };

  return (
    <NavbarContainer>
      <TextLogo href="/">Great Recipe App</TextLogo>
      <LinkContainer>
      <Link to="/about">About</Link>
      <a href="https://github.com/canocalir">Github</a>
      <Link onClick={logOut} to="/login">
        LogOut
      </Link>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: blanchedalmond;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const TextLogo = styled.a`
  font-size: 2rem;
  text-decoration: none;
`;

const LinkContainer = styled.div`
display: flex;
gap: 2rem;
`