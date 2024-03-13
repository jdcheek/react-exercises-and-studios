import './styling.css'
import recipe from './recipe.json'

function AuthorInfo() {
  const recipeAuthorImage = <div><img className='authorImage' src={recipe[0].authorImage} alt={recipe[0].author} /></div>
  const recipeAuthor = <div>{recipe[0].author}</div>
  const recipeWebsite = <div><a href={recipe[0].website}>Website</a></div>

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  )
}

export default AuthorInfo;

 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image

