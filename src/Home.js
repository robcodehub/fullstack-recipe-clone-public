import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HealthyRecipes from './HealthyRecipes';


//////////////////////HOME CONNECTED COMPONENT////////////////////////////////////
const _Home = ({users, recipes}) => {
  console.log("RECIPES ON HOME PAGE SHOW...", recipes)
  let allRecipes = [];
  recipes


return (
      <div>
        Welcome! {users.length} users and {recipes.length} recipes coming soon...

        <HealthyRecipes />
        The top chef is...
      </div>
    )
}

//HOME CONNECTED COMPONENT
/*const Home = connect(({users, recipes}) => {
  return {
    users,
    recipes
  }
})(_Home)
*/

const mapStateToProps = ({ users, recipes }) => {
  return {
    recipes,
    users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRecipesAction: () => {
      dispatch(setRecipesThunk());
    }
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
export default Home;
