

import React from 'react';

import { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewRecipeForm from './AddNewRecipeForm';

import {deleteRecipeAction} from './store'
import { deleteRecipeThunk } from './store'

import { increaseUserScoreThunk } from './store'

//////////////////////RECIPE CONNECTED COMPONENT////////////////////////////////////


// FIRST COMMENT TAG
/*


const _Recipes = ({recipes}) => {
  const chefsTest = recipes.filter(recipe => recipe.user)
  console.log("RECIPES =======", recipes)
  console.log("RECIPES WITH CHEF =======", chefsTest)
  console.log("PROPS ======", this.props)
  return (
    <div>
      {recipes.map(recipe => <div key = {recipe.id} > <br />  <br />
      Name: {recipe.name} <br />
      Cuisine: {recipe.cuisine} <br />
      Health Score: {recipe.healthScore} <br />
      Ingredients: {recipe.ingredients} <br />
      Directions: {recipe.directions} <br />  <br />
      Image: <br /> <img height="250" width="250" src={recipe.imageURL} /> <br />
      <Link to={`/recipes/${recipe.id}`}>
      Link to Recipe</Link> <br /> <br />
      <button onClick={this.props.delete(recipe)} class="delete-recipe"> X </button> Delete Recipe Above <br /> </div>)}
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


const mapToDispatch = {
  delete: deleteRecipeThunk
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: () => {
      dispatch(deleteRecipesAction());
    }
  }
}
*/


/* SECOND COMMENT TAG
const Recipes = connect(mapStateToProps, mapToDispatch)(_Recipes)
export default Recipes;

//LAST COMMENT TAG
*/











//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW RECIPE SECTION////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW CLASS AND FORM////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//CREATING THE ADD NEW RECIPE AS A CLASS


class _Recipes extends Component {
  constructor() {
    super();

  this.state = {
    }
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

   async deleteRecipe(recipeId) {
     console.log("RECIPE IN DELETE RECIPE======", recipeId)
    await this.props.delete(recipeId)
  }

  render() {
    console.log("PROPS IN RENDER RECIPES======", this.props)
    const { deleteRecipe } = this;
    const { recipes } = this.props;

    const chefsTest = recipes.filter(recipe => recipe.user)

  console.log("RECIPES =======", recipes)
  console.log("RECIPES WITH CHEF =======", chefsTest)
  console.log("PROPS ======", this.props)
  return (
    <div>
      {recipes.map(recipe => <div key = {recipe.id} > <br />  <br />
      Name: {recipe.name} <br />
      Cuisine: {recipe.cuisine} <br />
      Health Score: {recipe.healthScore} <br />
      Ingredients: {recipe.ingredients} <br />
      Directions: {recipe.directions} <br />  <br />
      Image: <br /> <img height="250" width="250" src={recipe.imageURL} /> <br />
      <Link to={`/recipes/${recipe.id}`}>
      Link to Recipe</Link> <br /> <br />
      <button onClick={ () => deleteRecipe(recipe.id) } className="delete-recipe"> X </button> Delete Recipe Above <br /> </div>)}
      <br /> <br />
      <AddNewRecipeForm />
    </div>
  )
}



}


const mapStateToProps = ({ users, recipes }) => {
  return {
    users,
    recipes
  }
}

const mapToDispatch = {
  delete: deleteRecipeThunk
}


const Recipes = connect(mapStateToProps, mapToDispatch)(_Recipes)
export default Recipes;







