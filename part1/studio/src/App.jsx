import './App.css';
import RecipeDescription from './components/RecipeDescription';
import Ingredients from './components/Ingredients';
import Photo from './components/Photos';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <Photo />
        <div>
          <RecipeDescription />
          <Ingredients />
        </div>
      </div>
    </div>
  );
}

export default App;
