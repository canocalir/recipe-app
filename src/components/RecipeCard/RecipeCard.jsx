import React from "react";
import { Link } from "react-router-dom";
import { RecipeCardContainer, RecipeHeading, RecipeImage } from "./styled";
import style from './RecipeCard.module.scss'

const RecipeCard = ({ recipe }) => {
  const {
    recipe: { label, image },
  } = recipe;
  
  return (
    <RecipeCardContainer>
      <RecipeHeading>{label}</RecipeHeading>
      <RecipeImage src={image} alt="" />
      <Link
        className={style.detailsButton}
        to={`/details/${label.split(" ").join("").toLowerCase()}`}
        state={{ recipe }}
      >View Details
      </Link>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
