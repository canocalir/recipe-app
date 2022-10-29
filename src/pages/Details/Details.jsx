import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {
  DetailContainer,
  BackButton,
  MainContainer,
  DetailImage,
  DetailInnerContainer,
  DetailHeading,
  IngredientsButton,
  FullRecipeButton,
  RecipeButtonLink,
  IngredientsUl,
} from "./styled";
import background from "../../assets/back.jpg";
import { useState } from "react";

const Details = () => {
  const location = useLocation();
  const {
    recipe: { recipe },
  } = location.state;
  const navigate = useNavigate();
  console.log(recipe);
  const returnBackHandler = () => {
    navigate(-1);
  };

  const [isOpen, setIsOpen] = useState(false);

  const { label, calories, image, ingredients, url } = recipe;

  return (
    <MainContainer background={background}>
      <Navbar />
      <DetailContainer style={isOpen ? { marginBottom: "5rem" } : null}>
        <BackButton onClick={returnBackHandler}>Back</BackButton>
        <DetailImage src={image} />
        <DetailInnerContainer>
          <DetailHeading>{label}</DetailHeading>
          <h3>
            Calories:{" "}
            <span style={{ color: "#df3b57" }}>{Math.round(calories)} KCAL</span>
          </h3>
          <h2 style={{ margin: 0 }}>
            Yield:{" "}
            <span style={{ color: "#df3b57" }}>{recipe.yield} Servings</span>
          </h2>
          <IngredientsButton onClick={() => setIsOpen((current) => !current)}>
            {isOpen ? 'Hide Ingredients' : 'Show Ingredients'}
          </IngredientsButton>
          {isOpen ? <h2 style={{margin: 0, paddingTop: "2rem"}}>Ingredients</h2> :null}
          <IngredientsUl>
          {isOpen
            ? ingredients.map((ing) => {
                const { text } = ing;
                return (
                    <li>{text}</li>
                );
              })
            : null}
            </IngredientsUl>
          {isOpen ? (
            <FullRecipeButton>
              <RecipeButtonLink href={url} target="_blank" rel="noreferrer">
                Click Here for Full Recipe
              </RecipeButtonLink>
            </FullRecipeButton>
          ) : null}
        </DetailInnerContainer>
      </DetailContainer>
    </MainContainer>
  );
};

export default Details;
