import styles from './RecipeAuthor.module.css'

export default function RecipeAuthor() {
  const authorLink = 'https://downshiftology.com/recipes/best-ever-guacamole/'
  const authorPhoto = 'https://downshiftology.com/wp-content/uploads/2023/06/Lisa-Bryan-square-4-720x720.webp'
  const authorName = 'Lisa Bryan'

  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Best Ever Guacamole</a>
      </div>
    </div>
  )
}
