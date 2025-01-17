import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [localRecipes, setLocalRecipes] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  const addRecipe = (recipe) => {
    setLocalRecipes([...localRecipes, recipe]);
  };

  const filteredRecipes = filterCategory
    ? localRecipes.filter((recipe) => recipe.category === filterCategory)
    : localRecipes;

  return (
    <RecipeContext.Provider
      value={{
        localRecipes: filteredRecipes,
        addRecipe,
        setFilterCategory,
        filterCategory,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
