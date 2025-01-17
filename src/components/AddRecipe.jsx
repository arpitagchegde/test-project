import React, { useContext, useState } from "react";
import { RecipeContext } from "./RecipeProvider";

const AddRecipe = () => {
  const { dispatch } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState({ name: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.name.trim() && recipe.category.trim()) {
      dispatch({ type: "ADD_RECIPE", payload: recipe });
      setRecipe({ name: "", category: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipe.name}
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <input
        type="text"
        placeholder="Category"
        value={recipe.category}
        onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Add
      </button>
    </form>
  );
};

export default AddRecipe;

