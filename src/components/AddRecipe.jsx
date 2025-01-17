import React, { useState } from 'react'

function AddRecipe() {
  const [recipeName, setRecipeName] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder functionality to log the data
    console.log({
      recipeName,
      category,
      ingredients
    })
  }

  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name:</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <div>
          <label>Ingredients:</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Comma-separated list of ingredients"
            required
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipe
