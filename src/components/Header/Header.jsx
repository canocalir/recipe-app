import React, { useState } from 'react'
import styled from 'styled-components'
import RecipeCard from '../RecipeCard/RecipeCard'

const Header = () => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')
  const [meal, setMeal] = useState('Breakfast')

  const mealTypes = ['Breakfast', 'Dinner', 'Lunch', 'Snack', 'Teatime']

  const url = process.env.REACT_APP_RECIPE_API_BASE + `q=${query}&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&mealType=${meal}`

  const fetchRecipesHandler = async (e) => {
    e.preventDefault()
    const res = await fetch(url)
    const data = await res.json()
    setRecipes(data.hits)
  }
  console.log(recipes)
  return (
    <div>
      <form onSubmit={fetchRecipesHandler}>
        <input onChange={e => setQuery(e.target.value)} type="text" name="search" id="search" />
        <select onChange={e => setMeal(e.target.value)} name="type" id="type">
          {mealTypes.map((meal) => (
            <option value={meal}>{meal}</option>
          ))}
        </select>
        <input type="submit" value="Search" />
      </form>
      <RecipeCardContainer>
      {recipes.map((recipe, index) => {
        return <RecipeCard index={index} key={index} recipe={recipe}/>
      })}
      </RecipeCardContainer>
    </div>
  )
}

export default Header

const RecipeCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`