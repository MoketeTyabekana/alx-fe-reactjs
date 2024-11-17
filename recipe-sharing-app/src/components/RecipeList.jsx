import RecipeDetails from './RecipeDetails';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link

const RecipeList = () => {
  const filterRecipes = useRecipeStore((state) => state.filteredRecipes); // Assuming "filteredRecipes" is the correct store key

  if (filterRecipes.length === 0) {
    return <p>No Recipes Found.</p>;
  }

  return (
    <div>
      {filterRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> {<RecipeDetails/>}
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
