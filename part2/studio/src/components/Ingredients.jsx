import recipe from './recipe.json'

function IngredientList() {
  return (
    <div>
      <h1>Ingredients</h1>
      <ul>
        {recipe[0].ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
      </ul>
    </div>
  )
}

export default IngredientList;
