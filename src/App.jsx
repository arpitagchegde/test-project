import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SearchRecipes from './components/SearchRecipes'
import ViewRecipes from './components/ViewRecipes'
import AddRecipe from './components/AddRecipe'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-recipes" element={<SearchRecipes />} />
        <Route path="/view-recipes" element={<ViewRecipes />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </Router>
  )
}

export default App


