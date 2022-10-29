import styled from 'styled-components';

const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6af2ef2;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 20rem;
  height: 30rem;
`;

const LoginInput = styled.input`
height: 2rem;
width: 15rem;
border-radius: 0.5rem;
border: none;
padding-left: 1rem
`

const Form = styled.form`
display: flex;
gap: 1rem;
flex-direction: column;
align-items: flex-start;
color: #fff;
font-weight: 600;
`

const SubmitButton = styled.input`
height: 2rem;
width: 100%;
border: none;
border-radius: 0.5rem;
background-color: #3D348B;
color: #fff;
font-weight: 600;
cursor: pointer;
&:hover{
  background-color: #3A748C;
  transition: ease-in-out 400ms;
}
`

const LoginLogo = styled.img`
width: 16rem;
border-radius: 1rem;
`

const LoginHeading = styled.h2`
margin: 0;
color: #3D348B;
`

export { LoginFormContainer, LoginInput, Form, SubmitButton, LoginLogo, LoginHeading };