import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewUserForm from './AddNewUserForm';

//////////////////////USERS CONNECTED COMPONENT////////////////////////////////////
const _Users = ({users}) => {
  return (
    <div>
      {users.length} Users coming soon...
      {users.map(user => <div key={user.id}> <br /> Chef Name: {user.username} <br /> Chef Score: {user.chefScore} <br /> Profile Image: <br /> <img height="150" width="150" src={user.imageURL} /> <Link to={`/users/${user.id}`}> Link to User</Link> <br /> <br /> <br /> <button class="delete-recipe"> X </button> Delete User Above <br /></div>)}
      <AddNewUserForm />
    </div>
  )
}

//USERS CONNECTED COMPONENT
/*
const Users = connect(({users}) => {
  return {
    users
  }
})(_Users);
*/


const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsersAction: () => {
      dispatch(setUsersThunk());
    }
  }
}

const Users = connect(mapStateToProps, mapDispatchToProps)(_Users)
export default Users;





/*



import React from 'react';

import { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewRecipeForm from './AddNewRecipeForm';

import {deleteRecipeAction} from './store'
import { deleteRecipeThunk } from './store'






//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW RECIPE SECTION////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW CLASS AND FORM////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//CREATING THE ADD NEW USER AS A CLASS


class _Users extends Component {
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


const Users = connect(mapStateToProps, mapToDispatch)(_Users)
export default Users;


*/
