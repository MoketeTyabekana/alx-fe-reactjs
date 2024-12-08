import React, { useState, handleSubmit } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});
  
    // Validation Function
    const validate = () => {
      const newErrors = {};
  
      if (!title.trim()) {
        newErrors.title = "Recipe title is required.";
      }
  
      if (!ingredients.trim()) {
        newErrors.ingredients = "Ingredients are required.";
      } else {
        const ingredientsList = ingredients.split(",").map((item) => item.trim());
        if (ingredientsList.length < 2) {
          newErrors.ingredients = "Please include at least two ingredients.";
        }
      }
  
      if (!steps.trim()) {
        newErrors.steps = "Preparation steps are required.";
      }
  
      return newErrors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      // If no errors, clear the errors and process the form data
      setErrors({});
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        steps,
      };
      console.log("New Recipe:", newRecipe);
  
      // Reset the form
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
          {/* Title Field */}
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
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>
  
          {/* Ingredients Field */}
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
            {errors.ingredients && (
              <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>
            )}
          </div>
  
          {/* Preparation Steps Field */}
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
            {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
          </div>
  
          {/* Submit Button */}
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
  };
  
  export default AddRecipeForm;
















































































