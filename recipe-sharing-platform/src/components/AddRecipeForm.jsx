import React from "react";

export default function AddRecipeForm(){
    return(
        <div className="form">
            <input type="text"  placeholder="Recipe Title"/>
            <textarea rows={4} cols={40} placeholder="Ingredients "/>
            <textarea rows={4} cols={40} placeholder="Preparation steps "/>
            <button type="submit">Add Recipe</button>
        </div>
    )
} 