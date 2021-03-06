
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



////////////////////////////ONE USER CONNECTED COMPONENT////////////////////////////////////
/////////////////////////SERVES UP ONE USER BASED ON USER ID///////////////////////////////

const _OneUser = ({users, recipes, match}) => {


  const singleUser = users.find(user => user.id === match.params.id)

  const singleUserRecipes = recipes.filter(recipe => recipe.userId === singleUser.id)


  return (
    <div>
      <h2> User Name: {singleUser.username}</h2>
      <h3>Chef Score: {singleUser.chefscore} </h3>
      <h3> Email: {singleUser.email} </h3>
      <h3> Chef Image: </h3>
      <img src={singleUser.imageURL} height="150" width="150" />
      <h2> Recipes </h2>
      <div>{singleUserRecipes.length > 0 ? singleUserRecipes.map(recipe => <div key={recipe.id}> <Link to={`/recipes/${recipe.id}`}>{recipe.name} </Link> </div>) : <div> There are no recipes for this user </div> } </div>
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
    setUsersAction: () => {
      dispatch(setUsersThunk());
    }
  }
}

const OneUser = connect(mapStateToProps, mapDispatchToProps)(_OneUser)
export default OneUser;
