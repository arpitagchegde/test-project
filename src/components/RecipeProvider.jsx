import React, { createContext, useReducer, useEffect } from "react";

// Create the context
export const RecipeContext = createContext();

// Define the initial state
const initialState = {
  localRecipes: [],
  filterCategory: "",
};

// Define the reducer
const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return {
        ...state,
        localRecipes: [...state.localRecipes, action.payload],
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterCategory: action.payload,
      };
    default:
      return state;
  }
};

// RecipeProvider component
export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // Load recipes from localStorage on initialization
  useEffect(() => {
    const storedRecipes = localStorage.getItem("localRecipes");
    if (storedRecipes) {
      dispatch({
        type: "ADD_RECIPE",
        payload: JSON.parse(storedRecipes),
      });
    }
  }, []);

  // Sync recipes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("localRecipes", JSON.stringify(state.localRecipes));
  }, [state.localRecipes]);

  // Filtered recipes logic
  const filteredRecipes = state.filterCategory
    ? state.localRecipes.filter(
        (recipe) => recipe.category === state.filterCategory
      )
    : state.localRecipes;

  return (
    <RecipeContext.Provider
      value={{
        localRecipes: filteredRecipes,
        dispatch,
        filterCategory: state.filterCategory,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

