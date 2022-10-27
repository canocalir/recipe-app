import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipe, index}) => {
    const { recipe:{label, url, image } } = recipe
    console.log(recipe)
  return (
    <div>
        <h4>{label}</h4>
        <img src={image} alt="" />
        <Link to={`/details/${label.split(' ').join('').toLowerCase()}`}>View Details</Link>
    </div>
  )
}

export default RecipeCard