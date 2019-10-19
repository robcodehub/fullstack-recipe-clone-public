import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewRecipeForm from './AddNewRecipeForm';

//////////////////////RECIPE CONNECTED COMPONENT////////////////////////////////////
const _Recipes = ({recipes}) => {
  const chefsTest = recipes.filter(recipe => recipe.user)
  console.log("RECIPES =======", recipes)
  console.log("RECIPES WITH CHEF =======", chefsTest)
  return (
    <div>
      {recipes.map(recipe => <div key = {recipe.id} > <br />  <br /> Name: {recipe.name} <br /> Cuisine: {recipe.cuisine} <br /> Health Score: {recipe.healthScore} <br /> Ingredients: {recipe.ingredients} <br /> Directions: {recipe.directions} <br />  <br /> Image: <br /> <img height="250" width="250" src={recipe.imageURL} /> <br /> <Link to={`/recipes/${recipe.id}`}>Link to Recipe</Link> <br /> <br /> <button class="delete-recipe"> X </button> Delete Recipe Above <br /> </div>)}
      <br /> <br />
      <AddNewRecipeForm />
    </div>
  )
}

const mapStateToProps = ({recipes }) => {
  return {
    recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRecipesAction: () => {
      dispatch(setRecipesThunk());
    }
  }
}

const Recipes = connect(mapStateToProps, mapDispatchToProps)(_Recipes)
export default Recipes;


