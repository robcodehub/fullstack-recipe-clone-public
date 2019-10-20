

import React from 'react';

import { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewRecipeForm from './AddNewRecipeForm';

import {deleteRecipeAction} from './store'
import { deleteRecipeThunk } from './store'

import { increaseUserScoreThunk } from './store'
import { decreaseUserScoreThunk } from './store'


//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW RECIPE SECTION////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


class _Recipes extends Component {
  constructor() {
    super();

  this.state = {
    }
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

     //UPDATE FOR DECREASE CHEF SCORE
    async deleteRecipe(recipe) {
    await this.props.delete(recipe.id)

    if(recipe.userId) {
      let userToUpdate = (this.props.users.filter(user => user.id === recipe.userId)[0]);
      this.props.update(userToUpdate)
    }



  }

  render() {
    console.log("PROPS IN RENDER RECIPES======", this.props)
    const { deleteRecipe } = this;
    const { recipes } = this.props;
    //const { recipes, users } = this.props; //UPDATE FOR DECREASE CHEF SCORE

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
      <button onClick={ () => deleteRecipe(recipe) } className="delete-recipe"> X </button> Delete Recipe Above <br /> </div>)
    }
      <br /> <br />
      <AddNewRecipeForm />
    </div>
  )
}

}

const Recipes = connect(({recipes,users}) => {
  return {
    recipes,
    users
  }
}, (dispatch) => {
  return {
    delete: (recipe) => dispatch(deleteRecipeThunk(recipe)),
    update: (user) => dispatch(decreaseUserScoreThunk(user))
  }
})(_Recipes)


export default Recipes;






