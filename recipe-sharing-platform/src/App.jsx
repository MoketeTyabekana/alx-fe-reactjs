import './App.css'
import AddRecipeForm from './components/AddRecipeForm';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetail from './components/AddRecipeForm'



function App() {
 

  return (
  <>
   <Router>
   <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/recipe/:id" element={<RecipeDetail />} />
   </Routes>
 </Router>
  {/* <AddRecipeForm/> */}
  <HomePage/>
  </>
  )
}

export default App
