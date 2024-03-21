let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];


function RateARecipe({ rating }) {
  return (
    rating > 0 && rating < 6 ? <h3>{stars[rating - 1]}</h3> : null
  )
}

export default RateARecipe;

