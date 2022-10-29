import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin-top: 7rem;
  width: 25rem;
  gap: 2rem;
  flex-wrap: wrap;
  height: fit-content;
  padding: 2rem;
  border-radius: 2rem;
`;

const BackButton = styled.button`
  width: 5rem;
  background-color: #df3b57;
  color: #fff;
  border: none;
  height: 2rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover{
    background-color: #ee4b6a;
  }
`;

const FullRecipeButton = styled.button`
    background-color: #0f7173;
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    &:hover{
        background-color: #df3b57;
        transition: ease-in-out 400ms;
    }
`

const RecipeButtonLink = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: 600;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${props => props.background});
  background-size: cover;
  background-attachment: fixed;
  height: fit-content;
  min-height: 100vh;
`;

const IngredientsUl = styled.ul`
    text-align: left;
    padding-bottom: 1rem;
`

const DetailInnerContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

flex-wrap: wrap;
`
const DetailHeading = styled.h1`
    font-size: 2rem;
    margin: 0;
`

const DetailImage = styled.img`
    height: 20rem;
`

const IngredientsButton = styled.button`
    background-color: #df3b57;
    color: #fff;
    font-weight: 600;
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    &:hover{
        background-color: #0f7173;
        transition: ease-in-out 400ms;
    }
`

export { DetailContainer, BackButton, MainContainer, DetailImage, DetailInnerContainer, DetailHeading, IngredientsButton, FullRecipeButton, RecipeButtonLink, IngredientsUl };
