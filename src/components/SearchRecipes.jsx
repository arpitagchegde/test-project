import React, { useState } from "react";
import axios from "axios";

const SearchRecipes = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    if (!query.trim()) {
      setError("Please enter a recipe name to search.");
      setRecipes([]);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const { meals } = response.data;
      if (meals) {
        setRecipes(meals);
      } else {
        setRecipes([]);
        setError("No recipes found.");
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Search Recipes</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          style={{
            padding: "10px",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={fetchRecipes}
          style={{
            padding: "10px 20px",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} style={{ textAlign: "center" }}>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{recipe.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipes;

