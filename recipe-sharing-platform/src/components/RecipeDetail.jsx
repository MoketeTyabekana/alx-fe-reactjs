import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import  recipeData from '../data.json';


const RecipeDetail =() =>{
   
const  {id}=useParams();
const [recipe,setRecipes]=useState(null);

useEffect(()=>{

    const recipeDetails=recipeData.find((item)=>item.id===parseInt(id));
    setRecipes(recipeDetails);

}, [id]);


if (!recipe){
    return <p className='text-center text-gray-700 mt-4'>Loading Recipes...</p>
}


return(
    <div className="container mx-auto p-4 shadow-sm">
       <h1 className="text-3xl font-bold text-center mb-4">{recipe.title}</h1>
       <img className='w-full h-64 object-cover rounded mb-4' src={recipe.image} alt={recipe.title} />
       <p className='text-gray-700 mb-4'>{recipe.summary}</p>
       <h2 className='text-2xl font-semibold mb-2'>Ingredients</h2>
       <ul className="list-disc list-inside mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}

        <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </ul>
    </div>

);
}

export default RecipeDetail;