import React, { useEffect, useState} from "react";
import data from '../data.json';

export default function HomePage(){
  const [recipe,setRecipes]=useState([]);

  useEffect(()=>{
    setRecipes(data);
  })


    return(
        <div className=" container">
          <h1 className="text-4xl font-bold text-center mb-6">Shared Recipe</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          </div>
        </div>
    )
}