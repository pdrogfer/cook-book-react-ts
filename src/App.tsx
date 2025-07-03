import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeTable from './components/RecipeTable';
import NewRecipeForm from './components/NewRecipeForm';
import RecipeRowItem from './components/RecipeRowItem';
import { Recipe } from './models/Recipe';

function App() {

  const [recipeData, setRecipeData] = useState<Recipe[]>([
    {
      rowNumber: 1,
      name: 'Spaghetti Carbonara De Luxe',
      ingredients: 'Spaghetti, Eggs, Parmesan, Pancetta, Pepper',
      instructions: 'Cook spaghetti. Fry pancetta. Mix eggs and cheese. Combine all.'
    },
    {
      rowNumber: 2,
      name: 'Chicken Curry',
      ingredients: 'Chicken, Curry Powder, Coconut Milk, Onion, Garlic',
      instructions: 'Sauté onion and garlic. Add chicken and curry powder. Stir in coconut milk.'
    },
    {
      rowNumber: 3,
      name: 'Vegetable Stir Fry',
      ingredients:'Broccoli, Carrots, Bell Peppers, Soy Sauce, Ginger',
      instructions: 'Chop vegetables. Stir fry with ginger and soy sauce.'
    },
    {
      rowNumber: 4,
      name: 'Beef Tacos',
      ingredients: 'Ground Beef, Taco Shells, Lettuce, Tomato, Cheese',
      instructions: 'Cook beef. Fill taco shells with beef and toppings.'
    },
    {
      rowNumber: 5,
      name: 'Caesar Salad',
      ingredients: 'Romaine Lettuce, Croutons, Caesar Dressing, Parmesan',
      instructions: 'Toss lettuce with dressing. Add croutons and cheese.'
    }
  ]);

  const [showRecipe, setShowRecipe] = useState(false);

  const addNewRecipe = (name: string, ingredients: string, instructions: string) => {
    // get the last row number from the existing recipe data
    let rowNumber = 0;
    if (recipeData.length > 0) {
      rowNumber = recipeData[recipeData.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newRecipe = new Recipe(
      rowNumber,
      name,
      ingredients,
      instructions
    );
    setRecipeData(recipeData => [...recipeData, newRecipe]);
  }

  const deleteRecipe = (rowNumber: number) => {
    let filteredRecipes = recipeData.filter(recipe => recipe.rowNumber !== rowNumber);
    setRecipeData(filteredRecipes);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Recipes
        </div>
        <div className='card-body'>
          <RecipeTable recipes={recipeData} deleteRecipe={deleteRecipe} />
          <button className='btn btn-primary' onClick={() => setShowRecipe(!showRecipe)}>
            {showRecipe ? 'Close New Recipe Form' : 'Open New Recipe'}
          </button>
          {showRecipe &&
            <NewRecipeForm addNewRecipe={addNewRecipe} />}
        </div>
      </div>
    </div>
  );
}

export default App;
