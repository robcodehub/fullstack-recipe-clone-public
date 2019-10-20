import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HealthyRecipes from './HealthyRecipes';
import TopChef from './TopChefs';


//////////////////////HOME CONNECTED COMPONENT////////////////////////////////////
const _Home = ({users, recipes}) => {

  let allRecipes = [];
  recipes


return (
      <div>
        Welcome! There are {users.length} users and {recipes.length} recipes!

        <HealthyRecipes />
        <Link to='/chefs'> Chefs </Link>
      </div>
    )
}

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
