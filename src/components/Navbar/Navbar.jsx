import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer, NavbarContainer, TextLogo } from "./styled";
import style from './Navbar.module.scss'

const Navbar = () => {
  const logOut = () => {
    localStorage.setItem("user", "");
  };

  return (
    <NavbarContainer>
      <TextLogo href="/">Great Recipe App</TextLogo>
      <LinkContainer>
      <Link className={style.Link} to="/about">About</Link>
      <a className={style.Link} href="https://github.com/canocalir">Github</a>
      <Link className={style.Link} onClick={logOut} to="/login">
        LogOut
      </Link>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;