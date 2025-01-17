import React from "react";
import { RecipeProvider } from "./components/RecipeProvider";
import AddRecipe from "./components/AddRecipe";
import ViewRecipes from "./components/ViewRecipes";

const App = () => {
  return (
    <RecipeProvider>
      <div style={{ padding: "20px" }}>
        <AddRecipe />
        <ViewRecipes />
      </div>
    </RecipeProvider>
  );
};

export default App;




