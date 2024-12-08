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

}

export default RecipeDetail;