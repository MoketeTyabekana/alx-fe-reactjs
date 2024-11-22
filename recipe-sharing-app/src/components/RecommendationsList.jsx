import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state =>
    state.recommendations.map(id => state.recipes.find(recipe => recipe.id === id))
  );
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>Generate Recommendations</button>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Add some favorites and generate recommendations!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
