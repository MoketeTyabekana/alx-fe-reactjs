import { useState } from 'react';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {

  return (
    <>

      <div>
        <Router>
          <Routes>
            <Route path='/' element={<RecipeDetails/>}  />
            <Route path='/recipe/:id' element={<RecipeDetails/>}  />
          </Routes>
        </Router>
        <AddRecipeForm/>
        <RecipeList/>
      </div>
    </>
  )
}

export default App;
