import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addRecipeThunk, increaseUserScoreThunk } from './store'


//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW RECIPE FORM///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


class _AddNewRecipeForm extends Component {
  constructor() {
    super();

  this.state = {
    name: "",
    userId: "",
    cuisine: "",
    healthScore: "",
    ingredients: "",
    directions: "",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAUvIcVUA_ch4ar2R-9-ZiVgoyR1tYKXg8PJMDWujJv29RLmKu"
    }
    this.createNewRecipe = this.createNewRecipe.bind(this);
    this.onChangeSetState = this.onChangeSetState.bind(this);
  }

  onChangeSetState(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })

  }


   createNewRecipe(ev) {
    ev.preventDefault()
      this.props.create(this.state);

      let userToUpdate = (this.props.users.filter(user => user.id === this.state.userId)[0]);

      this.props.update(userToUpdate)

      this.setState({
        name: "",
        userId: "",
        cuisine: "",
        healthScore: "",
        ingredients: "",
        directions: "",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAUvIcVUA_ch4ar2R-9-ZiVgoyR1tYKXg8PJMDWujJv29RLmKu"
        });

  }


  render() {

    const { name, cuisine, healthScore, ingredients, directions, imageURL } = this.state;
    const { createNewRecipe, onChangeSetState } = this;


    const setCuisines = [...new Set(this.props.recipes.map(recipe => recipe.cuisine))];


    const { users } = this.props;


    const healthScores = [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0]
    return (
      <div>
        <form id="new-recipe-form" onSubmit={createNewRecipe}>
          Chef Name: <select name="userId" onChange={onChangeSetState}> {users.map(user => <option key={user.id} value={user.id}> {user.username} </option>)} </select>
          Recipe Name: <input type="text" name="name" onChange={onChangeSetState}/>
          Cuisine: <select name="cuisine" onChange={onChangeSetState}> {setCuisines.map(cuisine => <option key={cuisine} value={cuisine}>{cuisine}</option>)} </select>
          Health Score: <select name="healthScore" onChange={onChangeSetState}> {healthScores.map(score => <option key={score} value={score}>{score}</option>)} </select>
          Ingredients: <input name="ingredients" type="text" onChange={onChangeSetState}/>
          Directions: <input type="text" name="directions" onChange={onChangeSetState}/>
          Link to Image (Image URL): <input type="text" name="imageURL" onChange={onChangeSetState}/>

          <button type="submit"> Add New Recipe </button>
        </form>

      </div>
    )

  }

}


const AddNewRecipeForm = connect(({recipes,users}) => {
  return {
    recipes,
    users
  }
}, (dispatch) => {
  return {
    create: (recipe) => dispatch(addRecipeThunk(recipe)),
    update: (user) => dispatch(increaseUserScoreThunk(user))
  }
})(_AddNewRecipeForm)


export default AddNewRecipeForm;


