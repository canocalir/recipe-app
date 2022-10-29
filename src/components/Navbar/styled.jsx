import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #e6af2ef2;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
`;

const TextLogo = styled.a`
  font-size: 2rem;
  text-decoration: none;
  color: #fff;
`;

const LinkContainer = styled.div`
display: flex;
gap: 2rem;
font-size: 1.2rem;
`

export {NavbarContainer, TextLogo, LinkContainer}