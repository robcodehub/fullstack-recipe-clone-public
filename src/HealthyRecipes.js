import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


////////////////////////////HEALTHY RECIPES CONNECTED COMPONENT////////////////////////////////////
/////////////////////////RETURNS RECIPES WITH HEALTH SCORE ABOVE 8///////////////////////////////

const _HealthyRecipes = ({recipes, users}) => {
  const healthyFood = recipes.filter(recipe => recipe.healthScore >= 8)
  console.log("HEALTHY FOOD====", healthyFood)
  return (
    <div>
      <br />
    There are {healthyFood.length} healthy recipes including {healthyFood.map(food => <p key ={food.name}>{food.name} </p>) }
    <br />

    </div>
  )
}

/*
const HealthyRecipes = connect(({recipes, users}) => {
  return {
    recipes,
    users
  }
})(_HealthyRecipes)

*/
//==================CHANGES TO MAKE===============================================
//SHOULDN'T BE A CONNECTED COMPONENT - FINE FOR NOW BUT CONVERT TO JS FUNCTION LATER
//==================CHANGES TO MAKE===============================================




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

const HealthyRecipes = connect(mapStateToProps, mapDispatchToProps)(_HealthyRecipes)
export default HealthyRecipes;
