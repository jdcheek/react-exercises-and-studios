import { useState } from 'react';

const RecipeAuthor = () => {
  let authorLink = "https://www.delish.com/author/15784/rian-handler/";
  let authorPhoto = "https://hips.hearstapps.com/rover/profile_photos/f8cf3448-d3db-49ff-a0f5-2d8801c82d19_1629465819.file";
  let authorName = "Rian Handler";

  return (
    <div>
      <img src={authorPhoto} alt="" style={{ objectFit: "contain", borderRadius: "50%" }} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
}

const RecipeIngredients = () => {
  const ingredients = ['Pie Crust', '3 Eggs', 'Pumkin Puree', 'Brown Sugar', 'Pumpkin Spice', 'Vanilla', 'Salt', 'Heavy Cream'];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
}

const RecipePhoto = () => {
  return (
    <img src="" alt="" className="imageUpdates" />
  );
}

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
