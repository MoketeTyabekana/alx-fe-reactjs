import React {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import  recipeData from '../data.json';
import { useState } from "react";

const RecipeDetail =() =>{
   
const  {id}=useParams();
const [recipe,setRecipes]=useState(null);

}

export default RecipeDetail;