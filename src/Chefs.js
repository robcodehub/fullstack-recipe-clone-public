import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TopChef from './TopChefs';

  //////////////////////CHEFS CONNECTED COMPONENT////////////////////////////////////

    const _Chefs = ({recipes, users}) => {

      const allChefs = (recipes.filter(recipe => recipe.userId !== null)).map(recipe => recipe.user)

      return (
        <div>
          {allChefs.map(chef => <div key={chef.id}><p>Chef Name:</p> {chef.username} </div>)}
        </div>
      )
    }



const mapStateToProps = ({ users, recipes }) => {
  return {
    users,
    recipes
  }
}

const Chefs = connect(mapStateToProps)(_Chefs)
export default Chefs;
