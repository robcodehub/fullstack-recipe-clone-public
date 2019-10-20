import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



  //////////////////////NAV CONNECTED COMPONENT////////////////////////////////////
  const _Nav = ({recipes, users}) => {
    return (
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/users'> Users ({users.length}) </Link>
        <Link to='/recipes'> Recipes ({recipes.length})</Link>
        <Link to='/chefs'> Chefs ({(recipes.filter(recipe => recipe.userId !== null)).length})</Link>

      </nav>
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

const Nav = connect(mapStateToProps, mapDispatchToProps)(_Nav)
export default Nav;
