import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



//////////////////////////////ONE RECIPE CONNECTED COMPONENT//////////////////////////////////
/////////////////////////SERVES UP ONE RECIPE BASED ON RECIPE ID/////////////////////////////

const _OneRecipe = ({recipes, users, match}) => {


  const singleRecipe = recipes.find(recipe => recipe.id === match.params.id);


  const recipeChef = users.find(user => user.id === singleRecipe.userId)



  return (
    <div>
      <h2>Recipe Name: {singleRecipe.name}</h2>
      <h4> Recipe Cuisine: {singleRecipe.cuisine}</h4>
      <h4>Recipe Health Score: {singleRecipe.healthScore} </h4>
      <h4>Recipe Ingredients: {singleRecipe.ingredients} </h4>
      <h4> Recipe Directions: {singleRecipe.directions}</h4>
      <h4> Recipe Image:</h4> <img src={singleRecipe.imageURL} height="150" width="150" />
      <h2> Chef Name: <Link to={`/users/${recipeChef.id}`}> {recipeChef.username}</Link> </h2>
      <h2> Chef Score: {recipeChef.chefscore} </h2>
    </div>
  )
}



const mapStateToProps = ({ users, recipes }) => {
  return {
    users,
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

const OneRecipe = connect(mapStateToProps, mapDispatchToProps)(_OneRecipe)
export default OneRecipe;
