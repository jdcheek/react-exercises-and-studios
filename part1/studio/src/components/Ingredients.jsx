import styles from './Ingredients.module.css';

export default function RecipeIngredients() {

  const ingredients = ["Cilantro", "Avocados", "Onion", "Garlic", "Lime", "Tomatoes", "Jalepeno", "Salt"];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList} >
        {ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
      </ul>
    </div>
  );
}
