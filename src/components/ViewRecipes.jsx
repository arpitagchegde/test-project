import React, { useContext, useState, useEffect } from "react";
import { RecipeContext } from "./RecipeProvider";
import axios from "axios";

const ViewRecipes = () => {
  const { localRecipes, setFilterCategory } = useContext(RecipeContext);
  const [externalRecipes, setExternalRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        setExternalRecipes(response.data.meals || []);
      } catch (err) {
        setError("Failed to fetch recipes from the API.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const combinedRecipes = [...localRecipes, ...externalRecipes];

  return (
    <div>
      <h2>View Recipes</h2>

      <div style={{ marginBottom: "20px" }}>
        <select
          onChange={(e) => setFilterCategory(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="">All Categories</option>
          <option value="Dessert">Dessert</option>
          <option value="Main Course">Main Course</option>
          <option value="Appetizer">Appetizer</option>
        </select>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {combinedRecipes.map((recipe, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={recipe.strMealThumb || "https://via.placeholder.com/150"}
              alt={recipe.name || recipe.strMeal}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{recipe.name || recipe.strMeal}</p>
            <p style={{ fontSize: "0.8em", color: "#777" }}>{recipe.category || ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipes;
