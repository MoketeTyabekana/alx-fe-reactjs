import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import  recipeData from '../data.json';


const RecipeDetail =() =>{
   
const  {id}=useParams();
const [recipe,setRecipes]=useState(null);

useEffect(()=>{

    const recipeDetails=recipeData.find((item)=>item.id===parseInt(id));
    setRecipes(recipeDetails);

});

}

export default RecipeDetail;