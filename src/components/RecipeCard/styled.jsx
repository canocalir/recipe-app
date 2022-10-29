import styled from "styled-components";

const RecipeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 30rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 1rem;
`;

const RecipeHeading = styled.h2`
    display: flex;
    color: #3D348B;
    height: 5rem;
`
const RecipeImage = styled.img`
  border-radius: 1rem;
`

export {RecipeCardContainer, RecipeHeading, RecipeImage}