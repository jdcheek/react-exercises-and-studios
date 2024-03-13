import recipe from './recipe.json'

function RecipeImage() {
  return (
    <div>
      <img className='recipeImage' src={recipe[0].recipeImage} alt="image of recipe" />
    </div>
  )
}

export default RecipeImage;

 //import json file for the data
 //apply css for className recipeImage

