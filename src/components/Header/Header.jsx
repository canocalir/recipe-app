import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";

import RecipeCard from "../RecipeCard/RecipeCard";
import {
  RecipesContainer,
  SearchContainer,
  SearchInput,
  SearchSelect,
  SearchSubmit,
} from "./styled";

const Header = () => {
  const initializePreviousSearchData = () => {
    return JSON.parse(localStorage.getItem("recipes")) ?? [];
  };
  const [recipes, setRecipes] = useState(initializePreviousSearchData());
  const [query, setQuery] = useState('');
  const [meal, setMeal] = useState("Breakfast");
  const [loading, setLoading] = useState(false);

  const mealTypes = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const url =
    process.env.REACT_APP_RECIPE_API_BASE +
    `q=${query}&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&mealType=${meal}`;

  const fetchRecipesHandler = async (e) => {
    e.preventDefault();
    if (query) {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.hits);
      setTimeout(() => {
        setLoading(false);
        setQuery("");
      }, 1000);
    } else {
      return toast.error("Enter a Food Name!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchContainer>
            <form onSubmit={fetchRecipesHandler}>
              <SearchInput
                placeholder="Enter a food name"
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                name="search"
                id="search"
                value={query}
              />
              <SearchSelect
                onChange={(e) => setMeal(e.target.value)}
                name="type"
                id="type"
              >
                {mealTypes.map((meal, index) => (
                  <option key={index} value={meal}>
                    {meal}
                  </option>
                ))}
              </SearchSelect>
              <SearchSubmit type="submit" value="Search" />
            </form>
          </SearchContainer>
          <RecipesContainer>
            {recipes.map((recipe, index) => {
              return <RecipeCard index={index} key={index} recipe={recipe} />;
            })}
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </RecipesContainer>
        </>
      )}
    </>
  );
};

export default Header;
