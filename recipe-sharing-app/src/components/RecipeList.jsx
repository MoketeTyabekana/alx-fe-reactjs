// RecipeList component
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  if(filterRecipes.length===0){
    return <p>NO Recipes Found.</p>
  }

  return (
    <div>
      {filterRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
