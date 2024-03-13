let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];


function RateARecipe({ rating }) {
  return (
    rating > 0 && rating < 6 ? stars[rating - 1] : null
  )
}

export default RateARecipe;

