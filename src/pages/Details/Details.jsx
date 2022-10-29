import { useLocation, useNavigate } from "react-router-dom"


const Details = () => {

  const location = useLocation()
  const { recipe:{recipe} } = location.state
  const navigate = useNavigate()
  console.log(recipe)
  const returnBackHandler = () => {
    navigate(-1)
  }
  return (

    <div>
      <button onClick={returnBackHandler}>Back</button>
      <h1>{recipe.label}</h1>
    </div>
  )
}

export default Details