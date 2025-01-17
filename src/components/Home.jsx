import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to the Recipe Finder App!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/search-recipes">Search Recipes</Link>
          </li>
          <li>
            <Link to="/view-recipes">View Recipes</Link>
          </li>
          <li>
            <Link to="/add-recipe">Add Recipe</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
