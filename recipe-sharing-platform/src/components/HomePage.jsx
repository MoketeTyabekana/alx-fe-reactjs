import React, { useEffect, useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className=" container m-11 d-flex">
      <h1 className="text-4xl font-bold text-center mb-6">Shared Recipe</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 bg-gray-50"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <img
                className="w-full h-48 object-cover"
                src={recipe.image}
                alt={recipe.title}
              />
              <div className="px-4 py-3">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-700 mt-2">{recipe.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
