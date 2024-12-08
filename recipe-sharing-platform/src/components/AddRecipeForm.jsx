import React, { useState, handleSubmit } from "react";

export default function AddRecipeForm() {
 
 
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validation Logic
      if (!title || !ingredients || !steps) {
        setError("All fields are required.");
        return;
      }
  
      const ingredientsList = ingredients.split(",").map((item) => item.trim());
      if (ingredientsList.length < 2) {
        setError("Please include at least two ingredients.");
        return;
      }
  
      setError(""); // Clear errors if validation passes
  
      // Example of handling submitted data (e.g., send to API)
      const newRecipe = {
        title,
        ingredients: ingredientsList,
        steps,
      };
      console.log("New Recipe:", newRecipe);
  
      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
    };
 
    return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h1>
      <form
        className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ingredients (separate by commas)
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Preparation Steps
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
