import { useState } from 'react';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


export default  function App() {

  return (
      <div style={{padding:'20px'}}>
        <Router>
          <Routes>
            <Route path='/' element={<AddRecipeForm />}  />
            <Route path='/recipe/:id' element={<RecipeDetails/>}  />
          </Routes>
        </Router>
        <SearchBar/>
        <AddRecipeForm/>
        <RecipeList/>
        <RecommendationsList/>
        <FavoritesList/>
      </div>
  )
}


